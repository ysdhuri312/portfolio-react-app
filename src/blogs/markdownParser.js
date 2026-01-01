/** @format */

import matter from 'gray-matter';

export function markdownParser(raw) {
  const { content, data } = matter(raw);
  return { meta: data, content };
}
