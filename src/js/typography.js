const tabs = document.querySelectorAll('.typography__menu__item');
const contents = document.querySelectorAll('.typography__descr');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      
      tabs.forEach(tab => tab.classList
      .remove('typography__menu__item__active'));

      contents.forEach(content => content.classList
      .remove('typography__descr__active'));
      
      tab.classList.add('typography__menu__item__active');
      contents[index].classList.add('typography__descr__active');
    });
  });


