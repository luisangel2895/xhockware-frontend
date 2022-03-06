import { createStore } from "vuex";
import { getNewsService } from "@/services/news-service";
// Types
import { News } from "@/types/news-response";
import { CategoryType } from "@/types/category";

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
    categories: ["all"] as string[],
    showLoader: false,
    cleanCategories: 0,
    favoriteNews: [] as News[],
    allCategories: [
      {
        category: "all",
        active: true,
      },
      {
        category: "health",
        active: false,
      },
      {
        category: "economy",
        active: false,
      },
      {
        category: "tecnology",
        active: false,
      },
      {
        category: "politics",
        active: false,
      },
      {
        category: "ecology",
        active: false,
      },
      {
        category: "social",
        active: false,
      },
    ] as CategoryType[],
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
    getCleanCategory: (state) => state.cleanCategories,
    getFavoriteNews: (state) => state.favoriteNews,
    getCategories: (state) => state.categories,
    getAllCategories: (state) => state.allCategories,
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
      state.cleanCategories += 1;
      state.categories = [];
    },
    UPDATE_NEWS_DETAIL(state, payload) {
      state.newsDetail = payload;
    },
    SET_TOTAL_NEWS(state, payload) {
      state.totalNews = payload;
    },
    ADD_CATEGORY(state, payload) {
      const existCategory = state.categories.some((category: string) => {
        return category === payload;
      });
      if (!existCategory) {
        state.categories.push(payload);
        console.log(state.categories);
      }
    },
    DELETE_CATEGORY(state, payload) {
      state.categories = state.categories.filter((category: string) => {
        return category !== payload;
      });
      console.log(state.categories);
    },
    UPDATE_NEWS_CATEGORY(state) {
      const isAllSelected = state.categories.some(
        (category: string) => category === "all"
      );
      if (isAllSelected) {
        state.news = state.totalNews;
      } else {
        const newsFilter: News[] = [];
        state.totalNews.forEach((news: News) => {
          for (const category of state.categories) {
            if (news.category === category) {
              newsFilter.push(news);
            }
          }
        });
        state.news = newsFilter;
      }
    },
    ADD_FAVORITE(state, payload) {
      state.favoriteNews.push(payload);
      console.log(state.favoriteNews);
    },
    DELETE_FAVORITE(state, payload) {
      state.favoriteNews = state.favoriteNews.filter((news: News) => {
        return news.source.id !== payload.source.id;
      });
      console.log(state.favoriteNews);
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
    addCategory({ commit, state }, payload: string) {
      state.showLoader = true;
      commit("ADD_CATEGORY", payload);
      commit("UPDATE_NEWS_CATEGORY");
      state.showLoader = false;
    },
    deleteCategory({ commit, state }, payload: string) {
      state.showLoader = true;
      commit("DELETE_CATEGORY", payload);
      commit("UPDATE_NEWS_CATEGORY");
      state.showLoader = false;
    },
  },
  modules: {},
});
