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
              <div class="bg-slate-900 rounded-3xl p-6">
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
            :to="`/projects/${prev.slug}`"
            class="group bg-linear-to-br from-slate-500/10 to-gray-600/10 backdrop-blur-lg rounded-2xl p-6 border border-slate-500/20 hover:border-slate-500/40 transition-all duration-300"
          >
            <p class="text-sm text-slate-400 mb-2">Proyecto anterior</p>
            <div class="flex items-center text-white group-hover:text-blue-300">
              <span class="mr-2">←</span>
              <span class="text-lg font-semibold">{{ prev.title }}</span>
            </div>
          </NuxtLink>

          <NuxtLink
            v-if="next"
            :to="`/projects/${next.slug}`"
            class="group bg-linear-to-br from-gray-500/10 to-slate-600/10 backdrop-blur-lg rounded-2xl p-6 border border-gray-500/20 hover:border-gray-500/40 transition-all duration-300 md:text-right"
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
definePageMeta({ layout: "projects" });

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
