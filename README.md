# VSCode Markdown Mind Map Preview
```
Notice: this project is not actively maintained.
New feature requests won't be accepted temporary.
But bugs will be fixed and important pull requests will be merged.
```

<p align="center"><img width="100" src="https://raw.githubusercontent.com/baobao1270/vscode-markmind/master/icon.png"></p>

[![Visual Studio Marketplace: Markdown Mind Map Preview](https://img.shields.io/badge/Visual%20Studio%20Marketplace-Markdown%20Mind%20Map%20Preview-blue?logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=josephcz.vscode-markdown-mindmap-preview)
[![Version](https://img.shields.io/visual-studio-marketplace/v/josephcz.vscode-markdown-mindmap-preview?label=Version)](https://github.com/baobao1270/vscode-markmind/tags)
[![GitHub issues](https://img.shields.io/github/issues/baobao1270/vscode-markmind?label=Issues)](https://github.com/baobao1270/vscode-markmind/issues)
[![GitHub forks](https://img.shields.io/github/forks/baobao1270/vscode-markmind?label=Forks)](https://github.com/baobao1270/vscode-markmind/network)
[![GitHub stars](https://img.shields.io/github/stars/baobao1270/vscode-markmind?label=Stars)](https://github.com/baobao1270/vscode-markmind/stargazers)
[![GitHub license](https://img.shields.io/github/license/baobao1270/vscode-markmind?label=License)](https://github.com/baobao1270/vscode-markmind/blob/master/LICENSE)

[简体中文（Simplified Chinese）](https://github.com/baobao1270/vscode-markmind/blob/master/README_ZH.md) | [CHANGELOG](https://github.com/baobao1270/vscode-markmind/blob/master/CHANGELOG.md)

![Preview](https://raw.githubusercontent.com/baobao1270/vscode-markmind/master/PREVIEW.jpg)

## Install
**This extension requires VSCode >=1.49.0.**

You can search `josephcz.vscode-markdown-mindmap-preview` in the Visual Studio Code Extension Marketplace and install this extension.

Alternatively, you can go to the [Visual Studio Marketplace Release Page](https://marketplace.visualstudio.com/items?itemName=josephcz.vscode-markdown-mindmap-preview) and click the **Install** button or [Download this extension](https://github.com/baobao1270/vscode-markmind/releases) and install it manually.

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

### Title-only Mode
When a file is opened, the `Mind Map From File` command can find all markdown title of the document and generate a markdown preveiw.

You can also use the `Copy Title From File` command to copy all markdown titles to clipboard.

## Reporting Bugs and Suggestions
We use [GitHub Issue Page](https://github.com/baobao1270/vscode-markmind/issues/new/choose) as bug tracer and communition tool.

## Building
First, please clone this project:
```
git clone https://github.com/baobao1270/vscode-markmind.git
```

Alternatively, you can download zip files on GitHub.

The second step is install dependencies:
```
npm install
```

Now you can start developing. Press `F5` in VSCode to luanch debugger.

Before release or commiting your code, please check there's no errors in your code:
```
npm run pretest
```

If you want to release new package, `vsce` package should be globally installed. Install it by:
```
npm i -g vsce
```

Then package it:
```
vsce package
```

Finally, you can publish it. Make sure your version string is changed.
```
vsce publish
```

## Contributing
Please read [CONTRIBUTING.md](https://github.com/baobao1270/vscode-markmind/blob/master/CONTRIBUTING.md).

## License
This project is under the [MIT License](https://github.com/baobao1270/vscode-markmind/blob/master/LICENSE).