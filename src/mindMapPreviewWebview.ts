import * as vscode from 'vscode';
import * as path from "path";

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
                <svg id="container"></svg>
                <script>
                    const map = markmap.Markmap.create("#container", null, {"t":"heading","d":1,"p":{},"v":"Rendering, please wait..."});
                    window.addEventListener('message', event => {
                        const message = event.data;
                        map.setData(markmap.transform(message));
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
    }

    updatePreview() {
        const data = this.editingEditor.document.getText();
        this.view.webview.postMessage(data);
    }
}

export { MindMapPreview };
