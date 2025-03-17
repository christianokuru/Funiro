import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/productStore";

export function useCart() {
  const store = useProductStore();
  const { cartItemsCount, cartTotal } = storeToRefs(store);

  const addToCart = (product) => {
    store.addToCart(product);
  };

  return {
    addToCart,
    cartItemsCount,
    cartTotal,
  };
}
