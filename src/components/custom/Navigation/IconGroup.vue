<script setup>
import AccountIcon from "@/assets/icons/AccountIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import CartIcon from "@/assets/icons/CartIcon.vue";
</script>

<template>
  <div class="flex gap-11 items-center max-sm:gap-6">
    <button type="button" aria-label="Account">
      <account-icon />
    </button>
    <button type="button" aria-label="Search">
      <search-icon />
    </button>
    <button type="button" aria-label="Favorites">
      <heart-icon />
    </button>
    <button type="button" aria-label="Shopping Cart">
      <cart-icon />
    </button>
  </div>
</template>


