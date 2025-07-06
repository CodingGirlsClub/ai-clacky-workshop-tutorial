# GitLab 集成

Clacky 的 GitLab 集成让您的开发工作空间与 GitLab 仓库实现无缝协作。通过该集成，您可以直接在 Clacky 环境中管理仓库、跟踪问题、创建合并请求，并管理 CI/CD 流水线。

## 连接设置

按照以下步骤将 Clacky 连接到您的 GitLab 账户：

### 1. 生成个人访问令牌

首先，您需要在 GitLab 中创建一个个人访问令牌（PAT）：

1. 登录您的 GitLab 账户
2. 点击右上角头像
3. 在下拉菜单中选择“Preferences”
4. 在左侧栏选择“Access Tokens”
5. 填写以下信息：
   - 令牌名称：如“Clacky 集成”
   - 过期日期：选择日期（最长 365 天）
   - 权限范围：选择所需权限（见下方权限说明）
6. 点击“Create personal access token”
7. **重要**：请立即复制生成的令牌，页面只会显示一次

### 2. 添加令牌到 Clacky

1. 点击“创建项目”，选择“GitLab”，并按照授权流程操作
2. 在表单中输入您的 GitLab 实例地址（默认为 `https://gitlab.com`）
3. 粘贴您的个人访问令牌（PAT）
4. 点击“连接”。连接成功后，您将看到您的仓库列表
5. 选择要连接的仓库，Clacky 会自动为您创建项目并克隆仓库

## 配置选项

### 认证续期

GitLab 个人访问令牌可能会过期。续期方法：

1. 按上述步骤在 GitLab 生成新令牌
2. 前往 Clacky “集成” > “GitLab” 设置
3. 点击“更新令牌”
4. 输入新令牌
5. 点击“保存”

## 故障排查

### 连接问题

如遇连接问题：

1. 检查您的个人访问令牌是否过期
2. 检查 GitLab 实例地址是否正确
3. 确保您的网络允许连接到 GitLab
4. 尝试断开并重新连接集成

### 权限被拒绝

如遇“权限被拒绝”错误：

1. 检查令牌是否包含必要权限（api、read_repository 等）
2. 确认您在 GitLab 上有相应仓库的访问权限
3. 对于私有仓库，确保令牌权限正确

### 仓库未找到

如仓库列表缺失：

1. 确认您在 GitLab 上有仓库访问权限
2. 检查仓库是否属于不同的 GitLab 实例
3. 尝试按名称或 URL 搜索仓库

## 常见问题

### 可以连接多个 GitLab 账户吗？

目前，Clacky 每个工作空间仅支持连接一个 GitLab 账户。如需切换账户，请先断开当前账户再连接新账户。

### 我的 GitLab 令牌安全吗？

是的，您的个人访问令牌会被安全加密存储，Clacky 不会与第三方共享您的令牌。

### 支持自建 GitLab 吗？

支持，既支持 gitlab.com，也支持自建 GitLab。连接时只需填写您的 GitLab 实例地址。

### 如何断开我的 GitLab 账户？

断开方法：

1. 前往“工作空间 - 设置” > “集成” > “GitLab”
2. 点击“断开连接”
3. 确认断开操作

## 资源

- [GitLab API 文档](https://docs.gitlab.com/ee/api/)
- [GitLab Webhooks 指南](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html)
- [个人访问令牌文档](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html)

最后更新于 2025 年 3 月 31 日

[GitHub](https://docs.clacky.ai/integrations/github "GitHub") [最佳实践](https://docs.clacky.ai/best-practices "Best Practices")
