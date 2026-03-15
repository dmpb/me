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
      <div class="relative container mx-auto px-6 py-16 lg:py-20">
        <div class="text-center max-w-3xl mx-auto space-y-4">
          <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">
            <span
              class="block bg-linear-to-r from-blue-400 via-purple-500 to-gray-600 bg-clip-text text-transparent"
            >
              Proyectos
            </span>
          </h1>
          <p class="text-xl text-gray-300 leading-relaxed">
            Selección de trabajos recientes con enfoque en producto, rendimiento
            y experiencia de usuario.
          </p>
        </div>
      </div>
    </section>

    <section class="relative pb-16 pt-6 lg:pt-10">
      <div class="relative container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <NuxtLink
            v-for="project in orderedProjects"
            :key="project.slug"
            :to="`/projects/${project.slug}`"
            class="bg-linear-to-br from-blue-500/10 to-gray-600/10 backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card block"
          >
            <div v-if="project.image" class="mb-6 rounded-xl overflow-hidden">
              <img
                :src="projectImageUrl(project.image)"
                :alt="project.title"
                class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 class="text-2xl font-semibold text-white mb-4">
              {{ project.title }}
            </h3>
            <p class="text-gray-300 mb-4">
              {{ project.description }}
            </p>
            <span class="inline-flex items-center text-blue-400 hover:text-blue-300">
              Ver detalle
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: "projects" });

useHead({
  title: "Daniel Ponce - Proyectos",
});

const { data: projectsData } = await useAsyncData("projects", () =>
  queryCollection("projects").all()
);

const projectOrder = [
  "paymolt",
  "jsonplaceholder",
  "todo-app",
  "guess-the-number-game",
];

const orderedProjects = computed(() => {
  const projects = projectsData.value ?? [];
  return projectOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);
});
const baseURL = useRuntimeConfig().app.baseURL;
const projectImageUrl = (image) =>
  `${baseURL}projects/${encodeURIComponent(image)}`;
</script>
