let input = document.querySelector(".input");
let output= document.querySelector(".show-output");

input.addEventListener('input', e => {
	output.value = e.target.value
})