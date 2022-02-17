<template>
  <div class="relative h-screen overflow-hidden bg-black">
    <!-- Container -->
    <div class="container h-full px-3 mx-auto">
      <div class="grid h-full grid-cols-8">
        <div class="flex flex-col justify-between col-span-3 py-24 mr-8">
          <div>
            <p class="font-bold text-white text-7xl">
              Hola, mi nombre es
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-700"
              >Daniel Ponce</span>
            </p>
          </div>
          <div class="grid grid-cols-8 gap-6 mt-6 grayscale place-items-center">
            <img src="~/assets/images/logos/php.png" alt="Logo de php" class="w-full" />
            <img src="~/assets/images/logos/js.png" alt="Logo de javascript" class="w-full" />
            <img src="~/assets/images/logos/css.png" alt="Logo de css" class="w-full" />
            <img src="~/assets/images/logos/sass.png" alt="Logo de sass" class="w-full" />
            <img src="~/assets/images/logos/vue.png" alt="Logo de vue" class="w-full" />
            <img src="~/assets/images/logos/nuxt.png" alt="Logo de nuxt" class="w-full" />
            <img src="~/assets/images/logos/laravel.png" alt="Logo de laravel" class="w-full" />
            <img src="~/assets/images/logos/webpack.png" alt="Logo de webpack" class="w-full" />
            <img src="~/assets/images/logos/npm.png" alt="Logo de npm" class="w-full" />
            <img src="~/assets/images/logos/git.png" alt="Logo de git" class="w-full" />
            <img src="~/assets/images/logos/github.png" alt="Logo de github" class="w-full" />
            <img
              src="~/assets/images/logos/amazon.png"
              alt="Logo de amazon web services"
              class="w-full"
            />
          </div>
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
