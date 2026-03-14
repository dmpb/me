<template>
  <ul class="grid grid-cols-2 gap-3 sm:grid-cols-4">
    <li>
      <NuxtLink to="/projects" class="text-white hover:text-rose-600" data-test="link">Proyectos</NuxtLink>
    </li>
    <li>
      <a class="text-white hover:text-rose-600" href="#" data-test="link">Blog</a>
    </li>
  </ul>
</template>

<style scoped>
.router-link-exact-active, .router-link-active{
  color: rgb(225 29 72 / var(--tw-text-opacity));
}
</style>
