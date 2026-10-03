<script setup>
defineProps({ text: String });
</script>

<template>
  <div class="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
    <div class="flex gap-3">
      <span class="text-red-400">→</span>
      <p class="text-sm leading-relaxed text-zinc-400">{{ text }}</p>
    </div>
  </div>
</template>