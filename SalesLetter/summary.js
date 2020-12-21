

function populateInputs(){
  try{
    const inputs = JSON.parse(
      window.sessionStorage.getItem(document.querySelector(".summary").id)
    );
    for (input in inputs){
      [...document.querySelectorAll(`.${input}`)].forEach(placeholder => {
        if( Array.isArray(inputs[input]) ){
          inputs[input] = "*&nbsp;" + inputs[input].join("<br>*&nbsp;");
        }
        placeholder.innerHTML = inputs[input];
        placeholder.parentNode.classList.remove("hide");
      })
    }
  }
  catch(err){
    console.error(err)
  } 
}

window.onload = populateInputs;
MicroModal.init();