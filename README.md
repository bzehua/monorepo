# Monorepo Demo

这是一个使用 pnpm workspace 的 monorepo 项目模板。

## 项目结构

```
.
├── packages/          # 可复用的包
│   └── utils/        # 工具包示例
└── apps/             # 应用
    └── app/          # 示例应用
```

## 开始使用

1. 安装依赖

```bash
pnpm install
```

2. 构建所有包

```bash
pnpm build
```

3. 开发模式

```bash
pnpm dev
```

## 命令说明

- `pnpm build`: 构建所有项目
- `pnpm dev`: 以开发模式运行所有项目
- `pnpm lint`: 运行所有项目的代码检查
- `pnpm test`: 运行所有项目的测试

## Workspace 命令示例

- 在特定项目中添加依赖：

  ```bash
  pnpm --filter @monorepo/app add lodash
  ```

- 运行特定项目的命令：
  ```bash
  pnpm --filter @monorepo/app dev
  ```
