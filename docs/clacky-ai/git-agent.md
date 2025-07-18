# Git 代理

Clacky AI Git 代理通过在线程界面内自动化提交和拉取请求的过程来增强开发工作流程。通过处理常规的 Git 操作，它让您能够专注于更重要的任务，确保无缝高效的工作流程。

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgitagent.2f1ebb1f.png&w=3840&q=75)

## 提交更改

一旦项目任务计划执行完毕并通过测试，用户可以通过点击"提交更改"按钮启动提交过程。Git 代理将在终端中执行命令来：

- **检查待处理更新**：它审查代码库中需要提交的任何更改。
- **差异代码更改**：代理生成代码更改的差异，清楚地显示已修改的内容。
- **生成提交消息**：自动生成提交消息供用户确认。此消息总结了所做的更改。
- **执行 Git 命令**：确认后，Git 代理自主执行 `git add`、`commit` 和 `push` 操作，确保代码被提交并推送到远程仓库。支持多次提交和推送。

## 创建拉取请求

提交和推送操作完成后，用户可以通过点击"创建拉取请求"按钮继续创建拉取请求。Git 代理将：

- **分析分支更改**：它将当前分支与目标分支进行比较以识别更改。
- **生成拉取请求描述**：生成拉取请求的结构化描述，总结修改及其影响。
- **创建拉取请求**：一旦描述得到确认，Git 代理使用 GitHub API 创建拉取请求，促进无缝集成到开发工作流程中。

---

_最后更新于 2025 年 3 月 31 日_
