import axios from "axios";

import { News } from "@/types/news-response";

export const urlBaseNews = "http://localhost:8000/v1/news";
export const defaultWord = "";

export const getNewsService = async (
  word: string = defaultWord
): Promise<News[] | never> => {
  try {
    const { data } = await axios.get(`${urlBaseNews}`, {
      params: {
        q: word,
      },
    });
    return data.articles;
  } catch (e) {
    throw new Error("sorry we couldn't bring the news");
  }
};
