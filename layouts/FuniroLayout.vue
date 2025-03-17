<script setup>
import NavbarComponent from "@/components/custom/Navigation/NavbarComponent.vue"
import FooterComponent from '@/components/custom/FooterComponent.vue';
</script>

<template>
    <div>
        <navbar-component />
        <slot />
        <footer-component />
    </div>
</template>