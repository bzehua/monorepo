# IDE 配置指南

本项目已预配置了主流IDE的自动格式化和代码质量检查功能。

## VS Code 配置

### 自动配置

项目已包含完整的VS Code配置，打开项目后会自动应用：

- ✅ 保存时自动格式化 (Prettier)
- ✅ 保存时自动修复ESLint错误
- ✅ 自动导入整理
- ✅ TypeScript和Vue支持

### 推荐扩展

项目会自动提示安装推荐扩展：

**必需扩展：**

- `esbenp.prettier-vscode` - Prettier格式化
- `dbaeumer.vscode-eslint` - ESLint代码检查
- `Vue.volar` - Vue 3支持
- `ms-vscode.vscode-typescript-next` - TypeScript支持

**可选扩展：**

- `eamodio.gitlens` - Git增强
- `PKief.material-icon-theme` - 文件图标主题
- `christian-kohler.path-intellisense` - 路径智能提示

### 快捷键

- `Ctrl+Shift+P` → "Format Document" - 手动格式化
- `Ctrl+Shift+P` → "ESLint: Fix all auto-fixable Problems" - 修复ESLint错误
- `F1` → "Tasks: Run Task" → "Lint & Format" - 运行代码修复任务

## WebStorm/IntelliJ IDEA 配置

### 自动配置

项目已包含WebStorm配置文件：

- ✅ Prettier自动格式化
- ✅ ESLint代码检查
- ✅ 保存时自动格式化

### 手动启用步骤

1. **启用Prettier：**
   - Settings → Languages & Frameworks → JavaScript → Prettier
   - ✅ On 'Reformat Code' action
   - ✅ On save
   - Configuration: Automatic

2. **启用ESLint：**
   - Settings → Languages & Frameworks → JavaScript → Code Quality Tools →
     ESLint
   - ✅ Automatic ESLint configuration
   - ✅ Run eslint --fix on save

3. **配置Vue支持：**
   - 确保Vue.js插件已启用
   - Settings → Languages & Frameworks → JavaScript → Vue.js

## 其他IDE

### Vim/Neovim

推荐插件：

```lua
-- 使用vim-plug或packer.nvim
'prettier/vim-prettier'
'dense-analysis/ale'  -- 或 'neoclide/coc.nvim'
```

### Sublime Text

推荐包：

- JsPrettier
- SublimeLinter-eslint
- Vue Syntax Highlight

### Atom

推荐包：

- prettier-atom
- linter-eslint
- language-vue

## EditorConfig 支持

项目包含 `.editorconfig` 文件，支持的IDE会自动应用：

- 字符编码：UTF-8
- 行结束符：LF
- 缩进：2空格
- 行宽：100字符
- 自动去除行尾空格

## 验证配置

### 测试自动格式化

1. 创建测试文件：

```typescript
// test.ts
const obj = { name: 'test', age: 25 };
function test(a: number) {
  return a * 2;
}
```

2. 保存文件，应该自动格式化为：

```typescript
// test.ts
const obj = { name: 'test', age: 25 };
function test(a: number) {
  return a * 2;
}
```

### 测试ESLint修复

1. 创建包含错误的文件：

```typescript
// 未使用的变量
const unusedVar = 'test';
// 使用 == 而不是 ===
if (1 == 1) console.log('test');
```

2. 保存时应该：
   - 显示ESLint错误提示
   - 自动修复可修复的问题（如 `==` → `===`）
   - 标记不可自动修复的问题（如未使用变量）

## 故障排除

### VS Code

- 确保已安装推荐扩展
- 重新加载窗口：`Ctrl+Shift+P` → "Developer: Reload Window"
- 检查输出面板的ESLint和Prettier日志

### WebStorm

- File → Invalidate Caches and Restart
- 检查Settings中的Prettier和ESLint配置
- 确保项目使用正确的Node.js版本

### 通用问题

- 确保项目依赖已安装：`pnpm install`
- 检查配置文件语法是否正确
- 验证文件路径和glob模式是否匹配

## 命令行备用方案

如果IDE配置有问题，可以使用命令行：

```bash
# 格式化所有文件
pnpm format

# 检查并修复代码质量问题
pnpm code-fix

# 仅检查不修复
pnpm code-quality
```
