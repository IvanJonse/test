const selectVisible = document.querySelector('.ui__select')
const btnSelect = document.querySelector('.ui__select__btn')
const fill = document.getElementById('activeSelect')
const select = document.getElementById('selectForm')
const list = document.querySelectorAll('.ui__select__item')
const selectSpan = document.getElementById('selectSpan')


fill.addEventListener('click', ()=> {
    btnSelect.classList.toggle('ui__select__btn__active')
    selectVisible.classList.toggle('ui__select__height')
    fill.classList.add('ui__form__input__click__select')
    !fill.innerHTML && selectSpan.classList.toggle('ui__form__select__span')
})


list.forEach((item)=> {
    item.addEventListener('click', ()=> {
        list.forEach(el => el.classList.remove('ui__select__active'))
        item.classList.add('ui__select__active')
        fill.innerHTML = item.innerHTML
        btnSelect.classList.toggle('ui__select__btn__active')
        selectVisible.classList.remove('ui__select__height')
        fill.classList.remove('ui__form__input__click__select')

    })
})


document.addEventListener('click', (e)=> {
    if(!e.target.closest('.activeSelect')) {
        btnSelect.classList.remove('ui__select__btn__active')
        selectVisible.classList.remove('ui__select__height')
        fill.classList.remove('ui__form__input__click__select')
        !fill.innerHTML && selectSpan.classList.remove('ui__form__select__span')
    }
})