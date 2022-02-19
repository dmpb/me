<template>
  <div>
    <!-- Title -->
    <div class="mt-20 text-center">
      <h2>
        <span
          class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-900"
        >Hello world</span>
      </h2>
      <p class="leading-loose tracking-wide text-white">Todos empezamos con un hola mundo</p>
    </div>
    <!-- end Title -->

    <!-- List -->
    <div class="container max-w-5xl mx-auto mt-14">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <nuxt-link
          class="border cursor-pointer border-neutral-400 group hover:border-white"
          v-for="(project, index) in projects"
          :key="index"
          :to="{ name: 'projects-slug', params: { slug: project.slug } }"
        >
          <img
            v-if="project.image"
            :src="require(`~/assets/images/projects/${project.image}`)"
            alt="Daniel Ponce"
            class="object-cover w-full h-40 brightness-75 group-hover:brightness-100"
          />
          <div class="p-4">
            <h3
              class="mb-2 text-lg font-bold text-rose-800 group-hover:text-rose-500"
            >{{ project.title }}</h3>
            <p class="text-neutral-400 group-hover:text-white">{{ project.description }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <!-- end List -->
  </div>
</template>

<script>
export default {
  layout: "projects",
  head() {
    return {
      title: "Daniel Ponce - Proyectos"
    };
  },
  data() {
    return {
    }
  },
  async asyncData({ $content }) {
    const projects = await $content('projects').sortBy("path", "desc").fetch()

    return { projects }
  },
}
</script>

<style>
body {
  background: black;
}
</style>
