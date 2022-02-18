import { mount } from "@vue/test-utils";
import Index from "@/pages/index.vue";

describe("Index Page", () => {
  test("should contain the author's name", () => {
    const wrapper = mount(Index);
    const title_one = wrapper.get('[data-test="title_one"]');
    const title_two = wrapper.get('[data-test="title_two"]');
    expect(title_one.text()).toBe("Hola, me llamo");
    expect(title_one.isVisible()).toBe(true);
    expect(title_two.text()).toBe("Daniel Ponce");
    expect(title_two.isVisible()).toBe(true);
  });

  test("should contain the logos", () => {
    const wrapper = mount(Index);
    const logos = wrapper.findAll('[data-test="logos"] > img');
    expect(logos).toHaveLength(13);
  });

  test("should contain social networks", () => {
    const wrapper = mount(Index);
    const social = wrapper.findAll('[data-test="social"] > li');
    expect(social).toHaveLength(4);
  });
});
