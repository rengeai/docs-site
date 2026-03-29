/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    "intro",
    {
      type: "category",
      label: "核心概念",
      items: [
        "项目愿景与理念",
        "组织与权限模型",
        "研发协作体系",
        "OKR-管理机制",
        "代理运行与治理机制",
        "角色职责权限与沟通框架",
        "术语表"
      ]
    },
    {
      type: "category",
      label: "产品指南",
      items: [
        "产品指南-总览",
        "MVP-范围与模块",
        "第一版本-落地顺序",
        {
          type: "category",
          label: "需求计划",
          items: [
            "需求计划-总览",
            "需求-公司级更新播报者",
            "需求-代码审查代理",
            "需求-TypeScript-研发者"
          ]
        },
        {
          type: "category",
          label: "产品案例",
          items: [
            "运行示例-研发需求交付",
            "运行示例-产品方案设计",
            "运行示例-线上故障事件响应"
          ]
        }
      ]
    }
  ]
};

module.exports = sidebars;
