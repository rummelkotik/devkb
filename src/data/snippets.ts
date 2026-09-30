import { LINUX_SNIPPETS } from './linux';
import type { SnippetItem } from './linux';
import { DOCKER_SNIPPETS } from './docker';
import { GIT_SNIPPETS } from './git';
import { HTMLCSS_SNIPPETS } from './htmlcss';
import { JS_SNIPPETS } from './js';
import { TS_SNIPPETS } from './ts';
import { REACT_SNIPPETS } from './react';
import { BACKEND_SNIPPETS } from './backend';

export interface Category {
  id: string;
  title: string;
  desc: string;
  icon: string;
  items: SnippetItem[];
}

export const CATEGORIES: Category[] = [
  {
    id: 'linux',
    title: 'Linux & Terminal',
    desc: 'Навигация, права, демоны, диски, сеть, процессы и bash-трюки',
    icon: 'Terminal',
    items: LINUX_SNIPPETS
  },
  {
    id: 'docker',
    title: 'Docker & Compose',
    desc: 'Контейнеры, образы, тома, сети, compose и очистка',
    icon: 'Container',
    items: DOCKER_SNIPPETS
  },
  {
    id: 'git',
    title: 'Git & Workflow',
    desc: 'Ветвление, сброс, stash, rebase, cherry-pick и reflog',
    icon: 'GitBranch',
    items: GIT_SNIPPETS
  },
  {
    id: 'htmlcss',
    title: 'HTML5 & Modern CSS',
    desc: 'Flexbox, Grid, селекторы, эффекты, анимации и a11y',
    icon: 'Layout',
    items: HTMLCSS_SNIPPETS
  },
  {
    id: 'js',
    title: 'JavaScript (ES6+)',
    desc: 'Массивы, объекты, промисы, замыкания, DOM и Web API',
    icon: 'Code2',
    items: JS_SNIPPETS
  },
  {
    id: 'typescript',
    title: 'TypeScript',
    desc: 'Дженерики, Utility Types, гарды, Mapped Types и tsconfig',
    icon: 'FileCode',
    items: TS_SNIPPETS
  },
  {
    id: 'react',
    title: 'React',
    desc: 'Хуки, мемоизация, React 18/19, кастомные решения и паттерны',
    icon: 'Atom',
    items: REACT_SNIPPETS
  },
  {
    id: 'backend',
    title: 'Node.js & SQLite',
    desc: 'Express, REST API, better-sqlite3, SQL, JWT и безопасность',
    icon: 'Database',
    items: BACKEND_SNIPPETS
  }
];