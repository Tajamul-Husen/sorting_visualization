import selectSorting from "./selectSorting";
import startSorting from "./startSorting";
import generateBars from "./generateBars";
import { disabledButtons } from "../utils";

function setupSorting(event, elem, time) {
  const btnName = event.target.textContent.toLowerCase();
  disabledButtons(btnName, true);
  const a = selectSorting(btnName, elem);
  startSorting(a, time);
}

function initializeApp(elemBtn, elemBar, time, bars) {
  const len = elemBtn.children.length;
  elemBtn.children[0].addEventListener("click", () =>
    generateBars(elemBar, bars)
  );
  let i = 1;
  while (i < len) {
    elemBtn.children[i].addEventListener("click", (e) =>
      setupSorting(e, elemBar, time)
    );
    i++;
  }
}

export const app = () => {
  const container = document.querySelector(".bar-container");
  const controller = document.querySelector(".controller");
  const TIME = 50;
  let BARS = Math.floor(window.innerWidth / 8);

  initializeApp(controller, container, TIME, BARS);

  generateBars(container, BARS);
};
