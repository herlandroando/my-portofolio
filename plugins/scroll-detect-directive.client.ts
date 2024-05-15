import type { FunctionScrollDetect } from "../types/plugins";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, FunctionScrollDetect>("scroll-detect", {
    mounted(el, binding) {
      console.log("create event scroll");
      document.addEventListener("scroll", (e) =>
        handleScroll(e, binding.value, el)
      );
    },
    unmounted(el, binding) {
      console.log("dismount event scroll");
      document.removeEventListener("scroll", (e) =>
        handleScroll(e, binding.value, el)
      );
    },
  });
});

function handleScroll(
  e: Event,
  binding: FunctionScrollDetect,
  el: HTMLElement
) {
  if (!e.target) {
    return;
  }
  const target = e.target as Document;

  let { top, bottom } = el.getBoundingClientRect();
  if (
    target.body.scrollTop > top - 400 &&
    target.body.scrollTop < bottom + 400
  ) {
    binding.isOnElement();
  } else {
    binding.isNotOnElement();
  }
}
