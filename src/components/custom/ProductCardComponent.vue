<script setup>
import DiscountBadgeComponent from "@/components/custom/DiscountBadgeComponent.vue";
import ProductOverlayComponent from "@/components/custom/ProductOverlayComponent.vue";

defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  originalPrice: {
    type: String,
    default: "",
  },
  discount: {
    type: String,
    default: "",
  },
  discountType: {
    type: String,
    default: "",
  },
  showOverlay: {
    type: Boolean,
    default: false,
  },
});
</script>


<template>
    <article class="relative">
      <div class="relative group">
        <img :src="image" :alt="title" class="w-full h-[301px] object-cover" />
        <discount-badge-component
          v-if="discount"
          :label="discount"
          :type="discountType"
          class="absolute top-6 right-6"
        />
        <product-overlay-component v-if="showOverlay" />
      </div>
      <div class="p-4 bg-gray-100">
        <div class="mb-2">
          <h2 class="text-2xl font-bold text-neutral-700">{{ title }}</h2>
          <p class="text-base text-zinc-500">{{ description }}</p>
        </div>
        <div class="flex gap-4 items-center">
          <span class="text-xl font-semibold text-neutral-700">{{ price }}</span>
          <span
            v-if="originalPrice"
            class="text-base line-through text-zinc-400"
            >{{ originalPrice }}</span
          >
        </div>
      </div>
    </article>
  </template>
  
