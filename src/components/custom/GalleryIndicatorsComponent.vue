<template>
    <div
      class="flex gap-5 justify-center items-center"
      role="tablist"
      aria-label="Gallery navigation"
    >
      <button
        v-for="index in totalSlides"
        :key="index"
        role="tab"
        :aria-selected="currentSlide === index - 1"
        :aria-label="`View slide ${index}`"
        :class="[
          'transition-all focus:outline-none focus:ring-2 focus:ring-yellow-600',
          currentSlide === index - 1
            ? 'relative h-[26px] w-[26px]'
            : 'rounded-full bg-zinc-300 h-[11px] w-[11px] hover:bg-zinc-400',
        ]"
        @click="$emit('change', index - 1)"
        @keydown.enter="$emit('change', index - 1)"
        @keydown.space.prevent="$emit('change', index - 1)"
      >
        <template v-if="currentSlide === index - 1">
          <div
            class="rounded-full border border-yellow-600 opacity-70 h-[26px] w-[26px]"
          ></div>
          <div
            class="absolute top-2/4 left-2/4 w-2.5 h-2.5 bg-yellow-600 rounded-full -translate-x-2/4 -translate-y-2/4"
          ></div>
        </template>
      </button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    currentSlide: {
      type: Number,
      required: true,
    },
    totalSlides: {
      type: Number,
      required: true,
    },
  });
  
  defineEmits(["change"]);
  </script>
  