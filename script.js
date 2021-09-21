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

// -- START TIMER --
const timerH = document.getElementById("timer");

let countDown;
const timer = (s, m) => {
  clearInterval(countDown);
  timerH.innerHTML = "00:00";
  m = parseInt(m) * 60;
  s = parseInt(m) + parseInt(s) + 1;

  countDown = setInterval(() => {
    s--;
    displayTime(s);

    if (s <= 0 || s < 1) {
      endTime();

      clearInterval(countDown);
    } else if (s <= 10) {
      sound(s);
    }
  }, 1000);
};

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timerH.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function endTime() {
  timerH.innerHTML = "TIME OUT";
  let utterance = new SpeechSynthesisUtterance("TIME OUT");
  utterance.lang = "en-US";
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
  setTimeout(function clear() {
    timerH.innerHTML = "00:00";
  }, 2000);
}

function sound(second) {
  let utterance = new SpeechSynthesisUtterance(second);
  utterance.lang = "en-US";
  utterance.rate = 1;

  speechSynthesis.speak(utterance);
}

document.getElementById("reset").addEventListener("click", stopFunction);

function stopFunction() {
  clearInterval(countDown);
  timerH.innerHTML = "00:00";
  clearRange();
}

function clearRange() {
  document.getElementById("seconds").value = 0;
  document.getElementById("otS").value = 0;
  document.getElementById("minutes").value = 0;
  document.getElementById("otM").value = 0;
}

// -- END TIMER --

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
