<script setup>
import CategoryCardComponent from "@/components/custom/CategoryCardComponent.vue"

const categories = [
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0544ac8a6631bf0180fd7b7d997b446eecc76753",
    altText: "Dining room",
    title: "Dining",
    route: "/category/dining",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/81cc885fbd1adc6599ed3e840862fed8d3b6380e",
    altText: "Living room",
    title: "Living",
    route: "/category/living",
  },
  {
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/caff5b3996df2973fceda988b346b4b39cfb4b5b",
    altText: "Bedroom",
    title: "Bedroom",
    route: "/category/bedroom",
  },
];
</script>

<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <section class="px-5 py-10 mx-auto my-0 max-w-[1200px]">
    <header class="mb-16 text-center">
      <h2 class="mb-4 text-3xl font-bold text-zinc-800 max-sm:text-2xl">
        Browse The Range
      </h2>
      <p class="text-xl text-stone-500 max-sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </header>

    <div class="flex gap-5 justify-between max-md:flex-col max-md:items-center">
      <category-card-component
        v-for="category in categories"
        :key="category.title"
        v-bind="category"
      />
    </div>
  </section>
</template>