function createBars(num, parent) {
  const height = getComputedStyle(parent).height.slice(0, -2);
  for (let i = 0; i < num; i++) {
    let div = document.createElement("div");
    div.classList.add("bar");
    div.style.height = randomHeight(3, height) + "px";
    parent.appendChild(div);
  }
}

function randomHeight(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function createRandomBars(elem, bars) {
  if (elem.hasChildNodes) {
    elem.innerHTML = "";
  }
  createBars(bars, elem);
}
