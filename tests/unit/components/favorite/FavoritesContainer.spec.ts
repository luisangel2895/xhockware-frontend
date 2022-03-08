import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
// Components
import FavoritesContainer from "@/components/favorite/FavoritesContainer.vue";
// Mocks
import { favoritesNewsMock } from "../../mocks/news.mocks";
// Types
import { News } from "@/types/news-response";
interface State {
  favoriteNews: News[];
}

const initialStore = createStore({
  state(): State {
    return {
      favoriteNews: [] as News[],
    };
  },
  getters: {
    getFavoriteNews: (state) => (state as State).favoriteNews,
  },
});

const initialWrapper = shallowMount(FavoritesContainer, {
  global: {
    plugins: [initialStore],
  },
});

const store = createStore({
  state(): State {
    return {
      favoriteNews: favoritesNewsMock as News[],
    };
  },
  getters: {
    getFavoriteNews: (state) => (state as State).favoriteNews,
  },
});

const wrapper = shallowMount(FavoritesContainer, {
  global: {
    plugins: [store],
  },
});

describe("Test in view FavoritesContainer.vue", () => {
  // Start state of this component
  it("Match with snapshot initial", () => {
    expect(initialWrapper.html()).toMatchSnapshot();
  });
  it("Show default message when the app start or when we dont have any favorite news", () => {
    expect(initialWrapper.find(".default-message").exists()).toBeTruthy();
    expect(initialWrapper.find(".default-message").text()).toBe(
      "You dont have any favorite news."
    );
  });
  // When we have a favorites news
  it("Match with snapshot running", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Checking the number of component (favorite) created by the received (getFavoriteNews)", () => {
    expect(wrapper.findAll("favorite-stub").length).toBe(
      favoritesNewsMock.length
    );
  });
});
