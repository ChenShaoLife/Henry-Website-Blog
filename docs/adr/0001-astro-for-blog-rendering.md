# 用 Astro 接管全站，替代纯 Vite + 手写 HTML

原项目是 Vite + 两个手写 HTML 文件（中文 / 英文首页）。加博客后选了 Astro 接管全站，而不是继续 Vite + markdown 插件，因为博客需要 frontmatter 处理、标签聚合页、RSS、自动生成的文章列表，这些 Astro 的 content collections 原生支持，自己在 Vite 上拼会越来越乱。代价：要学一点 Astro 语法、build 流程换掉、原来两个 HTML 内容要搬进 `.astro` 文件（语法兼容，几乎是粘贴）。

## Considered Options

- **Vite + vite-plugin-md**：留在现有栈最小改动，但标签页 / RSS / 列表页都要手写。文章一多必痛苦。
- **GitHub Pages 原生 Jekyll**：零配置但跟现有自定义设计完全脱钩，等于另起一个站。
- **保持手写 HTML，不用 markdown**：跟用户"想用 markdown"的诉求直接矛盾。
