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
    // console.log('hey');
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

    // console.log('hey');
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
    var form1 = document.querySelector('.previous').style.display ='block';
    var form = document.querySelector('.next').style.display ='none';
    // console.log('hey');
    // document.querySelector('.checked span').style.color = '#191847';
    // document.querySelector('.checked svg path').style.fill = '#191847';
    // document.querySelector('.checked .value').style.color = '#191847';

    e.preventDefault();

}

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
        // console.log(buzzProInput.value);

        // return buzzProInput.value
      
    }else{
        document.querySelector('.checked span').style.color = '#000000';
        document.querySelector('.checked svg path').style.fill = '#000000';
        document.querySelector('.checked .value').style.color = '#000000';

    }
    // do something
    event.preventDefault();

});







const nameProduct = document.querySelector('#nameProduct');
const typeProduct = document.querySelector('#typeProduct');
const productScarcity = document.querySelector('#productScarcity');
const endResult = document.querySelector('#endResult');
const readers = document.querySelector('#readers');
const bigStruggle = document.querySelector('#bigStruggle');
readers.addEventListener("keyup", event => {
    if  (nameProduct.value.length >=2 && typeProduct.value.length >=2 &&             productScarcity.value.length >=2 && bigStruggle.value.length >=2 ) {
        document.querySelector('.next__first span').style.color = '#35ec81';
        document.querySelector('.next__first .value').style.color = '#35ec81';
        document.querySelector('.next__first svg path').style.fill = '#35ec81';
        // console.log(buzzProInput.value);

        // return buzzProInput.value
      
    }else{
        document.querySelector('.next__next span').style.color = '#000000';
        document.querySelector('.next__next svg path').style.fill = '#000000';
        document.querySelector('.next__next .value').style.color = '#000000';

    }
    // do something
    event.preventDefault();

});



const addMoreProducts = document.querySelector('#addMoreProducts');
addMoreProducts.addEventListener("keyup", event => {
    if  (addMoreProducts.value.length >=2) {
        document.querySelector('.nextNext span').style.color = '#35ec81';
        document.querySelector('.nextNext .value').style.color = '#35ec81';
        document.querySelector('.nextNext svg path').style.fill = '#35ec81';
        // console.log(buzzProInput.value);

        // return buzzProInput.value
      
    }else{
        document.querySelector('.nextNext span').style.color = '#000000';
        document.querySelector('.nextNext svg path').style.fill = '#000000';
        document.querySelector('.nextNext .value').style.color = '#000000';

    }
    // do something
    event.preventDefault();

});



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