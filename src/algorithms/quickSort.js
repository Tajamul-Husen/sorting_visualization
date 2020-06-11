import { getHeight, colorElements, swapDomElements } from "../utils";

function* partition(arr, start, end) {
  let pivot = start;
  let left = start;
  let right = end;

  while (left < right) {
    colorElements(arr[left], arr[right], true);
    yield;
    colorElements(arr[left], arr[right], false);

    while (arr[left] && getHeight(arr[left]) <= getHeight(arr[pivot])) {
      colorElements(arr[left], arr[pivot], true);
      yield;
      colorElements(arr[left], arr[pivot], false);
      left++;
    }
    while (arr[right] && getHeight(arr[right]) > getHeight(arr[pivot])) {
      colorElements(arr[right], arr[pivot], false);
      yield;
      colorElements(arr[right], arr[pivot], false);
      right--;
    }
    if (left < right) {
      colorElements(arr[left], arr[right], true);
      yield swapDomElements(arr[left], arr[right]);
      colorElements(arr[left], arr[right], false);
    }
  }

  colorElements(arr[start], arr[right], true);
  yield swapDomElements(arr[start], arr[right]);
  colorElements(arr[start], arr[right], false);

  return right;
}

export default function* quickSort(arr, start, end) {
  if (start < end) {
    const loc = yield* partition(arr, start, end);
    yield* quickSort(arr, start, loc - 1);
    yield* quickSort(arr, loc + 1, end);
  }
}
