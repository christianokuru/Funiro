<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "sale",
  },
});
</script>

<template>
    <div class="w-12 h-12">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="w-full h-full"
      >
        <circle
          cx="24"
          cy="24"
          r="24"
          :fill="type === 'new' ? '#2EC1AC' : '#E97171'"
        />
        <text
          fill="white"
          x="50%"
          y="29.6"
          text-anchor="middle"
          style="font-family: Poppins; font-size: 16px; font-weight: 500"
        >
          {{ label }}
        </text>
      </svg>
    </div>
  </template>
  

  