const radioItemAll = document.querySelectorAll('[id="radioWrap"]')
const radioBoxAll = document.querySelectorAll('.ui__buttonWrap__item__box')

radioItemAll.forEach((el)=> {
    el.addEventListener('click', ()=> {
        radioBoxAll.forEach(item => item.classList.remove('ui__buttonWrap__item__box__activeRadio'))
        let child =  el.childNodes[0]
        !child.getAttribute('disabled') && child.classList
        .add('ui__buttonWrap__item__box__activeRadio')
    })
})
