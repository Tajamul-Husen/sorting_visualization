import { getHeight, colorElements, swapDomElements } from "../utils";

function* maxHeapify(arr, n, i) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let max = i;

  if (left <= n && getHeight(arr[left]) > getHeight(arr[max])) {
    max = left;
  }

  if (right <= n && getHeight(arr[right]) > getHeight(arr[max])) {
    max = right;
  }

  if (max !== i) {
    colorElements(arr[i], arr[max], true);
    yield swapDomElements(arr[i], arr[max]);
    colorElements(arr[i], arr[max], false);
    yield* maxHeapify(arr, n, max);
  }
}

export default function* heapSort(arr) {
  let len = arr.length - 1;
  let i = Math.floor(arr.length / 2) - 1;

  for (i; i >= 0; i--) {
    yield* maxHeapify(arr, len, i);
  }

  for (let j = len; j > 0; j--) {
    colorElements(arr[0], arr[j], true);
    yield swapDomElements(arr[0], arr[j]);
    colorElements(arr[0], arr[j], false);

    len--;
    yield* maxHeapify(arr, len, 0);
  }
}
