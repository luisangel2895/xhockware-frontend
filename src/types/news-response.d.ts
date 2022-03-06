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
  publishedAt: Date;
  content: string;
}

export interface Source {
  id: ID;
  name: Name;
}

export enum ID {
  TheWallStreetJournal = "the-wall-street-journal",
}

export enum Name {
  TheWallStreetJournal = "The Wall Street Journal",
}
