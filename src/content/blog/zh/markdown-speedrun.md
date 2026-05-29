---
title: Markdown 速查 + 怎么在文章里放图
description: 一篇完整示例文章，演示 frontmatter 所有字段、全部 markdown 语法、代码高亮、表格、任务列表、emoji 等。当模板复制即可。
pubDate: 2026-05-28
tags: [指南, 博客, 教程]
cover: /images/avatar3.png
draft: false
---

这是博客的**示例文章**，目的是 demo 全部支持的功能。下次写新文章时复制这个文件，改文件名、改 frontmatter、删掉这段说明，就能上手。

> 💡 本文 `draft: false` 所以线上可见。把它改成 `true` 即可隐藏（dev 仍能预览）。

---

## 1. Frontmatter（顶部那段 `---` 包起来的）

固定 6 个字段：

| 字段 | 必填 | 说明 |
|---|---|---|
| `title` | ✅ | 文章标题 |
| `description` | ✅ | 一句话描述，列表卡 + OG 分享卡用到 |
| `pubDate` | ✅ | `YYYY-MM-DD` 格式，决定列表排序 |
| `tags` | 推荐 | 数组，可中可英，驱动 `/blog/tag/[name]` 聚合页 |
| `cover` | 可选 | 路径，建议 1200×630（16:9）。不填则列表卡用纯色块占位 |
| `draft` | 必填 | `true` 隐藏 / `false` 发布 |

## 2. 文字样式

