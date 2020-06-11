import { getHeight, colorElements, swapCloneSingleDomElements } from "../utils";

function* merge(main_arr, start, mid, end) {
  let i = start;
  let j = mid + 1;
  let k = start;
  const m = [];

  for (let n = 0; n <= start + end; n++) {
    m.push(main_arr[n]);
  }

  while (i <= mid && j <= end) {
    colorElements(m[i], m[j], true);
    yield true;
    colorElements(m[i], m[j], false);

    if (getHeight(m[i]) <= getHeight(m[j])) {
      colorElements(main_arr[k], m[i], true);
      yield swapCloneSingleDomElements(main_arr[k], m[i]);
      colorElements(main_arr[k], m[i], false);

      i++;
    } else {
      colorElements(main_arr[k], m[j], true);
      yield swapCloneSingleDomElements(main_arr[k], m[j]);
      colorElements(main_arr[k], m[j], false);

      j++;
    }
    k++;
  }

  while (i <= mid) {
    colorElements(main_arr[k], null, true);
    yield swapCloneSingleDomElements(main_arr[k], m[i]);
    colorElements(main_arr[k], m[i], false);

    i++;
    k++;
  }
  while (j <= end) {
    colorElements(main_arr[k], null, true);
    yield swapCloneSingleDomElements(main_arr[k], m[j]);
    colorElements(main_arr[k], m[j], false);

    j++;
    k++;
  }
}

export default function* mergeSort(main_arr, start, end) {
  if (start === end) return;

  const mid = Math.floor((start + end) / 2);

  yield* mergeSort(main_arr, start, mid);
  yield* mergeSort(main_arr, mid + 1, end);
  yield* merge(main_arr, start, mid, end);
}
