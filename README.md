# RengeAI 文档站

这个仓库用于承载 RengeAI 的 Docusaurus 文档站点。

当前仓库职责是把站点壳、构建配置、GitHub Pages 部署流程与文档内容组织在一起，其中真正的文档内容放在 `docs` 子模块中统一维护。

## 仓库结构

- `docs/`：文档内容子模块，来源仓库为 `git@github.com:rengeai/docs.git`
- `docusaurus.config.js`：站点配置
- `src/`：站点样式与前端资源
- `static/`：静态资源
- `.github/workflows/deploy-pages.yml`：GitHub Pages 部署流程

## 站点地址

- GitHub Pages：`https://rengeai.github.io/docs-site/`

## 本地开发

首次拉取后请连同子模块一起初始化：

```bash
git submodule update --init --recursive
npm install
```

启动本地开发环境：

```bash
npm start
```

本地构建与预览：

```bash
npm run build
npm run serve
```

## 内容维护约定

- 文档正文优先改在 `docs` 子模块中
- 站点导航、主题、部署配置优先改在当前仓库中
- 如果变更同时涉及子模块与主仓库，需要分别提交，并先推送子模块，再推送主仓库

## 文档范围

RengeAI 当前文档主要覆盖以下主题：

- 项目愿景、组织与权限模型
- 研发协作体系、OKR、代理治理机制
- 产品指南、需求计划与运行示例

更具体的阅读入口请直接从站点首页进入。
