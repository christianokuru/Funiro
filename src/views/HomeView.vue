<script setup>
import HeroComponent from "@/components/custom/HeroComponent.vue"
import BrowseRangeComponent from "@/components/custom/BrowseRangeComponent.vue"
import OurProductSectionComponent from "@/components/custom/OurProductSectionComponent.vue"
import RoomInspirationSectionComponent from "@/components/custom/RoomInspirationSectionComponent.vue"
import PictureGalleryComponent from "@/components/custom/PictureGalleryComponent.vue"
</script>

<template>
  <main class="flex overflow-hidden flex-col bg-white">
        <HeroComponent />
        <browse-range-component />
        <our-product-section-component />
        <room-inspiration-section-component />
        <picture-gallery-component />
  </main>
</template>

