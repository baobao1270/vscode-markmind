# Contributing
## Getting Started
 1. **Fork**<br/>
    Please fork this repository on GitHub first. Then you can clone the forked repository.
 2. **Clone source code and install dependencies**<br/>
    Please replace `<your-username>` to your GitHub username.
    ```
    git clone git@github.com:<your-username>/vscode-markmind.git
    cd vscode-markmind
    npm i
    ```
 3. **Create new branch and write codes**<br/>
    Create new branch by `git checkout -b <branch name>`. Make sure your branch name follows the guidelines below. Then, write your codes.
 4. **Test the code by yourself**<br/>
    Press `F5` in VSCode to start debugging. Make sure your code runs as excepted.
 5. **Check there no errors in your code before commit**<br/>
    Check your code style and compile TypeScript by command `npm run pretest`. Make sure there is no errors.
 6. **New pull request**<br/>
    Commit you code and create a new pull request. Code will be reviewed before merge.

## Guidelines
Make sure you understand these guidelines before contributing.

### Community
 1. **Languages**<br/>
    English is the preferred, but you can use Chinese too.
 2. **Communicating Platforms**<br/>
    We suggest all contribuctors discuss on GitHub Issuse.
 3. **Code reviewing**<br/>
    All pull requests are reviewed by repository owner before merge. Please do checklist below before PR:
     - All of your code follows code style guidelines below.
     - All of your VCS settings follows version control guidelines below.
     - There is no errors reported by TypeScript compiler.
     - There is no warnings reported by ESLint.
 4. **Report important changes**<br/>
    If you want to perform changes listed below, you are suggestted to create a new issue and obtain approval by repository owner.
     - Refactoring massive files.
     - Adding new dependency.
     - Adding or changing ESLint rules.
 5. **Publishing**<br/>
    Publishing of this package to VSCode Marketplace is done by repository owner.

### Code Styles
 1. **As-is principle**<br/>
    Do minimum changes. Don't reformat code if they don't volite this guideline. If you have to refomat, use a seprated git commit.
 2. **Syntax**<br/>
    ES6 syntax is prefered.
 3. **Indent**
     - If the file is linted by ESLint, follow the ESLint rule.
     - If not, use 4 spaces as indent.
 4. **Naming convention**
    |Target  |Case  |Example       |
    |--------|------|--------------|
    |Filename|Camel |mainWebview.ts|
    |Class   |Pascal|MainWebview   |
    |Variable|Camel |contentHtml   |
    |Function|Camel |openWindow()  |
    |Command |Camel |mdmmp.showFile|

### Version Control
 1. **Branch**<br/>
     - **Bug fixing branch:** named with `bugfix/issue#<issue-id>` or `bugfix/<bug-name>`.
     - **Feature branch:** named with `feature/<feature-name>`.
     - **Other branch:** just use `develop`.
 2. **Commit message**<br/>
     - Commit message should not contain non-ASCII characters.
     - The first letter of commit message needn't be upper-case, and needn't a ending period.
     - If a bug is fixed, commit message should contain `fix #id`. If not fixed but changed, don't contian.
     - If a feature is added and it is related to an issue, commit message should contain `add #id`.
 3. **Changelog and versioning**
    Remember write the Changelog and update version string.
