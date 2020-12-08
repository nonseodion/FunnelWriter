console.log('me');

const form1 = document.querySelector('.form1');
const form2 = document.querySelector('.form2');
const form3 = document.querySelector('.form3');
const form4 = document.querySelector('.form4');
const form5 = document.querySelector('.form5');
const prospectInformation = document.querySelector('.prospect__information');
const prospectInformationStatus = prospectInformation.querySelector('.completed');
const prospectInformationTotal = prospectInformation.querySelector('.total');
const tellProduct = document.querySelector('.tell__product');
const tellProductStatus = tellProduct.querySelector('.completed');
const tellProductTotal = tellProduct.querySelector('.total');

let form2Length = 0;
let form3Length = 0;
let form4Length = 0;
let form5Length = 0;


// first form checker
if(form1) {
    const form1QuestionsInputs = form1.querySelectorAll('.input');
    form1QuestionsInputs.forEach(input => {
        input.addEventListener('keyup', (e) => {
            prospectInformationStatus.innerHTML = (
                prospectInformationStatus.innerHTML === prospectInformationTotal.innerHTML ? 
                prospectInformationTotal.innerHTML 
                : [...form1QuestionsInputs].filter(input => input.value !== '').length
            );
            
            if(prospectInformationStatus.innerHTML === prospectInformationTotal.innerHTML) {
                prospectInformation.classList.add('done');
            } else {
                prospectInformation.classList.contains('done') ? 
                prospectInformation.classList.remove('done') : null;
            }
        });
    });
   
}

// Second Form Checker
if(form2){
    const form2Questions = form2.querySelectorAll('.question');

    // Target all questions
    form2Questions.forEach(question => {
        // Target all inpute in each question
        const inputs = question.querySelectorAll('input');
        inputs.forEach(input => {
            // add event listener to each inputs and check if each all inputs for a 
            // particular section are filled before incrementing form checker
            input.addEventListener('keyup', (e) => {
                form2Length = (
                    tellProductStatus.innerHTML === tellProductTotal.innerHTML ? 
                    tellProductTotal.innerHTML 
                    : [...form2Questions].filter(question => (
                        [...question.querySelectorAll('input')].length === [...question.querySelectorAll('input')].filter(input => input.value !== '').length
                    )).length
                );
                
                tellProductStatus.innerHTML = Number(form2Length) + Number(form3Length) + Number(form4Length) + Number(form5Length)

                if(tellProductStatus.innerHTML === tellProductTotal.innerHTML) {
                    tellProduct.classList.add('done');
                } else {
                    tellProduct.classList.contains('done') ? 
                    tellProduct.classList.remove('done') : null;
                }
            });
        })
    });
} 

if(form3){
    const form3Questions = form3.querySelectorAll('.question');

    // Target all questions
    form3Questions.forEach(question => {
        // Target all inpute in each question
        const inputs = question.querySelectorAll('input');
        inputs.forEach(input => {
            // add event listener to each inputs and check if each all inputs for a 
            // particular section are filled before incrementing form checker
            input.addEventListener('keyup', (e) => {
                form3Length = (
                    tellProductStatus.innerHTML === tellProductTotal.innerHTML ? 
                    tellProductTotal.innerHTML 
                    : [...form3Questions].filter(question => (
                        [...question.querySelectorAll('input')].length === [...question.querySelectorAll('input')].filter(input => input.value !== '').length
                    )).length
                );
                
                tellProductStatus.innerHTML = Number(form2Length) + Number(form3Length) + Number(form4Length) + Number(form5Length)

                if(tellProductStatus.innerHTML === tellProductTotal.innerHTML) {
                    tellProduct.classList.add('done');
                } else {
                    tellProduct.classList.contains('done') ? 
                    tellProduct.classList.remove('done') : null;
                }
            });
        })
    });
}

if(form4){
    const form4Questions = form4.querySelectorAll('.question');

    // Target all questions
    form4Questions.forEach(question => {
        // Target all inpute in each question
        const inputs = question.querySelectorAll('input');
        inputs.forEach(input => {
            // add event listener to each inputs and check if each all inputs for a 
            // particular section are filled before incrementing form checker
            input.addEventListener('keyup', (e) => {
                form4Length = (
                    tellProductStatus.innerHTML === tellProductTotal.innerHTML ? 
                    tellProductTotal.innerHTML 
                    : [...form4Questions].filter(question => (
                        [...question.querySelectorAll('input')].length === [...question.querySelectorAll('input')].filter(input => input.value !== '').length
                    )).length
                );
                
                tellProductStatus.innerHTML = Number(form2Length) + Number(form3Length) + Number(form4Length) + Number(form5Length)

                if(tellProductStatus.innerHTML === tellProductTotal.innerHTML) {
                    tellProduct.classList.add('done');
                } else {
                    tellProduct.classList.contains('done') ? 
                    tellProduct.classList.remove('done') : null;
                }
            });
        })
    });
}

if(form5){
    const form5Questions = form5.querySelectorAll('.question');

    // Target all questions
    form5Questions.forEach(question => {
        // Target all inpute in each question
        const inputs = question.querySelectorAll('input');
        inputs.forEach(input => {
            // add event listener to each inputs and check if each all inputs for a 
            // particular section are filled before incrementing form checker
            input.addEventListener('keyup', (e) => {
                form5Length = (
                    tellProductStatus.innerHTML === tellProductTotal.innerHTML ? 
                    tellProductTotal.innerHTML 
                    : [...form5Questions].filter(question => (
                        [...question.querySelectorAll('input')].length === [...question.querySelectorAll('input')].filter(input => input.value !== '').length
                    )).length
                );
                
                tellProductStatus.innerHTML = Number(form2Length) + Number(form3Length) + Number(form4Length) + Number(form5Length)

                if(tellProductStatus.innerHTML === tellProductTotal.innerHTML) {
                    tellProduct.classList.add('done');
                } else {
                    tellProduct.classList.contains('done') ? 
                    tellProduct.classList.remove('done') : null;
                }
            });
        })
    });
}


// Change formstep
const goToForm = (formNumber) => {
    const forms = document.querySelectorAll('.form');
    forms.forEach(form => {
        if (form.classList.contains(`form${formNumber}`)){
            form.classList.remove('none');
        } else {
            form.classList.contains('none') ? null : form.classList.add('none');
        }
    })
}
