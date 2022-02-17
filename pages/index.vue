<template>
  <div class="relative h-screen overflow-hidden bg-black">
    <!-- Container -->
    <div class="container h-full px-3 mx-auto">
      <div class="grid h-full grid-cols-8">
        <div class="col-span-3 pt-24">
          <p class="font-bold text-white text-7xl">
            Hola, mi nombre es
            <span class="text-red-500">Daniel Ponce</span>
          </p>
        </div>
        <div class="flex items-end col-span-5">
          <img
            src="~/assets/images/daniel-ponce-profile.jpg"
            width="100%"
            alt="Perfil de Daniel Ponce"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
}
</script>
