<script setup>
defineProps({ title: String, address: String, icon: String });
</script>

<template>
  <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 text-center">
    <div class="text-4xl">{{ icon }}</div>
    <h4 class="mt-3 font-bold">{{ title }}</h4>
    <p class="mt-2 font-mono text-xs text-red-400">{{ address }}</p>
  </div>
</template>