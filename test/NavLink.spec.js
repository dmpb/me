import { mount } from "@vue/test-utils";
import NavLinks from "@/components/NavLinks.vue";

describe("NavLinks component", () => {
  test("should contain social networks", () => {
    const wrapper = mount(NavLinks);
    const social = wrapper.findAll('[data-test="link"]');
    expect(social.exists()).toBe(true);
    expect(social).toHaveLength(2);
  });
});
