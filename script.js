function logSubmit(event) {
  var unfilteredkeywords = document.getElementById('keywordsField').value.split(/\r?\n/g);
  var keywords = unfilteredkeywords.filter(function(value, index, arr){ return value != "";});
  numKeywords = keywords.length;
  filmName = document.getElementById('filmName').value;

  if(numKeywords == 0)
  {
    keywords = defaultKeywords();
    numKeywords = keywords.length;
    filmName = "The Prestige";
  }

  var i;
  for (i = 0; i < numKeywords; i++) {
    var keywordField = document.createElement("LI");
    keywordField.innerHTML = (numKeywords-i)+ ". " + keywords[i];
    keywordField.className = "keywordField backText";
    keywordField.style.visibility = "hidden"
    playArea.appendChild(keywordField);
  }

  filmReveal.innerHTML = filmName;
  filmReveal.style.visibility = "hidden";
  showPlayArea();
}

function resetGame() {
  var paras = playArea.getElementsByTagName('li');

  while(paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
  }
  keywordsDisplayed = 0;

  forwardButton.style.backgroundColor = activeButtonColour;
  startArea.style.display = "block";
  controls.style.display = "none";
  playArea.style.display = "none";
  revealArea.style.display = "none";
  revealArea.classList.remove("puff-in-center");
}

function showPlayArea() {
  startArea.style.display = "none";
  controls.style.display = "block";
  playArea.style.display = "block";
  revealArea.style.display = "block";
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
  revealArea.classList.add("puff-in-center");
  filmReveal.style.visibility = "visible";
}

function defaultKeywords() {
  return ["Title Spoken By Character"
  , "Actor Playing Dual Role"
  , "Voice Over Narration"
  , "Man Wears a Wig"
  , "Diary"
  , "No Opening Credits"
  , "Victorian era"
  , "Rivalry"
  , "Human Duplication"
  , "Magician"];
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
const startArea = document.getElementById('startArea');
const revealArea = document.getElementById('revealArea');
const keywords = document.getElementById('keywordsField');
const log = document.getElementById('log');
const filmReveal = document.getElementById('filmReveal')

submitButton.addEventListener('click', logSubmit);
resetButton.addEventListener('click', logReset);
forwardButton.addEventListener('click', forwardEvent);
revealButton.addEventListener('click', revealFilm);