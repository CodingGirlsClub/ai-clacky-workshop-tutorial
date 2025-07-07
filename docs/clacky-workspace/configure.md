# 1024 配置

## 配置运行命令

除了支持直接在终端运行项目，Clacky CDE 还提供了“运行项目”按钮，可一键运行项目并将日志输出到“终端”。该按钮背后的命令由 `.1024` 文件配置和保存。

> .1024 文件用于配置项目运行命令；任何更改都会自动保存并立即生效。

初始化项目时，Clacky AI 会自动检测并配置 .1024 文件参数。您也可以在文件树中找到并手动编辑该文件。

建议将 .1024 文件提交到代码仓库。

### 示例

一个有效的 `.1024` 文件示例：

```yaml
run_command: npm run serve
# dependency_command 会在你 fork 新线程前自动执行
dependency_command: npm install && npm run install
```

一个无需编译的 python 项目：

```yaml
run_command: python main.py
```

一个使用 `pnpm` 且无需编译的 web 服务项目：

```yaml
run_command: pnpm run dev
```

`run_command` 现在也支持数组格式，可用于 monorepo 场景下执行多个命令：

```yaml
run_command:
  - cd frontend && npm run dev
  - cd backend && rails s
```

## 安装系统依赖

除了使用预装的系统依赖外，您还可以通过以下方式更新、升级和添加新依赖：

在终端中使用 `sudo apt update` 或 `sudo apt install -y [包名]` 命令来更新和安装依赖。

完整示例：

```sh
# 更新软件包列表
sudo apt update

# 安装依赖
sudo apt install -y \
  build-essential \
  curl \
  wget \
```

安装完成后可用如下命令验证：

```sh
apt list --installed | grep [包名]
```

最后更新于 2025 年 4 月 15 日

[环境](https://docs.clacky.ai/clacky-workspace/environment "Environment") [服务](https://docs.clacky.ai/clacky-workspace/services "Services")
