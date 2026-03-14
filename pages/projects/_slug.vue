<template>
  <div class="mt-12">
    <div class="container pb-4 mx-auto mb-10 border-b border-gray-600 max-w-prose">
      <h2
        class="mb-3 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-rose-900"
      >{{ project.title }}</h2>
      <p class="text-lg text-white">{{ project.description }}</p>
    </div>
    <ContentRenderer
      v-if="project"
      class="mx-auto prose prose-base prose-invert"
      :value="project"
    />
    <div class="container mx-auto mt-12 max-w-prose">
      <div class="flex justify-between">
        <div>
          <NuxtLink
            v-if="prev"
            :to="`/projects/${prev.slug}`"
            class="text-white hover:text-red-500"
          >
            <i class="mr-2 text- fa-solid fa-arrow-left-long"></i>
            {{ prev.title }}
          </NuxtLink>
        </div>
        <div>
          <NuxtLink
            v-if="next"
            :to="`/projects/${next.slug}`"
            class="text-white align-middle hover:text-rose-500"
          >
            {{ next.title }}
            <i class="ml-2 text- fa-solid fa-arrow-right-long"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
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
</script>
