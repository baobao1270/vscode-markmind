# Contributing to our Project
Welcome! I'm happy that you are interested in contributing to our project. On behalf of all contributors of this project, I'd like to appreciate your contributes that making our project and our community better.

Before submitting your contribution, please make sure to take a moment and read through the following guidelines.

If you want to report a bug, request features, ask a question, etc, please create an [Issue](https://github.com/baobao1270/vscode-markdown-mindmap-preview/issues/new/choose).

## Getting Started with Writing Codes for Our Project
Before you start developing, please make sure Visual Studio Code **higher then 1.49.0** is installed.

Firstly, you need fork this repository by clicking the **Fork** button on the top of our GitHub page. Then, you can clone it to your local machine.

```
git clone git@github.com:<your-username>/vscode-markdown-mindmap-preview.git
```

Then, install the nodejs dependencies. Once the dependencies are installed, you can open this folder in VSCode.
```
npm install
code .
```

Now, you can start coding, and start debugging by the shortcut `F5`.

## Git Guidelines
### Branch Naming
 - If you only contributes to documentation, use the `doc` brach. However, if the documentation is for the new feature you added, you can use the same `feature` branch of the feature you added.
 - If you are adding a new feature, use the `feature/<feature-name>` or `feature/issue#<issue-id>` branch.
 - If you are fixing bugs, use the `bugfix/<bug-name>` or `bugfix/issue#<issue-id>` branch.

You is suggested to use separated branch for different bugs or features.

### Commit Message
The first line of commit message is suggested to be a brief and clear description of what is changed, which is less then 80 words or Chinese Characters. If the commit is related to an issue, please add `fix #issue-id` or `add #issue-id` as suffix of the first line.

The next lines of commit message is optional, which includes information like effects of this commit.

Changed files is not supposed to listed in the commit message, for git will list it automatically.

## Code Style Guidelines
Generally, we except an elegant style code. We do not denying complex code, but it is suggested to be easy to understand.

### Adding Dependency
We do not deny you add dependencies to our project, for thats how Node.js lives. However, please think twice before adding it. Both performance and safety are suggested to be take into consideration.

If you decided to add a dependency, don't hastate to add it to the `package.json`. If there are unused dependencies, please remove them before pull request.

### Variables
Variables are supposed to stay in their minimum scope, global variables are not recommended. Please use `let` instead of `var` in blocks, unless cross-block access of the variable is necessary.

### Naming
Variable naming are supposed to follow the guidelines below:
 - Class name: Pascal case, such as `MyClass`.
 - Variable name: Lower camel case, like `myVariable`
   - Please avoid abbreviation like `var` (variable), `ms` (microsoft), `mm` (Mind Map), unless it is well known, such as `http`.
   - If the meaning of variable is not ambiguous, please use the shortest word. For example, use `function getCompany(name) { return companies[name] }` instead of `function getCompany(companyName) { return companies[name] }`.
   - Use adjective prefix instead of `is-` prefix in boolean values **for variables**, like `object.readable` instead of `object.isReadable`.
 - Function name: Lower camel case, like `getContent`
   - Function names are supposed to use the `<verb>-<noun>-<adj>` suture. Typically, `getSomething()` and `setSomething()` are common names of functions.
   - Use `is-` prefix instead of adjective in boolean values **for functions**, like `isReadable()` instead of `readable()`.
 - Command name: Lower camel case, with `mdmmp` prefix, such as `mdmmp.exportSvg` or `mdmmp.showMarkdownFile`.

### Comments
You are suggested to leave comments only when necessary. If there are some comments only for debugging, please remove them before pull request.

### Console Logging
Logging things to console actively is not recommended in our project. If there are `console.log` calls only for debugging in your code, please remove them before pull request.

### Linting
Please make sure your code have passed the ESLint and TSLint linter.

## Dictionary Suture
 - `html`: For static files used in the extension host
 - `icon`: For icon files used in the extension UI
 - `src`: For extension main source code
   - `extension.ts`: Main file, the entry
   - `utils.ts`: All utility functions
   - `<className>.ts`: All classes are placed here with the **lower camel case** file name.

## Pull Request Guidelines
 - Before pulling request, please ensure your code passed all related test, both manually and automatically (if applicable).
 - For each different bug fixes an features, please pull request separately.
 - For adding a new feature:
   - Add accompanying test case.
   - If you are resolving a special issue, add `add #issue-id[,#issue-id]` at the end of your pull request title.
   - Provide a convincing reason to add this feature. Ideally, you should open a feature request issue first and consult form the owner of this project.
   - Add usage of this feature in README or documentation, in Chinese and/or English.
 - For bugs fixing:
   - If you are resolving a special issue, add `fix #issue-id[,#issue-id]` at the end of your pull request title.
   - Add appropriate test coverage if applicable.
 - Please merge your code to the `master` branch.
 - If the owner of this project don't satisfied with your code, your pull request code will be modified by the owner or other contributors directly. Please don't mind: your contribution are still helpful for us.

## Credits
Thank you to all the people who have already contributed to our project. Your contribution will be recorded and showed on GitHub.
