function classToggle() {
  const navs = document.querySelectorAll('.nav')
  
  navs.forEach(nav => nav.classList.toggle('Nav'));
}

document.querySelector('.Nav-toggle')
  .addEventListener('click', classToggle);
