let pageHeader = document.querySelector('.page-header');
let navList = document.querySelector('.main-navigation__list');
let navToggle = document.querySelector('.main-navigation__toggle');

pageHeader.classList.remove('page-header--nojs');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('main-navigation__list--is-closed')) {
    navList.classList.remove('main-navigation__list--is-closed');
    navList.classList.add('main-navigation__list--is-open');
    navToggle.classList.remove('main-navigation__toggle--default');
    navToggle.classList.add('main-navigation__toggle--active');
  } else {
    navList.classList.add('main-navigation__list--is-closed');
    navList.classList.remove('main-navigation__list--is-open');
    navToggle.classList.add('main-navigation__toggle--default');
    navToggle.classList.remove('main-navigation__toggle--active');
  }
});
