const tutorialLinks = document.querySelectorAll('.tutorial__header .links a');

// Add active links
const linkActive = (id) => {
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
    link.addEventListener('click', () => linkActive(idx));
})