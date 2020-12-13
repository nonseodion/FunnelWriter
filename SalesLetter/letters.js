const formNavs = document.querySelectorAll(".form-nav");
formNavs.forEach(formNav => formNav.addEventListener("click", navigate));
let active;
const statuses = [...document.querySelectorAll(".status")];
const questions = [...document.querySelectorAll(".questions>div")];


function scrollToTop(){
  document.documentElement.scrollTop = 0;
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