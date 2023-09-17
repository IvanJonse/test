const checkboxItemAll = document.querySelectorAll('[id="checkWrap"]')

checkboxItemAll.forEach((el, i)=> {
    el.addEventListener('click', ()=> {
        let child =  el.childNodes[0]
        !child.getAttribute('disabled') && child.classList
        .toggle('ui__buttonWrap__item__box__activeCheck')
    })
})
