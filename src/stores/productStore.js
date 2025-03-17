import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    cart: [],
    wishlist: [],
    compareList: [],
    cartNotification: {
      show: false,
      message: "",
      type: "success",
    },
  }),

  getters: {
    cartItemsCount: (state) =>
      state.cart.reduce((total, item) => total + item.quantity, 0),

    isInWishlist: (state) => (productId) => state.wishlist.includes(productId),

    isInCompareList: (state) => (productId) =>
      state.compareList.includes(productId),

    cartTotal: (state) =>
      state.cart.reduce(
        (total, item) =>
          total +
          parseFloat(item.price.replace(/[^0-9.-]+/g, "")) * item.quantity,
        0,
      ),
  },

  actions: {
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }

      this.setNotification({
        show: true,
        message: "Product added to cart successfully!",
        type: "success",
      });

      setTimeout(() => {
        this.setNotification({
          show: false,
          message: "",
          type: "success",
        });
      }, 3000);
    },

    toggleWishlist(productId) {
      const index = this.wishlist.indexOf(productId);
      if (index === -1) {
        this.wishlist.push(productId);
      } else {
        this.wishlist.splice(index, 1);
      }
    },

    toggleCompare(productId) {
      const index = this.compareList.indexOf(productId);
      if (index === -1 && this.compareList.length < 3) {
        this.compareList.push(productId);
      } else if (index !== -1) {
        this.compareList.splice(index, 1);
      } else {
        this.setNotification({
          show: true,
          message: "You can compare up to 3 products",
          type: "error",
        });
      }
    },

    setNotification(notification) {
      this.cartNotification = notification;
    },
  },
});
