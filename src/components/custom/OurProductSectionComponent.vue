<script setup>
import { ref } from "vue";
import ProductCardComponent from "@/components/custom/ProductCardComponent.vue";

const products = ref([
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/84799dfc26042b501c2f6c44576240bd3207b21a",
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
    discountType: "sale",
    showOverlay: true,
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c4fbd57dea8d219f099111f32b0eae1579dc3d3",
    title: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    showOverlay: true,
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9813692cb017341f66105399dddcc98a5aad6b88",
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    discountType: "sale",
    showOverlay: true,
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/af56a7a258f26d37945ae44ca72354e7640a4cb0",
    title: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    discount: "New",
    discountType: "new",
    showOverlay: true,
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/40ef000581531f7a8e6dd4358de3002775565535",
    title: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    showOverlay: true,
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/39d3895635a93b98c9bd39b4fc5a2a3568b99669",
    title: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    discount: "New",
    discountType: "new",
    showOverlay: true,
  },
  {
    id: 7,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2fc18169454fdc44121177f451f2548722d034c9",
    title: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
    discountType: "sale",
    showOverlay: true,
  },
  {
    id: 8,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4cc59309b429bcf15a1357432d8df61d4165cfe4",
    title: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    discount: "New",
    discountType: "new",
    showOverlay: true,
  },
]);
</script>

<template>
  <section class="px-24 py-10 w-full max-md:px-10 max-sm:px-5">
    <h1 class="mb-10 text-4xl font-bold text-center text-neutral-700 max-md:text-3xl max-sm:text-3xl">
      Our Products
    </h1>
    <div class="grid grid-cols-4 gap-8 max-md:grid-cols-2 max-sm:grid-cols-1">
      <product-card-component
        v-for="product in products"
        :key="product.id"
        v-bind="product"
      />
    </div>
    <div class="flex justify-center mt-8">
      <button
        class="h-12 font-semibold text-yellow-600 bg-white border border-yellow-600 w-[245px] hover:bg-yellow-50 transition-colors">
        Show More
      </button>
    </div>
  </section>
</template>
