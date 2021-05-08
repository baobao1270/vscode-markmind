import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import * as utils from "./utils";

class MindMapPreview {
  context: vscode.ExtensionContext;
  view: vscode.WebviewPanel;
  editingEditor!: vscode.TextEditor;
  isDisposed: boolean = false;
  isFromFile: any = { from_file: false };

  // Configure initialization here.
  configureWebviewScripts(webviewScripts: string[]) {
    webviewScripts.push("d3.js");
    webviewScripts.push("transform.min.js");
    webviewScripts.push("view.min.js");

    return webviewScripts;
  }

  // # 配置事件监听
  configureDisposables(disposables: vscode.Disposable[]) {
    let debounceFunc = utils.debounce(
      this,
      () => {
        this.updatePreview.call(this, this.isFromFile);
      },
      2000
    );

    // ## 监听文档变更，更新视图
    disposables.push(vscode.workspace.onDidChangeTextDocument(debounceFunc));

    // ## 监听 当接收 html传来的命令
    disposables.push(
      this.view.webview.onDidReceiveMessage(
        (message) => {
          this.onMessageReceived(message);
        },
        null,
        this.context.subscriptions
      )
    );
    return disposables;
  }

  constructor(context: vscode.ExtensionContext) {
    this.context = context;

    this.view = vscode.window.createWebviewPanel(
      "mindMapPreview",
      "Mind Map Preview",
      vscode.ViewColumn.Two,
      {
        enableScripts: true,
        localResourceRoots: [
          vscode.Uri.file(path.join(context.extensionPath, "html")),
        ],
      }
    );

    const editingEditor = vscode.window.activeTextEditor;
    if (editingEditor === undefined) {
      vscode.window.showWarningMessage(
        "Sorry, the active text editor is not valid."
      );
      return;
    }
    this.editingEditor = editingEditor;

    this.initialize();
    this.isDisposed = false;
  }
  // # 初始化
  initialize() {
    this.registerDisposables();
    setTimeout(() => {
      this.initializeWebviewHtml();
    }, 1500);
  }

  initializeWebviewHtml() {
    let loadingScriptHtml: string[] = [];
    this.configureWebviewScripts([]).forEach((path) => {
      loadingScriptHtml.push(
        `<script src="${vscode.Uri.file(this.getHtmlAssetPath(path)).with({
          scheme: "vscode-resource",
        })}"></script>`
      );
    });

    const html: string = fs
      .readFileSync(
        path.join(
          this.getHtmlAssetPath("mind-map-preview-webview.template.html")
        )
      )
      .toString("utf-8");
    this.view.webview.html = html.replace(
      /<insert-vscode-resource \/>/g,
      loadingScriptHtml.join("\r\n")
    );
  }

  registerDisposables() {
    const disposables: vscode.Disposable[] = this.configureDisposables([]);

    // 面板关闭时，清除事件监听
    this.view.onDidDispose(
      () => {
        disposables.forEach((disposable) => {
          disposable.dispose();
        });
        this.isDisposed = true;
      },
      null,
      this.context.subscriptions
    );
  }

  getHtmlAssetPath(filename: string) {
    return path.join(this.context.extensionPath, "html", filename);
  }

  onMessageReceived(message: any) {
    switch (message.command) {
      case "saveSvgData": {
        this.onSvgDataReceived(message.html);
        break;
      }
    }
  }

  onSvgDataReceived(html: string) {
    const editor = vscode.window.activeTextEditor;
    if (editor === undefined) {
      vscode.window.showWarningMessage(
        "Sorry, the active text editor is not valid."
      );
      return;
    }
    const fsPath = editor.document.uri.fsPath;
    const tempFile = path.dirname(fsPath);

    const filename = utils.getFileNameWithoutExtension(path.basename(fsPath));
    let tempImage = path.resolve(tempFile, filename + ".svg");
    fs.writeFileSync(tempImage, html);
  }

  // 更新脑图
  updatePreview(conf = { from_file: false }) {
    let { from_file: fromFile } = conf;
    this.isFromFile = conf;

    // ## 单独处理文件
    let data = this.editingEditor.document.getText();
    if (fromFile) {
      data = utils.getMarkDownTitle(data);
    }
    this.view.webview.postMessage({ command: "renderMarkdown", data: data });
  }

  exportSvg() {
    this.view.webview.postMessage({ command: "saveSvg" });
  }
}

export { MindMapPreview };
