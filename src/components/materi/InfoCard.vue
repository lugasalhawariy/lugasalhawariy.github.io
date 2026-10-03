<template>
  <div
    class="rounded-2xl border border-zinc-800
    bg-zinc-900/50 p-6 transition hover:border-red-500/30"
  >
    <div
      class="flex h-12 w-12 items-center justify-center
      rounded-xl border border-zinc-800 bg-zinc-950 text-xl"
    >
      {{ icon }}
    </div>

    <h3 class="mt-5 font-semibold">
      {{ title }}
    </h3>

    <p class="mt-2 text-sm leading-6 text-zinc-500">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: "📦",
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
});
</script>