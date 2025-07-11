# 从零开始构建

![build-from-scratch](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbuild-from-scratch.ab538d5a.png&w=3840&q=75)

## 创建空白项目

要创建空白项目，只需编写您需求的提示，或选择一个示例来快速开始

### 提示

在聊天框中，描述您希望 Clacky 帮助您构建的应用程序类型，以及具体要求（技术栈、功能和其他特殊要求）

例如：

```
帮我创建一个番茄钟计时器 Web 应用程序，具有以下要求：
1. 使用 React 和 TypeScript 作为前端
2. 使用 TailwindCSS 进行样式设计
3. 实现计时器功能：开始、暂停、重置
4. 添加工作/休息时段的视觉指示器
5. 包含适合非技术用户的简洁、用户友好的界面
```

或者

```
基于 rails + tailwindcss + postgresql 开发一个类似 twitter 的系统
- 不需要身份验证，仅用于演示
```

### 示例

从推荐的"从零开始构建"示例中选择一个符合您需求/技术栈的示例。让 Clacky 分析需求，生成规范，审查或编辑建议的更改点、线程名称和默认分支名称。一旦一切确认无误，让 Clacky 开始构建：

## 规划和执行

用户确认或手动调整开发计划并批准执行后，任务计划代理会自主遵循任务计划，利用 Clacky 的工具生成和编写代码或在终端中执行相关命令。

在此过程中，Clacky 引入了创新的"任务时光机"和代码快照技术，为开发者提供对 AI 操作的完整可视化和控制。您可以跟踪、审查和调整 AI 所做的每一个修改，确保开发过程始终在您的控制之下。

![0-1-task-completed](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F0-1-task-completed.583cd1dd.png&w=3840&q=75)

## 提交更改

任务完成并测试成功通过后，点击聊天框上方的"提交更改"按钮，请求 Clacky 将更改提交并推送到您的 Git 平台远程仓库。Clacky 将审查更改并生成提交消息，然后在您确认后推送。

对于第一次提交，您需要首先授权 Git 平台并创建远程仓库。

## 创建远程仓库

1. 点击"创建远程仓库"按钮
2. 在弹出窗口中授权 GitHub/GitLab
3. 确认仓库所有者和要创建的仓库名称，然后点击创建按钮创建远程仓库
4. 创建成功后，再次点击"提交更改"按钮将代码提交并推送到远程仓库

一旦初始需求完成，强烈建议为其他任务创建新线程，这将显著提高 AI 的结果。

## 关闭第一个线程

确认并推送更改后，点击左上角的徽标返回项目页面。然后，点击第一个线程旁边的更多选项菜单（三个点）并选择"关闭线程"。确认操作后，您可以成功关闭项目的第一个线程。

这标志着初始项目需求和开发环境设置的完成。之后创建的任何新需求线程都将自动从第一个线程克隆开发环境。

## 创建新线程

开始新[线程](../clacky-workspace/dev-thread.md)很简单。首先与 Clacky 对话 - 您可以直接在项目页面底部的聊天框中输入您的需求：

或者输入 '#' 调出您仓库中的 GitHub 问题列表，搜索并选择一个发送给 Clacky：

Clacky 将自动识别任务需求并根据您的讨论生成规范。一旦您对详细信息满意，点击按钮开始新的开发线程。

![project](https://assetscdn.clacky.ai/docs/specification.png)

在新线程中，您可以与 Clacky 一起编写代码和解决问题。

我们开发了一个强大的 AI 代理工作模型，可以对项目代码仓库进行深入分析和索引。结合[成熟的工作流程](../clacky-ai/task-plan-agent.md)，这显著提高了"第一次"工作输出的质量。

---

_最后更新于 2025 年 6 月 21 日_
