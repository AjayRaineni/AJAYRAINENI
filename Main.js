function classToggle() {
    const navs = document.querySelectorAll('.Navbar__List')

    navs.forEach(nav => nav.classList.toggle('Navbar__SoggleShow'));
}

document.querySelector('.Navbar__Link-soggle').addEventListener('click', classToggle);