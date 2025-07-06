# 任务计划代理

我们设计 Clacky 的目标是协助人类用户解决真实的项目需求。为了实现这一目标，我们开发了专门的任务计划代理，通过全面的产品开发工作流程来引导整个过程：接收需求、分析需求、规划开发策略、执行开发任务以及进行检查和测试。

## 规划

在项目的入口页面，用户可以通过输入 '#' 从问题平台导入任务，或手动输入需求。聊天代理澄清并确认这些需求后，任务计划代理将参考确认的需求，搜索上下文和代码库，并生成需求规范文档。然后将此文档呈现给用户确认，允许他们根据需要手动修改或添加详细信息。

![project](https://assetscdn.clacky.ai/docs/specification.png)

一旦需求规范得到确认，Clacky 将创建一个新线程并转入其中。在此线程内，任务计划代理将收集其他信息，包括相关代码文件/片段、可访问的知识库和 Playbooks。经过仔细考虑后，它将制定开发计划来解决当前需求，允许您根据需要修改计划。

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftaskplan.3de8c533.png&w=3840&q=75)

## 执行

用户确认或手动调整开发计划并批准执行后，任务计划代理会自主遵循任务计划，利用 Clacky 的工具生成和编写代码或在终端中执行相关命令。

在此过程中，Clacky 引入了创新的"任务时光机"和代码快照技术，为开发者提供对 AI 操作的完整可视化和控制。您可以跟踪、审查和调整 AI 所做的每一个修改，确保开发过程始终在您的控制之下。

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fworkfollow.99f08781.png&w=3840&q=75)

## 审查

任务执行完成后，除了[自动修复代理](https://docs.clacky.ai/clacky-auto-fix-agent)自主检查任务执行结果外，用户还可以利用"任务时光机"功能重播整个任务执行过程。这允许您在任何时点暂停以审查当前操作的具体更改。

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplayback.1028c7cf.png&w=3840&q=75)

撤销 AI 更改并手动修改

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frevert.760e8412.png&w=1920&q=75)

或调整提示让 AI 重新生成代码更改：

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freprompt.64916052.png&w=1920&q=75)

## 附加功能

Clacky AI 已根据初始需求进行了修改。运行项目测试后，如果发现进一步的需求或问题，您可以继续向 Clacky AI 传达新需求。任务计划代理将在当前任务计划中附加新步骤并相应执行。

---

_最后更新于 2025 年 6 月 12 日_
