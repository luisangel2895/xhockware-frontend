export interface NewsResponse {
  status: string;
  totalResults: number;
  articles: News[];
}

export interface News {
  source: Source;
  author: string;
  category: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}
