// -- START SET --

const sets = document.getElementById("sets");
const setDoneP = document.getElementById("setDoneP");
const setDoneL = document.getElementById("setDoneL");
const reset = document.getElementById("resetSets");
let setR = 0;

const counterP = () => {
  if (setR >= 0) {
    ++setR;
    ++sets.innerHTML;
  }
};

const counterL = () => {
  if (setR > 0) {
    --setR;
    --sets.innerHTML;
  } else if (setR <= 0 || setR < 1) {
    setR = 0;
    sets.innerHTML = "0";
  }
};

const resetSets = () => {
  setR = 0;
  return (sets.innerHTML = 0);
};

setDoneP.addEventListener("click", counterP);
setDoneL.addEventListener("click", counterL);
reset.addEventListener("click", resetSets);

// -- END SET --

// -- START PERCENTAGE CALCULATOR --

const result = document.getElementById("resultP");
const resetPer = document.getElementById("resetP");

const calculatorP = (per, num) => {
  per = parseFloat(per) || 0;
  num = parseFloat(num) || 0;
  let result1 = num * per;
  let result2 = result1 / 100;
  let numbers = Number(result2);
  let roundedString = numbers.toFixed(2);
  let rounded = Number(roundedString);
  return (result.innerHTML = rounded);
};

const resetP = () => {
  document.getElementById("percentage").value = "";
  document.getElementById("number").value = "";
  return (result.innerHTML = 0);
};

resetPer.addEventListener("click", resetP);

// -- END PERCENTAGE CALCULATOR --

// -- PREDICTION EQUATIONS FOR 1RM --

const resultRM = document.getElementById("resultRM");
const resetRM = document.getElementById("resetRM");

const calculatorRM = (r, w) => {
  r = parseInt(r) || 0;
  w = parseFloat(w) || 0;
  let op1 = r * 2.5;
  let op2 = 100 - op1;
  let op3 = op2 / 100;
  let op4 = w / op3;
  let numbersOP4 = Number(op4);
  let roundedString = numbersOP4.toFixed(1);
  let rounded = Number(roundedString);
  return (resultRM.innerHTML = parseFloat(rounded) + "Kg");
};

const resetRMF = () => {
  document.getElementById("weight").value = "";
  document.getElementById("reps").value = "";
  return (resultRM.innerHTML = 0);
};

resetRM.addEventListener("click", resetRMF);

// -- PREDICTION EQUATIONS FOR 1RM --

// -- START INPUT MIN / MAX --

function imposeMinMax(el) {
  if (el.value != "") {
    if (parseFloat(el.value) < parseFloat(el.min)) {
      el.value = el.min;
    }
    if (parseFloat(el.value) > parseFloat(el.max)) {
      el.value = el.max;
    }
  }
}

// -- END INPUT MIN / MAX --
