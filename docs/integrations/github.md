# GitHub 集成

Clacky 的 GitHub 集成让您的工作空间与 GitHub 仓库实现无缝协作。通过该集成，您可以直接在 Clacky 环境中管理仓库、跟踪问题、创建拉取请求，并利用 GitHub Actions。

![GitHubOAuth](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGitHubOAuth.a94d04cc.png&w=3840&q=75)

## 连接设置

按照以下步骤将 Clacky 连接到您的 GitHub 账户：

### 1. GitHub OAuth 授权

Clacky 通过 OAuth 连接到 GitHub：

1. 点击“创建项目”，选择“GitHub”，并按照授权流程操作
2. 您将被重定向到 GitHub 授权页面
3. 审查所请求的权限（见下方权限说明）
4. 点击“安装”
5. 授权成功后，您将被重定向回 Clacky

### 2. 仓库选择

1. 授权成功后，您将看到您的 GitHub 仓库列表
2. 选择要连接的仓库
3. Clacky 会自动为您创建项目并克隆仓库
4. 连接将基于您授权时授予的权限建立

### 所需权限

![GitHubApp](https://docs.clacky.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FGitHubApp.6f7f2b9b.png&w=2048&q=75)

Clacky 需要以下 GitHub 权限：

- **只读**：访问提交状态和元数据
- **读写**：访问管理、代码、问题和拉取请求

## 故障排查

### 连接问题

如遇连接问题：

1. 检查您的 GitHub 授权是否过期
2. 确认未在 GitHub 设置中撤销 Clacky 的访问权限
3. 确保您的网络允许连接到 GitHub
4. 尝试断开并重新连接集成

### 权限被拒绝

如遇“权限被拒绝”错误：

1. 检查授权时是否授予了必要的 OAuth 范围
2. 确认您在 GitHub 上有相应仓库的访问权限
3. 对于组织仓库，确保组织管理员已批准 Clacky

### 仓库未找到

如仓库列表缺失：

1. 确认您在 GitHub 上有仓库访问权限
2. 对于组织仓库，检查是否已授予组织访问权限
3. 尝试按名称或 URL 搜索仓库
4. 确认仓库存在且未被删除或重命名

## 常见问题

### 可以连接多个 GitHub 账户吗？

目前，Clacky 每个工作空间仅支持连接一个 GitHub 账户。如需切换账户，请先断开当前账户再连接新账户。

### 我的 GitHub 访问安全吗？

是的，Clacky 使用业界标准的 OAuth 进行 GitHub 认证。您可随时在 GitHub 设置中查看和撤销访问权限。

### 如何断开我的 GitHub 账户？

您可在 GitHub 设置的“应用”中撤销 Clacky 的访问权限。

最后更新于 2025 年 4 月 15 日

[集成](https://docs.clacky.ai/integrations "Integrations") [GitLab](https://docs.clacky.ai/integrations/gitlab "GitLab")
