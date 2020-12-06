const sidebarToggler = document.querySelector('.toggle__sidebar img');
const sidebar = document.querySelector('.sidebar');
const main__section = document.querySelector('.main__section');
const generateText = document.querySelector('.top__nav .generate');
const sidebarLinks = document.querySelectorAll('.sidebar li a');
const wpPlugin = document.querySelector('.wp__plugin');

// Toggle Sidebar
const toggleSideBar = () => {
    if (sidebarToggler && sidebar && main__section && generateText) {
        // expand or collapse navbar
        sidebar.classList.toggle('close');
        // change WP layout
        if(sidebar.classList.contains('close')){
            wpPlugin.innerHTML = `
                <p class='wp'>WP</p>
            `;
        } else {
            wpPlugin.innerHTML = `
                <p class="wp">WP plugin</p>
                <p class="cs">Coming Soon</p>
            `;
        }
        // expand or collapse content margin 
        main__section.classList.toggle('minify__pd');
        //expand or collapse generate text on navbar
        generateText.classList.toggle('minify__pd');
    }
}

sidebarToggler.addEventListener('click', toggleSideBar);


// Add active links
const linkActive = (id) => {
    if(sidebarLinks){
        sidebarLinks.forEach((link, idx) => {
            if(idx === id) {
                link.classList.add('active');
            } else{
                link.classList.remove('active');
            }
        });
    }
}

sidebarLinks.forEach((link, idx) => {
    link.addEventListener('click', () => linkActive(idx));
})