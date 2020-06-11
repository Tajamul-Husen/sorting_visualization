import { disabledButtons } from "../utils";

export default function startSorting(algo, time) {
  const timeOut = setInterval(() => {
    if (algo.next().done) {
      clearInterval(timeOut);
      disabledButtons(null, false);
    }
  }, time);
}
