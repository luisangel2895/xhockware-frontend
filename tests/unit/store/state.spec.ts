import { createStore } from "vuex";
import mainStore from "@/store";
import { initialStateMock } from "../mocks/state.mocks";

const createVuexStore = (initialState: any) =>
  createStore({
    ...mainStore,
    state: { ...initialState },
    getters: { getter: () => mainStore.getters },
  });
describe("Testing state in the store (VUEX)", (): void => {
  it("Checking the data types of the state", (): void => {
    expect(mainStore.state.showFragmentLanguage).toEqual(expect.any(Boolean));
    expect(mainStore.state.showFragmentTerms).toEqual(expect.any(Boolean));
    expect(mainStore.state.showFragmentNews).toEqual(expect.any(Boolean));
    expect(mainStore.state.englishSelected).toEqual(expect.any(Boolean));
    expect(mainStore.state.spanishSelected).toEqual(expect.any(Boolean));
    expect(mainStore.state.portugueseSelected).toEqual(expect.any(Boolean));
    expect(mainStore.state.notificationsActivated).toEqual(expect.any(Boolean));
    expect(mainStore.state.news).toEqual(expect.any(Array));
    expect(mainStore.state.totalNews).toEqual(expect.any(Array));
    expect(mainStore.state.newsDetail).toEqual(expect.any(Object));
    expect(mainStore.state.showLoader).toEqual(expect.any(Boolean));
    expect(mainStore.state.favoriteNews).toEqual(expect.any(Array));
    expect(mainStore.state.categories).toEqual(expect.any(Object));
  });
  it("Checking the initial data in the state", (): void => {
    const store = createVuexStore(initialStateMock);
    expect(mainStore.state).toEqual(store.state);
  });
});
