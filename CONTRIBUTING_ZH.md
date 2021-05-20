# 提交代码指南与准则
## 指南
 1. **分支**<br/>
    请先使用 GitHub Fork 功能 Fork 本仓库。
 2. **克隆代码和环境准备**<br/>
    ```
    git clone git@github.com:<your-username>/vscode-markmind.git
    cd vscode-markmind
    npm i
    ```
 3. **建立新分支，编写代码**<br/>
    使用 `git checkout -b <branch name>` 建立新分支。分支的命名规则在下方的准则中给出。在新分支上编写你的代码。
 4. **测试代码**<br/>
    在 VSCode 中按下 `F5` 开始调试。确保你的代码如预期运行。
 5. **在提交前，确保代码编译通过且格式正确**<br/>
    使用 `npm run pretest` 检查并编译代码。如果没有错误与警告，则表示代码编译通过且格式正确。
 6. **建立 Pull request**<br/>
    您的代码将被 review，然后合并。

## 准则
请确保您在提交代码前，已经阅读、理解并同意以下准则：

### 社区
 1. **语言**<br/>
    首选英语，中文亦可。
 2. **交流平台**<br/>
    建议使用 GitHub Issue。请尽量避免使用 QQ 和微信。
 3. **代码 Review**<br/>
    所有代码都将被 Review，不合格的将会被打回。因此请遵循以下规则：
     - 您的代码风格和 Git 操作符合后文的准则。
     - TypeScript 编译器未汇报任何 error。
     - ESLint 未汇报任何 warning。
 4. **重要更改提示机制**<br/>
    请在进行如下重要更改前使用 Issue 进行讨论以收集社区意见，并征得项目管理者同意：
     - 对大量文件进行重构。
     - 增加依赖项。
     - 增加或修改 ESLint 规则。
 5. **发布**<br/>
    仅项目管理者拥有将此插件发布至 VSCode Marketplace 的权力。符合许可证的分支项目不受此条目限制。

### 代码风格
 1. **As-is 原则**<br/>
    如无必要，请勿修改。禁止格式化未违反 ESLint 的旧代码。如果必须格式化，则使用一个独立的 git commit。
 2. **语法**<br/>
    优先使用 ES6 语法。
 3. **缩进**
    首先遵循 ESLint 规则，不受其规制的文件一律使用 4 个空格进行缩进。
 4. **命名规则**
    |Target  |Case  |Example       |
    |--------|------|--------------|
    |Filename|Camel |mainWebview.ts|
    |Class   |Pascal|MainWebview   |
    |Variable|Camel |contentHtml   |
    |Function|Camel |openWindow()  |
    |Command |Camel |mdmmp.showFile|

### 版本控制
 1. **分支**<br/>
     - **Bug 修复分支：** 以 `bugfix/issue#<issue-id>` 或 `bugfix/<bug-name>` 命名。
     - **新功能分支：** 以 `feature/<feature-name>` 命名。
     - **其他分支：** 直接使用 `develop`。
 2. **Commit 信息**<br/>
     - 禁止使用非 ACII 字符
     - 首字母不必大写，结尾不必有句号
     - 如果该分支修复了一个 bug，请在信息中包含 `fix #id`。若未完全修复，则请勿包含。
     - 如果该分支完成了一个新功能，且该功能关联了一个或数个 Issue，请在信息中包含 `add #id`
 3. **Changelog 和版本号**
    记得写 Changelog 并修改版本号！
