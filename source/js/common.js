var navMain = document.querySelector('.nav');
var navToggle = navMain.querySelector('.nav__toggle');

navMain.classList.remove('nav--nojs');
navMain.classList.add('nav--closed');
navMain.classList.remove('nav--opened');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('nav--closed')) {
    navMain.classList.remove('nav--closed');
    navMain.classList.add('nav--opened');
  } else {
    navMain.classList.add('nav--closed');
    navMain.classList.remove('nav--opened');
  }
});
