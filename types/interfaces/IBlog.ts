export interface IBlog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  images: string[];
  tags: string[];
  published_at: string;
  read_time: number;
}
