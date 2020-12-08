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
    var form1 = document.querySelector('.previous').style.display ='none';
    var form = document.querySelector('.next').style.display ='block';
    console.log('hey');
    e.preventDefault();

}
function showUpperNextItem(e){
    document.querySelector('.addMore__next__next').style.display ='block';
    document.querySelector('.next__next').style.display = 'none'
    e.preventDefault();

}
function showNextNext(e){
    var form1 = document.querySelector('.previous').style.display ='none';
    var form = document.querySelector('.next').style.display ='none';
      document.querySelector('.addMore__next__next').style.display ='none';
    document.querySelector('.next__next').style.display = 'block'
    console.log('hey');
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
    console.log('hey');

    e.preventDefault();

}
function showBackNext(e){
    var form1 = document.querySelector('.previous').style.display ='block';
    var form = document.querySelector('.next').style.display ='none';
    console.log('hey');
    e.preventDefault();

}
