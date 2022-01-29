const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', (event) => inputRef.value.length === 6 ?
    inputRef.classList.add('valid') :
    inputRef.classList.add('invalid')
)