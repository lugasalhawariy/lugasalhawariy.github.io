<script setup>
import { projects } from "../../data/projects.js";
</script>

<template>
  <section id="projects" class="relative mx-auto max-w-7xl px-6 py-24">
    <p class="mb-3 text-red-400">Projects</p>

    <h2 class="mb-12 text-4xl font-bold">Featured Work</h2>

    <div class="grid gap-6 md:grid-cols-3">
      <RouterLink
        :to="`/project/${project.id}`"
        v-for="project in projects"
        :key="project.title"
        class="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur"
      >
        <div class="flex h-64 items-center justify-center bg-zinc-900">
          <img
            :src="project.thumbnail"
            class="max-h-full max-w-full object-contain"
          />
        </div>

        <h3 class="text-xl font-semibold mt-2">
          {{ project.title }}
        </h3>

        <p class="mt-3 text-zinc-400">
          {{ project.overview }}
        </p>
      </RouterLink>
    </div>
  </section>
</template>

<!-- <template>
  <div class="min-h-screen bg-zinc-950 text-white">
    <div class="mx-auto max-w-7xl px-6 py-24">
      <h1 class="text-5xl font-black">My Projects</h1>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <RouterLink
          v-for="project in projects"
          :key="project.id"
          :to="`/project/${project.id}`"
          class="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900"
        >
          <img
            :src="project.thumbnail"
            class="aspect-video w-full object-cover"
          />

          <div class="p-6">
            <h2 class="text-xl font-semibold">
              {{ project.title }}
            </h2>

            <p class="mt-2 text-zinc-400">
              {{ project.category }}
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template> -->
