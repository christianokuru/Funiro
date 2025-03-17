<script setup>
import { ref, computed } from "vue";
import LoadingSpinnerComponent from "@/components/custom/LoadingSPinnerComponent.vue";

const currentYear = computed(() => new Date().getFullYear());

const links = [
  { text: "Home", href: "#" },
  { text: "Shop", href: "#" },
  { text: "About", href: "#" },
  { text: "Contact", href: "#" },
];

const helpLinks = [
  { text: "Payment Options", href: "#" },
  { text: "Returns", href: "#" },
  { text: "Privacy Policies", href: "#" },
];

const email = ref("");
const isSubmitting = ref(false);
const submitStatus = ref(""); // 'success' | 'error' | ''
const errorMessage = ref("");

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.value);
});

const handleSubscribe = async () => {
  // Reset states
  errorMessage.value = "";
  submitStatus.value = "";

  // Validate email
  if (!email.value) {
    errorMessage.value = "Please enter your email address";
    submitStatus.value = "error";
    return;
  }

  if (!isValidEmail.value) {
    errorMessage.value = "Please enter a valid email address";
    submitStatus.value = "error";
    return;
  }

  try {
    isSubmitting.value = true;
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    submitStatus.value = "success";
    email.value = "";

    // Announce success to screen readers
    const announcement = document.getElementById("status-announcement");
    if (announcement) {
      announcement.textContent = "Successfully subscribed to newsletter";
    }
  } catch (error) {
    submitStatus.value = "error";
    errorMessage.value = "Failed to subscribe. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
};

const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    handleSubscribe();
  }
};
</script>

<template>
  <footer
    class="flex flex-col items-start px-20 py-11 w-full bg-white border-t border-black border-opacity-20 max-md:px-5 max-md:max-w-full"
    role="contentinfo"
    aria-label="Footer"
  >
    <div
      class="flex flex-wrap justify-between items-start w-full max-md:max-w-full"
    >
      <!-- Logo Section -->
      <div class="flex flex-col w-[250px]">
        <h2 class="self-start text-2xl font-bold text-black">Funiro.</h2>
        <address
          class="mt-12 text-base text-neutral-400 max-md:mt-10 whitespace-pre-line not-italic"
        >
          400 University Drive Suite 200 Coral Gables, FL 33134 USA
        </address>
      </div>

      <!-- Links Section -->
      <nav
        class="flex flex-col items-start self-stretch text-base font-medium text-black whitespace-nowrap w-[180px]"
        aria-label="Main navigation"
      >
        <h2 class="text-neutral-400">Links</h2>
        <ul class="list-none p-0" role="list">
          <li
            v-for="link in links"
            :key="link.text"
            class="mt-12 first:mt-14 max-md:mt-10 max-md:first:mt-10"
          >
            <a
              :href="link.href"
              class="hover:text-neutral-600 transition-colors focus:outline-none hover:underline hover:cursor-pointer"
              >{{ link.text }}</a
            >
          </li>
        </ul>
      </nav>

      <!-- Help Section -->
      <div class="w-[180px] max-md:ml-0 max-md:w-full">
        <nav
          class="flex flex-col grow items-start text-base font-medium text-black"
          aria-label="Help navigation"
        >
          <h2 class="text-neutral-400 max-sm:mt-10">Help</h2>
          <ul class="list-none p-0" role="list">
            <li
              v-for="link in helpLinks"
              :key="link.text"
              class="mt-12 first:mt-14 max-md:mt-10 max-md:first:mt-10"
            >
              <a
                :href="link.href"
                class="hover:text-neutral-600 transition-colors focus:outline-none hover:underline hover:cursor-pointer"
                >{{ link.text }}</a
              >
            </li>
          </ul>
        </nav>
      </div>

      <!-- Newsletter Section -->
      <div class="w-[400px] max-md:ml-0 max-md:w-full">
        <section
          class="flex flex-col w-full"
          aria-labelledby="newsletter-heading"
        >
          <h2
            id="newsletter-heading"
            class="self-start text-base font-medium text-neutral-400 max-sm:mt-10"
          >
            Newsletter
          </h2>
          <form
            @submit.prevent="handleSubscribe"
            class="flex flex-col w-full"
            novalidate
          >
            <div class="flex gap-3 mt-14 text-sm max-md:mt-10">
              <div class="flex flex-col text-neutral-400 flex-grow">
                <label for="email" class="self-start">
                  Enter Your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  @keydown="handleKeyDown"
                  class="mt-1 bg-transparent border-b border-black focus:outline-none focus:border-blue-500 transition-colors"
                  :class="{
                    'border-red-500': submitStatus === 'error',
                    'border-green-500': submitStatus === 'success',
                  }"
                  aria-describedby="email-error email-success"
                  :aria-invalid="submitStatus === 'error'"
                  autocomplete="email"
                />
                <div
                  id="email-error"
                  v-if="submitStatus === 'error'"
                  class="mt-1 text-red-500 text-xs"
                  role="alert"
                >
                  {{ errorMessage }}
                </div>
                <div
                  id="email-success"
                  v-if="submitStatus === 'success'"
                  class="mt-1 text-green-500 text-xs"
                  role="alert"
                >
                  Successfully subscribed!
                </div>
              </div>
              <button
                type="submit"
                :disabled="isSubmitting"
                class="relative font-medium text-black whitespace-nowrap hover:text-neutral-400 transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Subscribe to newsletter"
              >
                <span
                  class="inline-flex items-center gap-2 font-semibold"
                  :class="{ 'opacity-0': isSubmitting }"
                >
                  SUBSCRIBE
                </span>
                <span
                  v-if="isSubmitting"
                  class="absolute inset-0 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <loading-spinner-component />
                </span>
                <div
                  class="shrink-0 h-px border border-black border-solid"
                  :class="{ 'opacity-50': isSubmitting }"
                ></div>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>

    <!-- Divider -->
    <div
      class="shrink-0 self-center mt-12 max-w-full h-px border border-solid border-zinc-300 w-[1240px] max-md:mt-10"
      role="separator"
    ></div>

    <!-- Copyright -->
    <p class="mt-9 text-base text-black">{{ currentYear }} furino. All rights reverved</p>

    <!-- Screen reader announcements -->
    <div
      id="status-announcement"
      class="sr-only"
      role="status"
      aria-live="polite"
    ></div>
  </footer>
</template>
