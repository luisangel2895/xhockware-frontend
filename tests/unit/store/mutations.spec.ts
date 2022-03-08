import store from "@/store";
// Mocks
import {
  newsSearchedElMock,
  newsDetailMock,
  allNewsMock,
  socialNewsMock,
} from "../mocks/news.mocks";
// Types
import { News } from "@/types/news-response";

describe("Testing mutations in the store (VUEX)", (): void => {
  it("Funcionality of mutation (UPDATE_STATUS_FRAGMENT_LANGUAGE)", (): void => {
    store.commit("UPDATE_STATUS_FRAGMENT_LANGUAGE", true);
    expect(store.state.showFragmentLanguage).toBe(true);
  });
  it("Funcionality of mutation (UPDATE_STATUS_FRAGMENT_TERMS)", (): void => {
    store.commit("UPDATE_STATUS_FRAGMENT_TERMS", true);
    expect(store.state.showFragmentTerms).toBe(true);
  });
  it("Funcionality of mutation (UPDATE_STATUS_FRAGMENT_NEWS)", (): void => {
    store.commit("UPDATE_STATUS_FRAGMENT_NEWS", true);
    expect(store.state.showFragmentNews).toBe(true);
  });
  it("Funcionality of mutation (UPDATE_STATUS_LANGUAGES)", (): void => {
    // Language english selected
    store.commit("UPDATE_STATUS_LANGUAGES", [true, false, false]);
    expect(store.state.englishSelected).toBe(true);
    store.commit("UPDATE_STATUS_LANGUAGES", [false, true, false]);
    expect(store.state.spanishSelected).toBe(true);
    store.commit("UPDATE_STATUS_LANGUAGES", [false, false, true]);
    expect(store.state.portugueseSelected).toBe(true);
  });
  it("Funcionality of mutation (UPDATE_STATUS_NOTIFICATIONS)", (): void => {
    store.commit("UPDATE_STATUS_NOTIFICATIONS", true);
    expect(store.state.notificationsActivated).toBe(true);
  });
  it("Funcionality of mutation (UPDATE_SEARCH_NEWS)", (): void => {
    store.commit("UPDATE_SEARCH_NEWS", newsSearchedElMock);
    expect(store.state.news).toEqual(newsSearchedElMock);
  });
  it("Funcionality of mutation (UPDATE_NEWS_DETAIL)", (): void => {
    store.commit("UPDATE_NEWS_DETAIL", newsDetailMock);
    expect(store.state.newsDetail).toEqual(newsDetailMock);
  });
  it("Funcionality of mutation (SET_TOTAL_NEWS)", (): void => {
    store.commit("SET_TOTAL_NEWS", allNewsMock);
    expect(store.state.totalNews).toEqual(allNewsMock);
  });
  it("Funcionality of mutation (ADD_FAVORITE)", (): void => {
    const favorites: News[] = [];
    favorites.push(newsDetailMock);
    store.commit("ADD_FAVORITE", newsDetailMock);
    expect(store.state.favoriteNews).toEqual(favorites);
  });
  it("Funcionality of mutation (DELETE_FAVORITE)", (): void => {
    const favorites: News[] = [];
    favorites.push(newsDetailMock);
    store.commit("DELETE_FAVORITE", newsDetailMock);
    expect(store.state.favoriteNews).toEqual([]);
  });
  it("Funcionality of mutation (UPDATE_NEWS_CATEGORY) by default", (): void => {
    // Category All by default
    store.commit("UPDATE_NEWS_CATEGORY");
    expect(store.state.news).toEqual(allNewsMock);
  });
  it("Funcionality of mutation (UPDATE_NEWS_CATEGORY) one category", (): void => {
    // Category Social
    store.state.categories.all.status = false;
    store.state.categories.social.status = true;
    store.commit("UPDATE_NEWS_CATEGORY");
    expect(store.state.news).toEqual(socialNewsMock);
  });
});
