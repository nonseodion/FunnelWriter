const select = (indicator) => {
    return document.querySelector(indicator);
}

const selectAll = (indicator) => {
    return document.querySelectorAll(indicator);
}

const inputs = selectAll('input');
const editables = selectAll(".edit");
const fieldsets = selectAll('.writer');
const headlineLinks = selectAll('.headline-links .link');

const diy = select('.second-content');
const diyLabels = diy.querySelectorAll('.left-main-content input');
const dEvent = diy.querySelectorAll('.right-main-content span.event');
const dshortQuote = diy.querySelectorAll('.right-main-content span.short-quote');
const dIndustry = diy.querySelectorAll('.right-main-content span.industry');
const dHotButton = diy.querySelectorAll('.right-main-content span.hot-button');
const dCompare1 = diy.querySelectorAll('.right-main-content span.comparison-1');
const dCompare2 = diy.querySelectorAll('.right-main-content span.comparison-2');
const dDesireToChange = diy.querySelectorAll('.right-main-content span.desirable-outcome');
const dKeyword = diy.querySelectorAll('.right-main-content span.keyword');
const dSupportKeyword = diy.querySelectorAll('.right-main-content span.support-keyword');
const dSummary = diy.querySelectorAll('.right-main-content span.summary');
const dRidiculous = diy.querySelectorAll('.right-main-content span.ridiculous');
const dExpertNum = diy.querySelectorAll('.right-main-content span.expert-number');
const dExpertRoundup = diy.querySelectorAll('.right-main-content span.expert-roundup');
const dImpressive = diy.querySelectorAll('.right-main-content span.impressive');
const dHeadlineBrand = diy.querySelectorAll('.right-main-content span.headline-branding');

const explanatoryWhy = select('.third-content');
const explanatoryWhyLabels = explanatoryWhy.querySelectorAll('.left-main-content input');
const eTopicsToChange = explanatoryWhy.querySelectorAll('.right-main-content span.topic');
const ePointsToChange = explanatoryWhy.querySelectorAll('.right-main-content span.points');
const eDesireToChange = explanatoryWhy.querySelectorAll('.right-main-content span.desirable-outcome');
const eUndesireToChange = explanatoryWhy.querySelectorAll('.right-main-content span.undesirable-outcome');
const eAudienceToChange = explanatoryWhy.querySelectorAll('.right-main-content span.audience');
const eActionToChange = explanatoryWhy.querySelectorAll('.right-main-content span.action');
const eHelpToChange = explanatoryWhy.querySelectorAll('.right-main-content span.help');

const funPlayful = select('.fourth-content');
const funPlayfulLabels = funPlayful.querySelectorAll('.left-main-content input');
const fActionToChange = funPlayful.querySelectorAll('.right-main-content span.action');
const fTimeToChange = funPlayful.querySelectorAll('.right-main-content span.time');
const fPastToChange = funPlayful.querySelectorAll('.right-main-content span.past');
const fClaimToChange = funPlayful.querySelectorAll('.right-main-content span.claim');
const fAudienceToChange = funPlayful.querySelectorAll('.right-main-content span.audience');
const fObjectionToChange = funPlayful.querySelectorAll('.right-main-content span.objection');
const fDesireToChange = funPlayful.querySelectorAll('.right-main-content span.desirable-outcome');

const howTo = select('.fifth-content');
const howToLabels = howTo.querySelectorAll('.left-main-content input');
const hTopicsToChange = howTo.querySelectorAll('.right-main-content span.topic');
const hTimeToChange = howTo.querySelectorAll('.right-main-content span.time');
const hCelebToChange = howTo.querySelectorAll('.right-main-content span.celeb');
const hFrustrateToChange = howTo.querySelectorAll('.right-main-content span.frustrate');
const hSuccessToChange = howTo.querySelectorAll('.right-main-content span.success');
const hPowerToChange = howTo.querySelectorAll('.right-main-content span.power');
const hDesireToChange = howTo.querySelectorAll('.right-main-content span.desirable-outcome');
const hUndesireToChange = howTo.querySelectorAll('.right-main-content span.undesirable-outcome');

const numberedList = select('.sixth-content');
const numberedListLabels = numberedList.querySelectorAll('.left-main-content input');
const nTopicsToChange = numberedList.querySelectorAll('.right-main-content span.topic');
const nPointsToChange = numberedList.querySelectorAll('.right-main-content span.points');
const nDesireToChange = numberedList.querySelectorAll('.right-main-content span.desirable-outcome');
const nUndesireToChange = numberedList.querySelectorAll('.right-main-content span.undesirable-outcome');

