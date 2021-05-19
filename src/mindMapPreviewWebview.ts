import * as vscode from "vscode";
import * as path from "path";
import * as fs from "fs";
import * as utils from "./utils";

class MindMapPreview {
    context: vscode.ExtensionContext;
    view: vscode.WebviewPanel;
    editingEditor!: vscode.TextEditor;
    isDisposed: boolean = false;
    
    // Configure initialization here.
    configureWebviewScripts(webviewScripts: string[]) {
        webviewScripts.push("libs/d3.js");
        webviewScripts.push("libs/transform.min.js");
        webviewScripts.push("libs/view.min.js");
        return webviewScripts;
    }

    configureDisposables(disposables: vscode.Disposable[]) {
        disposables.push(vscode.workspace.onDidChangeTextDocument(() => {
            this.updatePreview();
        }));
        disposables.push(this.view.webview.onDidReceiveMessage((message) => {
            this.onMessageReceived(message);
        }, null, this.context.subscriptions));
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
                    vscode.Uri.file(path.join(context.extensionPath, "html"))
                ]
            }
        );

        const editingEditor = vscode.window.activeTextEditor;
        if (editingEditor === undefined) {
            vscode.window.showWarningMessage(
                "Sorry, the active text editor is not valid.");
            return;
        }
        this.editingEditor = editingEditor;

        this.initialize();
        this.isDisposed = false;
    }

    initialize() {
        this.initializeWebviewHtml();
        this.registerDisposables();
    }

    initializeWebviewHtml() {
        let loadingScriptHtml: string[] = [];
        this.configureWebviewScripts([]).forEach(path => {
            var jsUri = vscode.Uri.file(this.getHtmlAssetPath(path)).with({
                scheme: "vscode-resource"
            });
            loadingScriptHtml.push(
                `<script src="${jsUri}"></script>`);
        });

        const html: string = fs.readFileSync(path.join(this.getHtmlAssetPath(
            "webview.html"))).toString("utf-8");
        this.view.webview.html = html.replace(
            /<insert-vscode-resource\/>/g, loadingScriptHtml.join("\r\n"));
    }

    registerDisposables() {
        const disposables: vscode.Disposable[] = this.configureDisposables([]);
        this.view.onDidDispose(
            () => {
                disposables.forEach(disposable => {
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
                "Sorry, the active text editor is not valid.");
            return;
        }
        const fsPath = editor.document.uri.fsPath;
        const tempFile = path.dirname(fsPath);
        
        const filename = utils.getFileNameWithoutExtension(
            path.basename(fsPath));
        let tempImage = path.resolve(tempFile, filename + ".svg");
        fs.writeFileSync(tempImage, html);
    }

    updatePreview() {
        const data = this.editingEditor.document.getText();
        this.view.webview.postMessage({
            "command": "renderMarkdown", "data": data
        });
    }

    exportSvg() {
        this.view.webview.postMessage({ "command": "saveSvg" });
    }
}

export { MindMapPreview };
