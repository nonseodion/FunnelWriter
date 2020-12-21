const addInputs = document.querySelectorAll(".form .add");
addInputs.forEach(addInput => addInput.addEventListener("click", insertElement));
const formNavs = document.querySelectorAll(".form-nav");
formNavs.forEach(formNav => formNav.addEventListener("click", navigate));
let active;
const statuses = [...document.querySelectorAll(".status")];
const questions = [...document.querySelectorAll(".questions>div")];
const adTemplates = document.querySelector(".ad-templates");
document.querySelector(".show-summary").addEventListener("click", fillTemplates);


if(MicroModal) MicroModal.init();

summerConfig = {
  tabsize: 2,
  toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'underline', 'italic',]],
    ['insert', ['link']],
    ['para', ['ul', 'ol']],
    ['font', [ 'superscript', 'subscript']]
  ]
};
$('#summernote').summernote(summerConfig);
$('#summernote').summernote('poppins', 'Arial')


function insertElement (e){
  const regex = /(\d+)/;
  const questions = this.previousElementSibling.cloneNode(true);

  if(questions.querySelector(".no")){
    let nextId = [...questions.querySelectorAll("input")].pop().id;
    const position = 1 + +questions.querySelector(".no").textContent;
    questions.querySelectorAll(".no").forEach( no => no.textContent = position);
    questions.querySelectorAll("input").forEach( input => {
      input.value = "";
      nextId = nextId[0] + ++nextId.match(regex)[0];
      input.id = nextId;
    });
  }
  else{
    questions.value = "";
    let nextId = questions.id[0] + ++questions.id.match(regex)[0];
    questions.id = nextId;
  }

  this.parentNode.insertBefore(questions, this);
  setStatuses();
}

function navigate(e){
  e.preventDefault();
  active.classList.remove("active");
  statuses[questions.indexOf(active)].parentNode.classList.remove("active");

  active = document.querySelector(`${this.hash}`);
  active.classList.add("active");
  if(this.hash === "#summary") return;
  statuses[questions.indexOf(active)].parentNode.classList.add("active");
  scrollToTop();
}

function scrollToTop(){
  document.documentElement.scrollTop = 0;
}

function setStatuses(e){
  questions.forEach( (question, index) =>{
    const inputs = question.querySelectorAll("input[type=text]");
    statuses[index].textContent = `0/${inputs.length}`;
    inputs.forEach(input => {
      input.addEventListener("input", (e) => {
        updateStatus(e, index);
      });      
    });
    updateStatus("", index);
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

function fillTemplates(){

  const inputs = document.querySelectorAll(".questions .question>input");
  inputs.forEach(input => {
    const adPlaceholders = [...adTemplates.querySelectorAll(`.${input.id}`)];
    adPlaceholders.forEach(placeholder => {
      placeholder.innerHTML = input.value;
      const hider = placeholder.closest(".hide");
      if(hider && !hider.matches(".ad-templates")) hider.classList.remove("hide");
    })
  })
  const adsClone = adTemplates.cloneNode(true);
  adsClone.classList.remove("hide");
  document.querySelector(".note-editable").innerHTML = adsClone.innerHTML;
}

function clearInputs() {
  let inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.value = "";
  })
}


window.onload = () => {
  active = document.querySelector(".questions>div");
  statuses[0].parentNode.classList.add("active");
  active.classList.add("active");
  clearInputs();
  setStatuses();
}

window.onpopstate = clearInputs;