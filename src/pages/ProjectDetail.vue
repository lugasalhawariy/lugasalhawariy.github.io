<script setup>
import { computed, ref } from "vue";
import { projects } from "../../data/projects.js";
import { useRoute } from "vue-router";

const selectedImage = ref(null);
const route = useRoute();

// nanti bisa diganti pakai route.params.id
const projectId = route.params.id;

const project = computed(() => projects.find((p) => p.id === projectId));
</script>

<template>
  <main v-if="project" class="min-h-screen bg-zinc-950 text-white">
    <!-- HERO -->
    <section class="relative overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-b from-red-500/20 via-transparent to-transparent"
      />

      <div
        class="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-500/20 blur-[150px]"
      />

      <div class="relative mx-auto max-w-7xl px-6 py-32">
        <div class="flex flex-wrap gap-3">
          <span
            class="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300"
          >
            {{ project.category }}
          </span>

          <span
            class="rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-400"
          >
            {{ project.year }}
          </span>

          <span
            class="rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300"
          >
            {{ project.status }}
          </span>
        </div>

        <h1 class="mt-8 text-5xl font-black md:text-7xl">
          {{ project.title }}
        </h1>

        <p class="mt-4 text-xl font-medium text-red-300">
          {{ project.tagline }}
        </p>

        <p class="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400">
          {{ project.overview }}
        </p>
      </div>
    </section>

    <!-- COVER -->
    <section class="mx-auto max-w-7xl px-6">
      <div
        class="mx-auto w-[320px] rounded-[40px] border border-zinc-700 bg-black p-3 shadow-2xl"
      >
        <img
          :src="project.thumbnail"
          :alt="project.title"
          class="max-h-[700px] max-w-full rounded-3xl object-contain"
        />
      </div>
    </section>

    <!-- METRICS -->
    <section class="mx-auto max-w-7xl px-6 py-24">
      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="metric in project.metrics"
          :key="metric.label"
          class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-8"
        >
          <div class="text-sm text-zinc-500">
            {{ metric.label }}
          </div>

          <div class="mt-3 text-3xl font-bold">
            {{ metric.value }}
          </div>
        </div>
      </div>
    </section>

    <!-- MY ROLE -->
    <section class="mx-auto max-w-7xl px-6 py-16">
      <h2 class="mb-8 text-4xl font-bold">My Role</h2>

      <div class="flex flex-wrap gap-4">
        <div
          v-for="role in project.myRole"
          :key="role"
          class="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3"
        >
          {{ role }}
        </div>
      </div>
    </section>

    <!-- HIGHLIGHTS -->
    <section class="mx-auto max-w-7xl px-6 py-16">
      <h2 class="mb-10 text-4xl font-bold">Highlights</h2>

      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="item in project.highlights"
          :key="item"
          class="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
        >
          {{ item }}
        </div>
      </div>
    </section>

    <!-- CHALLENGE & SOLUTION -->
    <section class="mx-auto max-w-7xl px-6 py-20">
      <div class="grid gap-8 md:grid-cols-2">
        <div class="rounded-3xl border border-zinc-800 p-8">
          <h3 class="text-2xl font-bold">Challenge</h3>

          <p class="mt-6 leading-relaxed text-zinc-400">
            {{ project.problem }}
          </p>
        </div>

        <div class="rounded-3xl border border-zinc-800 p-8">
          <h3 class="text-2xl font-bold">Solution</h3>

          <p class="mt-6 leading-relaxed text-zinc-400">
            {{ project.solution }}
          </p>
        </div>
      </div>
    </section>

    <!-- TECHNOLOGY -->
    <section class="mx-auto max-w-7xl px-6 py-20">
      <h2 class="mb-10 text-4xl font-bold">Technology Stack</h2>

      <div class="flex flex-wrap gap-4">
        <div
          v-for="tech in project.technologies"
          :key="tech"
          class="rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-3"
        >
          {{ tech }}
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="mx-auto max-w-7xl px-6 py-20">
      <h2 class="mb-10 text-4xl font-bold">Features</h2>

      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="feature in project.features"
          :key="feature"
          class="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
        >
          {{ feature }}
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="mx-auto max-w-7xl px-6 py-20">
      <h2 class="mb-10 text-4xl font-bold">Gallery</h2>

      <div class="grid gap-8 md:grid-cols-2">
        <div
          v-for="image in project.gallery"
          :key="image"
          class="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50"
        >
          <div
            class="mx-auto w-[320px] rounded-[40px] border border-zinc-700 bg-black p-3 shadow-2xl"
          >
            <img
              :src="image"
              class="max-h-full max-w-full cursor-pointer rounded-2xl object-contain transition duration-300 group-hover:scale-105"
              @click="selectedImage = image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- TIMELINE -->
    <section class="mx-auto max-w-5xl px-6 py-20">
      <h2 class="mb-10 text-4xl font-bold">Development Journey</h2>

      <div class="space-y-6">
        <div
          v-for="item in project.timeline"
          :key="item.title"
          class="rounded-3xl border border-zinc-800 p-6"
        >
          <h3 class="text-xl font-semibold">
            {{ item.title }}
          </h3>

          <p class="mt-3 text-zinc-400">
            {{ item.description }}
          </p>
        </div>
      </div>
    </section>

    <!-- ACHIEVEMENTS -->
    <section class="mx-auto max-w-7xl px-6 py-20">
      <h2 class="mb-10 text-4xl font-bold">Achievements</h2>

      <div class="grid gap-6 md:grid-cols-2">
        <div
          v-for="achievement in project.achievements"
          :key="achievement"
          class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6"
        >
          ✅ {{ achievement }}
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="mx-auto max-w-7xl px-6 py-32">
      <div
        class="rounded-[32px] border border-zinc-800 bg-zinc-900/50 p-12 text-center"
      >
        <h2 class="text-4xl font-bold">Interested in this project?</h2>

        <p class="mx-auto mt-6 max-w-2xl text-zinc-400">
          Let's discuss technology, architecture, or future collaboration
          opportunities.
        </p>

        <button
          class="mt-10 rounded-xl bg-red-600 px-8 py-4 font-medium transition hover:bg-red-500"
        >
          Contact Me
        </button>
      </div>
    </section>

    <!-- LIGHTBOX -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-8"
      @click="selectedImage = null"
    >
      <img :src="selectedImage" class="max-h-full max-w-full rounded-3xl" />
    </div>
  </main>
</template>
