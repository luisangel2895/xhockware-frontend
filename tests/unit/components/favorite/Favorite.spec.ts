import { shallowMount } from "@vue/test-utils";
// Components
import Favorite from "@/components/favorite/Favorite.vue";
// Mocks
import { newsDetailMock } from "../../mocks/news.mocks";
// Types
import { News } from "@/types/news-response";

const wrapper = shallowMount(Favorite, {
  props: {
    news: newsDetailMock as News,
  },
});

describe("Test in view Favorite.vue", (): void => {
  it("Match with snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Elements (.favorite, .favorite__img, img, .favorite__text) are mounted correctly", (): void => {
    expect(wrapper.find(".favorite").exists()).toBeTruthy();
    expect(wrapper.find(".favorite__img").exists()).toBeTruthy();
    expect(wrapper.find("img").exists()).toBeTruthy();
    expect(wrapper.find(".favorite__text").exists()).toBeTruthy();
  });
  it("Data of news is correctly setted in this component", (): void => {
    // The image of the news
    expect(wrapper.find("img").attributes("src")).toBe(
      "https://images.wsj.net/im-466867/social"
    );
    // Title
    expect(wrapper.find(".favorite__text-title").text()).toBe(
      "Second Life Founder Returns to Take On t ..."
    );
    // Category
    expect(wrapper.find(".favorite__text-category").text()).toBe("Tecnology");
  });
});
