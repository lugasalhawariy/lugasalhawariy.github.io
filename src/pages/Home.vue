<template>
  <main class="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
    <!-- Background -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-red-500/20 blur-[150px]"
      />

      <div
        class="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-red-700/10 blur-[120px]"
      />

      <div class="grid-pattern absolute inset-0 opacity-40" />
    </div>

    <!-- Navbar -->
    <nav
      class="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-8"
    >
      <div class="flex items-center gap-3">
        <div
          class="h-8 w-8 rounded-full bg-gradient-to-br from-red-300 via-red-500 to-red-900"
        />
        <span class="font-semibold tracking-wide"> lugasalhawariy </span>
      </div>

      <div class="hidden gap-8 text-sm text-zinc-400 md:flex">
        <a href="#about" class="hover:text-white">About</a>
        <a href="#projects" class="hover:text-white">Projects</a>
        <a href="#contact" class="hover:text-white">Contact</a>
      </div>
    </nav>

    <!-- Hero -->
    <section
      class="relative overflow-hidden min-h-screen flex items-center px-6"
    >
      <!-- Background Glow -->
      <div
        class="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-3xl"
      ></div>

      <div
        class="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-red-800/20 blur-3xl"
      ></div>

      <div
        class="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2"
      >
        <!-- Content -->
        <div>
          <div
            class="mb-6 inline-flex items-center rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300"
          >
            🚀 Building Digital Solutions Since 2020
          </div>

          <h1 class="text-5xl font-black leading-tight md:text-7xl">
            Building Digital
            <span
              class="bg-gradient-to-r from-red-300 via-red-500 to-red-700 bg-clip-text text-transparent"
            >
              Solutions
            </span>
            for Tomorrow.
          </h1>

          <p class="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Software Developer, Educator, and Builder creating meaningful
            technology experiences. Focused on web, mobile, and digital
            ecosystems that empower businesses, organizations, and future
            generations.
          </p>

          <div class="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              class="rounded-xl bg-red-600 px-6 py-3 font-medium transition hover:bg-red-500"
            >
              View Projects
            </a>

            <a
              href="https://wa.me/6288211925005?text=Halo%20Lugas,%20saya%20tertarik%20untuk%20berkolaborasi%20dengan%20Anda."
              target="_blank"
              class="rounded-xl border border-zinc-700 px-6 py-3 font-medium transition hover:border-zinc-500"
            >
              Let's Collaborate
            </a>
          </div>

          <div class="mt-12 flex flex-wrap gap-3">
            <span
              v-for="tech in techs"
              :key="tech"
              class="rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <!-- Profile -->
        <div class="relative flex justify-center">
          <!-- Circle Glow -->
          <div
            class="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-r from-red-600/30 to-red-900/30 blur-3xl"
          ></div>

          <!-- Image -->
          <img
            src="/images/profile.png"
            alt="Lugas Alhawariy"
            class="rounded-full relative z-10 w-[550px] drop-shadow-[0_0_50px_rgba(220,38,38,0.4)]"
          />

          <!-- Floating Card 1 -->
          <div
            class="absolute top-10 left-0 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-5 py-4 backdrop-blur"
          >
            <p class="text-sm text-zinc-400">Experience</p>
            <p class="font-bold">5+ Years</p>
          </div>

          <!-- Floating Card 2 -->
          <div
            class="absolute bottom-10 right-0 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-5 py-4 backdrop-blur"
          >
            <p class="text-sm text-zinc-400">Projects</p>
            <p class="font-bold">50+</p>
          </div>

          <!-- Floating Card 3 -->
          <div
            class="absolute right-10 top-1/2 rounded-2xl border border-zinc-800 bg-zinc-900/80 px-5 py-4 backdrop-blur"
          >
            <p class="text-sm text-zinc-400">Specialization</p>
            <p class="font-bold">Web & Mobile</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About -->
    <section id="about" class="relative mx-auto max-w-7xl px-6 py-24">
      <div class="max-w-3xl">
        <p class="mb-3 text-red-400">About</p>

        <h2 class="text-4xl font-bold">Turning ideas into digital products.</h2>

        <p class="mt-6 text-lg leading-relaxed text-zinc-400">
          I build web applications, mobile applications, offline-first systems,
          and business solutions. Beyond software development, I am passionate
          about education and creating a stronger digital ecosystem for
          communities and future generations.
        </p>
      </div>
    </section>

    <!-- Projects -->
    <DaftarProject />

    <!-- Contact -->
    <section id="contact" class="relative mx-auto max-w-7xl px-6 py-24">
      <div
        class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-10 text-center"
      >
        <h2 class="text-4xl font-bold">Let's Build Something Great</h2>

        <p class="mx-auto mt-4 max-w-2xl text-zinc-400">
          Interested in collaborating, discussing technology, education, or
          digital transformation?
        </p>

        <a
          href="https://wa.me/6288211925005?text=Halo%20Lugas,%20saya%20melihat%20portfolio%20Anda%20dan%20tertarik%20untuk%20berdiskusi%20mengenai%20kolaborasi%20proyek,%20pengembangan%20aplikasi,%20atau%20transformasi%20digital."
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center gap-3 rounded-xl bg-red-600 px-6 py-3 font-medium transition hover:bg-red-500"
        >
          💬 Let's Collaborate
        </a>
      </div>
    </section>
  </main>
</template>

<script setup>
import DaftarProject from "../components/DaftarProject.vue";

const techs = [
  "Vue.js",
  "Tailwind",
  "Nuxt",
  "Node.js",
  "Fastify",
  "React Native",
  "PostgreSQL",
  "Docker",
  "Redis",
  "RealmDB",
  "SQL Server",
  "MongoDB",
  "Laravel",
  "Nginx",
  "Data Analyst",
  "Integration Maps Leaflet",
  "Integration Payment Gateway",
  "Integration Whatsapp Official/Unofficial",
  "Integration AI (Artificial Intelligent)",
];
</script>

<style>
html {
  scroll-behavior: smooth;
}

.grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}
</style>
