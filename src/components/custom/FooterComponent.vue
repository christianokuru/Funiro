<script setup>
import { ref } from "vue";

const linksItems = ["Home", "Shop", "About", "Contact"];
const helpItems = ["Payment Options", "Returns", "Privacy Policies"];

const email = ref("");
const isLoading = ref(false);
const error = ref("");
const success = ref(false);
const formRef = ref(null);

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleSubscribe = async () => {
  error.value = "";
  success.value = false;

  if (!email.value) {
    error.value = "Please enter your email address";
    return;
  }

  if (!validateEmail(email.value)) {
    error.value = "Please enter a valid email address";
    return;
  }

  try {
    isLoading.value = true;
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    success.value = true;
    email.value = "";
  } catch (e) {
    error.value = "Failed to subscribe. Please try again.";
  } finally {
    isLoading.value = false;
  }
};

const handleKeyDown = (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSubscribe();
  }
};
</script>

<template>
  <footer
    class="flex flex-col items-start px-20 py-11 w-full bg-white border-t border-black border-opacity-20 max-md:px-5 max-md:max-w-full"
  >
    <div
      class="flex flex-wrap gap-10 items-start w-full max-w-[1133px] max-md:max-w-full"
    >
      <!-- Company Info -->
      <section class="flex flex-col">
        <h1 class="self-start text-2xl font-bold text-black">Funiro.</h1>
        <address
          class="mt-12 text-base text-neutral-400 max-md:mt-10 not-italic"
        >
          400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA
        </address>
      </section>

      <!-- Links Navigation -->
      <nav
        class="flex flex-col items-start text-base font-medium text-black whitespace-nowrap"
      >
        <h2 class="text-neutral-400">Links</h2>
        <ul class="list-none p-0">
          <li
            v-for="(item, index) in linksItems"
            :key="index"
            class="mt-12 first:mt-14 max-md:mt-10 max-md:first:mt-10"
          >
            <a href="#" class="hover:text-neutral-600 transition-colors">
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>

      <!-- Help and Newsletter Section -->
      <div class="flex-auto max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <!-- Help Navigation -->
          <div class="w-[33%] max-md:ml-0 max-md:w-full">
            <nav
              class="flex flex-col items-start text-base font-medium text-black"
            >
              <h2 class="text-neutral-400">Help</h2>
              <ul class="list-none p-0">
                <li
                  v-for="(item, index) in helpItems"
                  :key="index"
                  class="mt-12 first:mt-14 max-md:mt-10 max-md:first:mt-10"
                >
                  <a href="#" class="hover:text-neutral-600 transition-colors">
                    {{ item }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <!-- Newsletter Section -->
          <div class="ml-5 w-[67%] max-md:ml-0 max-md:w-full">
            <section
              class="flex flex-col w-full max-md:mt-10"
              aria-labelledby="newsletter-heading"
            >
              <h2
                id="newsletter-heading"
                class="self-start text-base font-medium text-neutral-400"
              >
                Newsletter
              </h2>
              <form
                ref="formRef"
                @submit.prevent="handleSubscribe"
                class="flex flex-col gap-3 mt-14 text-sm max-md:mt-10"
                novalidate
              >
                <div class="flex flex-col text-neutral-400">
                  <label for="newsletter-email" class="self-start mb-2">
                    Enter Your Email Address
                  </label>
                  <div class="relative">
                    <input
                      id="newsletter-email"
                      v-model="email"
                      type="email"
                      @keydown="handleKeyDown"
                      class="w-full p-2 bg-transparent border-b border-black focus:outline-none focus:border-b-2"
                      :class="{ 'border-red-500': error }"
                      :aria-invalid="!!error"
                      :aria-describedby="error ? 'newsletter-error' : undefined"
                      placeholder="your@email.com"
                      :disabled="isLoading"
                    />
                  </div>
                </div>

                <!-- Error Message -->
                <div
                  v-if="error"
                  id="newsletter-error"
                  role="alert"
                  class="text-red-500 text-sm mt-1"
                >
                  {{ error }}
                </div>

                <!-- Success Message -->
                <div
                  v-if="success"
                  role="alert"
                  class="text-green-500 text-sm mt-1"
                >
                  Successfully subscribed to newsletter!
                </div>

                <button
                  type="submit"
                  class="self-start font-medium text-black whitespace-nowrap hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50"
                  :disabled="isLoading"
                  :aria-busy="isLoading"
                >
                  <span>{{ isLoading ? "SUBSCRIBING..." : "SUBSCRIBE" }}</span>
                  <div
                    class="shrink-0 h-px border border-black border-solid"
                    :class="{ 'opacity-50': isLoading }"
                  ></div>
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
    </div>

    <!-- Divider -->
    <div
      class="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10"
    />

    <p class="mt-9 text-base text-black">2023 furino. All rights reverved</p>
  </footer>
</template>
