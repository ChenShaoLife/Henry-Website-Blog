export type Lang = 'zh' | 'en';

export const strings = {
  zh: {
    nav: { home: '首页', videos: '视频', products: '作品', blog: '博客', emailAria: '联系我', toLang: 'EN', toLangAria: 'Switch to English' },
    blog: { listTitle: '博客', listEyebrow: '近期文章', empty: '还没有文章。回头再来看看。', readMore: '阅读 →', latestTitle: 'Blog', latestEyebrow: 'Latest', seeAll: '看全部 →', prev: '上一篇', next: '下一篇', tagPagePrefix: '标签', backToBlog: '← 回到博客', comments: '评论', related: '相关文章', more: '更多文章', readingMin: '分钟阅读', codeCopy: '复制', codeCopied: '已复制', lbClose: '关闭', lbPrev: '上一张', lbNext: '下一张', shareLabel: '分享', shareCopy: '复制链接', shareCopied: '链接已复制 ✓', shareCard: '分享图', shareCardDl: '下载图片', shareCardClose: '关闭', shareCardScan: '扫码阅读' },
    hero: {
      tagEditor: '视频剪辑师',
      tagCoder: 'Vibe Coder',
      greeting: '我是',
      btnWorks: '查看作品 →',
      btnContact: '合作咨询',
      badges: ['视频剪辑', '视频拍摄', '创意内容', 'Capcut', 'Vibe Coding'],
      avatarAlt: 'Henry',
      avatarFallback: '放你的头像',
    },
    sections: {
      videosHtml: 'Video <span class="hl hl-p">Works</span>',
      projectsHtml: 'Vibe <span class="hl hl-g">Workspace</span>',
      videoWatch: '观看 →',
      videoAlt: '视频',
      prevAria: '上一个',
      nextAria: '下一个',
      navAria: '主导航',
    },
    contact: {
      eyebrow: '期待合作',
      headingHtml: '有项目想聊？<br>随时<span class="hl hl-b">联系我</span>',
      socialsAria: '社交媒体',
    },
    footer: {
      copy: '© 2026 Henry. All rights reserved.',
      backToTop: '回到顶部 ↑',
    },
    meta: {
      title: 'Henry — 视频剪辑师 & Vibe Coder',
      description: 'Henry 的个人主页。视频剪辑师 + Vibe Coder，专注短视频创作与 AI 工具开发，活跃于 Instagram、TikTok、RedNote。',
      ogTitle: 'Henry — 视频剪辑师 & Vibe Coder',
      ogDescription: '短视频创作 + Vibe Coding 项目展示，欢迎合作咨询。',
      ogImage: '/images/avatar3.png',
    },
  },
  en: {
    nav: { home: 'Home', videos: 'Videos', products: 'Projects', blog: 'Blog', emailAria: 'Contact', toLang: '中', toLangAria: '切换到中文' },
    blog: { listTitle: 'Blog', listEyebrow: 'Recent Posts', empty: "No posts yet. Articles in Chinese are being translated — check back soon.", readMore: 'Read →', latestTitle: 'Latest Posts', latestEyebrow: 'Recent Updates', seeAll: 'See all →', prev: 'Previous', next: 'Next', tagPagePrefix: 'Tag', backToBlog: '← Back to Blog', comments: 'Comments', related: 'Related Posts', more: 'More Posts', readingMin: 'min read', codeCopy: 'Copy', codeCopied: 'Copied', lbClose: 'Close', lbPrev: 'Previous', lbNext: 'Next', shareLabel: 'Share', shareCopy: 'Copy link', shareCopied: 'Link copied ✓', shareCard: 'Share card', shareCardDl: 'Download', shareCardClose: 'Close', shareCardScan: 'Scan to read' },
    hero: {
      tagEditor: 'Video Editor',
      tagCoder: 'Vibe Coder',
      greeting: "I'm",
      btnWorks: 'View Works →',
      btnContact: 'Collaborate',
      badges: ['Video Editing', 'Video Shooting', 'Creative Content', 'Capcut', 'Vibe Coding'],
      avatarAlt: 'Henry',
      avatarFallback: 'Your avatar',
    },
    sections: {
      videosHtml: 'Video <span class="hl hl-p">Works</span>',
      projectsHtml: 'Vibe <span class="hl hl-g">Workspace</span>',
      videoWatch: 'Watch →',
      videoAlt: 'Video',
      prevAria: 'Previous',
      nextAria: 'Next',
      navAria: 'Main navigation',
    },
    contact: {
      eyebrow: "Let's Work Together",
      headingHtml: 'Got a project?<br>Let\'s <span class="hl hl-b">Connect</span>',
      socialsAria: 'Social media',
    },
    footer: {
      copy: '© 2026 Henry. All rights reserved.',
      backToTop: 'Back to Top ↑',
    },
    meta: {
      title: 'Henry Tan — Video Editor & Content Creator',
      description: "Henry Tan's personal site. Video editor with experience in short-form filming and editing. Also builds small projects with AI tools. Based in Malaysia.",
      ogTitle: 'Henry Tan — Video Editor & Content Creator',
      ogDescription: 'Video editing · Lifestyle content · AI side projects. Open to collaborations.',
      ogImage: '/images/avatar3.png',
    },
  },
} as const;

