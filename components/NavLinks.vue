<template>
  <ul class="grid grid-cols-2 gap-3 sm:grid-cols-4">
    <li>
      <nuxt-link to="/projects" class="text-white hover:text-rose-600" data-test="link">Proyectos</nuxt-link>
    </li>
    <li>
      <a class="text-white hover:text-rose-600" href="#" data-test="link">Blog</a>
    </li>
  </ul>
</template>

<script>
export default {
}
</script>

<style scoped>
.nuxt-link-exact-active, .nuxt-link-active{
  color: rgb(225 29 72 / var(--tw-text-opacity));
}
</style>
