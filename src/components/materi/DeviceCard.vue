<script setup>
import { computed } from "vue";
const props = defineProps({ title: String, icon: String, description: String, points: String });
const pointList = computed(() => props.points.split(";"));
</script>

<template>
  <article class="group rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:-translate-y-1 hover:border-red-500/30">
    <div class="flex items-center justify-between">
      <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-3xl">{{ icon }}</div>
      <span class="text-xs uppercase tracking-widest text-zinc-600">Network Device</span>
    </div>
    <h3 class="mt-6 text-2xl font-bold transition group-hover:text-red-400">{{ title }}</h3>
    <p class="mt-3 text-sm leading-relaxed text-zinc-500">{{ description }}</p>
    <div class="mt-6 space-y-2">
      <div v-for="point in pointList" :key="point" class="flex items-center gap-2 text-sm text-zinc-400">
        <span class="text-red-400">✓</span>{{ point }}
      </div>
    </div>
  </article>
</template>