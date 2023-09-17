const input = document.getElementById('ui__form__input')
const errorMessage = document.getElementById('errorMessage')
const span = document.querySelector('.ui__form__input__span')
const form = document.getElementById('ui__form')

function validation() {

    function createError(inputEl, text) {
        errorMessage.classList.add('ui__form__input__span__error')
        span.classList.add('ui__form__input__span__error')
        errorMessage.textContent = text
        inputEl.classList.add('ui__form__input__error')
    }

    let result = true

    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

    if (!input.value  ) {
        createError(input, 'поле обязательно!')
        result =  false
    }

    if (!pattern.test(input.value)) {
       input.value && createError(input, 'Неверный формат!')
        result =  false
    }
    
    return result
}

input.addEventListener('click', ()=> {
    input.classList.add('ui__form__input__click')
})

input.addEventListener('blur', ()=> {
    input.classList.remove('ui__form__input__click')
})

form.addEventListener('submit', (event)=> {
    event.preventDefault()

    if (validation(this) == true) {
        
        errorMessage.classList.remove('ui__form__input__span__error')
        span.classList.remove('ui__form__input__span__error')
        errorMessage.textContent = ''
        input.classList.remove('ui__form__input__error')

        console.log('input value:', input.value);
    } 
})