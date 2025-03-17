<script setup>
import AccountIcon from "@/assets/icons/AccountIcon.vue";
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import HeartIcon from "@/assets/icons/HeartIcon.vue";
import CartIcon from "@/assets/icons/CartIcon.vue";
</script>

<template>
  <div class="flex gap-11 items-center max-sm:gap-6">
    <button type="button" aria-label="Account">
      <AccountIcon />
    </button>
    <button type="button" aria-label="Search">
      <SearchIcon />
    </button>
    <button type="button" aria-label="Favorites">
      <HeartIcon />
    </button>
    <button type="button" aria-label="Shopping Cart">
      <CartIcon />
    </button>
  </div>
</template>


