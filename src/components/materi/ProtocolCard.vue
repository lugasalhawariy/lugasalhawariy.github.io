<script setup>
defineProps({ title: String, icon: String, fullName: String, description: String, example: String });
</script>

<template>
  <article class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-7 transition hover:-translate-y-1 hover:border-red-500/30">
    <div class="flex items-center justify-between">
      <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-3xl">{{ icon }}</div>
      <span class="font-mono text-red-400">{{ title }}</span>
    </div>
    <h3 class="mt-6 text-xl font-bold">{{ fullName }}</h3>
    <p class="mt-3 text-sm leading-relaxed text-zinc-500">{{ description }}</p>
    <div class="mt-6 rounded-xl border border-zinc-800 bg-zinc-950 p-4">
      <p class="text-xs text-zinc-600">Contoh</p>
      <p class="mt-2 font-mono text-sm text-zinc-300">{{ example }}</p>
    </div>
  </article>
</template>