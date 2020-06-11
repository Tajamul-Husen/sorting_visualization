export default function disabledAllButton(name, bool) {
  const controller = document.querySelector(".controller");
  const btnArr = controller.children;
  const len = btnArr.length;
  for (let i = 0; i < len; i++) {
    if (name && name === btnArr[i].textContent.toLowerCase()) {
      btnArr[i].classList.add("active");
    } else {
      btnArr[i].disabled = bool;
      if (!bool && btnArr[i].classList.contains("active")) {
        btnArr[i].classList.remove("active");
      }
    }
  }
}
