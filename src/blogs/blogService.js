/** @format */

const modules = import.meta.glob('/src/blogs/**/index.mdx', {
  query: '?raw',
  import: 'default',
  eager: true,
});

import { markdownParser } from './markdownParser.js';

export function getAllBlogs() {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { meta } = markdownParser(raw);

      const slug = path.split('/').slice(-2, -1)[0];

      return {
        title: meta.title,
        slug,
        description: meta.description,
        date: meta.date,
        readingTime: meta.readingTime,
        image: meta.image,
        tags: meta.tags,
        content: meta.content,
        path,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
