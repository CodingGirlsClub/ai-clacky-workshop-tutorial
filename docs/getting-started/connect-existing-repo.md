# 连接现有仓库

注册成功后，我们为每个用户创建一个初始工作空间。这个协作环境允许您、您的团队成员和 Clacky AI 无缝协作。在这个工作空间内，您可以创建项目并与 Clacky 的 AI 虚拟软件工程师协作，解决项目中的实际问题。

## 创建项目

要创建项目，只需连接到现有仓库：

![connect-existing-repo](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconnect-existing-repo.4719559c.png&w=3840&q=75)

目前，我们只支持连接到 GitHub 和 GitLab 仓库。对 BitBucket 的支持正在开发中，敬请期待这些即将推出的功能。

## 配置环境

在创建线程并与 Clacky 协作处理特定项目问题之前，我们需要使用**根线程**为您的项目设置开发环境。这个特殊线程：

- 在项目初始化期间自动创建
- 作为所有环境配置的基础
- 处理依赖项安装和工具链设置
- 创建必要的配置文件（`.1024`，更新 `.gitignore`）

根线程的配置成为所有后续新[线程](../clacky-workspace/dev-thread.md)将继承的基础，确保不同开发任务之间的一致性，同时保持不同工作流之间的隔离。

> Clacky 目前为使用以下技术栈的开发环境提供预配置和支持：
>
> - Node.js (Next.js, Vue, React, Angular, Express, Static(HTML/CSS/JS))
> - Golang (Gin)
> - Python (Django, Flask, Fastapi)
> - Ruby (Rails)
> - Java (Spring Boot)

一旦 Clacky 完成设置，您需要将这些初始配置更改作为拉取请求提交到您的 Git 平台，并将它们合并到项目的默认分支中。

> 这个关键步骤确保初始化设置通过 Clacky 的继承模型正确应用到所有未来的开发线程，其中每个新线程都会收到此根配置的副本。

## 提交更改

点击聊天框上方的"提交更改"按钮，请求 Clacky 将更改提交并推送到您的 Git 平台远程仓库。Clacky 将审查更改并生成提交消息，然后在您确认后推送。

## 创建拉取请求

同样，通过点击聊天框上方的按钮，您可以请求 Clacky 创建 PR。Clacky 将审查更改并生成 PR 描述，您可以在提交到 Git 平台之前修改和确认。

## 关闭第一个线程

一旦更改成功合并：

- 线程自动关闭
- 其配置被锁定为基础环境
- 所有未来的线程都将继承这个最终配置

这种关闭最终确定了您项目的基础，确保所有后续开发工作的环境设置一致。

## 创建新线程

开始新[线程](../clacky-workspace/dev-thread.md)很简单。首先与 Clacky 对话 - 您可以直接在项目页面底部的聊天框中输入您的需求：

或者输入 '#' 调出您仓库中的 GitHub 问题列表，搜索并选择一个发送给 Clacky：

Clacky 将自动识别任务需求并根据您的讨论生成规范。一旦您对详细信息满意，点击按钮开始新的开发线程。

![project](https://assetscdn.clacky.ai/docs/specification.png)

在新线程中，您可以与 Clacky 一起编写代码和解决问题。

我们开发了一个强大的 AI 代理工作模型，可以对项目代码仓库进行深入分析和索引。结合[成熟的工作流程](../clacky-ai/task-plan-agent.md)，这显著提高了"第一次"工作输出的质量。

此外，我们提供全面的人工干预解决方案，允许在 Clacky 操作期间进行反馈和指导，并使用 Clacky 的[聊天](../clacky-ai/chat-agent.md)、[Command K](../clacky-ai/chat-agent.md#edit-command-k) 和其他助手功能直接修改代码进行调整（无需切换到本地环境）。

最后，通过 [Git 代理](../clacky-ai/git-agent.md)，您可以提交更改并创建拉取请求。

---

_最后更新于 2025 年 6 月 12 日_
