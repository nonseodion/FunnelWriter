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


// var inputs = document.querySelectorAll('.active input');
// function show(){
//     inputs.forEach(input => { input.addEventListener('click', (e) =>{
//         console.log('hey')
//         e.preventDefault();
// }
// )});   
// console.log(inputs);
// console.log(inputs)
// var input = Array.from(inputs)
// console.log(input)



// inputs.forEach(input => { input.addEventListener('input', (e) =>{
//    if(input.value >= '1') {
//        document.querySelector('.value').textContent = x+1;
//            console.log(inputs);
// }else if(input.value < 1) {
//     document.querySelector('.value').textContent = x--;
// }else{
//      document.querySelector('.value').textContent = x+1;
// }
// })});


var myInput = parent.document.querySelectorAll('.active input');
var update = document.querySelector('.checked .value');
let input = Array.from(myInput);
input.forEach(arr => arr.addEventListener('change', (e)=>{
    if (e.target.value.length >0 && e.target.matches(".active input")) {
    update.textContent ++ + '' + arr.length;
}else{
    update.textContent --;

}}))

var myInput1 = document.querySelectorAll('.next input');
var update1 = document.querySelector('.next__first .value');
let input1 = Array.from(myInput1);
input1.forEach(arr => arr.addEventListener('change', (e)=>{
    if (e.target.value.length >0 && e.target.matches(".next input")) {
    update1.textContent ++;
    }else{
    update1.textContent --;
    }}))

    var myInput2 = document.querySelectorAll('.next__next input');
    var update2 = document.querySelector('.nextNext .value');
    let input2 = Array.from(myInput2);
    input2.forEach(arr => arr.addEventListener('change', (e)=>{
        if (e.target.value.length >0 && e.target.matches(".next__next input")) {
        update2.textContent ++;
        }else{
        update2.textContent --;
        }}))


    var myInput3 = document.querySelectorAll('.addMore__next__next input');
    var update3 = document.querySelector('.final__next .value');
    let input3 = Array.from(myInput3);
    input3.forEach(arr => arr.addEventListener('change', (e)=>{
        if (e.target.value.length >0 && e.target.matches(".addMore__next__next input")) {
        update3.textContent ++;
        }else{
        update3.textContent --;
        }}))

// FORM FUNCTIONALITIES
const yourExperience = document.querySelector('#yourExperience');
const yourTag = document.querySelector('#yourTag');
const yourName = document.querySelector('#yourName');
const buzzProInput = document.querySelector('#buzzPro');
yourExperience.addEventListener("keyup", event => {
    if  (yourName.value.length >=2 && yourTag.value.length >=2 && yourExperience.value.length >=2 && buzzProInput.value.length >=2 ) {
        document.querySelector('.checked span').style.color = '#35ec81';
        document.querySelector('.checked').style.color = '#35ec81';
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

    };
    // do something
    // event.preventDefault();
}
)
