var form = document.querySelector('.next').style.display ='none';

// EVENTLISTENERS
document.querySelector('.btn__next').addEventListener('click', showNext);
document.querySelector('.btn__previous').addEventListener('click', showBackNext);
document.querySelector('.btn__next__next').addEventListener('click', showNextNext);
document.querySelector('.btn__previous__previous').addEventListener('click', showPreviousPrevious);
document.querySelector('.btn__next__next_Upper').addEventListener('click', showUpperNextItem);
document.querySelector('.btn__previous__addMore').addEventListener('click', showBackNextItem);

// SIMPLE IF STATEMENT TO HIDE SOME ELEMENTS
if (document.querySelector('.next').style.display =='none' && 
    document.querySelector('.previous').style.display =='none') 
    {
    document.querySelector('.next__next').style.display = 'none'
    }
else{
    document.querySelector('.next__next').style.display = 'none'
    document.querySelector('.addMore__next__next').style.display = 'none'
}
    document.querySelector('.next__next').style.display = 'none'

// FUNCTION DECLERATIONS

// NEXT FUNCTIONS
function showNext(e){
    document.querySelector('.previous').style.display ='none';
    document.querySelector('.next').style.display ='block';
    document.querySelector('.next__first span').style.color = '#191847';
    document.querySelector('.next__first .value').style.color = '#191847';
    document.querySelector('.next__first svg path').style.fill = '#191847';

    e.preventDefault();

}
function showUpperNextItem(e){
    document.querySelector('.addMore__next__next').style.display ='block';
    document.querySelector('.next__next').style.display = 'none'
    document.querySelector('.final__next span').style.color = '#191847';
    document.querySelector('.final__next .value').style.color = '#191847';
    document.querySelector('.final__next svg path').style.fill = '#191847';
    e.preventDefault();

}
function showNextNext(e){
    document.querySelector('.previous').style.display ='none';
    document.querySelector('.next').style.display ='none';
    document.querySelector('.addMore__next__next').style.display ='none';
    document.querySelector('.next__next').style.display = 'block'
    document.querySelector('.nextNext span').style.color = '#191847';
    document.querySelector('.nextNext .value').style.color = '#191847';
    document.querySelector('.nextNext svg path').style.fill = '#191847';

    e.preventDefault();

}

// BACK/PREVIOUS NEXT FUNCTIONS
function showBackNextItem(e){
    document.querySelector('.addMore__next__next').style.display ='none';
    document.querySelector('.next__next').style.display = 'block'
    e.preventDefault();

}
function showPreviousPrevious(e){
    document.querySelector('.previous').style.display ='none';
    document.querySelector('.next').style.display ='block';
      document.querySelector('.addMore__next__next').style.display ='none';
    document.querySelector('.next__next').style.display = 'none'
    // console.log('hey');

    e.preventDefault();

}
function showBackNext(e){
    document.querySelector('.previous').style.display ='block';
    document.querySelector('.next').style.display ='none';
    // console.log('hey');
    // document.querySelector('.checked span').style.color = '#191847';
    // document.querySelector('.checked svg path').style.fill = '#191847';
    // document.querySelector('.checked .value').style.color = '#191847';

    e.preventDefault();
}


function setStatuses(e){
    questions.forEach( (question, index) =>{
      const inputs = question.querySelectorAll("input[type=text]:first-of-type");
      statuses[index].textContent = `0/${inputs.length}`;
      inputs.forEach(input => {
        input.addEventListener("input", (e) => {
          updateStatus(e, index);
        });
      });
    }); 
  }
  
  function updateStatus(e, parentIndex){
    const question = questions[parentIndex];
    const inputs = question.querySelectorAll("input[type=text]");
    const total = inputs.length;
    let filled = [...inputs].reduce((total, input) => {
      return total + +(input.value.trim() !== "");
    }, 0);
    statuses[parentIndex].textContent = `${filled}/${total}`;
    
    if(filled === total) {statuses[parentIndex].parentNode.classList.add("filled");}
    else {statuses[parentIndex].parentNode.classList.remove("filled");}
  }
  
  function clearInputs() {
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
      input.value = "";
    })
  }
  



// input.addEventListener("input", (e) => {
//     updateStatus(e, index);
//   });

