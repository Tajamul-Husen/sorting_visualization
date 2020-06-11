export default function getThemeColors() {
  const container = document.querySelector(".bar-container");
  const styles = getComputedStyle(container);
  const primaryColor = styles.getPropertyValue("--primary-color");
  const secondaryColor = styles.getPropertyValue("--secondary-color");
  return { primaryColor, secondaryColor };
}
