// Initiate global variables
const navbarPopUp = document.querySelector('#navbarPopUp');
const navButton = document.querySelector('#navIcon');
const navMenuHorizontal = document.querySelector('#navMenuHorizontal');
const widthToChangeAt = 650;
let windowWidth;

window.addEventListener('DOMContentLoaded',() => {
    windowWidth = window.innerWidth;
    selectCorrectNavMenu();
    window.addEventListener('resize',() => {
        windowWidth = window.innerWidth;
        selectCorrectNavMenu();
    });
});

navButton.addEventListener('click',() => {
    if(navButton.classList.contains('navIconActive')) {
        navbarPopUp.innerHTML = '';
        navButton.classList.remove('navIconActive');
    } else {
        navbarPopUp.appendChild(create4fvNavList('navListPopUp'));
        navButton.classList.add('navIconActive');
    };
});

function addNavItem(name, url) {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.classList.add('navLink');
    a.setAttribute('href', url);
    a.innerText = name;
    li.appendChild(a);
    return li;
};

function create4fvNavList(classToAdd) {
    let ul = document.createElement('ul');
    ul.classList.add(classToAdd);
    ul.appendChild(addNavItem('4FunnerVibes', '/index.html'));
    ul.appendChild(addNavItem('About Us', '/us.html'));
    ul.appendChild(addNavItem('About Our Rig', '/rig.html'));
    ul.appendChild(addNavItem('Travel Highlights', '/highlights.html'));
    return ul;
};

function displayHorizontalNav() {
    navButton.classList.remove('visible');
    navButton.style.display = 'none';
    if(!navMenuHorizontal.classList.contains('linksDisplayed')) {
        navMenuHorizontal.classList.add('linksDisplayed')
        navMenuHorizontal.style.display = 'flex';
        navMenuHorizontal.appendChild(create4fvNavList('navListDisplay'));
    };
};

function enablePopUpNav() {
    navMenuHorizontal.style.display = 'none';
    navMenuHorizontal.classList.remove('linksDisplayed');
    navMenuHorizontal.innerHTML = '';
    navButton.style.display = 'block';
    navButton.classList.add('visible');
};

function selectCorrectNavMenu() {
    if(windowWidth < widthToChangeAt && !navButton.classList.contains('visible')) {
        enablePopUpNav();
    } else if(windowWidth >= widthToChangeAt) {
        displayHorizontalNav();
    };
};