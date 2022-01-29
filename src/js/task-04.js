let counterValue = 0;
const btnIncrementRef = document.querySelector('[data-action="increment"]')
const btnDecrementRef = document.querySelector('[data-action="decrement"]')
const valueRef = document.querySelector('#value')

const incrementFn = () => {
    counterValue += 1
    valueRef.textContent = counterValue;
}
const decrementFn = () => {
    counterValue -= 1
    valueRef.textContent = counterValue;
}

btnIncrementRef.addEventListener('click', incrementFn)
btnDecrementRef.addEventListener('click', decrementFn)
