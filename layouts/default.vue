<template>
  <div class="relative min-h-screen app-shell">
    <div
      class="pointer-events-none absolute inset-0 app-glow"
    ></div>
    <div class="pointer-events-none absolute inset-0 site-grid"></div>

    <div class="relative z-10">
      <header class="sticky top-0 z-50 backdrop-blur-lg">
        <div
          class="container mx-auto flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-6 py-4"
        >
          <NuxtLink to="/" class="text-2xl font-bold text-white">
            Daniel Ponce
          </NuxtLink>
          <NavLinks />
        </div>
      </header>

      <main>
        <slot />
      </main>

      <footer class="py-10">
        <div class="container mx-auto px-6 text-center text-sm text-gray-400">
          © {{ new Date().getFullYear() }} Daniel Ponce. Todos los derechos
          reservados.
        </div>
      </footer>
    </div>
  </div>
</template>
