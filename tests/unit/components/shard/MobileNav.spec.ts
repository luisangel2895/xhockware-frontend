import { shallowMount } from "@vue/test-utils";
// Components
import MobileNav from "@/components/shared/MobileNav.vue";

describe("Test in component MobileNav.vue", (): void => {
  it("Match with snapshot", () => {
    const wrapper = shallowMount(MobileNav, {
      global: {
        stubs: ["font-awesome-icon"],
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
  it("Icons (newspapaer, heart and user) are into correctly", (): void => {
    const wrapper = shallowMount(MobileNav, {
      global: {
        stubs: ["font-awesome-icon"],
      },
    });
    const icons = wrapper.findAll("font-awesome-icon-stub");
    expect(icons[0].attributes("icon")).toBe("far,newspaper");
    expect(icons[1].attributes("icon")).toBe("far,heart");
    expect(icons[2].attributes("icon")).toBe("far,user");
  });
  it("When clicked the newspaper icon should execute goHome() method and execute $router.push('/')", (): void => {
    const goHomeSpy = jest.spyOn<any, any>(MobileNav.methods, "goHome");
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = shallowMount(MobileNav, {
      global: {
        stubs: ["font-awesome-icon"],
        mocks: {
          $router: mockRouter,
        },
      },
    });
    const $containerIconNewspaper = wrapper.findAll(".mobile-nav__link")[0];
    $containerIconNewspaper.trigger("click");

    expect(mockRouter.push).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith("/");
    expect(goHomeSpy).toHaveBeenCalled();
  });
  it("When clicked the heart icon should execute goFavorites() method and execute $router.push('/favorites')", (): void => {
    const goFavoritesSpy = jest.spyOn<any, any>(
      MobileNav.methods,
      "goFavorites"
    );
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = shallowMount(MobileNav, {
      global: {
        stubs: ["font-awesome-icon"],
        mocks: {
          $router: mockRouter,
        },
      },
    });
    const $containerIconHeart = wrapper.findAll(".mobile-nav__link")[1];
    $containerIconHeart.trigger("click");

    expect(mockRouter.push).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith("/favorites");
    expect(goFavoritesSpy).toHaveBeenCalled();
  });
  it("When clicked the profile icon should execute goProfile() method and execute $router.push('/profile')", (): void => {
    const goProfileSpy = jest.spyOn<any, any>(MobileNav.methods, "goProfile");
    const mockRouter = {
      push: jest.fn(),
    };
    const wrapper = shallowMount(MobileNav, {
      global: {
        stubs: ["font-awesome-icon"],
        mocks: {
          $router: mockRouter,
        },
      },
    });
    const $containerIconProfile = wrapper.findAll(".mobile-nav__link")[2];
    $containerIconProfile.trigger("click");

    expect(mockRouter.push).toHaveBeenCalled();
    expect(mockRouter.push).toHaveBeenCalledWith("/profile");
    expect(goProfileSpy).toHaveBeenCalled();
  });
});