var inputs = document.querySelectorAll(' .active input');
inputs.forEach(input => { input.addEventListener('click', (e) =>{
    for (let i = 0; i< document.querySelector('.value').length == 4, i++;);
   if (buzzProInput.value.isEmpty=false) {
       document.querySelector('.value').textContent = x+=1;
        // e.stopImmediatePropagation()
        // buzzProInput.e ==false;
    }else if(buzzProInput.value.isEmpty=true){
        document.querySelector('.value').textContent = x-=1;

    }else{
        document.querySelector('.value').textContent = x--;

    }
})});








// FORM FUNCTIONALITIES
const yourExperience = document.querySelector('#yourExperience');
const yourTag = document.querySelector('#yourTag');
const yourName = document.querySelector('#yourName');
const buzzProInput = document.querySelector('#buzzPro');
yourExperience.addEventListener("keyup", event => {
    if  (yourName.value.length >=2 && yourTag.value.length >=2 && yourExperience.value.length >=2 && buzzProInput.value.length >=2 ) {
        document.querySelector('.checked span').style.color = '#35ec81';
        document.querySelector('.checked .value').style.color = '#35ec81';
        document.querySelector('.checked svg path').style.fill = '#35ec81';
   var next = document.querySelector('.btn__next');
    next.disabled = false;
   

      
    }else{
        document.querySelector('.checked span').style.color = '#000000';
        document.querySelector('.checked svg path').style.fill = '#000000';
        document.querySelector('.checked .value').style.color = '#000000';

    }
    event.preventDefault();

});

const nameProduct = document.querySelector('#nameProduct');
const typeProduct = document.querySelector('#typeProduct');
const productScarcity = document.querySelector('#productScarcity');
const endResult = document.querySelector('#endResult');
const readers = document.querySelector('#readers');
const bigStruggle = document.querySelector('#bigStruggle');
readers.addEventListener("keyup", event => {
    if  (nameProduct.value.length >=2 && typeProduct.value.length >=2 && productScarcity.value.length >=2 && bigStruggle.value.length >=2 ) {
        document.querySelector('.next__first span').style.color = '#35ec81';
        document.querySelector('.next__first .value').style.color = '#35ec81';
        document.querySelector('.next__first svg path').style.fill = '#35ec81';
        var btnnextnext =  document.querySelector('.btn__next__next');
        btnnextnext.disabled = false;
    }else{
        document.querySelector('.next__next span').style.color = '#000000';
        document.querySelector('.next__next svg path').style.fill = '#000000';
        document.querySelector('.next__next .value').style.color = '#000000';

    }
    event.preventDefault();

});

const addMoreProducts = document.querySelector('#addMoreProducts');
addMoreProducts.addEventListener("keyup", event => {
    if  (addMoreProducts.value.length >=2) {
        document.querySelector('.nextNext span').style.color = '#35ec81';
        document.querySelector('.nextNext .value').style.color = '#35ec81';
        document.querySelector('.nextNext svg path').style.fill = '#35ec81';
        var btnnextnextUpper =  document.querySelector('.btn__next__next_Upper');
        btnnextnextUpper.disabled = false;
      
    }else{
        document.querySelector('.nextNext span').style.color = '#000000';
        document.querySelector('.nextNext svg path').style.fill = '#000000';
        document.querySelector('.nextNext .value').style.color = '#000000';

    }
    event.preventDefault();

});
var x = 0;

document.getElementById('output-area').innerHTML = x;

function button1() {
  document.getElementById('output-area').innerHTML = ++x;
}

function button2() {
  document.getElementById('output-area').innerHTML = --x;
}


const addMore1 = document.querySelector('#addMore1');
const addMore2 = document.querySelector('#addMore2');
addMore2.addEventListener("keyup", event => {
    if  (addMore1.value.length >=2 && addMore2.value.length >=2) {
        document.querySelector('.final__next span').style.color = '#35ec81';
        document.querySelector('.final__next .value').style.color = '#35ec81';
        document.querySelector('.final__next svg path').style.fill = '#35ec81';
        // console.log(buzzProInput.value);

        // return buzzProInput.value
      
    }else{
        document.querySelector('.final__next span').style.color = '#000000';
        document.querySelector('.final__next svg path').style.fill = '#000000';
        document.querySelector('.final__next .value').style.color = '#000000';

    }
    // do something
    event.preventDefault();

});