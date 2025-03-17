<template>
    <Transition name="fade">
      <div
        v-if="notification.show"
        :class="[
          'fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 flex items-center gap-2',
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500',
        ]"
      >
        <svg
          v-if="notification.type === 'success'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span class="text-white">{{ notification.message }}</span>
      </div>
    </Transition>
  </template>
  
  <script setup>
  import { storeToRefs } from "pinia";
  import { useProductStore } from "../stores/productStore";
  
  const store = useProductStore();
  const { cartNotification: notification } = storeToRefs(store);
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  </style>
  