const app = document.getElementById("App");
const menuItems = document.querySelectorAll(".sideMenu__list__item");
const menuLink = document.querySelectorAll(".sideMenu__list__item__link");
const sections = document.querySelectorAll("section")


const calcWidth = () => {
} 
window.addEventListener("load", function() {

    const options = {
      threshold: 
      window.innerWidth < 1155 ?  0.2 
      : window.innerWidth < 1255 ?  0.25  
      : window.innerWidth < 1555 ?  0.27 
      :  window.innerWidth <= 1800 ? 0.35
       : 0.38,
      rootMargin:  window.innerWidth < 1555 ? '-10px' 
      : window.innerWidth <= 1740 ? '-60px' 
      : window.innerWidth >= 1800 ?  '-110px'
       : '-60px' 

    }
console.log(options.threshold);
    let observer = new IntersectionObserver(entries => {
      entries.forEach((entry, i) => {
        const targetId =  entry.target.getAttribute('id')
             
        if (entry.isIntersecting) {
            menuLink.forEach(e=> e.classList.remove('active__item'))
            this.document.querySelector(`[href='#${targetId}']`)
            .classList.add('active__item')
        } 
      })
    }, options)
    
    sections.forEach(section => { 
      observer.observe(section)
    })
})

menuItems.forEach((item, i) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = menuLink[i]
        .getAttribute("href").substring(1);

        const targetSection = document.getElementById(targetId);

        app.scrollTo({
            top: targetSection.offsetTop - 100,
            left: 0,
            behavior: "smooth"
        });
    });
})
