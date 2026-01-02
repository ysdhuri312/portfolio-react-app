/** @format */

const modules = import.meta.glob('/src/blogs/**/index.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

import { markdownParser } from './markdownParser.js';

export function getAllBlogs() {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { meta } = markdownParser(raw);
      const { title, description, date, readingTime, image, tags } = meta.data;

      const slug = path.split('/').slice(-2, -1)[0];
      const imagePath = path.replace('/index.md', '/cover.png');

      return {
        title,
        slug,
        description,
        date,
        readingTime,
        image: imagePath,
        tags,
        content: meta.formatedContend,
        path,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
