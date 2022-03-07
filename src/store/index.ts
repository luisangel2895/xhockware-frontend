import { createStore } from "vuex";
import { getNewsService } from "@/services/news-service";

// Types
import { News } from "@/types/news-response";
import { AllCategories } from "@/types/category";

export default createStore({
  state: {
    showFragmentLanguage: false,
    showFragmentTerms: false,
    showFragmentNews: false,
    englishSelected: true,
    spanishSelected: false,
    portugueseSelected: false,
    notificationsActivated: false,
    news: [] as News[],
    totalNews: [] as News[],
    newsDetail: {} as News,
    showLoader: false,
    favoriteNews: [] as News[],
    categories: {
      all: {
        name: "all",
        status: true,
      },
      health: {
        name: "health",
        status: false,
      },
      economy: {
        name: "economy",
        status: false,
      },
      tecnology: {
        name: "tecnology",
        status: false,
      },
      politics: {
        name: "politics",
        status: false,
      },
      ecology: {
        name: "ecology",
        status: false,
      },
      social: {
        name: "social",
        status: false,
      },
    } as AllCategories,
    word: "",
  },
  getters: {
    getShowFragmentLanguage: (state) => state.showFragmentLanguage,
    getShowFragmentTerms: (state) => state.showFragmentTerms,
    getShowFragmentNews: (state) => state.showFragmentNews,
    getEnglishSelected: (state) => state.englishSelected,
    getEspanishSelected: (state) => state.spanishSelected,
    getPortugueseSelected: (state) => state.portugueseSelected,
    getNotificationsActivated: (state) => state.notificationsActivated,
    getAllNews: (state) => state.news,
    getNewsDetail: (state) => state.newsDetail,
    getShowLoader: (state) => state.showLoader,
    getFavoriteNews: (state) => state.favoriteNews,
    getCategories: (state) => state.categories,
  },
  mutations: {
    UPDATE_STATUS_FRAGMENT_LANGUAGE(state, payload) {
      state.showFragmentLanguage = payload;
    },
    UPDATE_STATUS_FRAGMENT_TERMS(state, payload) {
      state.showFragmentTerms = payload;
    },
    UPDATE_STATUS_FRAGMENT_NEWS(state, payload) {
      state.showFragmentNews = payload;
    },
    UPDATE_STATUS_LANGUAGES(state, payload) {
      state.englishSelected = payload[0];
      state.spanishSelected = payload[1];
      state.portugueseSelected = payload[2];
    },
    UPDATE_STATUS_NOTIFICATIONS(state, payload) {
      state.notificationsActivated = payload;
    },
    UPDATE_SEARCH_NEWS(state, payload) {
      state.news = payload;
    },
    UPDATE_NEWS_DETAIL(state, payload) {
      state.newsDetail = payload;
    },
    SET_TOTAL_NEWS(state, payload) {
      state.totalNews = payload;
    },
    ADD_FAVORITE(state, payload) {
      state.favoriteNews.push(payload);
    },
    DELETE_FAVORITE(state, payload) {
      state.favoriteNews = state.favoriteNews.filter((news: News) => {
        return news.source.id !== payload.source.id;
      });
    },
    UPDATE_NEWS_CATEGORY(state) {
      // eslint-disable-next-line
      const categories: any = state.categories;
      const newNews: News[] = [];
      //  Complexity Time 0(n)
      for (const categoryName in categories) {
        const category = categories[categoryName];
        if (category.status === true) {
          if (category.name === "all") {
            state.news = state.totalNews;
            return 0;
          } else {
            const arr = state.totalNews.filter((news: News) => {
              return news.category == category.name;
            });
            for (const news of arr) {
              newNews.push(news);
            }
          }
        }
      }
      state.news = newNews;
    },
  },
  actions: {
    async getNews({ commit, state }, payload: string) {
      state.showLoader = true;
      const news: News[] = await getNewsService(payload);
      if (!payload) {
        commit("SET_TOTAL_NEWS", news);
      }
      commit("UPDATE_SEARCH_NEWS", news);
      state.showLoader = false;
    },
  },
  modules: {},
});
