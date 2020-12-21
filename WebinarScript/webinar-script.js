const form1 = document.querySelector('.form1');
const form2 = document.querySelector('.form2');
const form3 = document.querySelector('.form3');
const form4 = document.querySelector('.form4');
const form5 = document.querySelector('.form5');
const addExcitingResults = document.querySelector('.add__exciting__result');
const addMoreStruggles = document.querySelector('.add__more__struggles');
const prospectInformation = document.querySelector('.prospect__information');
const prospectInformationStatus = prospectInformation.querySelector('.completed');
const prospectInformationTotal = prospectInformation.querySelector('.total');
const tellProduct = document.querySelector('.tell__product');
const tellProductStatus = tellProduct.querySelector('.completed');
const tellProductTotal = tellProduct.querySelector('.total');
const process3 = document.querySelector('.process3');
const process3Status = process3.querySelector('.completed');
const process3Total = process3.querySelector('.total');
const process4 = document.querySelector('.process4');
const process4Status = process4.querySelector('.completed');
const process4Total = process4.querySelector('.total');
const process5 = document.querySelector('.tell__product');
const process5Status = process5.querySelector('.completed');
const process5Total = process5.querySelector('.total');

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => e.preventDefault())
});

window.addEventListener('load', () => {
    document.querySelectorAll('input').forEach(input => input.value = '');
})

// first form checker
if(form1) {
    form1.addEventListener('keyup', (evt) => {
        const form1QuestionsInputs = form1.querySelectorAll('.input');
        if(evt.target.tagName === 'INPUT'){
            // let inputElement = evt.target;
            prospectInformationStatus.innerHTML = (
                prospectInformationStatus.innerHTML <= prospectInformationTotal.innerHTML ? 
                [...form1QuestionsInputs].filter(input => input.value !== '').length
                : prospectInformationTotal.innerHTML 
            );
            
            if(prospectInformationStatus.innerHTML === prospectInformationTotal.innerHTML) {
                prospectInformation.className = 'form__part__title prospect__information done';
            } else {
                prospectInformation.className = 'form__part__title prospect__information in__progress'
            }
        }
    });
   
    addExcitingResults.addEventListener('click', () => {
        const newResultInput = document.createElement('div');

        newResultInput.innerHTML = `
            <label for="input${Number(prospectInformationTotal.innerHTML) + 1}">
                <input class="input" type="text" name="input${Number(prospectInformationTotal.innerHTML) + 1}" id="input${Number(prospectInformationTotal.innerHTML) + 1}">
            </label>
        `;

        document.querySelector('.form1 .question7').appendChild(newResultInput);

        prospectInformationTotal.innerHTML = Number(prospectInformationTotal.innerHTML) + 1;
    })
}

// Second Form Checker
if(form2){ 
    form2.addEventListener('keyup', (evt) => {
        const form2QuestionsInputs = form2.querySelectorAll('.input');
        if(evt.target.tagName === 'INPUT'){                   
            tellProductStatus.innerHTML = (
                tellProductStatus.innerHTML <= tellProductTotal.innerHTML ? 
                [...form2QuestionsInputs].filter(input => input.value !== '').length
                : [...form2QuestionsInputs].filter(input => input.value !== '').length
            );

            if(tellProductStatus.innerHTML === tellProductTotal.innerHTML) {
                tellProduct.className = 'form__part__title tell__product done';
            } else {
                tellProduct.className = 'form__part__title tell__product in__progress'
            }
        }
    });

    addMoreStruggles.addEventListener('click', () => {
        const question2 = document.querySelector('.form2 .question2');
        const question2Length = [...question2.querySelectorAll('input')].length;
        const newStruggleInput = document.createElement('div');

        newStruggleInput.innerHTML = `
            <label for="input${question2Length + 1}">
                <input class="input" type="text" name="input${question2Length + 1}" id="input${question2Length + 1}">
            </label>
        `;

        question2.appendChild(newStruggleInput);

        tellProductTotal.innerHTML = Number(tellProductTotal.innerHTML) + 1;
    })
} 

if(form3){
    const form3QuestionsInputs = form3.querySelectorAll('.input');

    // Target all inputs;
    form3QuestionsInputs.forEach(input => {
        // add event listener to each inputs and check if each all inputs for a 
        // particular section are filled before incrementing form checker
        input.addEventListener('keyup', (e) => {                
            process3Status.innerHTML = (
                process3Status.innerHTML <= process3Total.innerHTML ? 
                [...form3QuestionsInputs].filter(input => input.value !== '').length
                : process3Total.innerHTML 
            );
            
            if(process3Status.innerHTML === process3Total.innerHTML) {
                process3.className = 'form__part__title process3 done';
            } else {
                process3.className = 'form__part__title process3 in__progress'
            }
        });
    });
}

if(form4){
    const form4QuestionsInputs = form4.querySelectorAll('.input');

    // Target all inputs;
    form4QuestionsInputs.forEach(input => {
        // add event listener to each inputs and check if each all inputs for a 
        // particular section are filled before incrementing form checker
        input.addEventListener('keyup', (e) => {                
            process4Status.innerHTML = (
                process4Status.innerHTML <= process4Total.innerHTML ? 
                [...form4QuestionsInputs].filter(input => input.value !== '').length
                : process4Total.innerHTML 
            );
            
            if(process4Status.innerHTML === process4Total.innerHTML) {
                process4.className = 'form__part__title process4 done';
            } else {
                process4.className = 'form__part__title process4 in__progress'
            }
        });
    });
}

if(form5){
    const form5QuestionsInputs = form5.querySelectorAll('.input');

    // Target all inputs;
    form5QuestionsInputs.forEach(input => {
        // add event listener to each inputs and check if each all inputs for a 
        // particular section are filled before incrementing form checker
        input.addEventListener('keyup', (e) => {                
            process5Status.innerHTML = (
                process5Status.innerHTML <= process5Total.innerHTML ? 
                [...form5QuestionsInputs].filter(input => input.value !== '').length
                : process5Total.innerHTML 
            );
            
            if(process5Status.innerHTML === process5Total.innerHTML) {
                process5.className = 'form__part__title process5 done';
            } else {
                process5.className = 'form__part__title process5 in__progress'
            }
        });
    });
}


const checkActive = (id) => {
    document.querySelectorAll('.form__part__title').forEach((checker, idx) => {
        if(idx + 1 === id){
            checker.classList.add('in__progress');
        } else{
            checker.classList.remove('in__progress');
        }
    })
}

// Change formstep
const goToForm = (formNumber) => {
    const forms = document.querySelectorAll('.form');
    forms.forEach((form, idx) => {
        checkActive(formNumber)
        if (form.classList.contains(`form${formNumber}`)){
            form.classList.remove('none');
        } else {
            form.classList.contains('none') ? null : form.classList.add('none');
        }
    })
}


window.addEventListener('load', checkActive(1));