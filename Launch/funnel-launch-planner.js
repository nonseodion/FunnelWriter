const funnelLinks = document.querySelectorAll('.navigation ul li');
const funnelContainers = document.querySelectorAll('.funnel__container');
const Todofunnels = document.querySelectorAll('.todo__funnels .funnel');
const completedFunnels = document.querySelectorAll('.completed__funnels .funnel');
const generalOptions = document.querySelector('.title__left .toggle__option__menu')
const TodoNormalRow = document.querySelectorAll('.todo__funnels .normal__row');
const completedNormalRow = document.querySelectorAll('.completed__funnels .normal__row');
const body = document.querySelector('body');

window.addEventListener('load', () => {
    document.querySelectorAll('input').forEach(input => input.checked = false);
})

// Add active links
const funnelLinkActive = (id) => {
    if(funnelLinks){
        funnelLinks.forEach((funnelLink, idx) => {
            if(idx === id) {
                funnelLink.classList.add('active');
                [...funnelContainers].filter((container, idx) => idx === id)[0].classList.remove('none')
            } else{
                funnelLink.classList.remove('active');
                [...funnelContainers].filter((container, idx) => idx !== id)[0].classList.add('none')
            }
        });
    }
}

// CheckAll for funnels and nested elements
const checkAllTodos = (funnel, evt) => {
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

        [...funnel.querySelectorAll('input')].filter(input => {
            return input.checked === false && !input.classList.contains('check-all')
        }).length !== 0 ?  funnel.querySelector('input.check-all').checked = false : funnel.querySelector('input.check-all').checked = true;
        
        !funnelOptions.classList.contains('none') ? funnelOptions.classList.add('none') : null;
    
    }

    [...TodoNormalRow].forEach((row, todoId) => {
        if(row.querySelector('input') && row.querySelector('input').checked === true){
            row.querySelector('.funnel__row__text').className = 'funnel__row__text strike';

            [...completedNormalRow].forEach((cRow, completedId) => {
                if(completedId === todoId){
                    cRow.classList.remove('none');
                    checkCompeletedFunnels();
                }
            })
        } else{
            row.querySelector('.funnel__row__text').className = 'funnel__row__text';

            [...completedNormalRow].forEach((cRow, completedId) => {
                if(completedId === todoId){
                    cRow.classList.add('none');
                    checkCompeletedFunnels();
                }
            })
        }
    })
}


const completedFunnelsEvents = (funnel, evt) => {
    let funnelOptions = funnel.querySelector('.funnel__top .options');
    
    if(evt.target.tagName === 'IMG'){
        funnelOptions.classList.toggle('none');
    } else {
        !funnelOptions.classList.contains('none') ? funnelOptions.classList.add('none') : null;
    }
}

const checkCompeletedFunnels = () => {
    completedFunnels.forEach(funnel => {
        if([...funnel.querySelectorAll('.normal__row')].filter(row => !row.classList.contains('none')).length === 0){
            funnel.querySelector('.funnel__body').style.display = 'none';
        }else{
            funnel.querySelector('.funnel__body').style.display = 'block';
        } 
    });
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
Todofunnels.forEach(funnel => {
    funnel.addEventListener('click', (evt) => checkAllTodos(funnel, evt));
});

completedFunnels.forEach(funnel => {
    funnel.addEventListener('click', (evt) => completedFunnelsEvents(funnel, evt));
});

// close any option if open
body.addEventListener('click', (evt) => {
    if(evt.target.className !== 'toggle__option__menu'){
        document.querySelectorAll('.options').forEach(option => {
            !option.classList.contains('none') ? option.classList.add('none') : null;
        })
    }
});

checkCompeletedFunnels();