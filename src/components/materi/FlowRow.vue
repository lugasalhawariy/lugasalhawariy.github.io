<script setup>
defineProps({ number: String, title: String, description: String });
</script>

<template>
  <div class="flex gap-5 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
    <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 font-mono text-sm text-red-400">{{ number }}</div>
    <div>
      <h3 class="font-bold">{{ title }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-zinc-500">{{ description }}</p>
    </div>
  </div>
</template>