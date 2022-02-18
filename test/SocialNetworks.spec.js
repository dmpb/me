import { mount } from "@vue/test-utils";
import SocialNetworks from "@/components/SocialNetworks.vue";

describe("SocialNetworks component", () => {
  test("should contain social networks", () => {
    const wrapper = mount(SocialNetworks);
    const social = wrapper.findAll('[data-test="social"]');
    expect(social.exists()).toBe(true);
    expect(social).toHaveLength(4);
  });

  test("should contain the GitHub link", () => {
    const wrapper = mount(SocialNetworks);
    const github = wrapper.findAll('[data-test="social"]').at(0);
    expect(github.isVisible()).toBe(true);
    expect(github.attributes("href")).toBe("https://github.com/dmpb");
  });

  test("should contain the Linkedin link", () => {
    const wrapper = mount(SocialNetworks);
    const linkedin = wrapper.findAll('[data-test="social"]').at(1);
    expect(linkedin.isVisible()).toBe(true);
    expect(linkedin.attributes("href")).toBe(
      "https://www.linkedin.com/in/dmpb"
    );
  });

  test("should contain the instagram link", () => {
    const wrapper = mount(SocialNetworks);
    const instagram = wrapper.findAll('[data-test="social"]').at(2);
    expect(instagram.isVisible()).toBe(true);
    expect(instagram.attributes("href")).toBe(
      "https://www.instagram.com/dmpb.xo"
    );
  });

  test("should contain the facebook link", () => {
    const wrapper = mount(SocialNetworks);
    const facebook = wrapper.findAll('[data-test="social"]').at(3);
    expect(facebook.isVisible()).toBe(true);
    expect(facebook.attributes("href")).toBe(
      "https://www.facebook.com/dmpb.XD"
    );
  });
});
