const accordion = document.querySelectorAll('.accordion__item')
const accordionWrap = document.querySelectorAll('.accordion__item__wrap')
const btnAccordion = document.querySelectorAll('.accordion__item__btn')
const titleAccordion = document.querySelectorAll('.accordion__item__title')
const textAccordion = document.querySelectorAll('.accordion__item__text')

function addClass(div, title) {
    div.classList.toggle(title)
}

accordionWrap.forEach((el, i) => el.addEventListener('click', ()=> {
    addClass(accordion[i], 'accordion__item__active')
    addClass(titleAccordion[i], 'accordion__item__title__active')
    addClass(btnAccordion[i], 'accordion__item__btn__active')
    addClass(textAccordion[i], 'accordion__item__text__active')
}))