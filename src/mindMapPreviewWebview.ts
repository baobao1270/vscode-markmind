import * as vscode from 'vscode';
import * as path from "path";
import * as fs from "fs";
// const html2svg = require('html2svg');
// import * as html2svg from "html2svg";
export interface WebviewMessage {
    [key: string]: any;
}

class MindMapPreview {
    view: vscode.WebviewPanel;
    editingEditor!: vscode.TextEditor;

    constructor(context: vscode.ExtensionContext) {
        this.view = vscode.window.createWebviewPanel(
            "mindMapPreview",
            "Mind Map Preview",
            vscode.ViewColumn.Two,
            {
                enableScripts: true,
                localResourceRoots: [
                    vscode.Uri.file(path.join(context.extensionPath, 'html'))
                ]
            }
        );
        console.log("path", path.join(context.extensionPath, 'html'));

        this.view.webview.html = `
            <!DOCYPTE html>
            <html>
            <head>
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="renderer" content="webkit">
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                    }
                    #container {
                        display: block;
                        width: 100vw;
                        height: 100vh;
                    }
                </style>
                <script src="${vscode.Uri.file(
                    path.join(context.extensionPath, 'html', 'd3.js'))
                    .with({ scheme: 'vscode-resource' })}"></script>
                <script src="${vscode.Uri.file(
                    path.join(context.extensionPath, 'html', 'transform.min.js'))
                    .with({ scheme: 'vscode-resource' })}"></script>
                <script src="${vscode.Uri.file(
                    path.join(context.extensionPath, 'html', 'view.min.js'))
                    .with({ scheme: 'vscode-resource' })}"></script>
            </head>
            <body>
                <svg id="container" preserveAspectRatio="none meet"></svg>
                <script>
                    const map = markmap.Markmap.create("#container", null, {"t":"heading","d":1,"p":{},"v":"Rendering, please wait..."});
                    const vscode = acquireVsCodeApi();
                    window.addEventListener('message', event => {
                        const message = event.data;
                        switch (message.command) {
                            case "saveSVG": {
                                let svg = document.querySelectorAll('svg')[0];
                                svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                                vscode.postMessage({html: svg.outerHTML});
                                break;
                            }
                            case "markdown": {
                                    map.setData(markmap.transform(message.data));
                                    break;
                                }
                        }
                                
                    });
                </script>
            </body>
            </html>
        `;

        const editingEditor = vscode.window.activeTextEditor;
        if (editingEditor === undefined) { return; }
        this.editingEditor = editingEditor;

        const editingEvent = vscode.workspace.onDidChangeTextDocument(() => {
            this.updatePreview();
        });

        this.view.onDidDispose(
            () => {
                editingEvent.dispose();
            },
            null,
            context.subscriptions
        );

    
        this.view.webview.onDidReceiveMessage((message) => {
            const editor = vscode.window.activeTextEditor;
            if (editor == undefined) { return; }
            const fspath = editor.document.uri.fsPath;
            const temp_file = path.dirname(fspath);
            const filename = path.basename(fspath, "md");
            let temp_image = path.resolve(temp_file, filename +'.svg')
            fs.writeFileSync(temp_image, message.html);
        }, undefined, context.subscriptions);
    }


    updatePreview() {
        const data = this.editingEditor.document.getText();
        this.view.webview.postMessage({"command": "markdown", "data": data});
    }

    exportSVG() {
        this.view.webview.postMessage({"command":"saveSVG"})
    }
}

export { MindMapPreview };
