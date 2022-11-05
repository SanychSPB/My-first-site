(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();

// document.querySelectorAll('.list__link').forEach(function(tabsBtn) {
//   tabsBtn.addEventListener('click', function(event) {
//     const path = event.currentTarget.dataset.path

//     document.querySelectorAll('.list__link').forEach(function(btn){
//       btn.classList.remove('list__link_active')
//     })
//       event.currentTarget.classList.add('list__link_active')

//     document.querySelectorAll('.list__card').forEach(function(btn) {
//       btn.classList.remove('list__card_active')
//     })

//     document.querySelector(`[data-target="${path}"]`).classList.add('list__card_active');
//   })
// });

(() => {
  function setTabs (dataPath, dataTarget) {
      const btns = document.querySelectorAll(`.js-tab-btn[${dataPath}]`);
      const contents = document.querySelectorAll(`.js-tab-content[${dataTarget}]`);

      btns.forEach((btn) => {
          btn.addEventListener('click', function (evt) {
              const path = this.getAttribute(dataPath);
              console.log(path);
              const target = document.querySelector(`.js-tab-content[${dataTarget}="${path}"]`);


              btns.forEach((currentBtn) => {
                  currentBtn.classList.remove('tab-active');
              });

              this.classList.add('tab-active');

              contents.forEach((content) => {
                  content.classList.remove('tab-active');
              });

              target.classList.add('tab-active');
          });
      });
  }

   // в аргументах функции передаем индивидуальные data атрибуты, которые установлены в разметке для кнопок и вкладок
  setTabs('data-painters-path', 'data-painters-target');
  // setTabs('data-other-painters-path', 'data-other-painters-target');
})();
