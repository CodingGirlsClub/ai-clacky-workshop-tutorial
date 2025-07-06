# Clacky AI 聊天

## 聊天代理

Clacky 在线程界面右侧提供 Clacky AI 聊天窗口，并专门设计了聊天代理来满足用户基于项目代码库和 AI 大语言模型进行深度交流的需求。

为了提供准确的答案，语言模型需要了解与您的代码库相关的具体细节——上下文。在分析项目需求以及理解和回答用户问题之前，聊天代理对整个代码库进行[代码库分析](./chat-agent.md#代码库分析)，并可以使用"搜索文件"和"读取文件内容"等工具主动搜索相关代码文件/代码片段，以丰富上下文信息。

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchat.0dc58d46.png&w=3840&q=75)

## 代码库分析

当启动新线程时，Clacky 立即开始对项目代码库进行全面的实时分析。这种分析对于理解项目的复杂细节至关重要，涉及几个关键步骤：

- **语言和框架识别**：Clacky 识别项目中使用的编程语言和框架，为理解项目的技术栈提供基础。

- **文件和目录映射**：系统映射整个文件和目录结构，清楚地概述项目的组织方式以及特定资源的位置。

- **依赖识别**：Clacky 识别重要的项目依赖项，这对于理解项目的不同部分如何交互以及依赖外部库或模块至关重要。

- **组件可重用性评估**：分析还突出显示代码库中的可重用组件，这些组件可以被利用来提高开发效率和可维护性。

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalysis.3a37d7de.png&w=1920&q=75)

## 编辑 (Command + K)

Clacky 编辑器支持可以使用"Command + K"快捷键（或在 Windows/Linux 上使用"Ctrl + K"）激活的编辑功能。按下"Command/Ctrl + K"后，会出现"提示栏"，作为 AI 聊天输入框。

### 编辑选定代码

对于内联编辑，选择您希望修改的代码并输入您的提示。每次生成后，您可以通过添加更多指令并按 Enter 来完善提示，允许 AI 根据您的后续指令重新生成。

默认情况下，Clacky 尝试查找各种类型的有用信息来增强代码生成，例如相关文件和最近查看的文件。这些上下文项目根据它们与您的编辑/生成的相关性进行排名，排名最高的项目保留在大语言模型的上下文中。

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcmdk.3b01022b.png&w=1920&q=75)

### 生成新代码

如果没有选择代码，Clacky 将根据您输入的提示生成新代码。

## 添加到聊天

选择代码片段后，您可以使用快捷键"Cmd + Shift + L"（或在 Windows/Linux 上使用"Ctrl + Shift + L"）快速引用此代码并将其发送到聊天窗口。此功能允许您与 Clacky AI 进行对话，最大限度地减少手动复制和粘贴的需要。

![project](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faddtochat.801eb955.png&w=1920&q=75)

---

_最后更新于 2025 年 3 月 31 日_
