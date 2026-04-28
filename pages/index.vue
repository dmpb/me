<template>
  <div
    class="relative min-h-screen app-shell"
  >
    <div
      class="pointer-events-none absolute inset-0 app-glow"
    ></div>
    <div class="pointer-events-none absolute inset-0 site-grid"></div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 hero-overlay backdrop-blur-3xl"
      ></div>
      <div class="relative container mx-auto px-6 pt-10 pb-16 md:py-20">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Profile Content -->
          <div class="space-y-6">
            <div
              class="inline-flex items-center px-4 py-2 bg-linear-to-r from-blue-500 to-gray-600 rounded-full text-white text-sm font-medium"
            >
              <span class="w-2 h-2 bg-white rounded-full mr-2"></span>
              Disponible para proyectos
            </div>
            <h1 class="text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
              Daniel Marcelo
              <span
                class="block bg-linear-to-r from-blue-400 via-purple-500 to-gray-600 bg-clip-text text-transparent name-animate"
              >
                Espinoza Ponce
              </span>
            </h1>
            <p class="text-2xl text-blue-400 font-medium mb-4">
              Ingeniero de Software Full-Stack
            </p>
            <p class="text-xl text-gray-300 leading-relaxed">
              Ingeniero de software Full-Stack con más de
              <span class="text-blue-400 font-semibold"
                >5 años de experiencia</span
              >
              desarrollando aplicaciones web escalables y sistemas digitales.
              Especializado en
              <span class="text-blue-400 font-semibold"
                >Laravel, React, Vue y despliegue en la nube</span
              >.
            </p>

            <!-- Contact Info -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div class="flex items-center space-x-3 text-gray-300">
                <svg
                  class="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>Lima, Perú</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-300">
                <svg
                  class="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                <span>+51 960 671 893</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-300">
                <svg
                  class="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <span>dmep17@gmail.com</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-300">
                <svg
                  class="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span>github.com/dmpb</span>
              </div>
              <div class="flex items-center space-x-3 text-gray-300">
                <svg
                  class="w-5 h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
                <span>linkedin.com/in/dmpb</span>
              </div>
            </div>
          </div>

          <!-- Profile Image -->
          <div class="relative">
            <div
              class="absolute inset-0 bg-linear-to-r from-blue-500 to-gray-600 rounded-3xl transform rotate-6"
            ></div>
            <div
              class="relative bg-linear-to-r from-blue-500 to-gray-600 rounded-3xl p-1"
            >
              <div class="surface-deep rounded-3xl p-8">
                <div class="relative overflow-hidden rounded-2xl">
                  <img
                    src="/projects/profile-image.png"
                    alt="Daniel Ponce"
                    class="w-full h-auto rounded-2xl shadow-2xl"
                  />
                  <!-- Overlay effect -->
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

    <!-- Skills Section -->
    <section class="py-16 md:py-20 relative">
      <div class="relative container mx-auto px-6">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">
          <span
            class="bg-linear-to-r from-blue-400 to-gray-600 bg-clip-text text-transparent"
          >
            Habilidades Técnicas
          </span>
        </h2>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Lenguajes -->
          <div
            class="group card-surface backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
          >
            <h3 class="text-xl font-semibold text-blue-400 mb-4">Lenguajes</h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm skill-tag"
                >PHP</span
              >
              <span
                class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm skill-tag"
                >JavaScript</span
              >
              <span
                class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm skill-tag"
                >HTML</span
              >
              <span
                class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm skill-tag"
                >CSS</span
              >
            </div>
          </div>

          <!-- Frameworks -->
          <div
            class="group card-surface backdrop-blur-lg rounded-2xl p-6 border border-gray-500/20 hover:border-gray-500/40 transition-all duration-300 shimmer-card"
          >
            <h3 class="text-xl font-semibold text-gray-400 mb-4">Frameworks</h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm skill-tag"
                >Laravel</span
              >
              <span
                class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm skill-tag"
                >React</span
              >
              <span
                class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm skill-tag"
                >Vue</span
              >
              <span
                class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm skill-tag"
                >Inertia.js</span
              >
            </div>
          </div>

          <!-- Frontend -->
          <div
            class="group card-surface backdrop-blur-lg rounded-2xl p-6 border border-slate-500/20 hover:border-slate-500/40 transition-all duration-300 shimmer-card"
          >
            <h3 class="text-xl font-semibold text-slate-400 mb-4">Frontend</h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm skill-tag"
                >TailwindCSS</span
              >
              <span
                class="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm skill-tag"
                >Sass</span
              >
              <span
                class="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm skill-tag"
                >Bootstrap</span
              >
              <span
                class="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm skill-tag"
                >jQuery</span
              >
            </div>
          </div>

          <!-- Bases de Datos -->
          <div
            class="group card-surface backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
          >
            <h3 class="text-xl font-semibold text-blue-400 mb-4">
              Bases de Datos
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm skill-tag"
                >MySQL</span
              >
              <span
                class="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm skill-tag"
                >PostgreSQL</span
              >
            </div>
          </div>

          <!-- Cloud y DevOps -->
          <div
            class="group card-surface backdrop-blur-lg rounded-2xl p-6 border border-gray-500/20 hover:border-gray-500/40 transition-all duration-300 shimmer-card"
          >
            <h3 class="text-xl font-semibold text-gray-400 mb-4">
              Cloud y DevOps
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm skill-tag"
                >AWS (EC2, S3, RDS, Route53)</span
              >
              <span
                class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm skill-tag"
                >DigitalOcean</span
              >
              <span
                class="px-3 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm skill-tag"
                >Azure</span
              >
            </div>
          </div>

          <!-- Herramientas -->
          <div
            class="group card-surface backdrop-blur-lg rounded-2xl p-6 border border-slate-500/20 hover:border-slate-500/40 transition-all duration-300 shimmer-card"
          >
            <h3 class="text-xl font-semibold text-slate-400 mb-4">
              Herramientas
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm skill-tag"
                >Git</span
              >
              <span
                class="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm skill-tag"
                >GitHub</span
              >
              <span
                class="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm skill-tag"
                >Vite</span
              >
              <span
                class="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm skill-tag"
                >Webpack</span
              >
              <span
                class="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm skill-tag"
                >Figma</span
              >
            </div>
          </div>
        </div>

        <!-- Otros -->
        <div class="mt-8">
          <div
            class="card-surface backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
          >
            <h3 class="text-xl font-semibold text-blue-400 mb-4">Otros</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-300">Desarrollo de APIs REST</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"
                  />
                </svg>
                <span class="text-gray-300">WordPress y WooCommerce</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-300">Facturación electrónica</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                  />
                  <path
                    d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.928.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                  />
                </svg>
                <span class="text-gray-300">SEO técnico</span>
              </div>
              <div class="flex items-center space-x-2">
                <svg
                  class="w-4 h-4 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="text-gray-300"
                  >Despliegue de aplicaciones web</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-16 md:py-20 relative">
      <div class="relative container mx-auto px-6">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">
          <span
            class="bg-linear-to-r from-blue-400 to-gray-600 bg-clip-text text-transparent"
          >
            Experiencia Profesional
          </span>
        </h2>

        <!-- Timeline Container -->
        <div class="relative mt-14">
          <!-- Timeline Line -->
          <div
            class="absolute left-6 top-8 bottom-8 w-px -translate-x-1/2 bg-linear-to-b from-blue-500/70 via-blue-500/20 to-slate-500/30"
          ></div>

          <div class="space-y-10 relative">
            <!-- TD Consultores -->
            <div class="relative pl-14">
              <div
                class="absolute left-6 top-8 w-3.5 h-3.5 -translate-x-1/2 bg-blue-500 rounded-full ring-4 ring-slate-900"
              ></div>
              <div
                class="group card-surface backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
              >
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
                >
                  <div class="space-y-2">
                    <div
                      class="inline-flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-blue-300/80"
                    >
                      <span
                        class="px-2 py-1 rounded-full bg-blue-500/15 border border-blue-500/30"
                        >Remoto</span
                      >
                      <span class="text-gray-400 normal-case"
                        >Jun 2024 – Presente</span
                      >
                    </div>
                    <h3 class="text-2xl font-semibold text-white">
                      Desarrollador Full-Stack
                    </h3>
                    <p class="text-lg text-gray-400">
                      TD Consultores – Transformación Digital
                    </p>
                  </div>
                </div>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Gestión, mantenimiento y mejora continua de aplicaciones
                      web utilizadas por empresas como
                      <strong class="text-white"
                        >Kia Perú, Plaza Vea, Epass, Nexo Inmobiliaria y Renzo
                        Costa</strong
                      >.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Optimización de sistemas existentes para mejorar
                      <strong class="text-white"
                        >rendimiento, estabilidad y escalabilidad</strong
                      >.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Desarrollo e implementación de nuevas funcionalidades en
                      plataformas web empresariales.</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Impulse World -->
            <div class="relative pl-14">
              <div
                class="absolute left-6 top-8 w-3.5 h-3.5 -translate-x-1/2 bg-blue-500 rounded-full ring-4 ring-slate-900"
              ></div>
              <div
                class="group card-surface backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
              >
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
                >
                  <div class="space-y-2">
                    <div
                      class="inline-flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-blue-300/80"
                    >
                      <span
                        class="px-2 py-1 rounded-full bg-blue-500/15 border border-blue-500/30"
                        >Remoto</span
                      >
                      <span class="text-gray-400 normal-case"
                        >Mar 2024 – May 2024</span
                      >
                    </div>
                    <h3 class="text-2xl font-semibold text-white">
                      Desarrollador Full-Stack
                    </h3>
                    <p class="text-lg text-gray-400">Impulse World</p>
                  </div>
                </div>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Desarrollo y mantenimiento de aplicaciones web utilizando
                      <strong class="text-white"
                        >Laravel, Vue.js, React e Inertia.js</strong
                      >.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Identificación y solución de errores para mejorar la
                      estabilidad del sistema.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Colaboración con equipos de diseño UX/UI para implementar
                      <strong class="text-white"
                        >interfaces modernas y funcionales</strong
                      >.</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Techsultor -->
            <div class="relative pl-14">
              <div
                class="absolute left-6 top-8 w-3.5 h-3.5 -translate-x-1/2 bg-blue-500 rounded-full ring-4 ring-slate-900"
              ></div>
              <div
                class="group card-surface backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
              >
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
                >
                  <div class="space-y-2">
                    <div
                      class="inline-flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-blue-300/80"
                    >
                      <span
                        class="px-2 py-1 rounded-full bg-blue-500/15 border border-blue-500/30"
                        >Remoto</span
                      >
                      <span class="text-gray-400 normal-case"
                        >Abr 2023 – Feb 2024</span
                      >
                    </div>
                    <h3 class="text-2xl font-semibold text-white">
                      Desarrollador Full-Stack
                    </h3>
                    <p class="text-lg text-gray-400">Techsultor</p>
                  </div>
                </div>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Desarrollo de
                      <strong class="text-white"
                        >tiendas en línea y sitios web corporativos utilizando
                        WordPress y WooCommerce</strong
                      >.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Creación de
                      <strong class="text-white"
                        >sistemas de gestión para restaurantes</strong
                      >
                      orientados a pedidos, órdenes y control
                      administrativo.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Desarrollo de
                      <strong class="text-white"
                        >aulas virtuales para instituciones educativas</strong
                      >, incluyendo gestión de roles, cursos y tareas.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Integración con
                      <strong class="text-white"
                        >sistemas de recaudos del BBVA</strong
                      >
                      para pagos mediante banca móvil.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Implementación y despliegue de aplicaciones en
                      <strong class="text-white">AWS y DigitalOcean</strong
                      >.</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Inmobitec -->
            <div class="relative pl-14">
              <div
                class="absolute left-6 top-8 w-3.5 h-3.5 -translate-x-1/2 bg-blue-500 rounded-full ring-4 ring-slate-900"
              ></div>
              <div
                class="group card-surface backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
              >
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
                >
                  <div class="space-y-2">
                    <div
                      class="inline-flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-blue-300/80"
                    >
                      <span
                        class="px-2 py-1 rounded-full bg-blue-500/15 border border-blue-500/30"
                        >Lima</span
                      >
                      <span class="text-gray-400 normal-case"
                        >Feb 2022 – Mar 2023</span
                      >
                    </div>
                    <h3 class="text-2xl font-semibold text-white">
                      Desarrollador Full-Stack
                    </h3>
                    <p class="text-lg text-gray-400">Inmobitec</p>
                  </div>
                </div>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Optimización y actualización del
                      <strong class="text-white">ERP de la empresa</strong> para
                      mejorar procesos internos.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Implementación de
                      <strong class="text-white"
                        >facturación electrónica mediante integración con
                        Efact</strong
                      >.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Desarrollo de integración con
                      <strong class="text-white">API de pagos del BBVA</strong
                      >.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Creación de un
                      <strong class="text-white"
                        >mapa interactivo 3D para visualización de lotes
                        inmobiliarios</strong
                      >
                      utilizando Google Maps y coordenadas generadas en
                      AutoCAD.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Mejora de la experiencia de usuario y rediseño de la
                      página web principal.</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Sociedad Nacional de Paramédicos -->
            <div class="relative pl-14">
              <div
                class="absolute left-6 top-8 w-3.5 h-3.5 -translate-x-1/2 bg-blue-500 rounded-full ring-4 ring-slate-900"
              ></div>
              <div
                class="group card-surface backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
              >
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
                >
                  <div class="space-y-2">
                    <div
                      class="inline-flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-blue-300/80"
                    >
                      <span
                        class="px-2 py-1 rounded-full bg-blue-500/15 border border-blue-500/30"
                        >Lima</span
                      >
                      <span class="text-gray-400 normal-case"
                        >Jun 2020 – Feb 2021</span
                      >
                    </div>
                    <h3 class="text-2xl font-semibold text-white">
                      Programador Backend
                    </h3>
                    <p class="text-lg text-gray-400">
                      Sociedad Nacional de Paramédicos del Perú
                    </p>
                  </div>
                </div>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Desarrollo de
                      <strong class="text-white"
                        >plataformas educativas y paneles administrativos
                        personalizados</strong
                      >.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Implementación de soluciones para organizaciones como
                      <strong class="text-white"
                        >Tambo y la Federación Peruana de Fútbol</strong
                      >.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Gestión de contenidos y mantenimiento de sitios web en
                      WordPress.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Administración y soporte de servidores y bases de
                      datos.</span
                    >
                  </li>
                </ul>
              </div>
            </div>

            <!-- Estación de Servicios Ponce -->
            <div class="relative pl-14">
              <div
                class="absolute left-6 top-8 w-3.5 h-3.5 -translate-x-1/2 bg-blue-500 rounded-full ring-4 ring-slate-900"
              ></div>
              <div
                class="group card-surface backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
              >
                <div
                  class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6"
                >
                  <div class="space-y-2">
                    <div
                      class="inline-flex flex-wrap items-center gap-2 text-xs uppercase tracking-wider text-blue-300/80"
                    >
                      <span
                        class="px-2 py-1 rounded-full bg-blue-500/15 border border-blue-500/30"
                        >Lima</span
                      >
                      <span class="text-gray-400 normal-case"
                        >Ene 2019 – Jul 2019</span
                      >
                    </div>
                    <h3 class="text-2xl font-semibold text-white">
                      Programador Junior
                    </h3>
                    <p class="text-lg text-gray-400">
                      Estación de Servicios Ponce
                    </p>
                  </div>
                </div>
                <ul class="space-y-3 text-gray-300">
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Mantenimiento de sistema de
                      <strong class="text-white">facturación electrónica</strong
                      >.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span
                      >Validación y mejora de código para garantizar seguridad y
                      estabilidad.</span
                    >
                  </li>
                  <li class="flex items-start">
                    <span class="text-blue-400 mr-2 mt-1">▸</span>
                    <span>Configuración y soporte de servidores locales.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-16 md:py-20 relative">
      <div class="relative container mx-auto px-6">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">
          <span
            class="bg-linear-to-r from-blue-400 to-gray-600 bg-clip-text text-transparent"
          >
            Proyectos Destacados
          </span>
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

    <!-- Certificates Section -->
    <section class="py-16 md:py-20 relative">
      <div class="relative container mx-auto px-6">
        <div class="flex flex-col items-center gap-4 text-center mb-12">
          <h2 class="text-4xl font-bold text-white">
            <span
              class="bg-linear-to-r from-blue-400 to-gray-600 bg-clip-text text-transparent"
            >
              Certificados
            </span>
          </h2>
          <p class="text-gray-300 max-w-2xl">
            Logros de formación continua y especialización en desarrollo web.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="certificate in featuredCertificates"
            :key="certificate.image"
            class="card-surface backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 shimmer-card"
          >
            <div class="mb-5 rounded-xl overflow-hidden">
              <img
                :src="certificateImageUrl(certificate.image)"
                :alt="certificate.title"
                class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 class="text-xl font-semibold text-white mb-3">
              {{ certificate.title }}
            </h3>
            <p class="text-gray-300 text-sm uppercase tracking-widest">
              {{ certificate.date }}
            </p>
          </div>
        </div>

        <div class="mt-10 text-center">
          <NuxtLink
            to="/certificates"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-blue-500 to-gray-600 text-white font-semibold hover:opacity-90 transition-opacity"
          >
            Ver todos los certificados
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section class="py-16 md:py-20 relative">
      <div
        class="absolute inset-0 bg-linear-to-t from-blue-900/50 to-transparent"
      ></div>
      <div class="relative container mx-auto px-6">
        <h2 class="text-4xl font-bold text-white mb-12 text-center">
          <span
            class="bg-linear-to-r from-blue-400 to-gray-600 bg-clip-text text-transparent"
          >
            Formación
          </span>
        </h2>

        <div
          class="card-surface backdrop-blur-lg rounded-2xl p-8 border border-blue-500/20 max-w-2xl mx-auto hover-lift"
        >
          <h3 class="text-2xl font-semibold text-white mb-2">
            Desarrollo de Software
          </h3>
          <h4 class="text-xl text-gray-400 mb-2">SENATI</h4>
          <p class="text-gray-300">Lima, Perú</p>
          <p class="text-blue-400 font-medium mt-4">06/2019</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-20 relative">
      <div class="relative container mx-auto px-6 text-center">
        <div
          class="bg-linear-to-r from-blue-500 to-gray-600 rounded-3xl p-12 max-w-4xl mx-auto shimmer-card"
        >
          <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
            ¿Listo para colaborar en tu próximo proyecto?
          </h2>
          <p class="text-xl text-white/90 mb-8">
            Estoy disponible para proyectos interesantes y desafíos técnicos.
            Contáctame para discutir cómo puedo ayudar a llevar tus ideas al
            siguiente nivel.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:dmep17@gmail.com"
              class="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Enviar Email
            </a>
            <a
              href="https://linkedin.com/in/dmpb"
              target="_blank"
              class="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Conectar en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead(() => ({
  title: "Daniel Ponce - CV FullStack Developer",
  meta: [
    {
      name: "description",
      content:
        "CV profesional de Daniel Marcelo Espinoza Ponce - Desarrollador FullStack con 4 años de experiencia",
    },
  ],
}));

const projectOrder = [
  "perulytics",
  "cinescope",
  "paymolt",
  "jsonplaceholder",
  "todo-app",
  "tic-tac-toe-react",
  "guess-the-number-game",
];

const { data: projectsData } = await useAsyncData("home-projects", () =>
  queryCollection("projects").all()
);

const orderedProjects = computed(() => {
  const projects = projectsData.value ?? [];
  return projectOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean);
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

const featuredCertificates = computed(() => certificates.slice(0, 3));

const baseURL = useRuntimeConfig().app.baseURL;
const projectImageUrl = (image) =>
  `${baseURL}projects/${encodeURIComponent(image)}`;
const certificateImageUrl = (image) =>
  `${baseURL}certificates/${encodeURIComponent(image)}`;
</script>

<style scoped>
.name-animate {
  background-size: 300% 300%;
  animation: name-gradient 6s ease-in-out infinite;
}

@keyframes name-gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

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
  mask-image: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.80) 40%, rgba(0, 0, 0, 0.55) 70%, transparent 90%);
}
</style>
