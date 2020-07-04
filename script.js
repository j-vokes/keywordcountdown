function logSubmit(event) {
  var keywords = document.getElementById('keywordsField').value.split(/\r?\n/g);
  numKeywords = keywords.length;
  filmName = document.getElementById('filmName').value;
  var i;
  for (i = 0; i < numKeywords; i++) {
    var keywordField = document.createElement("LI");
    keywordField.innerHTML = (numKeywords-i)+ ". " + keywords[i];
    keywordField.className = "keywordField backText";
    keywordField.style.visibility = "hidden"
    playArea.appendChild(keywordField);
  }

  showPlayArea();
}

function resetGame() {
  var paras = playArea.getElementsByTagName('li');

  while(paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
  }
  keywordsDisplayed = 0;

  forwardButton.style.backgroundColor = activeButtonColour;
  form.style.display = "block";
  controls.style.display = "none";
  playArea.style.display = "none";
  revealArea.style.display = "none"
}

function showPlayArea() {
  form.style.display = "none";
  controls.style.display = "block";
  playArea.style.display = "block";
}

function revealKeyword(n){
  var paras = playArea.getElementsByTagName('li');
  var keyword = paras[n];
  keyword.style.visibility = "visible";
  keyword.classList.add("puff-in-center");
}

function forwardEvent(event) {
  if(keywordsDisplayed < numKeywords)
  {
    revealKeyword(keywordsDisplayed);
    keywordsDisplayed++;
  }

  if(keywordsDisplayed >= numKeywords)
  {
    forwardButton.style.backgroundColor = inactiveButtonColour;
  }
}

function logReset(event) {
  resetGame();

}

function revealFilm(event) {
  revealArea.style.display = "block";
  revealArea.innerHTML = filmName;
  revealArea.classList.add("puff-in-center");
  revealArea.classList.add("backText");
}

var keywordsDisplayed = 0;
var numKeywords = 10;

var filmName = "";

const activeButtonColour = "#4CAF50";
const inactiveButtonColour = "#626662";

const form = document.getElementById('formfield');
const controls = document.getElementById('controls');
const resetButton = document.getElementById('resetButton');
const submitButton = document.getElementById('submitButton');
const forwardButton = document.getElementById('forwardButton');
const revealButton = document.getElementById('revealButton');
const playArea = document.getElementById('playArea');
const revealArea = document.getElementById('revealArea');
const keywords = document.getElementById('keywordsField');
const log = document.getElementById('log');

submitButton.addEventListener('click', logSubmit);
resetButton.addEventListener('click', logReset);
forwardButton.addEventListener('click', forwardEvent);
revealButton.addEventListener('click', revealFilm);