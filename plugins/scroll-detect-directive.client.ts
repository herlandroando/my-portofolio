import type { FunctionScrollDetect } from "../types/plugins";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, FunctionScrollDetect>("scroll-detect", {
    mounted(el, binding) {
      // console.log("create event scroll");
      document.addEventListener("scroll", (e) =>
        handleScroll(e, binding.value, el)
      );
    },
    unmounted(el, binding) {
      // console.log("dismount event scroll");
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
  let startOffset = binding.options?.startOffset ?? -400;
  let endOffset = binding.options?.endOffset ?? 400;

  if (
    target.body.scrollTop > top + startOffset &&
    target.body.scrollTop < bottom + endOffset
  ) {
    binding.isOnElement(el);
  } else {
    binding.isNotOnElement(el);
  }
}
