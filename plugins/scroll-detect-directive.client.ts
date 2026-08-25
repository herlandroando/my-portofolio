import type { FunctionScrollDetect } from "../types/plugins";

const observers = new WeakMap<HTMLElement, IntersectionObserver>();

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, FunctionScrollDetect>("scroll-detect", {
    mounted(el, binding) {
      if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
        binding.value?.isOnElement?.(el);
        return;
      }

      const startOffset = binding.value?.options?.startOffset ?? 0;
      const endOffset = binding.value?.options?.endOffset ?? 0;
      const rootMargin = `${startOffset}px 0px ${endOffset}px 0px`;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              binding.value?.isOnElement?.(el);
            } else {
              binding.value?.isNotOnElement?.(el);
            }
          }
        },
        {
          rootMargin,
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.set(el, observer);
    },
    unmounted(el) {
      const observer = observers.get(el);
      if (observer) {
        observer.disconnect();
        observers.delete(el);
      }
    },
  });
});
