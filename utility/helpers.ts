export default function overflowHiddenBody(val: boolean) {
  document.body.style.overflow = val ? "hidden" : "auto";
}
