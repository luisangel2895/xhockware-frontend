import { shallowMount } from "@vue/test-utils";
import { createStore } from "vuex";
// Components
import App from "@/App.vue";
// Mocks
import { allNewsMock } from "./mocks/news.mocks";
// Services
import { getNewsService } from "@/services/news-service";
// Types
import { News } from "@/types/news-response";
interface State {
  news: News[];
}

const store = createStore({
  state(): State {
    return {
      news: allNewsMock,
    };
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

const wrapper = shallowMount(App, {
  global: {
    plugins: [store],
    stubs: ["router-view"],
  },
});

describe("Test in component App.vue", (): void => {
  it("Match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Components (loader, main, router-view, mobile-nav) are mounted correctly", (): void => {
    expect(wrapper.find("loader-stub").exists()).toBeTruthy();
    expect(wrapper.find("main").exists()).toBeTruthy();
    expect(wrapper.find("router-view-stub").exists()).toBeTruthy();
    expect(wrapper.find("mobile-nav-stub").exists()).toBeTruthy();
  });
  it("Loading start in the mounted and the duration is 3s", async (): Promise<void> => {
    expect(wrapper.vm.loading).toBe(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(wrapper.vm.loading).toBe(false);
  });
  it("Called action (getNews) in mounted after 3s loading", async (): Promise<void> => {
    const getNewsSpy = jest.spyOn<any, any>(App.methods, "getNews");
    shallowMount(App, {
      global: {
        plugins: [store],
        stubs: ["router-view"],
      },
    });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    expect(getNewsSpy).toHaveBeenCalled();
  });
});
