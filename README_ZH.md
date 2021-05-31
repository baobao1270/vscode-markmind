# VSCode Markdown Mind Map Preview
```
注意：本项目的开发与维护处于不活跃状态。
但是仍会进行重大 bug 的修复和重要 PR 的合并。
```

<p align="center"><img width="100" src="https://raw.githubusercontent.com/baobao1270/vscode-markmind/master/icon.png"></p>

[![Visual Studio 扩展中心: Markdown Mind Map Preview](https://img.shields.io/badge/Visual%20Studio%20%E6%89%A9%E5%B1%95%E4%B8%AD%E5%BF%83-Markdown%20Mind%20Map%20Preview-blue?logo=visual-studio-code)](https://marketplace.visualstudio.com/items?itemName=josephcz.vscode-markdown-mindmap-preview)
[![Switch Language to: English](https://img.shields.io/badge/Switch%20Language-English-green)](https://github.com/baobao1270/vscode-markmind/blob/master/README.md)
[![版本](https://img.shields.io/visual-studio-marketplace/v/josephcz.vscode-markdown-mindmap-preview?label=版本)](https://github.com/baobao1270/vscode-markmind/tags)
[![GitHub issues](https://img.shields.io/github/issues/baobao1270/vscode-markmind?label=Issues)](https://github.com/baobao1270/vscode-markmind/issues)
[![GitHub forks](https://img.shields.io/github/forks/baobao1270/vscode-markmind?label=Forks)](https://github.com/baobao1270/vscode-markmind/network)
[![GitHub stars](https://img.shields.io/github/stars/baobao1270/vscode-markmind?label=Stars)](https://github.com/baobao1270/vscode-markmind/stargazers)
[![GitHub 许可证](https://img.shields.io/github/license/baobao1270/vscode-markmind?label=许可证)](https://github.com/baobao1270/vscode-markmind/blob/master/LICENSE)

[English](https://github.com/baobao1270/vscode-markmind/blob/master/README.md) | [更改日志](https://github.com/baobao1270/vscode-markmind/blob/master/CHANGELOG_ZH.md)

![预览](https://raw.githubusercontent.com/baobao1270/vscode-markmind/master/PREVIEW_ZH.jpg)

## 安装
**此插件要求 VSCode 版本 >=1.49.0.**

您可以在 Visual Studio Code 插件市场中搜索 `josephcz.vscode-markdown-mindmap-preview` 来安装此插件。

此外，您可以通过在 [Visual Studio Marketplace 发布页](https://marketplace.visualstudio.com/items?itemName=josephcz.vscode-markdown-mindmap-preview) 点击 **Install（安装）** 按钮来安装，或在 [GitHub 发布页](https://github.com/baobao1270/vscode-markmind/releases) 下载此插件并手动安装。

## 使用方法
### 预览思维导图
1. 在 VSCode 中新建或打开一个 Markdown 文件。
2. 在编辑器的顶部栏中，点击形如思维导图的图标，或使用 `Ctrl+Shift+P` 快捷键打开命令面板后输入 `View Mind Map` 命令。思维导图的预览将显示在您的编辑器右侧。
3. 若您更改左侧的 Markdown 源文件，右侧的思维导图将同步更改。
4. 您亦可使用鼠标滚轮随意缩放思维导图。

### 导出为 SVG 图像
目前，我们仅支持在预览思维导图时导出图像，且仅支持导出为 SVG 格式。

在预览思维导图时，使用 `Ctrl+Shift+P` 快捷键打开命令面板，输入 `Export Mind Map Svg` 命令。您的思维导图将被导出到 Markdown 源文件的同一目录下，并以和 Markdown 源文件同样的文件名和 `.svg` 的扩展名保存。

**若您多次导出同名文件，仅保留最后一次导出的结果，先前的文件将被覆盖。**

### 提取任意文件的 Markdown 标题
在打开一个文件的状态下，使用 `Mind Map From File` 命令，可以提取该文件中所有的 Markdown 标题，并生成思维导图。

同时，也可以使用 `Copy Title From File` 命令，将所有 Markdown 标题复制到剪贴板。

## 反馈 bug 或提供意见与建议
本项目使用 [Issue](https://github.com/baobao1270/vscode-markmind/issues/new/choose) 来追踪 bug 和进行与项目有关的讨论。讨论的首选语言为英语，中文也可接受。


## 构建
首先请使用 Git 获取项目源代码：
```
git clone https://github.com/baobao1270/vscode-markmind.git
```

您也可以在 GitHub 上下载项目源代码的压缩文件。

第二步，您需要安装项目依赖：
```
npm install
```

完成安装后，您便可以开始开发了。在 VSCode 中按下 `F5` 键来启动调试。

在发布或提交代码前，请使用以下命令确保没有错误：
```
npm run pretest
```

如果您需要发布新的 VSIX 包，请先安装 `vsce` 包：
```
npm i -g vsce
```

然后进行打包：
```
vsce package
```

最后，用以下命令发布到 VSCode Marketpalce。记得在发布前修改版本号。
```
vsce publish
```

## 提交代码
请参见 [提交代码指南与准则](https://github.com/baobao1270/vscode-markmind/blob/master/CONTRIBUTING_ZH.md)。

## 版权
本项目以 [MIT 许可证](https://github.com/baobao1270/vscode-markmind/blob/master/LICENSE) 发布。
