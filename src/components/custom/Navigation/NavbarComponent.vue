<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useRoute } from "vue-router";
import Logo from "@/components/custom/Navigation/Logo.vue";
import Navigation from "@/components/custom/Navigation/Navigation.vue";
import IconGroup from "@/components/custom/Navigation/IconGroup.vue";
import MenuIcon from "@/assets/icons/MenuIcon.vue";
const route = useRoute();
const isMenuOpen = ref(false);

const navigationRoutes = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
};

// Handle escape key
const handleEscape = (e) => {
  if (e.key === "Escape" && isMenuOpen.value) {
    toggleMenu();
  }
};

// Cleanup
onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", handleEscape);
});
</script>

<template>
  <header
    class="flex justify-center items-center w-full bg-white h-[100px] max-sm:h-[70px]"
  >
    <div
      class="flex justify-between items-center px-14 py-0 w-full max-w-[1286px] max-md:px-8 max-md:py-0 max-sm:px-5 max-sm:py-0"
    >
      <Logo />
      <Navigation :routes="navigationRoutes" :isMenuOpen="isMenuOpen" />
      <IconGroup />
      <button
        type="button"
        aria-label="Toggle mobile menu"
        class="hidden max-sm:block"
        @click="toggleMenu"
      >
        <MenuIcon class="max-sm:text-2xl max-sm:text-black" />
      </button>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
      @click="toggleMenu"
    ></div>

    <!-- Mobile Navigation Menu -->
    <div
      :class="[
        'fixed right-0 top-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out z-50',
        isMenuOpen ? 'translate-x-0' : 'translate-x-full',
      ]"
      class="lg:hidden"
    >
      <div class="p-4">
        <button
          class="mb-4 text-black"
          @click="toggleMenu"
          aria-label="Close menu"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <nav class="flex flex-col gap-4">
          <router-link
            v-for="route in navigationRoutes"
            :key="route.name"
            :to="route.path"
            custom
            v-slot="{ navigate, isActive }"
          >
            <a
              @click="navigate"
              @keypress.enter="navigate"
              :class="[
                'text-base font-medium cursor-pointer text-left p-2 rounded transition-colors',
                isActive
                  ? 'bg-gray-100 text-primary'
                  : 'text-black hover:bg-gray-50',
              ]"
              role="link"
              tabindex="0"
              @click.stop="toggleMenu"
            >
              {{ route.name }}
            </a>
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
.router-link-active {
  @apply text-primary;
}

.text-primary {
  @apply text-blue-600;
}
</style>

  
 
