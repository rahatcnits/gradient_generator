const gradientBox = document.querySelector(".gradient_box");
const selectMenu = document.querySelector(".select_box select");
const colorsInput = document.querySelectorAll(".colors input");
const textarea = document.querySelector("textarea");
const refreshBtn = document.querySelector(".refresh");
const copyBtn = document.querySelector(".copy");

const getRandomColor = () => {
  const randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${randomHex}`;
};

const generateGradient = (isRandom) => {
  if (isRandom) {
    colorsInput[0].value = getRandomColor();
    colorsInput[1].value = getRandomColor();
  }

  /// creating a gradient string using the color input values
  const gradient = `linear-gradient(${selectMenu.value}, ${colorsInput[0].value}, ${colorsInput[1].value})`;
  gradientBox.style.background = gradient;
  textarea.value = `background: ${gradient};`;
};

const copyCode = () => {
  navigator.clipboard.writeText(textarea.value);
  copyBtn.innerText = "Code Copied";
  setTimeout(() => (copyBtn.innerText = "Code Copy"), 1600);
};

colorsInput.forEach((input) => {
  input.addEventListener("input", () => generateGradient(false));
});

selectMenu.addEventListener("change", () => generateGradient(false));
refreshBtn.addEventListener("click", () => generateGradient(true));
copyBtn.addEventListener("click", copyCode);
