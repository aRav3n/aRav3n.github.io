// Initiate global variables
const navbarPopUp = document.querySelector('#navbarPopUp');
const navButton = document.querySelector('#navIcon');
const navMenuHorizontal = document.querySelector('#navMenuHorizontal')
let windowWidth = window.innerWidth;

window.addEventListener('resize',() => {
    windowWidth = window.innerWidth;
    selectCorrectNavMenu();
});

window.addEventListener('DOMContentLoaded',() => {
    selectCorrectNavMenu();
});

function selectCorrectNavMenu() {
    if(windowWidth < 650) {
        enablePopUpNav();
    } else {
        displayHorizontalNav();
    };
};

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
    navButton.style.display = 'none';
    if(!navMenuHorizontal.classList.contains('linksDisplayed')) {
        console.log('adding linksDisplayed class and making menu');
        navMenuHorizontal.classList.add('linksDisplayed')
        navMenuHorizontal.style.display = 'flex';
        navMenuHorizontal.appendChild(create4fvNavList('navListDisplay'));
    };
};

function enablePopUpNav() {
    navMenuHorizontal.style.display = 'none';
    navMenuHorizontal.classList.remove('linksDisplayed');
    navMenuHorizontal.innerHTML = '';
    console.log('removed class from horizontal menu');
    navButton.style.display = 'block';
    navButton.addEventListener('click',() => {
        if(!navbarPopUp.classList.contains('linksDisplayed')) {
            navbarPopUp.appendChild(create4fvNavList('navListPopUp'));
            navbarPopUp.classList.add('linksDisplayed');
            navButton.classList.add('navIconActive');
        } else {
            navbarPopUp.innerHTML = '';
            navbarPopUp.classList.remove('linksDisplayed');
            navButton.classList.remove('navIconActive');
        }
    });
};