行内常用：**加粗** ｜ *斜体* ｜ ~~删除线~~ ｜ `行内代码` ｜ [链接](https://anthropic.com)

组合：***又粗又斜的强调***，**`粗的代码`** 也行。

## 3. 标题层级

`#` 留给文章主标题（自动从 frontmatter `title` 生成），**正文从 H2 开始**。

```markdown
## 这是 H2（章节标题）
### 这是 H3（小节标题）
```

### H3 示例

这是 H3 下的段落，比 H2 节小一档，间距也更紧凑。

## 4. 列表

**无序列表**（`-` 开头）：

- 一级项目
- 嵌套（缩进 2 空格）
  - 二级
  - 二级
    - 三级
- 回到一级

**有序列表**（`1.` 开头，数字不需要递增，markdown 会自动改）：

1. 第一步
2. 第二步
3. 第三步

**任务列表**（GFM 扩展，适合 TODO / 进度）：

- [x] 已完成的事
- [x] 也完成了
- [ ] 还没做
- [ ] 待办

## 5. 链接 + 图片

**外部链接**：[Anthropic 官网](https://www.anthropic.com)

**站内链接**：[回到博客列表](/blog) ｜ [我的主页](/)

**图片**：把图片放进项目的 `public/images/`，markdown 里用 `/images/文件名`（斜杠开头）。

![Henry 的头像](/images/avatar3.png)

也可以引用任何已有图片：

![视频缩略图示例](/images/1.jpg)

> 📐 封面图建议 1200×630（16:9），JPG/PNG/WebP，小于 300KB。文章内嵌图无尺寸限制，但加载快一点对读者好。

## 6. 引用块

> 引用块用 `>` 开头，适合放金句、引用别人的话、给段落加强调。

> 多行引用也可以。
>
> 中间留一行 `>` 当段落分隔。

## 7. 代码

**行内代码** 用反引号包住单词：调用 `useState()` 时要注意闭包陷阱。

**代码块** —— 三个反引号 + 语言名。线上自动语法高亮 + 复制按钮 + 语言徽章。

JavaScript：

```js
const greet = (name) => `你好，${name}！`;
console.log(greet('世界'));

// 异步示例
async function fetchUser(id) {
  const res = await fetch(`/api/users/${id}`);
  return res.json();
}
```

Python：

```python
def fibonacci(n):
    """生成前 n 个斐波那契数"""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# 用法
for num in fibonacci(10):
    print(num)
```

Bash / Shell：

```bash
# 初始化项目
npm install
npm run dev

# Git 工作流
git add .
git commit -m "新文章"
git push
```

JSON：

```json
{
  "name": "henry-website",
  "type": "module",
  "dependencies": {
    "astro": "^5.0.0"
  }
}
```

CSS：

```css
.btn-dark {
  background: var(--text);
  color: white;
  border: 2px solid #0A0A0A;
  box-shadow: 4px 4px 0 #0A0A0A;
  transition: transform .15s, box-shadow .15s;
}
.btn-dark:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 #0A0A0A;
}
```

支持的语言：`js` `ts` `python` `bash` `shell` `html` `css` `json` `jsx` `tsx` `markdown` `yaml` `sql` `go` `rust` `astro` `vue` `svelte` 等。

## 8. 表格

```markdown
| 列 1 | 列 2 | 列 3 |
|------|------|------|
| 内容 | 内容 | 内容 |
```

实际效果：

| 工具 | 用途 | 我的评分 |
|---|---|---|
| Claude Code | AI 编程 | ⭐⭐⭐⭐⭐ |
| Vite | 前端构建 | ⭐⭐⭐⭐ |
| Astro | 静态站点 | ⭐⭐⭐⭐⭐ |
| Capcut | 视频剪辑 | ⭐⭐⭐⭐ |

对齐控制：

| 左对齐 | 居中 | 右对齐 |
|:---|:---:|---:|
| 左 | 中 | 右 |
| 文本 | 文本 | 数字 |

## 9. 分隔线

三个减号一行单独写：

---

上下两段之间的视觉切断，适合换话题时用。

## 10. Emoji

直接复制粘贴 emoji，或用编辑器工具栏的 😊 按钮：

🚀 ⚡ 🔥 ✨ 💡 🎯 🛠️ 📝 📦 ✅ ❌ ⚠️ 💯 🎉 ❤️

适度使用增加亲和力，**别滥用**，每段最多 1-2 个。

## 11. 行内 HTML（高级，不常用）

需要 markdown 不支持的样式时可以直接写 HTML：

### 可折叠区块 `<details>`

<details>
<summary>点击展开（可折叠区块）</summary>

折叠的内容写在这里。适合放长 FAQ、补充说明、或者你不想默认就展开的细节。

也可以在里面放 **markdown**、代码块、列表，都支持。

</details>

### 键盘按键 `<kbd>`

按 <kbd>Ctrl</kbd> + <kbd>C</kbd> 复制，<kbd>Ctrl</kbd> + <kbd>V</kbd> 粘贴。

Mac 用户：<kbd>⌘</kbd> + <kbd>C</kbd> / <kbd>⌘</kbd> + <kbd>V</kbd>

### 高亮文字 `<mark>`

普通文字，<mark>这段被高亮了</mark>，然后继续普通文字。适合标出关键词。

### 上下标 `<sup>` / `<sub>`

数学：E = mc<sup>2</sup>，化学式：H<sub>2</sub>O，注释引用<sup>[1]</sup>。

### 自定义提示框

用 `<div>` 配合行内 style 可以做简单的 callout（但尽量少用，维护麻烦）：

<div class="callout callout-info">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
  <span><strong>提示：</strong>这是一个信息提示框。用纯 HTML 实现，markdown 里直接写就行。</span>
</div>

<div class="callout callout-warning">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
  <span><strong>注意：</strong>这是警告提示框。还有绿色（success）和粉色（danger）两种。</span>
</div>

### 缩写 `<abbr>`

<abbr title="GitHub Flavored Markdown">GFM</abbr> 是 GitHub 扩展的 Markdown 规范，支持任务列表、表格等功能。

鼠标悬停在 <abbr title="Artificial Intelligence">AI</abbr> 上会看到全称提示。

## 写作工作流

完整流程：

1. **本地编辑器**：`npm run dev` → http://localhost:4321/editor/dev
2. **写完点"复制完整 .md"** —— 全文（含 frontmatter）进剪贴板
3. **去 GitHub** → `src/content/blog/zh/` → `Add file → Create new file`
4. **文件名**用编辑器里的 slug + `.md`，比如 `my-claude-tips.md`
5. **粘贴**正文 → 拉到底 **Commit**
6. **Vercel 自动 build**（2-3 分钟）→ `/blog/my-claude-tips` 上线

## 隐藏 / 临时下架

frontmatter 改 `draft: true` 即可。文章会从所有列表消失，URL 直接 404（dev 仍可见用于预览）。想发回去把 `draft` 改成 `false` 再 push。

## 写作小贴士

1. **标题简短** —— 列表卡只显示 2 行，长了会被截
2. **description 别超过 80 字** —— 短摘要更有点击欲
3. **首段 2-3 句话点题** —— 让读者快速判断要不要继续看
4. **代码块带语言标签** —— 没有语言名就没有语法高亮
5. **图片配 alt 文字** —— 既是无障碍也是 SEO

---

写完了。把这个文件复制一份，改名 `your-slug.md`，从 `## 1. Frontmatter` 开始全删，就是空白模板。开始写你自己的内容吧。
