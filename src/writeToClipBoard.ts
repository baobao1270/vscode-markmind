import * as vscode from "vscode";
import * as utils from "./utils";

function writeToClipBoard() {
  let editingEditor = vscode.window.activeTextEditor;

  if (editingEditor && editingEditor.document) {
    let data = editingEditor.document.getText();
    data = utils.getMarkDownTitle(data);
    vscode.env.clipboard.writeText(data).then(
      (res) => {
        vscode.window.setStatusBarMessage("写入粘贴板成功", 2000);
      },
      (res) => {
        vscode.window.showErrorMessage("写入粘贴板失败");
      }
    );
  }
}

export { writeToClipBoard };
