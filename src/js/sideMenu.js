const app = document.getElementById("App");
const menuItems = document.querySelectorAll(".sideMenu__list__item");
const menuLink = document.querySelectorAll(".sideMenu__list__item__link");
const sections = document.querySelectorAll("section")

window.addEventListener("load", function() {
    
    const options = {
      threshold: 0.18
    }

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
            top: targetSection.offsetTop - 170,
            left: 0,
            behavior: "smooth"
        });
    });
})
