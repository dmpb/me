<template>
  <ul class="flex flex-wrap gap-8 text-base font-medium">
    <li>
      <NuxtLink to="/" class="text-blue-200 hover:text-blue-100" data-test="link"
        >Inicio</NuxtLink
      >
    </li>
    <li>
      <NuxtLink
        to="/projects"
        class="text-blue-200 hover:text-blue-100"
        data-test="link"
        >Proyectos</NuxtLink
      >
    </li>
    <li>
      <NuxtLink
        to="/certificates"
        class="text-blue-200 hover:text-blue-100"
        data-test="link"
        >Certificados</NuxtLink
      >
    </li>
  </ul>
</template>

<style scoped>
.router-link-exact-active,
.router-link-active {
  color: white;
}
</style>
