<script setup>
defineProps({ number: String, title: String, description: String });
</script>

<template>
  <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
    <span class="font-mono text-sm text-red-400">{{ number }}</span>
    <h3 class="mt-3 font-bold">{{ title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-zinc-500">{{ description }}</p>
  </div>
</template>