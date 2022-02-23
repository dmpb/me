<template>
  <div class="mt-12">
    <div class="container pb-4 mx-auto mb-10 border-b border-gray-600 max-w-prose">
      <h2
        class="mb-3 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-900"
      >{{ project.title }}</h2>
      <p class="text-lg text-white">{{ project.description }}</p>
    </div>
    <nuxt-content class="mx-auto prose prose-base prose-invert" :document="project" />
    <div class="container mx-auto mt-12 max-w-prose">
      <div class="flex justify-between">
        <div>
          <nuxt-link
            v-if="prev"
            :to="{ name: 'projects-slug', params: { slug: prev.slug } }"
            class="text-white hover:text-red-500"
          >
            <i class="mr-2 text- fa-solid fa-arrow-left-long"></i>
            {{ prev.title }}
          </nuxt-link>
        </div>
        <div>
          <nuxt-link
            v-if="next"
            :to="{ name: 'projects-slug', params: { slug: next.slug } }"
            class="text-white align-middle hover:text-rose-500"
          >
            {{ next.title }}
            <i class="ml-2 text- fa-solid fa-arrow-right-long"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "projects",
  head() {
    return {
      title: this.project.title + " - Proyecto"
    };
  },
  async asyncData({ $content, params }) {
    const projects = await $content('projects').where({ slug: params.slug }).fetch()
    const project = projects[0]

    const [prev, next] = await $content('projects')
      .sortBy('path', 'desc')
      .surround(params.slug)
      .fetch()

    return {
      project,
      prev,
      next
    }
  },
}
</script>
