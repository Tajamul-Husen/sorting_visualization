import { getHeight, colorElements, swapCloneSingleDomElements } from "../utils";

export default function* insertionSort(arr) {
  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && getHeight(arr[j]) > getHeight(key)) {
      colorElements(arr[j + 1], arr[j], true);
      yield swapCloneSingleDomElements(arr[j + 1], arr[j]);
      colorElements(arr[j + 1], arr[j], false);

      j--;
    }
    colorElements(arr[j + 1], key, true);
    yield swapCloneSingleDomElements(arr[j + 1], key);
    colorElements(arr[j + 1], key, false);
  }
}
