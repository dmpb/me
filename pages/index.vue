<template>
  <div class="relative h-screen overflow-hidden bg-black">
    <!-- Container -->
    <div class="container h-full px-3 mx-auto">
      <div class="grid h-full grid-flow-row grid-cols-8 grid-rows-2">
        <!-- Title -->
        <div
          class="flex flex-col col-span-8 row-span-1 py-12 md:mr-8 md:row-span-2 md:justify-between md:py-24 md:col-span-4 xl:col-span-3"
        >
          <!-- Hi -->
          <div>
            <p class="mb-4 text-5xl font-bold text-white md:text-7xl">
              <span data-test="title_one">Hola, me llamo</span>
              <span class="text-rose-600" data-test="title_two">Daniel Ponce</span>
            </p>
            <p class="text-white" ref="hi"></p>
          </div>
          <!-- Logos -->
          <div
            class="grid grid-cols-7 gap-6 mt-6 md:grid-cols-5 lg:grid-cols-8 place-items-center"
            data-test="logos"
          >
            <img src="~/assets/images/logos/php.png" alt="Logo de php" class="w-full" />
            <img src="~/assets/images/logos/js.png" alt="Logo de javascript" class="w-full" />
            <img src="~/assets/images/logos/css.png" alt="Logo de css" class="w-full" />
            <img src="~/assets/images/logos/sass.png" alt="Logo de sass" class="w-full" />
            <img
              src="~/assets/images/logos/tailwindcss.png"
              alt="Logo de tailwindcss"
              class="w-full"
            />
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
        <!-- Profile Picture -->
        <div
          class="relative col-span-8 row-span-1 bg-black bg-bottom bg-no-repeat bg-contain md:row-span-2 min-h-max md:col-start-5 md:col-span-4 profile-picture md:py-24"
        >
          <div class="grid grid-cols-4 mb-4">
            <div>
              <a class="text-white hover:text-rose-600" href="#">Proyectos</a>
            </div>
            <div>
              <a class="text-white hover:text-rose-600" href="#">Blog</a>
            </div>
          </div>
          <div class="absolute right-0">
            <ul data-test="social">
              <!-- github -->
              <li class="mb-3 text-gray-300">
                <a href="https://github.com/dmpb" target="_blank" rel="noopener noreferrer">
                  <i class="fa-brands fa-github-alt"></i>
                </a>
              </li>
              <!-- linkedin -->
              <li class="mb-3 text-gray-300">
                <a
                  href="https://www.linkedin.com/in/dmpb/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </li>
              <!-- instagram -->
              <li class="mb-3 text-gray-300">
                <a
                  href="https://www.instagram.com/dmpb.xo/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </li>
              <!-- facebook -->
              <li class="mb-3 text-gray-300">
                <a
                  href="https://www.facebook.com/dmpb.XD/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-facebook-f"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Typewriter from 'typewriter-effect/dist/core';

export default {
  name: "Index",
  mounted() {
    // TypeWriter
    const hi = new Typewriter(this.$refs.hi, {
      loop: true,
      cursor: "",
      delay: 30,
      deleteSpeed: 50
    });
    hi.typeString(`Soy Desarrollador de Software`)
      .pauseFor(500)
      .deleteAll()
      .typeString(`Me encanta <strong>php</strong>`)
      .pauseFor(1000)
      .deleteChars(3)
      .typeString(`<strong>javascript</strong>`)
      .pauseFor(1000)
      .deleteChars(10)
      .typeString(`<strong>css</strong>`)
      .pauseFor(1000)
      .deleteChars(3)
      .typeString(`<strong>sass</strong>`)
      .pauseFor(1000)
      .deleteChars(4)
      .typeString(`<strong>tailwind</strong>`)
      .pauseFor(1000)
      .deleteChars(8)
      .typeString(`<strong>vue</strong>`)
      .pauseFor(1000)
      .deleteChars(3)
      .typeString(`<strong>vuex</strong>`)
      .pauseFor(1000)
      .deleteChars(4)
      .typeString(`<strong>laravel</strong>`)
      .pauseFor(1000)
      .deleteChars(7)
      .typeString(`<strong>webpack</strong>`)
      .pauseFor(1000)
      .deleteChars(7)
      .typeString(`<strong>npm</strong>`)
      .pauseFor(1000)
      .deleteChars(3)
      .typeString(`<strong>git</strong>`)
      .pauseFor(1000)
      .deleteChars(3)
      .typeString(`<strong>GitHub</strong>`)
      .pauseFor(1000)
      .deleteChars(6)
      .typeString(`<strong>AWS</strong>`)
      .pauseFor(1000)
      .deleteAll()
      .start();
  },
}
</script>
<style>
.profile-picture {
  background-image: url("~assets/images/daniel-ponce-profile.jpg");
}
</style>
