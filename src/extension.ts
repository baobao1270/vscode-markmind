import * as vscode from "vscode";
import { MindMapPreview } from "./mindMapPreviewWebview";

export function activate(context: vscode.ExtensionContext) {
    let mindMapPreview: MindMapPreview;
    context.subscriptions.push(
        vscode.commands.registerCommand("mdmmp.showMindMap", () => {
            if ((mindMapPreview === undefined) || mindMapPreview.isDisposed) {
                mindMapPreview = new MindMapPreview(context);
            }
            mindMapPreview.updatePreview();
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand("mdmmp.exportSvg", () => {
            if ((mindMapPreview === undefined) || mindMapPreview.isDisposed) {
                vscode.window.showWarningMessage(
                    "Sorry, you need open the preview tab first.");
                return;
            }
            mindMapPreview.exportSvg();
        })
    );
}

export function deactivate() {}
