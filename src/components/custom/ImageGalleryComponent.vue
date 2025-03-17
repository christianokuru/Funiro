<script setup>
  import { ref, computed } from "vue";
  import GalleryIndicatorsComponent from "@/components/custom/GalleryIndicatorsComponent.vue";
import NavigationButtonComponent from "@/components/custom/NavigationButtonComponent.vue";

  
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Beautiful bedroom interior design showcase",
      category: "Bed Room",
      title: "Inner Peace",
    },
    {
      image:
        "https://images.unsplash.com/photo-1601002257790-ebe0966a85ae?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Stylish living room design inspiration",
      category: "Living Room",
      title: "Modern Comfort",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Contemporary kitchen design showcase",
      category: "Kitchen",
      title: "Culinary Haven",
    },
  ];
  
  const currentSlide = ref(0);
  const touchStart = ref(null);
  const touchEnd = ref(null);
  const transitionName = ref("slide-right");
  const ariaAnnouncement = computed(
    () =>
      `Showing slide ${currentSlide.value + 1} of ${slides.length}: ${slides[currentSlide.value].title}`,
  );
  
  const nextSlide = () => {
    transitionName.value = "slide-left";
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  };
  
  const previousSlide = () => {
    transitionName.value = "slide-right";
    currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
  };
  
  const goToSlide = (index) => {
    transitionName.value =
      index > currentSlide.value ? "slide-left" : "slide-right";
    currentSlide.value = index;
  };
  
  const handleKeydown = (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
        e.preventDefault();
        nextSlide();
        break;
      case "ArrowLeft":
      case "ArrowUp":
        e.preventDefault();
        previousSlide();
        break;
    }
  };
  
  const handleTouchStart = (e) => {
    touchStart.value = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e) => {
    touchEnd.value = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    if (!touchStart.value || !touchEnd.value) return;
  
    const distance = touchStart.value - touchEnd.value;
    const minSwipeDistance = 50;
  
    if (Math.abs(distance) < minSwipeDistance) return;
  
    if (distance > 0) {
      nextSlide();
    } else {
      previousSlide();
    }
  
    touchStart.value = null;
    touchEnd.value = null;
  };
  </script>

<template>
    <div
      class="relative"
      @keydown="handleKeydown"
      tabindex="0"
      role="region"
      aria-label="Image carousel"
    >
      <div
        class="flex gap-5 max-md:flex-wrap overflow-hidden"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        <Transition :name="transitionName" mode="out-in">
          <article :key="currentSlide" class="relative flex-1 min-w-full">
            <img
              :src="slides[currentSlide].image"
              :alt="slides[currentSlide].alt"
              class="w-full h-[582px] object-cover max-lg:h-[400px] max-sm:h-[300px]"
            />
            <div
              class="absolute bottom-5 p-6 backdrop-blur-[1.5px] bg-white bg-opacity-70 left-[18px]"
            >
              <div
                class="flex gap-2 items-center text-base font-medium text-zinc-600"
              >
                <span>{{ String(currentSlide + 1).padStart(2, "0") }}</span>
                <div class="h-px bg-zinc-600 w-[27px]" aria-hidden="true"></div>
                <span>{{ slides[currentSlide].category }}</span>
              </div>
              <h2 class="mt-3.5 text-3xl font-semibold text-neutral-700">
                {{ slides[currentSlide].title }}
              </h2>
            </div>
          </article>
        </Transition>
  
        <article class="flex-1 max-md:hidden">
          <img
            :src="slides[(currentSlide + 1) % slides.length].image"
            :alt="slides[(currentSlide + 1) % slides.length].alt"
            class="w-full h-[486px] object-cover"
          />
        </article>
  
        <article class="flex-1 max-md:hidden">
          <img
            :src="slides[(currentSlide + 2) % slides.length].image"
            :alt="slides[(currentSlide + 2) % slides.length].alt"
            class="w-full h-[486px] object-cover"
          />
        </article>
      </div>
  
      <div role="status" aria-live="polite" class="sr-only">
        {{ ariaAnnouncement }}
      </div>
  
      <gallery-indicators-component
        :current-slide="currentSlide"
        :total-slides="slides.length"
        @change="goToSlide"
        class="mt-10"
      />
  
      <navigation-button-component
        class="absolute -right-5 top-2/4 -translate-y-2/4 max-md:hidden"
        @click="nextSlide"
      />
    </div>
  </template>
  
  
  
  <style scoped>
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: transform 0.5s ease-in-out;
  }
  
  .slide-left-enter-from {
    transform: translateX(100%);
  }
  
  .slide-left-leave-to {
    transform: translateX(-100%);
  }
  
  .slide-right-enter-from {
    transform: translateX(-100%);
  }
  
  .slide-right-leave-to {
    transform: translateX(100%);
  }
  </style>
  
  
 
