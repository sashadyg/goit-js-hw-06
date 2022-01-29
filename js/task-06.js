const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', (event) => {
    inputRef.classList.remove('invalid')
    if (inputRef.value.length === 6) {
        inputRef.classList.add('valid')
    } else {
        inputRef.classList.add('invalid')
    }
})