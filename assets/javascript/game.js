// create an array of words
var words =[
    "soccer", 
    "swimming", 
    "rafting", 
    "bobsleigh", 
    "aikido", 
    "equestrianism", 
    "hockey"
] ;


var randNum = Math.floor(Math.random()*words.length);
var chosenWord = word[randNum];
var rightWord=[];
var wrongWord=[];
var underScore=[];

var docUndersCore = document.getElementsByClassName('underscores');

var generateUnderScore=() => {
for (var i = 0; i < chosenWord.length; i++) {
    underScore.push("_");
   
}
return underScore;
}
console.log(generateUnderscore());

document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keycode);
    if(chosenWord.indexOf(keyword) > -1) {
        rightWord.push(keyword);
        underScore[chosenWord.indexOf(keyword)]=keyword;
        docUndersCore[o].innerHTML = underScore.join('');
        docRightGuess[0].innerHTML = rightWord;

     if (underScore.join('')==chosenWord)  {
         alert('You Win');
     } 
    }
     else {
         wrongWord.push(keyword);
         wrongGuess[0].innerHTML = wrongWord;
     }
       
       docUnderscore[0].innerHTML = generateUnderScore().join(' ');