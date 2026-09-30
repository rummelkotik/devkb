export interface SnippetItem {
  id: string;
  code: string;
  desc: string;
  subCategory: string;
  categoryTitle?: string;
}

export interface Category {
  id: string;
  title: string;
  desc: string;
  icon: string;
  items: SnippetItem[];
}