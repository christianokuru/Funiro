<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  altText: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
});

const navigateToCategory = () => {
  router.push(props.route);

  // Remember to add routes to the different categories
};
</script>

<template>
  <article
    @click="navigateToCategory"
    class="flex flex-col items-center transition-all duration-300 ease-in-out hover:scale-[1.02] cursor-pointer group"
    :aria-label="`Browse ${title} category`"
    role="button"
    tabindex="0"
    @keydown.enter="navigateToCategory"
  >
    <div
      class="overflow-hidden mb-8 transition-shadow duration-300 hover:shadow-xl rounded-lg"
    >
      <img
        :src="image"
        :alt="altText"
        class="object-cover h-[480px] w-[381px] max-md:w-full max-md:h-auto max-md:max-w-[500px] max-sm:max-w-full transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <h3
      class="text-2xl font-semibold text-zinc-800 max-sm:text-xl transition-colors duration-300 group-hover:text-yellow-700"
    >
      {{ title }}
    </h3>
  </article>
</template>
