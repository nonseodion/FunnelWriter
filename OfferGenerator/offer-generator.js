const dropdownBtn = select(".dropdown");
bind(dropdownBtn, "click", toggleDropdown);
const dropdown = select(".btn-btn");
bind(dropdown, "click", toggleOffer);
const offerTemplate = select(".templates #offerTemplate");
const offers = select(".offers");
bind(offers, "click", handleRemoveButton);
bind(offers, "input", setTotalPrice);
const strengthText = select(".strength-text");
const percent = select(".percent");
const bonusTemplate = select(".templates #bonusTemplate");
const bonuses = select(".bonuses");
bind(bonuses, "click", removeBonus);
const addBonusBtn = select(".add-bonus");
bind(addBonusBtn, "click", addBonus);
bind(window, "click", () => dropdownBtn.classList.remove("active"));
const form = select(".right");
bind(form, "input", updateProgress);
const mainContent = select(".main__content");
bind(mainContent, "click", changeQuestions);
const summary = select(".base-container");
let activeQuestion = form.querySelector(".questions.active");
const questions = [...document.querySelectorAll(".questions")];
const progresses = [...document.querySelectorAll(".status")]
activeProgress = progresses[0].parentNode;
const firstNextButton = select(".next-btn");
firstNextButton.addEventListener("click", checkFilled);
const required = select(".required");
const seeSummary = document.querySelector(".btn-nav.see-summary");
bind(seeSummary, "click", fillTable);

//onDOMReady
setPercent();
document.querySelectorAll("input").forEach(input => {
  input.value = "";
  input.checked = false;
});
document.querySelectorAll("textarea").forEach(input => input.value = "");
questions.forEach(question => updateProgress( { target:question } ));



function checkFilled(e){
  const status = document.querySelector(".status").textContent.split("/");
  if(status[0] !== status[1]){
    e.stopImmediatePropagation();
    required.classList.remove("hide");
  };
}

function select(el){
  return document.querySelector(el);
}

function bind(el, event, callback){
  el.addEventListener(event, callback);
}

//form dropdown
function toggleDropdown(e){
  e.stopPropagation();
  this.classList.toggle("active");
}

function toggleOffer(e){
  e.stopPropagation();
  if(!e.target.classList.contains("btn")) return;
  (e.target.classList.contains("active")) ?
    removeOffer(e.target) :
    addOffer(e.target);
}

function removeOffer(el){
  el.classList.remove("active");
  const offer = offers.querySelector(`[data-offer=${el.id}]`);
  offers.removeChild(offer);
  setOfferNum();
  setTotalPrice();
  updateProgress({target: questions[1]});
}

function addOffer(el){
  el.classList.add("active");
  const offer = offerTemplate.cloneNode(true);
  offer.dataset.offer= el.id;
  offer.querySelector(".offer__label").textContent = el.textContent;
  offer.classList.remove("hide");
  offers.appendChild(offer);
  setOfferNum();
  setTotalPrice();
  updateProgress({target: questions[1]});
}

function handleRemoveButton(e){
  if(!e.target.classList.contains("offer__remove")) return;
  removeOffer(dropdown.querySelector(`#${e.target.parentNode.dataset.offer}`));
}

function setOfferNum(){
  const offerNum  = offers.querySelectorAll(".offer").length;
  select("#offer-num").textContent = offerNum;
  setPercent();
}

function getTotal(selector){
  const prices = [...document.querySelectorAll(selector)].map(price => price.value);
  let total = numeral(0);
  price = prices.reduce((total, price) => !isNaN(price) ? total.add(price) : total.add(0), total);
  return price.value();
}

function setTotalPrice(){
  price = getTotal(".offer__price input");
  select("#total-price").textContent = price;
}

function setPercent(){
  let value = parseInt(select("#offer-num").textContent);
  value = value > 10 ? 100 : value*10;
  const circumference = 2*Math.PI * select(".circle__inner").getAttribute("r");
  let successValue = (value/100) * circumference;

  percent.innerHTML= `${value}%`;
  select('.circle__inner').setAttribute('stroke-dasharray', `${successValue},${circumference - successValue}`);
  if(value < 10 ) select('.percent').setAttribute('x', "20");
  else if(value === 100){
    percent.setAttribute('x', "15");
  }
  else{ 
    percent.setAttribute('x', "17");
  }
  setStrengthText(value);
}

