import { shallowMount } from "@vue/test-utils";
// Components
import Loader from "@/views/Loader.vue";

describe("Test in view Loader.vue", () => {
  it("Match with snapshot", () => {
    const wrapper = shallowMount(Loader);
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Elements (.loader-page, .loader-page__box-icon, .loader-page__box-title , img) are mounted correctly", () => {
    const wrapper = shallowMount(Loader);
    expect(wrapper.find(".loader-page").exists()).toBeTruthy();
    expect(wrapper.find(".loader-page__box-icon").exists()).toBeTruthy();
    expect(wrapper.find(".loader-page__box-title").exists()).toBeTruthy();
    expect(wrapper.find("img").exists()).toBeTruthy();
  });
});
