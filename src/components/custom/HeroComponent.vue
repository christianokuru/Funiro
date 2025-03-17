<script setup>
defineOptions({
  name: "PromotionalBanner",
});
</script>

<template>
  <section
    class="flex relative flex-col justify-center items-end px-20 py-36 w-full min-h-[717px] max-md:px-5 max-md:py-24 max-md:max-w-full"
    aria-label="New Collection Promotion"
  >
    <img
      src="https://cdn.builder.io/api/v1/image/assets/ac1a5274091f4cd1bac1024150113a35/4f33e33e2d4ecc50b25d655e909654eb77b4df38810631e101b1ba46a6b37154?placeholderIfAbsent=true"
      alt="New Collection Background"
      class="object-cover absolute inset-0 size-full"
      aria-hidden="true"
    />
    <article
      class="flex relative flex-col items-start pt-16 pr-20 pb-9 pl-10 mb-0 max-w-full bg-yellow-50 rounded-xl w-[643px] max-md:px-5 max-md:mb-2.5"
    >
      <span class="font-semibold tracking-[3px] uppercase"> New Arrival </span>
      <h2
        class="mt-1 text-5xl text-yellow-600 leading-[65px] max-md:text-4xl max-md:leading-[55px]"
      >
        Discover Our New Collection
      </h2>
      <p
        class="self-stretch mt-9 text-lg font-medium leading-6 max-md:max-w-full"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis.
      </p>
      <button
        class="gap-2.5 px-20 py-6 mt-14 text-white uppercase bg-yellow-600 hover:bg-yellow-700 transition-colors duration-300 max-md:px-5 max-md:mt-10"
        aria-label="Buy Now - View New Collection"
      >
        Buy Now
      </button>
    </article>
  </section>
</template>