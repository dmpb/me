<template>
  <ul class="flex flex-wrap items-center gap-8 text-base font-medium">
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
    <li>
      <button
        type="button"
        class="theme-toggle"
        :aria-label="`Tema: ${theme}`"
        @click="cycleTheme"
      >
        {{ themeIcon }}
      </button>
    </li>
  </ul>
</template>

<script setup>
const { theme, applyTheme, initTheme } = useTheme();

onMounted(() => {
  initTheme();
});

const themeIcon = computed(() => {
  if (theme.value === "light") return "🌞";
  if (theme.value === "dark") return "🌙";
  return "🖥️";
});

const cycleTheme = () => {
  const next =
    theme.value === "system"
      ? "light"
      : theme.value === "light"
        ? "dark"
        : "system";
  applyTheme(next);
};
</script>

<style scoped>
.router-link-exact-active,
.router-link-active {
  color: white;
}

:global(html[data-theme="light"]) .router-link-exact-active,
:global(html[data-theme="light"]) .router-link-active {
  color: #0f172a;
}
</style>
