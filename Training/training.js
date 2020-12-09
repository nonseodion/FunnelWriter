const tutorialLinks = document.querySelectorAll('.training__header .links a');

// Add active links
const tutorialLinkActive = (id) => {
    if(tutorialLinks){
        tutorialLinks.forEach((link, idx) => {
            if(idx === id) {
                link.classList.add('active');
            } else{
                link.classList.remove('active');
            }
        });
    }
}

tutorialLinks.forEach((link, idx) => {
    link.addEventListener('click', () => tutorialLinkActive(idx));
})