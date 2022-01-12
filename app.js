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
const navbar = document.getElementById('nav');
const top_link = document.querySelector('.top-link');

window.addEventListener('scroll', () => {
    const pos = window.scrollY;
    const navbar_height = navbar.offsetHeight;
    if(pos > navbar_height) {
        navbar.classList.add('fixed-nav');
    }else{
        navbar.classList.remove('fixed-nav');
    }
    if(pos > 550){
        top_link.classList.add('show-link');
    }else{
        top_link.classList.remove('show-link');
    }
})
// ********** smooth scroll ************
// select links
const scroll_links = document.querySelectorAll('.scroll-link');

scroll_links.forEach((link) => {
    link.addEventListener('click', (event) => {
        // prevent default behavior
        event.preventDefault();
        
        // navigate to target
        const id  = event.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // remove the nav height as its postion is fixed.
        let pos  = element.offsetTop -  navbar.offsetHeight;
        // if links is open
        if(links_container.offsetHeight > 100) {
            pos += links_container.offsetHeight;
        }
        // navigate
        window.scrollTo({
            left:0,
            top:pos,
        });
        // close links
        links_container.style.height = 0;
    });
});
