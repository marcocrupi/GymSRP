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
  let result1 = parseFloat(num) * parseFloat(per);
  let result2 = result1 / 100;
  return (result.innerHTML = result2);
};

const resetP = () => {
  document.getElementById("percentage").value = 0;
  document.getElementById("number").value = 0;
  return (result.innerHTML = 0);
};

resetPer.addEventListener("click", resetP);

// -- END PERCENTAGE CALCULATOR --
