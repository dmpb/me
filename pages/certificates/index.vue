<template>
  <div
    class="relative min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-900"
  >
    <div
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_10%,rgba(59,130,246,0.12),transparent),radial-gradient(900px_500px_at_10%_60%,rgba(100,116,139,0.10),transparent)]"
    ></div>
    <div class="pointer-events-none absolute inset-0 site-grid"></div>

    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-linear-to-r from-blue-600/20 to-gray-600/20 backdrop-blur-3xl"
      ></div>
      <div class="relative container mx-auto px-6 py-10 lg:py-20">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">
            <span
              class="block bg-linear-to-r from-blue-400 via-purple-500 to-gray-600 bg-clip-text text-transparent"
            >
              Certificados
            </span>
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed">
            Lista completa de certificados obtenidos en formación y
            especialización.
          </p>
        </div>
      </div>
    </section>

    <section class="relative pb-16 pt-6 lg:pt-10">
      <div class="relative container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="certificate in certificates"
            :key="certificate.image"
            class="bg-linear-to-br from-blue-500/10 to-gray-600/10 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
          >
            <div class="mb-5 rounded-xl overflow-hidden">
              <img
                :src="certificateImageUrl(certificate.image)"
                :alt="certificate.title"
                class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 class="text-2xl font-semibold text-white mb-3">
              {{ certificate.title }}
            </h3>
            <p class="text-gray-300 text-sm uppercase tracking-widest">
              {{ certificate.date }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: "Daniel Ponce - Certificados",
});

const certificates = [
  {
    image: "9-ruta.jpg",
    title: "Frontend a profundidad con Vue.js",
    date: "Aprobado el 31 de enero, 2022",
  },
  {
    image: "10-ruta.jpg",
    title: "Desarrollo Web Backend con PHP",
    date: "Aprobado el 23 de diciembre, 2021",
  },
  {
    image: "11-ruta.jpg",
    title: "Business Management",
    date: "Aprobado el 24 de agosto, 2021",
  },
  {
    image: "37-ruta.jpg",
    title: "Desarrollo con WordPress",
    date: "Aprobado el 22 de agosto, 2021",
  },
  {
    image: "6842-ruta.jpg",
    title: "Finanzas e Inversiones",
    date: "Aprobado el 11 de junio, 2021",
  },
];

const baseURL = useRuntimeConfig().app.baseURL;
const certificateImageUrl = (image) =>
  `${baseURL}certificates/${encodeURIComponent(image)}`;
</script>

<style scoped>
.site-grid {
  background-image:
    linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
    linear-gradient(to right, rgba(148, 163, 184, 0.16) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.16) 1px, transparent 1px),
    linear-gradient(110deg, rgba(59, 130, 246, 0.1) 0%, transparent 45%, transparent 55%, rgba(100, 116, 139, 0.08) 100%);
  background-size: 96px 96px, 96px 96px, 16px 16px, 16px 16px, 100% 100%;
  background-position: 0 0, 0 0, 0 0, 0 0, 0 0;
  opacity: 0.52;
  mix-blend-mode: screen;
  mask-image: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.80) 40%, rgba(0, 0, 0, 0.55) 55%, transparent 80%);
}
</style>
