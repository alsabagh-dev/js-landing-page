// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const nav_toggle = document.querySelector('.nav-toggle');
const links_container = document.querySelector('.links-container');
const links = document.querySelector('.links');

nav_toggle.addEventListener('click', () => {
    const links_container_height = links_container.offsetHeight;

    if(links_container_height === 0){ // show the links
        links_container.style.height = `${links.offsetHeight}px`;
    }else{ // hide the links
        links_container.style.height = 0;
    }
});

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links
