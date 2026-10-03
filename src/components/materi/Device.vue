<template>
  <div
    class="flex items-center justify-center rounded-2xl
    border px-6 py-5 text-center transition"
    :class="
      active
        ? 'border-red-500/30 bg-red-500/10'
        : 'border-zinc-800 bg-zinc-900/50'
    "
  >
    <div>
      <div class="text-2xl">
        {{ active ? "🔀" : "💻" }}
      </div>

      <p
        class="mt-2 text-sm font-medium"
        :class="active ? 'text-red-300' : 'text-zinc-400'"
      >
        {{ label }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
    default: false,
  },
});
</script>