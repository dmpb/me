import { mount } from "@vue/test-utils";
import NavLinks from "@/components/NavLinks.vue";

describe("NavLinks component", () => {
  test("should contain social networks", () => {
    const wrapper = mount(NavLinks, {
      global: {
        stubs: {
          NuxtLink: true,
        },
      },
    });
    const social = wrapper.findAll('[data-test="link"]');
    expect(social.length).toBeGreaterThan(0);
    expect(social).toHaveLength(2);
  });
});
