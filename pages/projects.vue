<template>
  <div class="container px-3 mx-auto my-12 lg:my-24">
    <!-- Nav -->
    <div class="grid grid-cols-2">
      <h1 class="font-bold text-white">
        <nuxt-link to="/">
          Daniel
          <span class="text-rose-600">Ponce</span>
        </nuxt-link>
      </h1>
      <NavLinks />
    </div>
    <!-- end Nav -->

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
    <div class="container max-w-4xl mx-auto mt-14">
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article
          class="border cursor-pointer border-neutral-400 group hover:border-white"
          v-for="(project, index) in projects"
          :key="index"
        >
          <img
            src="~/assets/images/projects/daniel-ponce.jpg"
            alt="Daniel Ponce"
            class="object-cover w-full h-48 grayscale group-hover:grayscale-0"
          />
          <div class="p-4">
            <h3 class="text-lg font-bold text-neutral-400 group-hover:text-rose-500">Articulo 1</h3>
            <p
              class="text-neutral-400 group-hover:text-white"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt fuga accusamus repudiandae! Quasi esse optio, dolore quidem id magnam molestiae error nobis corporis repellendus perferendis quo sed ipsam explicabo unde!</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import NavLinks from "../components/NavLinks.vue"
export default {
  head() {
    return {
      title: "Daniel Ponce - Proyectos"
    };
  },
  components: { NavLinks },
  data() {
    return {
      projects: [
        {}, {}, {}, {}
      ]
    }
  },
}
</script>

<style>
body {
  background: black;
}
</style>
