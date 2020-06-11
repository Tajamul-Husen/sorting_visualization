import getThemeColors from "./getThemeColors";

export default function colorElements(el1, el2, bool) {
  const theme = getThemeColors();
  if (el1)
    el1.style.backgroundColor = bool
      ? theme.secondaryColor
      : theme.primaryColor;
  if (el2)
    el2.style.backgroundColor = bool
      ? theme.secondaryColor
      : theme.primaryColor;
}
