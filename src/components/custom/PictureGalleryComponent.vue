<script setup>
const images = [
  {
    src: "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Shelf with decorative items",
    gridClass: "col-span-2 row-span-2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/037fc4cd525275c6084b7b76cefbc2950b7f055c",
    alt: "Desk setup with laptop and vintage radio",
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/27ce44a7e48173db7ee7c59e593a4c4081db4913",
    alt: "Dining area with table and chairs",
    gridClass: "col-span-2 row-span-2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/3e126be58ae1ef41ac00ea9ac90822a153a39ed7",
    alt: "Modern bedroom with bed",
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Kitchen counter with bar stools",
    gridClass: "col-span-2 row-span-2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f8081452bc7a544512ec0d5417cd47d0c7b8f99",
    alt: "Vintage armchair",
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1665ada789bd9c1ea814197afc680ac00735c37e",
    alt: "Side tables with decor",
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/34535cf6352934472626f186ed8916068be8f09f",
    alt: "Wall decor with frame",
    gridClass: "col-span-1 row-span-1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4c9c0fc8e65451e5f91fba48321a70bee733bde",
    alt: "Kitchen shelving",
    gridClass: "col-span-1 row-span-1",
  },
];
</script>

<template>
  <section
    class="hidden md:block relative px-5 py-10 mx-auto my-0 w-full max-w-[1800px]"
  >
    <!-- Gallery Header -->
    <header class="mb-16 text-center max-sm:mb-10">
      <p
        class="mb-2 text-xl font-semibold text-zinc-600 max-md:text-lg max-sm:text-base"
      >
        Share your setup with
      </p>
      <h1
        class="text-4xl font-bold text-neutral-700 max-md:text-3xl max-sm:text-3xl"
      >
        #FuniroFurniture
      </h1>
    </header>

    <!-- Bento Grid -->
    <div
      class="grid grid-cols-6 gap-4 auto-rows-[200px]"
      role="grid"
      aria-label="Photo gallery grid"
    >
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.src"
        :alt="image.alt"
        :class="['object-cover w-full h-full rounded', image.gridClass]"
      />
    </div>
  </section>
</template>