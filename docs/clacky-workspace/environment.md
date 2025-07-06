# 环境

Clacky 为每个线程提供预配置、独立的云开发环境。每个环境都包含与主开发容器绑定的数据库服务（如 [MySQL](https://docs.clacky.ai/cloud-services/Mysql)），可直接安装和连接使用。

目标是让您在连接远程仓库并导入项目代码后，AI 能自动初始化开发环境，无需手动配置。

当前，Clacky 支持以下语言框架和数据库服务：

| 语言    | 框架                                                     |
| ------- | -------------------------------------------------------- |
| Node.js | Next.js、Vue、React、Angular、Express、静态(HTML/CSS/JS) |
| Golang  | Gin                                                      |
| Python  | Django、Flask、Fastapi                                   |
| Ruby    | Rails                                                    |
| Java    | Spring Boot                                              |

| 数据库服务 | 版本   |
| ---------- | ------ |
| MySQL      | 8.0.37 |
| PostgreSQL | 1.37   |
| Redis      | 7.2.4  |
| MongoDB    | 2.2.5  |

详细环境说明：

## Node.js 环境

| 环境版本名 | 说明                       |
| ---------- | -------------------------- |
| Node.js 14 | 支持 LSP（语言服务器协议） |
| Node.js 16 | 支持 LSP                   |
| Node.js 28 | 支持 LSP                   |
| Node.js 20 | 支持 LSP                   |
| Node.js 22 | 支持 LSP                   |
| Nvm 0.41.1 | 不支持 LSP                 |

> 操作系统版本：Ubuntu 22.04.4 LTS

### 预装系统依赖

- build-essential # 编译工具链（如 GCC、make）
- cmake # 构建工具（如项目用到 CMake）
- curl # 命令行下载工具
- git # 版本控制系统
- imagemagick # 图像处理工具（如项目涉及图片）
- mongodb-mongosh # MongoDB 客户端（如项目用到 MongoDB）
- mysql-client # MySQL 客户端（如项目用到 MySQL）
- openssh-server # SSH 服务端（远程访问用）
- pkg-config # 编译依赖管理工具
- postgresql-client # PostgreSQL 客户端（如项目用到 PostgreSQL）
- redis-tools # Redis 客户端（如项目用到 Redis）
- ripgrep # 快速文本搜索工具（可选）
- sqlite3 # SQLite 数据库工具（如项目用到 SQLite）
- vim # 文本编辑器
- wget # 命令行下载工具

## Golang 环境

| 环境版本名  | 说明       |
| ----------- | ---------- |
| Golang 1.17 | 支持 LSP   |
| Golang 1.18 | 支持 LSP   |
| Golang 1.19 | 支持 LSP   |
| Golang 1.20 | 支持 LSP   |
| Golang 1.21 | 支持 LSP   |
| Golang 1.22 | 支持 LSP   |
| Golang 1.23 | 支持 LSP   |
| Gvm 1.0.22  | 不支持 LSP |

> 操作系统版本：Ubuntu 22.04.4 LTS

### 预装系统依赖

- build-essential # 编译工具链（如 GCC、make）
- cmake # 构建工具（如项目用到 CMake）
- curl # 命令行下载工具
- git # 版本控制系统
- imagemagick # 图像处理工具（如项目涉及图片）
- mongodb-mongosh # MongoDB 客户端（如项目用到 MongoDB）
- mysql-client # MySQL 客户端（如项目用到 MySQL）
- openssh-server # SSH 服务端（远程访问用）
- pkg-config # 编译依赖管理工具
- postgresql-client # PostgreSQL 客户端（如项目用到 PostgreSQL）
- redis-tools # Redis 客户端（如项目用到 Redis）
- ripgrep # 快速文本搜索工具（可选）
- sqlite3 # SQLite 数据库工具（如项目用到 SQLite）
- vim # 文本编辑器
- wget # 命令行下载工具

## Python 环境

| 环境版本名  | 说明       |
| ----------- | ---------- |
| Python 2.7  | 支持 LSP   |
| Python 3.6  | 支持 LSP   |
| Python 3.7  | 支持 LSP   |
| Python 3.8  | 支持 LSP   |
| Python 3.9  | 支持 LSP   |
| Python 3.10 | 支持 LSP   |
| Python 3.11 | 支持 LSP   |
| Pyenv 2.5   | 不支持 LSP |

> 操作系统版本：Ubuntu 22.04.4 LTS

### 预装系统依赖

- build-essential # 编译工具链（如 GCC、make）
- cmake # 构建工具（如项目用到 CMake）
- curl # 命令行下载工具
- git # 版本控制系统
- imagemagick # 图像处理工具（如项目涉及图片）
- mongodb-mongosh # MongoDB 客户端（如项目用到 MongoDB）
- mysql-client # MySQL 客户端（如项目用到 MySQL）
- openssh-server # SSH 服务端（远程访问用）
- pkg-config # 编译依赖管理工具
- postgresql-client # PostgreSQL 客户端（如项目用到 PostgreSQL）
- redis-tools # Redis 客户端（如项目用到 Redis）
- ripgrep # 快速文本搜索工具（可选）
- sqlite3 # SQLite 数据库工具（如项目用到 SQLite）
- vim # 文本编辑器
- wget # 命令行下载工具

## Ruby 环境

| 环境版本名  | 说明       |
| ----------- | ---------- |
| Ruby 2.7.7  | 支持 LSP   |
| Ruby 3.0.1  | 支持 LSP   |
| Ruby 3.0.5  | 支持 LSP   |
| Ruby 3.1.2  | 支持 LSP   |
| Ruby 3.2.6  | 支持 LSP   |
| Ruby 3.3.5  | 支持 LSP   |
| Rbenv 1.3.0 | 不支持 LSP |

> 操作系统版本：Ubuntu 22.04.4 LTS

### 预装系统依赖

- build-essential # 编译工具链（如 GCC、make）
- cmake # 构建工具（如项目用到 CMake）
- curl # 命令行下载工具
- git # 版本控制系统
- imagemagick # 图像处理工具（如项目涉及图片）
- mongodb-mongosh # MongoDB 客户端（如项目用到 MongoDB）
- mysql-client # MySQL 客户端（如项目用到 MySQL）
- openssh-server # SSH 服务端（远程访问用）
- pkg-config # 编译依赖管理工具
- postgresql-client # PostgreSQL 客户端（如项目用到 PostgreSQL）
- redis-tools # Redis 客户端（如项目用到 Redis）
- ripgrep # 快速文本搜索工具（可选）
- sqlite3 # SQLite 数据库工具（如项目用到 SQLite）
- vim # 文本编辑器
- wget # 命令行下载工具

## Java 环境

| 环境版本名   | 说明       |
| ------------ | ---------- |
| Java 8.0.442 | 支持 LSP   |
| Java 11.0.26 | 支持 LSP   |
| Java 17.0.14 | 支持 LSP   |
| Java 21.0.6  | 支持 LSP   |
| SDK 5.19.0   | 不支持 LSP |

> 操作系统版本：Ubuntu 22.04.4 LTS

### 预装系统依赖

- build-essential # 编译工具链（如 GCC、make）
- cmake # 构建工具（如项目用到 CMake）
- curl # 命令行下载工具
- git # 版本控制系统
- imagemagick # 图像处理工具（如项目涉及图片）
- mongodb-mongosh # MongoDB 客户端（如项目用到 MongoDB）
- mysql-client # MySQL 客户端（如项目用到 MySQL）
- openssh-server # SSH 服务端（远程访问用）
- pkg-config # 编译依赖管理工具
- postgresql-client # PostgreSQL 客户端（如项目用到 PostgreSQL）
- redis-tools # Redis 客户端（如项目用到 Redis）
- ripgrep # 快速文本搜索工具（可选）
- sqlite3 # SQLite 数据库工具（如项目用到 SQLite）
- vim # 文本编辑器
- wget # 命令行下载工具

最后更新于 2025 年 4 月 15 日

[线程](https://docs.clacky.ai/clacky-workspace/dev-thread "Thread") [1024 配置](https://docs.clacky.ai/clacky-workspace/configure "1024 Config")
