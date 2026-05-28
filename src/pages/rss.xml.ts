import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { strings } from '../i18n/strings';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blogZh', ({ data }) => !data.draft);
  posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  return rss({
    title: strings.zh.meta.title,
    description: strings.zh.meta.description,
    site: context.site ?? 'https://example.com',
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.pubDate,
      link: `/zh/blog/${p.id}/`,
      categories: p.data.tags,
    })),
    customData: '<language>zh-CN</language>',
  });
}
