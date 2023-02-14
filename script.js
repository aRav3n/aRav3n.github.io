// Initiate global variables
const navButton = document.querySelector('#navIcon');
let navList4fv = create4fvNavList();
const navbarPopUp = document.querySelector('#navbarPopUp');

// Display menu on click for narrower screens
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

function create4fvNavList(classToAdd) {
    let ul = document.createElement('ul');
    ul.classList.add(classToAdd);
    ul.appendChild(addNavItem('4FunnerVibes', '/index.html'));
    ul.appendChild(addNavItem('About Us', '/us.html'));
    ul.appendChild(addNavItem('About Our Rig', '/rig.html'));
    ul.appendChild(addNavItem('Travel Highlights', '/highlights.html'));
    return ul;
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