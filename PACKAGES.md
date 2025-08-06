# 包管理说明

本项目包含以下类型的包：

## 公共包（Public Packages）

位于 `packages/` 目录下的包是可以发布到 npm 的公共包：

- `@bzehua/utils`: 通用工具函数库
  - 版本: 1.0.0
  - 状态: 可发布
  - 描述: 共享的 TypeScript 工具函数集合

## 私有包（Private Packages）

位于 `apps/` 目录下的包是私有应用，不会发布到 npm：

- `@bzehua/app`: Node.js 应用
  - 版本: 1.0.0
  - 状态: 私有
  - 描述: Node.js 应用示例

- `@bzehua/vueapp`: Vue 3 应用
  - 版本: 1.0.0
  - 状态: 私有
  - 描述: Vue 3 应用示例

## 发布规则

### 公共包

- 包名使用 `@bzehua` scope
- 必须设置 `"private": false`
- 必须包含完整的包信息（description, keywords, author, license 等）
- 必须设置 `"publishConfig": { "access": "public" }`
- 需要维护 CHANGELOG.md
- 遵循 [语义化版本](https://semver.org/lang/zh-CN/)

### 私有包

- 包名使用 `@bzehua` scope
- 必须设置 `"private": true`
- 版本号仅用于内部追踪
