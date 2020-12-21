const addInputs = document.querySelectorAll(".form .add");
addInputs.forEach(addInput => addInput.addEventListener("click", addElement));
if(MicroModal) MicroModal.init();
const generateBtn = document.querySelector(".generate-btn");
bind(generateBtn, "click", fillEditor);
clearInputs();

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


function bind(el, event, callback){
  el.addEventListener(event, callback);
}

function clearInputs() {
  let inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    input.value = "";
  })
}

function addElement (e){
  const questions = this.previousElementSibling.cloneNode(true);
  if(questions.querySelector(".no")){
    const position = 1 + +questions.querySelector(".no").textContent;
    questions.querySelectorAll(".no").forEach( no => no.textContent = position);
    questions.querySelectorAll("input").forEach( input => input.value = "");
  }
  else{
    questions.value = "";
  }

  this.parentNode.insertBefore(questions, this);
}

function fillEditor() {
  let answers = [...document.querySelectorAll("li input")].map(input => input.value ? `<p>${input.value}</p><br>` : "");
  document.querySelector(".note-editable").innerHTML = answers.join(" ");
}