const fontControlRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')

textRef.style.fontSize = `${fontControlRef.value}px`

fontControlRef.addEventListener("input", () => {
  textRef.style.fontSize = `${fontControlRef.value}px`;
});