const sidebarToggler = document.querySelector('.toggle__sidebar img');
const sidebar = document.querySelector('.sidebar');
const main__section = document.querySelector('.main__section');
const generateText = document.querySelector('.top__nav .generate');

const toggleSideBar = () => {
    if (sidebarToggler && sidebar && main__section && generateText) {
        // expand or collapse navbar
        sidebar.classList.toggle('close');
        // expand or collapse content margin 
        main__section.classList.toggle('minify__pd');
        //expand or collapse generate text on navbar
        generateText.classList.toggle('minify__pd');
    }
}

sidebarToggler.addEventListener('click', toggleSideBar);