<template>
  <div
    class="relative min-h-screen app-shell"
  >
    <div
      class="pointer-events-none absolute inset-0 app-glow"
    ></div>
    <div class="pointer-events-none absolute inset-0 site-grid"></div>

    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 hero-overlay backdrop-blur-3xl"
      ></div>
      <div class="relative container mx-auto px-6 py-10 lg:py-20">
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
            class="card-surface backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card block"
          >
            <div v-if="project.image" class="mb-6 rounded-xl overflow-hidden">
              <img
                :src="projectImageUrl(project.image)"
                :alt="project.title"
                class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 class="text-xl font-semibold text-white mb-4">
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
useHead({
  title: "Daniel Ponce - Proyectos",
});

const { data: projectsData } = await useAsyncData("projects", () =>
  queryCollection("projects").all()
);

const projectOrder = [
  "cinescope",
  "paymolt",
  "jsonplaceholder",
  "todo-app",
  "tic-tac-toe-react",
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
