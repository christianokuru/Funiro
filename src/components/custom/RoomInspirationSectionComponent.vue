<script setup>
import ImageGalleryComponent from "@/components/custom/ImageGalleryComponent.vue";
</script>

<template>
    <section
      class="px-20 py-11 w-full bg-red-50 max-md:px-10 max-sm:px-5"
      aria-label="Room Inspiration Gallery"
    >
      <div class="flex max-md:flex-col">
        <article
          class="flex flex-col max-w-[345px] max-md:mb-10 max-md:max-w-full"
        >
          <header class="mb-10">
            <h1
              class="text-4xl font-bold leading-10 text-neutral-700 max-md:text-3xl max-sm:text-3xl"
            >
              50+ Beautiful rooms inspiration
            </h1>
            <p class="mt-5 text-base font-medium leading-6 text-zinc-600">
              Our designer already made a lot of beautiful prototipe of rooms that
              inspire you
            </p>
          </header>
          <button
            class="w-36 h-12 text-base font-semibold text-white bg-yellow-600 hover:bg-yellow-700 transition-colors cursor-pointer max-sm:w-full"
            aria-label="Explore More Room Inspirations"
          >
            Explore More
          </button>
        </article>
  
        <image-gallery-component class="flex-1 pl-10" />
      </div>
    </section>
  </template>
  

  