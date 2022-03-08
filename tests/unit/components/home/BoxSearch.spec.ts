import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
// Components
import BoxSearch from "@/components/home/BoxSearch.vue";
// Services
import { getNewsService } from "@/services/news-service";
// Types
import { News } from "@/types/news-response";
import { AllCategories } from "@/types/category";

interface State {
  news: News[];
  categories: AllCategories;
}

const store = createStore({
  state(): State {
    return {
      news: [],
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
    };
  },
  getters: {
    getCategories: (state) => (state as State).categories,
  },
  mutations: {
    SET_TOTAL_NEWS(state, payload: News[]) {
      (state as State).news = payload;
    },
  },
  actions: {
    async getNews({ commit }, payload: string) {
      const news: News[] = await getNewsService(payload);
      if (!payload) {
        commit("SET_TOTAL_NEWS", news);
      }
    },
  },
});

const wrapper = shallowMount(BoxSearch, {
  global: {
    plugins: [store],
    stubs: ["font-awesome-icon"],
    mocks: {
      $t: () => "search",
    },
  },
});

describe("Test in component BoxSearch.vue", (): void => {
  it("Match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Components (font-awesome-icon, input, img", (): void => {
    expect(wrapper.find("font-awesome-icon-stub").exists()).toBeTruthy();
    expect(wrapper.find("input").exists()).toBeTruthy();
    expect(wrapper.find("img").exists()).toBeTruthy();
  });
  it("Loading by default the placeholder in english", async (): Promise<void> => {
    expect(wrapper.find("input").attributes("placeholder")).toBe("search");
  });
  it("Called action (getNews) when clicked search icon searching", async (): Promise<void> => {
    const cleanCategoriesSpy = jest.spyOn<any, any>(
      BoxSearch.methods,
      "cleanCategories"
    );
    const wrapper = shallowMount(BoxSearch, {
      global: {
        plugins: [store],
        stubs: ["font-awesome-icon"],
        mocks: {
          $t: () => "search",
        },
      },
    });
    const icon_search = wrapper.find("font-awesome-icon-stub");
    await icon_search.trigger("click");
    expect(cleanCategoriesSpy).toHaveBeenCalled();
  });
  it("Called action (getNews) when press Enter key", async (): Promise<void> => {
    const cleanCategoriesSpy = jest.spyOn<any, any>(
      BoxSearch.methods,
      "cleanCategories"
    );
    const wrapper = shallowMount(BoxSearch, {
      global: {
        plugins: [store],
        stubs: ["font-awesome-icon"],
        mocks: {
          $t: () => "search",
        },
      },
    });
    const icon_search = wrapper.find("input");
    await icon_search.trigger("keypress", { code: "Enter" });
    expect(cleanCategoriesSpy).toHaveBeenCalled();
  });
});
