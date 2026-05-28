# 抛弃 JS i18n toggle，整站改 URL 路由双语

原 [index.html](../../index.html) / [index1.html](../../index1.html) 用 JS i18n（`data-i18n` 属性 + `applyLang()` + localStorage）实现单页双语，导航栏上一个 EN/中按钮点击切换。迁到 Astro 时改成 URL 路由：`/` = 中文，`/en/` = 英文，导航栏的"EN"是真链接跳 `/en/`，不再用 JS toggle。原因：博客每篇文章是一个 `.md` 文件，markdown 文件本身就承载一种语言 —— 让首页和博客用统一的"路径决定语言"模型，比让首页继续 JS toggle、博客用文件夹分语言要一致。

代价：失去"切换语言不刷新"的体验、localStorage 记住偏好的能力（首次访问 `/` 总是中文，不会自动跳 `/en/`）。换来 SEO 提升（Google 看到两个独立 URL）、写作模型统一（首页 i18n 字典从 component 取，文章直接是 `.md`）。

## Considered Options

- **保留 JS toggle，博客也用 JS toggle**：每篇博客 frontmatter 要同时存 titleZh / titleEn / contentZh / contentEn —— markdown 写作严重变形。
- **JS toggle 给首页 + URL 路由给博客（混合）**：两套机制并存，导航上"EN"按钮的语义在不同页面行为不同（首页是切换、博客是跳转），用户困惑。
- **整站 URL 路由（采用）**：一致性最高。
