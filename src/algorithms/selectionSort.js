import { getHeight, colorElements, swapDomElements } from "../utils";

export default function* selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      colorElements(arr[j], arr[min], true);
      yield;
      colorElements(arr[j], arr[min], false);

      if (getHeight(arr[j]) < getHeight(arr[min])) {
        min = j;
      }
    }
    if (min !== i) {
      colorElements(arr[i], null, true);
      yield swapDomElements(arr[i], arr[min]);
      colorElements(arr[i], null, false);
    }
  }
}
