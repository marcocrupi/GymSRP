// -- START TIMER --
const timerH = document.getElementById("timer");
let inputS = document.getElementById("start");
let clickCounter = 0;

function timer(s, m) {
  s = parseInt(s) || 0;
  m = parseInt(m) || 0;

  m = m * 60;
  s = m + s + 1;

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

  if (inputS.onclick) {
  } else {
  }

  inputS.onclick = function () {
    clickCounter++;
    console.log("dopo il ++", clickCounter);
    if (clickCounter === 2) {
      clickCounter = 0;
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
    } else if (clickCounter === 1) {
      stopFunction();
    }
  };
}

function displayTime(second) {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  timerH.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""
    }${sec}`;
}

function endTime() {
  timerH.innerHTML = "TIME OUT";
  let utterance = new SpeechSynthesisUtterance("TIME OUT");
  utterance.lang = "en-US";
  utterance.rate = 1;
  speechSynthesis.speak(utterance);
  setTimeout(function clear() {
    resetFunction();
  }, 1200);
}

function sound(second) {
  let utterance = new SpeechSynthesisUtterance(second);
  utterance.lang = "en-US";
  utterance.rate = 1;

  speechSynthesis.speak(utterance);
}

function resetFunction() {
  location.reload();
}

function stopFunction() {
  clearInterval(countDown);
}

// -- END TIMER --
