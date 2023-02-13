// Initiate global variables
const navButton = document.querySelector('#navIcon');
let navList = [];

// Populate list of navItems
navList.push(addNavItem('4FunnerVibes', '/index.html'));
navList.push(addNavItem('About Us', '/us.html'));
navList.push(addNavItem('About Our Rig', '/rig.html'));
navList.push(addNavItem('Travel Highlights', '/highlights.html'));

// Create menu list with links

// Display menu on click


function addNavItem(name, url) {
    let string = '<li><a href="';
    string += url;
    string += '" target="_blank" rel="noreferrer noopener">';
    string += name;
    string += '</a></li>';
    return string;
};