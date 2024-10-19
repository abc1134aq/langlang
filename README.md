# 江西软件职业技术大学新闻系统

这是一个为江西软件职业技术大学设计的新闻发布系统。该系统提供了新闻文章的浏览、搜索、分类和管理功能。

## 技术栈

- 前端框架：React 18
- 路由：React Router 6
- 样式：Tailwind CSS
- 图标：Lucide React
- 构建工具：Vite
- 语言：TypeScript

## 功能特性

- 新闻文章的浏览和阅读
- 文章分类和搜索
- 管理界面（添加、编辑、删除文章）
- 响应式设计，适配移动端和桌面端

## 项目结构

```
src/
├── components/     # 可复用的组件
├── pages/          # 页面组件
├── types/          # TypeScript 类型定义
├── App.tsx         # 主应用组件
└── main.tsx        # 应用入口点
```

## 安装和运行

1. 克隆仓库：

```bash
git clone [仓库URL]
cd jiangxi-software-institute-news-system
```

2. 安装依赖：

```bash
npm install
```

3. 运行开发服务器：

```bash
npm run dev
```

4. 在浏览器中打开 `http://localhost:5173` 查看应用。

## 构建和部署

1. 构建生产版本：

```bash
npm run build
```

2. 预览生产构建：

```bash
npm run preview
```

## 部署依赖

- Node.js (推荐 v14 或更高版本)
- npm (通常随 Node.js 一起安装)

## 贡献

欢迎提交 Pull Requests 来改进这个项目。对于重大更改，请先开一个 issue 讨论您想要改变的内容。

## 许可证

[MIT](https://choosealicense.com/licenses/mit/)