<template>
  <div class="container px-3 mx-auto my-12 lg:my-24">
    <!-- Nav -->
    <div class="grid grid-cols-2">
      <h1 class="font-bold text-white">
        <NuxtLink to="/">
          Daniel
          <span class="text-rose-600">Ponce</span>
        </NuxtLink>
      </h1>
      <NavLinks />
    </div>
    <!-- end Nav -->

    <!-- Contain -->
    <slot />
    <!-- end Contain -->
  </div>
</template>

<style>
body {
  background: black;
}
</style>