export const videos = [
  { img: '/images/1.jpg',  url: 'https://www.instagram.com/reel/DTX6Efnk0Fk/' },
  { img: '/images/2.jpg',  url: 'https://www.instagram.com/reel/DVBN-rPk8qf' },
  { img: '/images/3.jpg',  url: 'https://www.instagram.com/reel/DV5aEwwE-0t' },
  { img: '/images/4.jpg',  url: 'https://www.instagram.com/reel/DWMHWjzk7fT' },
  { img: '/images/5.jpg',  url: 'https://www.instagram.com/reel/DWdO1Kqk6SG' },
  { img: '/images/6.jpg',  url: 'https://www.instagram.com/reel/DWvVy9wE6fe' },
  { img: '/images/7.jpg',  url: 'https://www.instagram.com/reel/DXBdRg-EwNI' },
  { img: '/images/8.jpg',  url: 'https://www.instagram.com/reel/DXQ2rVJE-uO' },
  { img: '/images/9.jpg',  url: 'https://www.instagram.com/reel/DXleyGnEw3W' },
  { img: '/images/10.jpg', url: 'https://www.instagram.com/reel/DX3f4NgzDkp' },
  { img: '/images/11.jpg', url: 'https://www.instagram.com/reel/DYJh1rMRceY' },
];

export const projects = {
  zh: [
    { num: '# 001', name: '素食餐厅地图', desc: '马来西亚素食餐厅地图。纯素到荤店有素五档分类、按州搜、顺手收藏，吃素的自己也能投稿推荐。', date: 'Released on 2026.05.23', url: 'https://vege-spot.vercel.app/' },
    { num: '# 002', name: '餐饮 SaaS 点餐系统', desc: '给餐厅用的点餐收银系统。点单、出票、厨房看板、会员积分、员工考勤都有，支持多商家独立管理。', date: 'Released on 2026.04.17', url: 'https://pos-system-teal-nine.vercel.app/' },
    { num: '# 003', name: '鸭友基地', desc: '鹅鸭杀华人玩家社区。聊攻略、发帖复盘、实时开黑，玩得够久还能攒徽章。', date: 'Released on 2026.04.10', url: 'https://ggd-7iy1.vercel.app/' },
    { num: '# 004', name: '经典卡带音乐播放器', desc: '复古随身听播放器。搜歌、建播放列表、换磁带外观和主题皮肤，BTS、黑粉、高达配色都有。', date: 'Released on 2025.12.03', url: 'https://cd-pink.vercel.app/' },
    { num: '# 005', name: '经典报纸生成器', desc: '上传图片、编辑文案、排好版直接打印，支持中英双语字体切换，无需安装。', date: 'Released on 2025.11.29', url: 'https://henrytool.pages.dev/newspaper' },
    { num: '# 006', name: '生日小票生成器', desc: '填商品、加折扣、选条形码，A4或小票格式都能打，送朋友当生日惊喜。', date: 'Released on 2025.11.22', url: 'https://henrytool.pages.dev/happybirthday' },
  ],
  en: [
    { num: '# 001', name: 'VegeSpot', desc: "A Malaysia vegan restaurant map. Filter by 5 diet types from pure vegan to veg-friendly, browse by state, save favourites, and submit spots the community hasn't found yet.", date: 'Released on 2026.05.23', url: 'https://vege-spot.vercel.app/' },
    { num: '# 002', name: 'Café POS System', desc: 'A POS system built for Malaysian F&B — supports SST tax, loyalty points, split billing and daily sales analytics.', date: 'Released on 2026.04.17', url: 'https://pos-system-teal-nine.vercel.app/' },
    { num: '# 003', name: 'Duck Community', desc: "A Goose Goose Duck community for Chinese players. Share strategies, post game recaps, and squad up in real time — play long enough and you'll earn badges too.", date: 'Released on 2026.04.10', url: 'https://ggd-7iy1.vercel.app/' },
    { num: '# 004', name: 'Cassette Player', desc: 'A retro Walkman-style music player. Search songs, build playlists, and swap cassette skins and themes — BTS, Blackpink, and Gundam color schemes included.', date: 'Released on 2025.12.03', url: 'https://cd-pink.vercel.app/' },
    { num: '# 005', name: 'Newspaper Generator', desc: 'Upload images, edit copy, arrange the layout and print directly. Supports bilingual Chinese/English font switching — no installation required.', date: 'Released on 2025.11.29', url: 'https://henrytool.pages.dev/newspaper' },
    { num: '# 006', name: 'Birthday Receipt', desc: 'Add items, apply discounts, and pick a barcode style — prints in A4 or receipt format. A fun birthday surprise for friends.', date: 'Released on 2025.11.22', url: 'https://henrytool.pages.dev/happybirthday' },
  ],
};

export const marqueeBrands = ['Capcut', 'Claude', 'Gemini', 'Chatgpt', 'Photoshop'];

export const socials = [
  { label: 'YouTube',   url: 'https://www.youtube.com/@%E9%99%B3%E5%B0%91-w7t' },
  { label: 'RedNote',   url: 'https://xhslink.com/m/ACIJwLrSxWT' },
  { label: 'TikTok',    url: 'https://www.tiktok.com/@henry.tan514' },
  { label: 'DouYin',    url: 'https://v.douyin.com/R2nnRLvUf4s/' },
  { label: 'Instagram', url: 'https://www.instagram.com/henrytan888' },
  { label: 'Facebook',  url: 'https://www.facebook.com/share/1KHeaTruBN/?mibextid=wwXIfr' },
];

export const email = 'henrytan9705@gmail.com';

export const otherLangPath = (lang: Lang, currentPath: string): string => {
  if (lang === 'en') {
    return currentPath === '/' ? '/zh/' : `/zh${currentPath}`;
  }
  return currentPath.replace(/^\/zh\/?/, '/') || '/';
};
