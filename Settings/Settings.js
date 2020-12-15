const settingsLinks = document.querySelectorAll('.settings__links ul li');

// Add active links
const settingsLinkActive = (id) => {
    if(settingsLinks){
        settingsLinks.forEach((settingsLink, idx) => {
            if(idx === id) {
                settingsLink.classList.add('active');
            } else{
                settingsLink.classList.remove('active');
            }
        });
    }
}

// Change settings page
const goToSettings = (link) => {
    const settingsPages = document.querySelectorAll('.settings__page');
    settingsPages.forEach(settingsPage => {
        if (settingsPage.classList.contains(`${link}`)){
            settingsPage.classList.remove('none');
        } else {
            settingsPage.classList.contains('none') ? null : settingsPage.classList.add('none');
        }
    })
}

settingsLinks.forEach((settingsLink, idx) => {
    settingsLink.addEventListener('click', () => settingsLinkActive(idx));
})