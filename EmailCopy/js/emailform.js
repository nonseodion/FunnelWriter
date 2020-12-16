const addInputs = document.querySelectorAll(".form .add");
addInputs.forEach(add => add.addEventListener("click", insertInput));
var saveItem = document.querySelectorAll('generate');
saveItem.forEach(buttons => buttons.addEventListener('click', storeItem))
const formNavs = document.querySelectorAll(".form-nav");
const nextbtns = document.querySelectorAll(".btn-blue");
nextbtns.forEach(nextbtn => nextbtn.addEventListener("click", navigate));
formNavs.forEach(formNav => formNav.addEventListener("click", navigate));
let active;
const statuses = [...document.querySelectorAll(".status")];
const questions = [...document.querySelectorAll(".questions>div")];


function insertInput (e){
  const parent = this.parentNode;
  const inputNode = parent.querySelector("input[type=text]:last-of-type").cloneNode();
  inputNode.value = "";
  parent.insertBefore(inputNode, this);
  
 
}

function navigate(e){
  e.preventDefault();
  active.classList.remove("active");
  statuses[questions.indexOf(active)].parentNode.classList.remove("active");
  active = document.querySelector(`${this.hash}`);
  active.classList.add("active");
  if(this.hash === "#summary") return;
  statuses[questions.indexOf(active)].parentNode.classList.add("active");
  
}

function setStatuses(e){
  questions.forEach( (question, index) =>{
    const inputs = question.querySelectorAll("input[type=text]:last-of-type");
    statuses[index].textContent =`0/${inputs.length}`;
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

// storing in sessionStorage
function storeItem(){
  let inputs = document.querySelectorAll("input");
  inputs.forEach(input => {
    // input.value = "";
    console.log(input.length);
  })
const labels = document.querySelectorAll('label');
labels.forEach(label =>{
  label.innerText = ""
    console.log(label.innerText);
if (typeof(Storage) !== "null") {
  // Store
  sessionStorage.setItem("label", JSON.stringify(input.length));
}

})
getStorageItem()
}
function getStorageItem(){
  if (sessionStorage == "null") {
    var content = document.querySelector('content')
    content = sessionStorage.getItem('short') 
  }
}


function storeInputs() {
  try{
    const listItems = document.querySelectorAll("form li");
    const form = Object.create(null);
    listItems.forEach(listItem => {
      const inputs = [...listItem.querySelectorAll("input[type=text]")];
      if(inputs.length === 1){ 
        form[`${listItem.id}`] = inputs[0].value 
      }
      else{
        debugger;
        form[`${listItem.id}`] = inputs.map(input => input.value);
      }
    })
    
    window.sessionStorage.setItem(
      document.querySelector("form.questions").id,
      JSON.stringify(form));
  }
  catch(err){
    console.error(err);
  }
}

window.onload = () => {
  active = document.querySelector(".questions>div");
  statuses[0].parentNode.classList.add("active");
  active.classList.add("active");
  setStatuses();
  clearInputs();
  getStorageItem();
}

window.onpopstate = clearInputs;

window.onunload = storeInputs;
