const funnelLinks = document.querySelectorAll('.navigation ul li');

// Add active links
const funnelLinkActive = (id) => {
    if(funnelLinks){
        funnelLinks.forEach((funnelLink, idx) => {
            if(idx === id) {
                funnelLink.classList.add('active');
            } else{
                funnelLink.classList.remove('active');
            }
        });
    }
}

funnelLinks.forEach((funnelLink, idx) => {
    funnelLink.addEventListener('click', () => funnelLinkActive(idx));
})