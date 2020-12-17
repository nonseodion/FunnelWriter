const funnelLinks = document.querySelectorAll('.navigation ul li');
const funnels = document.querySelectorAll('.funnel');
const generalOptions = document.querySelector('.title__left .toggle__option__menu')
const body = document.querySelector('body');

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

// CheckAll for funnels and nested elements
const checkAll = (funnel, evt) => {
    console.log(evt.target.tagName);
    let funnelOptions = funnel.querySelector('.funnel__top .options');
    // Check all
    if(evt.target.classList.contains('check-all')){
        let isChecked = !evt.target.checked;
        evt.target.checked = isChecked;
        funnel.querySelectorAll('input').forEach(input => {
            input.checked = !isChecked;
        })
    } else if(evt.target.classList.contains('check-all-nest')){ 
        // for all nested elements
        let nestedIsChecked = !evt.target.checked;
        evt.target.checked = nestedIsChecked;
        const targetRow = [...funnel.querySelectorAll('.funnel__row')].filter(funnelRow => {
            return funnelRow.contains(evt.target);
        });

        targetRow[0].querySelectorAll('input').forEach(input => {
            input.checked = !nestedIsChecked;
        })
    } else if(evt.target.tagName === 'IMG'){
        funnelOptions.classList.toggle('none');
    } else {
        !funnelOptions.classList.contains('none') ? funnelOptions.classList.add('none') : null;
    }
}

// Event listeners for generalOptions
generalOptions.addEventListener('click', () => {
    document.querySelector('.title__left .options').classList.toggle('none');
})

// Event listener for active links
funnelLinks.forEach((funnelLink, idx) => {
    funnelLink.addEventListener('click', () => funnelLinkActive(idx));
});

// Event listeners for checkboxes
funnels.forEach(funnel => {
    funnel.addEventListener('click', (evt) => checkAll(funnel, evt));
});

// close any option if open
body.addEventListener('click', (evt) => {
    if(evt.target.className !== 'toggle__option__menu'){
        document.querySelectorAll('.options').forEach(option => {
            !option.classList.contains('none') ? option.classList.add('none') : null;
        })
    }
});