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
      <div class="relative container mx-auto px-6 pt-10 pb-16 lg:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div class="space-y-5">
            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 text-blue-300 hover:text-blue-200 text-sm font-medium"
            >
              <span class="text-lg">←</span>
              Volver a proyectos
            </NuxtLink>
            <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">
              <span
                class="block bg-linear-to-r from-blue-400 via-purple-500 to-gray-600 bg-clip-text text-transparent"
              >
                {{ project.title }}
              </span>
            </h1>
            <p class="text-xl text-gray-300 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-3">
              <span
                class="px-3 py-1 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs uppercase tracking-widest"
              >
                Proyecto
              </span>
              <span
                class="px-3 py-1 rounded-full bg-slate-500/15 border border-slate-500/30 text-slate-300 text-xs"
              >
                {{ project.slug }}
              </span>
            </div>
          </div>

          <div v-if="project.image" class="relative">
            <div
              class="absolute inset-0 bg-linear-to-r from-blue-500 to-gray-600 rounded-3xl transform rotate-3"
            ></div>
            <div
              class="relative bg-linear-to-r from-blue-500 to-gray-600 rounded-3xl p-1"
            >
              <div class="surface-deep rounded-3xl p-6">
                <div class="relative overflow-hidden rounded-2xl">
                  <img
                    :src="projectImageUrl(project.image)"
                    :alt="project.title"
                    class="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <div
                    class="absolute inset-0 bg-linear-to-t from-blue-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative py-12">
      <div class="relative container mx-auto px-6">
        <ContentRenderer
          v-if="project"
          class="project-content prose prose-invert mx-auto max-w-3xl lg:max-w-4xl"
          :value="project"
        />
      </div>
    </section>

    <section class="relative pb-16">
      <div class="relative container mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <NuxtLink
            v-if="prev"
            :to="prev.path"
            class="group card-surface backdrop-blur-lg rounded-2xl p-6 border border-slate-500/20 hover:border-slate-500/40 transition-all duration-300"
          >
            <p class="text-sm text-slate-400 mb-2">Proyecto anterior</p>
            <div class="flex items-center text-white group-hover:text-blue-300">
              <span class="mr-2">←</span>
              <span class="text-lg font-semibold">{{ prev.title }}</span>
            </div>
          </NuxtLink>

          <NuxtLink
            v-if="next"
            :to="next.path"
            class="group card-surface backdrop-blur-lg rounded-2xl p-6 border border-gray-500/20 hover:border-gray-500/40 transition-all duration-300 md:text-right"
          >
            <p class="text-sm text-gray-400 mb-2">Siguiente proyecto</p>
            <div
              class="flex items-center justify-end text-white group-hover:text-blue-300"
            >
              <span class="text-lg font-semibold">{{ next.title }}</span>
              <span class="ml-2">→</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const slug = String(route.params.slug || "");

const { data: project } = await useAsyncData(`project-${slug}`, () =>
  queryCollection("projects").where("slug", "=", slug).first()
);

if (!project.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Proyecto no encontrado",
  });
}

useHead(() => ({
  title: `${project.value?.title ?? "Proyecto"} - Proyecto`,
}));

const { data: surround } = await useAsyncData(`project-surround-${slug}`, () =>
  queryCollectionItemSurroundings("projects", project.value?.path || "").order(
    "stem",
    "DESC"
  )
);

const prev = computed(() => surround.value?.[0] ?? null);
const next = computed(() => surround.value?.[1] ?? null);

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