function setStrengthText(percentText){
  percentText = +percentText;
  let strength;
  switch(true){
    case(percentText <= 0): 
      strength = `<span class="empty"> &#9662; Empty</span>`;
      break;
    case(percentText <= 50): 
      strength = `<span class="poor"> &#9662; Poor</span>`;
      break;
    case(percentText <= 75): 
      strength = `<span class="weak"> &#9662; Weak</span>`;
      break;
    case(percentText <= 100): 
      strength = `<span class="excellent"> &#9652; Excellent</span>`;
      break;
  }
  strengthText.innerHTML = strength;
}

function addBonus(){
  const bonus = bonusTemplate.cloneNode(true);
  bonuses.appendChild(bonus);
  updateProgress({target: questions[2]});
}

function removeBonus({target}){
  if(!target.classList.contains("bonus__remove")) return;
  bonuses.removeChild(target.parentNode);
  updateProgress({target: questions[2]});
}

function changeQuestions ({target}){
  if(!target.classList.contains("btn-nav")) return;
  if(target.classList.contains("see-summary")) return toggleSummary();

  activeQuestion.classList.remove('active');
  activeProgress.classList.remove("active");
  activeQuestion = document.querySelector(`.${target.id}`);
  activeProgress = progresses[questions.indexOf(activeQuestion)].parentNode;
  activeQuestion.classList.add("active");
  activeProgress.classList.add("active");
}

function toggleSummary(){
  select(".base").classList.toggle("hide");
  summary.classList.toggle("hide");
  
}

function updateProgress({ target }){
  
  const questionSet = target.closest(".questions");
  if(!questionSet) return;
  let [filled, total] = [0, 0];

  const inputs = [...questionSet.querySelectorAll(".input")];
  filled = inputs.reduce((filled, input) => {
    let value = input.value.trim()
    if(input.parentNode.matches(".offer__title")){
      value = value && input.parentNode.parentNode.querySelector("input[type=number]").value.trim();
    }
    return filled + ( value ? 1 : 0);
  }, 0);
  total = inputs.length;

  const progress = progresses[questions.indexOf(questionSet)];
  progress.textContent = `${filled}/${total}`;

  if(filled === total && filled !== 0){
    progress.parentNode.classList.add("filled");
  }
  else{
    progress.parentNode.classList.remove("filled");
  }
}

function fillTable(){
  fillOffers();
  fillBonuses();
}

function fillOffers(){
  offerList = [...document.querySelectorAll(".offers .offer")];
  offerRows = offerList.map(offer => 
    `<tr>
      <td>${offer.querySelector("input[type=text]").value}</td>
      <td>\$${offer.querySelector("input[type=number]").value}</td>
    </tr>`);
  totalPrice = 
  offerRows.push(    
    `<tr>
      <td colspan="1"></td>
      <td>Total offer value: $ ${getTotal(".offers input[type=number]")}</td>
    </tr>`);
  select(".offer-value-table table").innerHTML = `<tr><th>Offer</th><th>Price</th></tr>`;
  select(".offer-value-table table").insertAdjacentHTML("beforeend", offerRows.join(""));
}

function fillBonuses(){
  bonusList = [...document.querySelectorAll(".bonuses .bonus")];
  bonusRows = bonusList.map(bonus => 
  `<tr>
    <td>When You Buy You Also Get ${bonus.querySelector("input[type=text]").value}</td>
    <td>\$${bonus.querySelector("input[type=number]").value}</td>
  </tr>`)
  bonusRows.push(
    `<tr>
      <td colspan="1"></td>
      <td>Bonus values $ ${getTotal(".bonuses input[type=number]")}</td>
    </tr>`);
  select(".bonus-value-table table").innerHTML = `<tr><th>Bonuses</th><th>Price</th></tr>`;
  select(".bonus-value-table table").insertAdjacentHTML("beforeend", bonusRows.join(""));
}

