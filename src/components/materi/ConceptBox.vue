<script setup>
defineProps({ title: String });
</script>

<template>
  <div class="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-7">
    <h3 class="text-xl font-bold">{{ title }}</h3>
    <div class="mt-5"><slot /></div>
  </div>
</template>