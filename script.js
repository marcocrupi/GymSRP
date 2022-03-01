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

const sourceP = document.getElementById("percentage");
const sourceN = document.getElementById("number");
const result = document.getElementById("resultP");

const inputHandler = function (per,num) {
  per = parseFloat(per) || 0;
  num = parseFloat(num) || 0;
  if (per > 200) {
    per = 200;
  } else if (num > 1000) {
    num = 1000;
  }
  let result1 = num * per;
  let result2 = result1 / 100;
  let numbers = Number(result2);
  let roundedString = numbers.toFixed(2);
  let rounded = Number(roundedString);
  return (result.innerHTML = rounded);
};

sourceP.addEventListener("input", function(){
  inputHandler(sourceP.value,sourceN.value);
});
sourceN.addEventListener("input", function(){
  inputHandler(sourceP.value,sourceN.value);
});

const resetPer = document.getElementById("resetP");

const resetP = () => {
  document.getElementById("percentage").value = "";
  document.getElementById("number").value = "";
  return (result.innerHTML = 0);
};

resetPer.addEventListener("click", resetP);

// -- END PERCENTAGE CALCULATOR --

// -- PREDICTION EQUATIONS FOR 1RM --

const sourceR = document.getElementById("reps");
const sourceW = document.getElementById("weight");
const resultRM = document.getElementById("resultRM");

const inputHandlerRM = function (r,w) {
  r = parseInt(r) || 0;
  w = parseFloat(w) || 0;
  // r = parseInt(r) || 0;
  // w = parseFloat(w) || 0;
  if (w > 650) {
    w = 650;
  } else if (r > 12) {
    r = 12;
  }
  let op1 = r * 2.5;
  let op2 = 100 - op1;
  let op3 = op2 / 100;
  let op4 = w / op3;
  let numbersOP4 = Number(op4);
  let roundedString = numbersOP4.toFixed(1);
  let rounded = Number(roundedString);
  return (resultRM.innerHTML = parseFloat(rounded) + "Kg");
};

sourceR.addEventListener("input", function() {
  inputHandlerRM(sourceR.value,sourceW.value);
});
sourceW.addEventListener("input", function() {
  inputHandlerRM(sourceR.value,sourceW.value);
});

// const resultRM = document.getElementById("resultRM");
const resetRM = document.getElementById("resetRM");

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
