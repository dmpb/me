<template>
  <ul class="flex flex-wrap gap-4 text-sm font-medium">
    <li>
      <NuxtLink
        to="/projects"
        class="text-blue-200 hover:text-blue-100"
        data-test="link"
        >Proyectos</NuxtLink
      >
    </li>
    <li>
      <a class="text-blue-200 hover:text-blue-100" href="#" data-test="link"
        >Blog</a
      >
    </li>
  </ul>
</template>

<style scoped>
.router-link-exact-active,
.router-link-active {
  color: rgb(96 165 250 / var(--tw-text-opacity));
}
</style>
