<template>
  <div
    class="relative min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-900"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(900px_500px_at_10%_60%,rgba(100,116,139,0.10),transparent)]"
    ></div>
    <div class="pointer-events-none absolute inset-0 site-grid"></div>

    <div class="relative z-10">
      <header class="container mx-auto">
        <div
          class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between  px-6 py-4 backdrop-blur-lg"
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
    </div>
  </div>
</template>
