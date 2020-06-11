import getHeight from "./getHeight";

export function swapCloneSingleDomElements(el, newEl) {
  const clonedEl = newEl.cloneNode(true);
  el.parentNode.replaceChild(clonedEl, el);
  return [clonedEl];
}

export function swapDomElements(el1, el2) {
  let temp = getHeight(el1);
  el1.style.height = `${getHeight(el2)}px`;
  el2.style.height = `${temp}px`;
}

export function swapSingleDomElements(el, newEl) {
  el.style.height = `${getHeight(newEl)}px`;
}
