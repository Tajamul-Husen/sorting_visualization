import { getHeight, colorElements, swapDomElements } from "../utils";

export default function* bubbleSort(arr) {
  const len = arr.length - 1;
  let swapped = false;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (getHeight(arr[j]) > getHeight(arr[j + 1])) {
        colorElements(arr[j], arr[j + 1], true);
        yield swapDomElements(arr[j], arr[j + 1]);
        colorElements(arr[j], arr[j + 1], false);

        swapped = true;
      } else {
        colorElements(arr[j], arr[j + 1], true);
        yield;
        colorElements(arr[j], arr[j + 1], false);
      }
    }

    if (!swapped) {
      break;
    }
  }
}
