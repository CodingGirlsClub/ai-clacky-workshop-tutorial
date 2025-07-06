# 本地 IDE 打开

虽然 Clacky 设计为完整的云开发环境，但也兼容您的本地开发习惯，允许您通过 SSH 将本地 IDE（如 VSCode 或 Cursor）连接到 Clacky 的开发容器，实现代码修改与同步。

## SSH 基础

SSH（安全外壳协议）是一种用于安全远程访问命令行界面的协议。通过 SSH，您可以高效传输文件，并用自己喜欢的本地 IDE 编辑 Clacky 云开发环境中的代码，从而提升协作与生产力。

快速入门指南：

- 在本地系统创建 SSH 密钥对
- 将公钥添加到任意线程的“SSH”设置中
- 使用支持 SSH 的客户端或编辑器进行连接

## 查找或创建密钥对

配置 SSH 需要您的公钥。

#### 检查是否已有密钥对

在本地终端运行以下命令检查是否已有公钥：

```sh
ls -l ~/.ssh
```

如无密钥对，可继续生成新密钥对。

### 生成新密钥对

在本地打开终端（或命令提示符），输入以下命令：

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

该命令会检查指定的公钥文件是否存在，如不存在则创建新 SSH 密钥。

### 获取公钥内容

确认或生成密钥对后，显示公钥内容（以 .pub 结尾的文件），后续需要用到：

```sh
cat ~/.ssh/id_rsa.pub
```

保存 id_rsa.pub 内容，后续添加到账户。

## 添加 SSH 密钥到账户

点击工作区页面右上角头像，进入“账户管理”窗口。切换到 SSH Keys 标签，选择“添加 SSH Key +”，粘贴保存的公钥。

![add-ssh-key](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadd-ssh-key.0394f8ad.png&w=3840&q=75)

## VS Code 连接 Clacky

进入目标开发线程，打开 CDE 工具 SSH 窗口，点击 VS Code 远程 URL 或复制到浏览器。授权后即可远程连接 Clacky 云开发环境。

![open-in-vscode](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopen-in-vscode.222a2fea.png&w=3840&q=75)

## Cursor 连接 Clacky

与 VS Code 类似，点击 Cursor 远程 URL 或复制到浏览器，授权后即可远程连接 Clacky 云开发环境。

## CLI 连接 Clacky

如需用 CLI 或其他 IDE 连接，进入开发线程，打开 CDE 工具 SSH 窗口，复制命令到本地终端或开发环境即可远程连接。

最后更新于 2025 年 6 月 13 日

[服务](https://docs.clacky.ai/clacky-workspace/services "Services") [集成](https://docs.clacky.ai/integrations "Integrations")
