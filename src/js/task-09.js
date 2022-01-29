function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonRef = document.querySelector(".change-color");
const backgroundColorRef = document.querySelector('span.color');


const changeBgColor = () => {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  backgroundColorRef.innerHTML = randomColor;
};

buttonRef.addEventListener('click', changeBgColor);