<template>
    <button
      class="flex justify-center items-center h-12 bg-white rounded-full shadow-sm cursor-pointer w-[39px] hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-600"
      aria-label="Next slide"
      @click="$emit('click')"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#B88E2F"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M9 18l6-6-6-6"></path>
      </svg>
    </button>
  </template>
  
  <script setup>
  defineEmits(["click"]);
  </script>
  