<template>
  <nav class="flex gap-20 mx-auto my-0 max-md:gap-10 max-sm:hidden">
    <router-link
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      custom
      v-slot="{ navigate, isActive }"
    >
      <a
        @click="navigate"
        @keypress.enter="navigate"
        :class="[
          'text-base font-medium cursor-pointer transition-colors relative',
          isActive
            ? 'text-primary after:content-[\'\'] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary'
            : 'text-black hover:text-yellow-700',
        ]"
        role="link"
        tabindex="0"
      >
        {{ route.name }}
      </a>
    </router-link>
  </nav>
</template>

<script setup>
defineProps({
  routes: {
    type: Array,
    required: true,
    default: () => [],
  },
  isMenuOpen: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.text-primary {
  @apply text-yellow-700;
}

.router-link-active {
  @apply text-primary;
}

/* Route transition animations */
.route-enter-active,
.route-leave-active {
  transition: opacity 0.3s ease;
}

.route-enter-from,
.route-leave-to {
  opacity: 0;
}
</style>
