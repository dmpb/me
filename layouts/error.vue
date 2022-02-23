<template>
  <div class="container flex items-center h-screen max-w-2xl mx-auto">
    <div>
      <!-- 404 -->
      <div v-if="error.statusCode === 404" class="text-white">
        <h1 class="font-extrabold text-transparent text-9xl bg-clip-text bg-gradient-to-r from-rose-600 to-rose-900">404</h1>
        <h2>{{ message }}</h2>
      </div>
      <!-- Default -->
      <div v-else class="text-white">
        <h1>An error occurred</h1>
      </div>
      <div class="mt-8">
        <NuxtLink to="/" class="text-white"><i class="mr-2 fa-solid fa-left-long"></i> <span class="align-top">Home page</span></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog', // you can set a custom layout for the error page
  computed: {
    message(){
      return this.error.message ? this.error.message : "Página no encontrada"
    }
  },
}
</script>
