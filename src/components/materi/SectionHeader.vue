<script setup>
defineProps({ number: String, eyebrow: String, title: String, description: String });
</script>

<template>
  <div class="max-w-3xl">
    <div class="flex items-center gap-3">
      <span class="font-mono text-sm text-red-400">{{ number }}</span>
      <span class="h-px w-10 bg-red-500/40"></span>
      <span class="text-sm uppercase tracking-[0.2em] text-zinc-500">{{ eyebrow }}</span>
    </div>
    <h2 class="mt-5 text-4xl font-black leading-tight md:text-5xl">{{ title }}</h2>
    <p class="mt-5 text-lg leading-relaxed text-zinc-500">{{ description }}</p>
  </div>
</template>