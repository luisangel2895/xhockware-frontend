import { defaultWord, urlBaseNews } from "@/services/news-service";
import { getNewsService } from "@/services/news-service";
// Types
import { News } from "@/types/news-response";

describe("News service", (): void => {
  //   Global variables for news service
  it("Testing general variables to connect to News Service", () => {
    expect(urlBaseNews as string).toBe("http://angelorellana.com:8000/v1/news");
    expect(defaultWord as string).toBe("");
  });
  //   Testing get all news
  it("Testing News Service => GET/All News", async () => {
    const news: News[] = await getNewsService();
    expect(news).toEqual(expect.any(Array));
    const randomNews: number = Math.floor(Math.random() * news.length);
    expect(news[randomNews]).toEqual({
      source: expect.any(Object),
      author: expect.any(String),
      category: expect.any(String),
      title: expect.any(String),
      description: expect.any(String),
      url: expect.any(String),
      urlToImage: expect.any(String),
      publishedAt: expect.any(String),
      content: expect.any(String),
    });
  });
  //   Testing a word searched
  it("Testing News Service => GET/Searched News", async () => {
    const wordSearched = "elon";
    const serchedNews: News[] = await getNewsService(wordSearched);
    expect(serchedNews).toEqual(expect.any(Array));
    const randomNews: number = Math.floor(Math.random() * serchedNews.length);
    expect(serchedNews[randomNews]).toEqual({
      source: expect.any(Object),
      author: expect.any(String),
      category: expect.any(String),
      title: expect.any(String),
      description: expect.any(String),
      url: expect.any(String),
      urlToImage: expect.any(String),
      publishedAt: expect.any(String),
      content: expect.any(String),
    });
  });
});
