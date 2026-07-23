import fs from 'node:fs';
import path from 'node:path';
import { BlogPost } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'blog');

function toExcerpt(content: string): string {
  const plain = content
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^#+\s*/gm, '')
    .replace(/^>\s*/gm, '')
    .replace(/^[-*]\s*/gm, '')
    .replace(/^\d+\.\s*/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  return plain.length > 110 ? `${plain.slice(0, 110).trimEnd()}...` : plain;
}

function parseFrontmatter(raw: string): { title: string; date: string; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { title: 'Untitled', date: '', content: raw.trim() };
  }

  const [, frontmatter, content] = match;
  const fields: Record<string, string> = {};

  for (const line of frontmatter.split('\n')) {
    const separatorIndex = line.indexOf(':');
    if (separatorIndex === -1) continue;
    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim();
    fields[key] = value;
  }

  return {
    title: fields.title ?? 'Untitled',
    date: fields.date ?? '',
    content: content.trim(),
  };
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith('.md'));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, '');
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), 'utf-8');
    const { title, date, content } = parseFrontmatter(raw);
    return { slug, title, date, content, excerpt: toExcerpt(content) };
  });

  return posts.sort((a, b) => b.date.localeCompare(a.date));
}
