<script setup>
import { knowledge } from "../../data/knowledge.js";
</script>

<template>
  <section id="knowledge" class="relative mx-auto max-w-7xl px-6 py-24">
    <p class="mb-3 text-red-400">Knowledge</p>

    <h2 class="mb-12 text-4xl font-bold">
      Learning & Knowledge
    </h2>

    <div class="grid gap-6 md:grid-cols-3">
      <RouterLink
        v-for="item in knowledge"
        :key="item.id"
        :to="`/knowledge/${item.slug}`"
        class="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-red-500/30"
      >
        <!-- Thumbnail / Icon -->
        <div
          class="flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-zinc-900"
        >
          <img
            v-if="item.thumbnail"
            :src="item.thumbnail"
            :alt="item.title"
            class="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-105"
          />

          <div
            v-else
            class="text-7xl"
          >
            {{ item.icon || "📚" }}
          </div>
        </div>

        <!-- Content -->
        <div class="mt-5">
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in item.tags || []"
              :key="tag"
              class="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400"
            >
              {{ tag }}
            </span>
          </div>

          <h3
            class="mt-4 text-xl font-semibold transition group-hover:text-red-400"
          >
            {{ item.title }}
          </h3>

          <p class="mt-3 leading-relaxed text-zinc-400">
            {{ item.overview }}
          </p>

          <div
            class="mt-5 flex items-center gap-2 text-sm font-medium text-red-400"
          >
            Learn More

            <span class="transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </div>
      </RouterLink>
    </div>
  </section>
</template>