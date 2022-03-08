import store from "@/store";
// Mocks
import { newsSearchedElMock, allNewsMock } from "../mocks/news.mocks";

describe("Testing actions in the store (VUEX)", () => {
  it("Funcionality of action (getNews) by default (word ='')", async (): Promise<void> => {
    await store.dispatch("getNews");
    expect(store.state.news).toEqual(allNewsMock);
  });
  it("Funcionality of action (getNews) with search (word ='el')", async (): Promise<void> => {
    await store.dispatch("getNews", "el");
    expect(store.state.news).toEqual(newsSearchedElMock);
  });
});
