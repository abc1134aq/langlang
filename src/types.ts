export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
}

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'editor' | 'reader';
}