const strongControversial = select('.seventh-content');
const strongControversialLabels = strongControversial.querySelectorAll('.left-main-content input');
const sTopicsToChange = strongControversial.querySelectorAll('.right-main-content span.topic');
const sAudienceToChange = strongControversial.querySelectorAll('.right-main-content span.audience');
const sAffectToChange = strongControversial.querySelectorAll('.right-main-content span.affect');
const sPreciousToChange = strongControversial.querySelectorAll('.right-main-content span.precious');
const sDesireToChange = strongControversial.querySelectorAll('.right-main-content span.desirable-outcome');
const sUndesireToChange = strongControversial.querySelectorAll('.right-main-content span.undesirable-outcome');

// Prevent content-editable adding div upon pressing enter
editables.forEach(editable => {
    editable.addEventListener('keypress', (evt) => {
        if(evt.which === 13){
            evt.preventDefault();
        }
    });
});


// Change headlinestep
const goToHeadline = (headlineNumber) => {
    headlineLinks.forEach((link, id) => {
        if(id + 1 === headlineNumber){
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
    const headlines = document.querySelectorAll('.headline-main-content');
    headlines.forEach((headline, idx) => {
        // checkActive(headlineNumber)
        if (idx + 1 === headlineNumber){
            headline.classList.remove('none');
        } else {
            headline.classList.contains('none') ? null : headline.classList.add('none');
        }
    })
}

// Copy input text
const copyText = (input) => {
    const inputToCopy = document.createElement('textarea');
    // inputToCopy.style.visibility = 'hidden';
    document.body.appendChild(inputToCopy);
    let textToCopy = '';

    const spanContents = input.querySelectorAll('.output .show-output span');

    [...spanContents].map(spanContent => {
        textToCopy += spanContent.innerHTML + ' '
    });
    
    // Set input value to text to copy
    inputToCopy.innerHTML = textToCopy;
   
    /* Select the text field */
    inputToCopy.select();
    inputToCopy.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    input.querySelector('.tooltiptext').innerHTML = 'Copied to clipboard';

    document.body.removeChild(inputToCopy);
};


// Event listener for fieldsets
fieldsets.forEach(fieldset => {
    fieldset.addEventListener('click', (evt) => {
        if(evt.target.tagName === 'rect' || evt.target.tagName === 'path'){
            copyText(fieldset);
        }
    });
    fieldset.querySelector('.tool-tip').addEventListener('mouseout', () => {
        fieldset.querySelector('.tooltiptext').innerHTML = 'copy to clipboard';
    });
});


const numberedListEvents = (label) => {
    if(label.className === 'input-topic'){
        nTopicsToChange.forEach(topic => {
            topic.innerHTML = label.value;
        })
    } else if (label.className === 'input-desired'){
        nDesireToChange.forEach(desire => {
            desire.innerHTML = label.value;
        })
    } else if (label.className === 'input-undesired'){
        nUndesireToChange.forEach(undesire => {
            undesire.innerHTML = label.value;
        })
    } else if (label.className === 'input-points'){
        nPointsToChange.forEach(point => {
            point.innerHTML = label.value;
        })
    }

}

const explanatoryWhyEvents = (label) => {
    if(label.className === 'input-topic'){
        eTopicsToChange.forEach(topic => {
            topic.innerHTML = label.value;
        })
    } else if (label.className === 'input-desired'){
        eDesireToChange.forEach(desire => {
            desire.innerHTML = label.value;
        })
    } else if (label.className === 'input-undesired'){
        eUndesireToChange.forEach(undesire => {
            undesire.innerHTML = label.value;
        })
    } else if (label.className === 'input-points'){
        ePointsToChange.forEach(point => {
            point.innerHTML = label.value;
        })
    } else if (label.className === 'input-audience'){
        eAudienceToChange.forEach(audience => {
            audience.innerHTML = label.value;
        })
    } else if(label.className === 'input-action'){
        eActionToChange.forEach(action => {
            action.innerHTML = label.value;
        })
    } if(label.className === 'input-help'){
        eHelpToChange.forEach(help => {
            help.innerHTML = label.value;
        })
    } 

}

const funPlayfulEvents = (label) => {
    if(label.className === 'input-action'){
        fActionToChange.forEach(action => {
            action.innerHTML = label.value;
        })
    } else if (label.className === 'input-desired'){
        fDesireToChange.forEach(desire => {
            desire.innerHTML = label.value;
        })
    } else if (label.className === 'input-objection'){
        fObjectionToChange.forEach(objection => {
            objection.innerHTML = label.value;
        })
    } else if (label.className === 'input-past'){
        fPastToChange.forEach(past => {
            past.innerHTML = label.value;
        })
    } else if (label.className === 'input-audience'){
        fAudienceToChange.forEach(audience => {
            audience.innerHTML = label.value;
        })
    } else if (label.className === 'input-claim'){
        fClaimToChange.forEach(claim => {
            claim.innerHTML = label.value;
        })
    } else if (label.className === 'input-time'){
        fTimeToChange.forEach(time => {
            time.innerHTML = label.value;
        })
    }
}

const howToEvents = (label) => {
    if(label.className === 'input-topic'){
        hTopicsToChange.forEach(topic => {
            topic.innerHTML = label.value;
        })
    } else if (label.className === 'input-desired'){
        hDesireToChange.forEach(desire => {
            desire.innerHTML = label.value;
        })
    } else if (label.className === 'input-undesired'){
        hUndesireToChange.forEach(undesire => {
            undesire.innerHTML = label.value;
        })
    } else if (label.className === 'input-power'){
        hPowerToChange.forEach(power => {
            power.innerHTML = label.value;
        })
    } else if (label.className === 'input-celeb'){
        hCelebToChange.forEach(celeb => {
            celeb.innerHTML = label.value;
        })
    } else if (label.className === 'input-success'){
        hSuccessToChange.forEach(success => {
            success.innerHTML = label.value;
        })
    } else if (label.className === 'input-frustrate'){
        hFrustrateToChange.forEach(frustrate => {
            frustrate.innerHTML = label.value;
        })
    } else if (label.className === 'input-time'){
        hTimeToChange.forEach(time => {
            time.innerHTML = label.value;
        })
    }
}

const diyLabelsEvents = (label) => {
    if(label.className === 'input input-hot-button'){
        dHotButton.forEach(hotButtonText => {
            hotButtonText.innerHTML = label.value;
        })
    } else if (label.className === 'input input-desired'){
        dDesireToChange.forEach(desire => {
            desire.innerHTML = label.value;
        })
    } else if (label.className === 'input input-summary'){
        dSummary.forEach(summary => {
            summary.innerHTML = label.value;
        })
    } else if (label.className === 'input input-industry'){
        dIndustry.forEach(industry => {
            industry.innerHTML = label.value;
        })
    } else if (label.className === 'input input-ridiculous'){
        dRidiculous.forEach(ridiculousText => {
            ridiculousText.innerHTML = label.value;
        })
    } else if (label.className === 'input input-event'){
        dEvent.forEach(event => {
            event.innerHTML = label.value;
        })
    } else if (label.className === 'input input-keyword'){
        dKeyword.forEach(keyword => {
            keyword.innerHTML = label.value;
        })
    } else if (label.className === 'input input-support-keyword'){
        dSupportKeyword.forEach(supportKeywordText => {
            supportKeywordText.innerHTML = label.value;
        })
    } else if (label.className === 'input input-impressive'){
        dImpressive.forEach(impressive => {
            impressive.innerHTML = label.value;
        })
    } else if (label.className === 'input input-short-quote'){
        dshortQuote.forEach(quote => {
            quote.innerHTML = label.value;
        })
    } else if (label.className === 'input input-headline'){
        dHeadlineBrand.forEach(headline => {
            headline.innerHTML = label.value;
        })
    } else if (label.className === 'input input-comparison1'){
        dCompare1.forEach(compare => {
            compare.innerHTML = label.value;
        })
    } else if (label.className === 'input input-comparison2'){
        dCompare2.forEach(compare => {
            compare.innerHTML = label.value;
        })
    } else if (label.className === 'input input-expert-number'){
        dExpertNum.forEach(number => {
            number.innerHTML = label.value;
        })
    } else if (label.className === 'input input-expert-roundup'){
        dExpertRoundup.forEach(round => {
            round.innerHTML = label.value;
        })
    } 
}

const strongControversialEvents = (label) => {
    if(label.className === 'input-topic'){
        sTopicsToChange.forEach(topic => {
            topic.innerHTML = label.value;
        })
    } else if (label.className === 'input-desired'){
        sDesireToChange.forEach(desire => {
            desire.innerHTML = label.value;
        })
    } else if (label.className === 'input-undesired'){
        sUndesireToChange.forEach(undesire => {
            undesire.innerHTML = label.value;
        })
    } else if (label.className === 'input-affect'){
        sAffectToChange.forEach(affect => {
            affect.innerHTML = label.value;
        })
    } else if (label.className === 'input-audience'){
        sAudienceToChange.forEach(audience => {
            audience.innerHTML = label.value;
        })
    }
    else if (label.className === 'input-precious'){
        sPreciousToChange.forEach(precious => {
            precious.innerHTML = label.value;
        })
    }
}

const formEventListener = (formLabels, callback) => {
    formLabels.forEach(formLabel => {
        callback(formLabel);
        formLabel.addEventListener('keyup', () => {
            callback(formLabel)
        })
    })
}

// Event listener for Forms
formEventListener(numberedListLabels, numberedListEvents);
formEventListener(explanatoryWhyLabels, explanatoryWhyEvents);
formEventListener(funPlayfulLabels, funPlayfulEvents);
formEventListener(howToLabels, howToEvents);
formEventListener(diyLabels,diyLabelsEvents);
formEventListener(strongControversialLabels, strongControversialEvents);



