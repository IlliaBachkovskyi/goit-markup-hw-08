(() => {
  const refs = {
    openMenuBtn: document.querySelector('.button-menu-open'),
    closeMenuBtn: document.querySelector('.button-close-mobile'),
    menu: document.querySelector('.mobile-nav'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();