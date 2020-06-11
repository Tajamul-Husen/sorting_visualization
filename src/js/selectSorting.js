import {
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  quickSort,
  heapSort,
} from "../algorithms";

export default function selectSorting(algoName, elem) {
  switch (algoName) {
    case "bubble sort":
      return bubbleSort(elem.children);
    case "insertion sort":
      return insertionSort(elem.children);
    case "selection sort":
      return selectionSort(elem.children);
    case "merge sort":
      return mergeSort(elem.children, 0, elem.children.length - 1);
    case "quick sort":
      return quickSort(elem.children, 0, elem.children.length - 1);
    case "heap sort":
      return heapSort(elem.children);
    default:
      return;
  }
}
