# VSCode Markdown Mind Map Preview
<p align="center"><img width="100" src="https://raw.githubusercontent.com/baobao1270/vscode-markdown-mindmap-preview/master/icon.png"></p>

[![Visual Studio Marketplace: Markdown Mind Map Preview](https://img.shields.io/badge/Visual%20Studio%20Marketplace-Markdown%20Mind%20Map%20Preview-blue?logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=josephcz.vscode-markdown-mindmap-preview)
[![Version](https://img.shields.io/visual-studio-marketplace/v/josephcz.vscode-markdown-mindmap-preview?label=Version)](https://github.com/baobao1270/vscode-markdown-mindmap-preview/tags)
[![GitHub issues](https://img.shields.io/github/issues/baobao1270/vscode-markdown-mindmap-preview?label=Issues)](https://github.com/baobao1270/vscode-markdown-mindmap-preview/issues)
[![GitHub forks](https://img.shields.io/github/forks/baobao1270/vscode-markdown-mindmap-preview?label=Forks)](https://github.com/baobao1270/vscode-markdown-mindmap-preview/network)
[![GitHub stars](https://img.shields.io/github/stars/baobao1270/vscode-markdown-mindmap-preview?label=Stars)](https://github.com/baobao1270/vscode-markdown-mindmap-preview/stargazers)
[![GitHub license](https://img.shields.io/github/license/baobao1270/vscode-markdown-mindmap-preview?label=License)](https://github.com/baobao1270/vscode-markdown-mindmap-preview/blob/master/LICENSE)

[简体中文（Simplified Chinese）](https://github.com/baobao1270/vscode-markdown-mindmap-preview/blob/master/README_ZH.md) | [CHANGELOG](https://github.com/baobao1270/vscode-markdown-mindmap-preview/blob/master/CHANGELOG.md)

![Preview](https://raw.githubusercontent.com/baobao1270/vscode-markdown-mindmap-preview/master/PREVIEW.jpg)

## Install
**This extension requires VSCode >=1.49.0.**

You can search `josephcz.vscode-markdown-mindmap-preview` in the Visual Studio Code Extension Marketplace and install this extension.

Alternatively, you can go to the [Visual Studio Marketplace Release Page](https://marketplace.visualstudio.com/items?itemName=josephcz.vscode-markdown-mindmap-preview) and click the **Install** button or [Download this extension](https://github.com/baobao1270/vscode-markdown-mindmap-preview/releases) and install it manually.

## Usage
### Previewing a Mind Map
1. Create a markdown file in the VSCode, or open an existed one.
2. Click the button on the top bar looks like the mind map, or open the command panel by shortcut keys `Ctrl+Shift+P` and type the command `View Mind Map`. A mind map preview will shown in the right side of your VSCode editor.
3. If you change the content of the markdown file at the left side, changes will sync to the mind map at the right side.
4. You can zoom the mind map by scrolling your mouse wheel.

### Export the Mind Map to SVG
Currently, we only support exporting the mind map to SVG format. You must start previewing the mind map first before exporting it. 

When previewing, open the command panel by shortcut keys `Ctrl+Shift+P` and type the `Export Mind Map Svg` command. The SVG file will be saved in the same path of your markdown file with the same file name added with the `.svg` extension name.

**If you run the command again, the previous svg file will be overwritten.**

## Todo List
Here is the to-to list of this project:
 - [x] Export mind map to SVG
 - [ ] Export mind map to PNG
 - [ ] Follow the cursor when the mind map is refocused [#3](https://github.com/baobao1270/vscode-markdown-mindmap-preview/issues/3)

## Contributing
### Opening Issues
See [New Issue Page](https://github.com/baobao1270/vscode-markdown-mindmap-preview/issues/new/choose).

### Submitting Codes
See [CONTRIBUTING.md](https://github.com/baobao1270/vscode-markdown-mindmap-preview/blob/master/CONTRIBUTING.md).

## License
This project is under the [MIT License](https://github.com/baobao1270/vscode-markdown-mindmap-preview/blob/master/LICENSE).