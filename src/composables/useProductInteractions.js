import { storeToRefs } from "pinia";
import { useProductStore } from "../stores/productStore";

export function useProductInteractions(productId) {
  const store = useProductStore();
  const { isInWishlist, isInCompareList } = storeToRefs(store);

  const shareProduct = async (product) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: product.title,
          text: product.description,
          url: window.location.href,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      const url = `${window.location.href}?product=${productId}`;
      navigator.clipboard.writeText(url);
      store.setNotification({
        show: true,
        message: "Product link copied to clipboard!",
        type: "success",
      });
    }
  };

  const toggleWishlist = () => {
    store.toggleWishlist(productId);
  };

  const toggleCompare = () => {
    store.toggleCompare(productId);
  };

  return {
    isInWishlist: isInWishlist(productId),
    isInCompareList: isInCompareList(productId),
    shareProduct,
    toggleWishlist,
    toggleCompare,
  };
}
