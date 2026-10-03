<script setup>
defineProps({ value: String, title: String, description: String });
</script>

<template>
  <div class="rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6">
    <p class="font-mono text-2xl font-bold text-red-400">{{ value }}</p>
    <h3 class="mt-3 font-bold">{{ title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-zinc-500">{{ description }}</p>
  </div>
</template>