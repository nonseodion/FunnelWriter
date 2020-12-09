MicroModal.init();

function populateInputs(){
  try{
    const inputs = JSON.parse(
      window.sessionStorage.getItem(document.querySelector(".summary").id)
    );
    for (input in inputs){
      [...document.querySelectorAll(`.${input}`)].forEach(placeholder => {
        if( Array.isArray(inputs[input]) ){
          debugger;
          inputs[input] = "*&nbsp;" + inputs[input].join("<br>*&nbsp;");
        }
        placeholder.innerHTML = inputs[input];
      })
    }
  }
  catch(err){

  }
}

window.onload = populateInputs;