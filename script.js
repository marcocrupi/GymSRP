// -- START SET --

const sets = document.getElementById("sets");
const setDone = document.getElementById("setDone");
const reset = document.getElementById("resetSets");

const contatore = () => {
  return ++sets.innerHTML;
};

const resetSets = () => {
  return (sets.innerHTML = 0);
};

setDone.addEventListener("click", contatore);
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
  return (result.innerHTML = result2);
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
  w = parseInt(w) || 0;
  let op1 = r * 2.5;
  let op2 = 100 - op1;
  let op3 = op2 / 100;
  let op4 = w / op3;
  return (resultRM.innerHTML = op4 + "Kg");
};

const resetRMF = () => {
  document.getElementById("weight").value = "";
  document.getElementById("reps").value = "";
  return (resultRM.innerHTML = 0);
};

resetRM.addEventListener("click", resetRMF);

// -- END PERCENTAGE CALCULATOR --
