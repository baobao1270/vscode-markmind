import * as vscode from "vscode";
import * as utils from "./utils";

function writeToClipBoard() {
    let editingEditor = vscode.window.activeTextEditor;

    if (editingEditor && editingEditor.document) {
        let data = editingEditor.document.getText();
        data = utils.getMarkDownTitle(data);
        vscode.env.clipboard.writeText(data).then(
            (res) => {
                vscode.window.setStatusBarMessage("copy success", 2000);
            },
            (res) => {
                vscode.window.showErrorMessage("copy fail");
            }
        );
    }
}

export { writeToClipBoard };
