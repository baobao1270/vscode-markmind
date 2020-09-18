// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { MindMapPreview } from "./mindMapPreviewWebview";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const mindMapPreview = new MindMapPreview(context);

	context.subscriptions.push(
		vscode.commands.registerCommand('mdmmp.showMindMap', () => {
			mindMapPreview.updatePreview();
		})
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('mdmmp.exportSvg', () => {
			mindMapPreview.exportSvg();
		})
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
