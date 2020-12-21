const addInputs = document.querySelectorAll(".form .add");
addInputs.forEach(addInput => addInput.addEventListener("click", addElement));
const formNavs = document.querySelectorAll(".form-nav");
const nextbtns = document.querySelectorAll(".btn-blue");
nextbtns.forEach(nextbtn => nextbtn.addEventListener("click", navigate));
formNavs.forEach(formNav => formNav.addEventListener("click", navigate));
let activeQuestion = document.querySelector(".questions");
const statuses = [...document.querySelectorAll(".status")];
const questions = [...document.querySelectorAll(".questions")]; 
const form = select(".main__content form");
bind(form, "input", updateStatus);
const generateBtn = document.querySelector("button.btn-blue");
bind(generateBtn, "click", fillEditor);
const emailTemplates = select(".email-templates");


//On Document Load
clearInputs();
questions.forEach(question => { updateStatus({target: question}); })
if(MicroModal) MicroModal.init();

summerConfig = {
  tabsize: 2,
  toolbar: [
    ['style', ['style']],
    ['font', ['bold', 'underline', 'italic',]],
    ['insert', ['lin""k']],
    ['para', ['ul', 'ol']],
    ['font', [ 'superscript', 'subscript']]
  ]
};
$('#summernote').summernote(summerConfig);
$('#summernote').summernote('poppins', 'Arial')


function select(el){
  return document.querySelector(el);
}

function bind(el, event, callback){
  el.addEventListener(event, callback);
}

function scrollToTop(){
  document.documentElement.scrollTop = 0;
}


function addElement (e){
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
  updateStatus({target: this});
}

function navigate(e){
  e.preventDefault();
  if(!this.classList.contains("form-nav")) return;
  activeQuestion.classList.remove("active");
  statuses[questions.indexOf(activeQuestion)].parentNode.classList.remove("active");

  activeQuestion = document.querySelector(`${this.hash}`);
  activeQuestion.classList.add("active");
  if(this.hash === "#summary") return;
  statuses[questions.indexOf(activeQuestion)].parentNode.classList.add("active");
  scrollToTop();
}


function updateStatus({ target }){
  const questionSet = target.closest(".questions");
  if(!questionSet) return;
  let [filled, total] = [0, 0];

  const inputs = [...questionSet.querySelectorAll("input")];
  filled = inputs.reduce((filled, input) => {
    let value = input.value.trim()
    return filled + ( value ? 1 : 0);
  }, 0);
  total = inputs.length;

  const progress = statuses[questions.indexOf(questionSet)];
  progress.textContent = `${filled}/${total}`;

  if(filled === total && filled !== 0){
    progress.parentNode.classList.add("filled");
  }
  else{
    progress.parentNode.classList.remove("filled");
  }
}

function clearInputs() {
  let inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.value = "";
  })
}

function fillEditor() {
    const inputs = document.querySelectorAll(".questions .question>input");
    console.log(inputs);
    inputs.forEach(input => {
      console.log(input);
      console.log(input.id)
      const emailPlaceholders = [...emailTemplates.querySelectorAll(`.${input.id}`)];
      emailPlaceholders.forEach(placeholder => {
        console.log(placeholder);
        placeholder.innerHTML = input.value;
        const hider = placeholder.closest(".hide");
        if(hider && !hider.matches(".email-templates")) hider.classList.remove("hide");
      })
    })
    const emailsClone = emailTemplates.cloneNode(true);
    emailsClone.classList.remove("hide");
    document.querySelector(".note-editable").innerHTML = emailsClone.innerHTML;
}