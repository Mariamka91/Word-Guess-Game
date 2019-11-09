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

// pick a random word from the words array
var word = words[Math.floor(Math.random()*words.length)];

//set up the answer array to show how many letters are using underscores (_)
var answer [];
for (var i = 0; i < words.length; i++) {
    answer[i] = "_";
}

// create a variable to hold the number of remaining letters
var remainingLetters = word.length;

//               The Main Game Loop

while (remainingLetters > 0) {
    alert (answer.join(" "));

    var guess = prompt("Guess a letter,or click Cancel to stop playing")
    
    if (guess == null) {
        break;

    else if (guess.length !== 1) {

        alert("Please enter a single letter.")

    else {
        for (var j = 0, j < word.length; j++) {
            if (word[j] === guess) {
                
                answer[j] = guess;

                remainingLetters--;

            }
        }
    }
    //         End Of Game Loop

    alert (answerArray.join(" "));

    alert("Great! The answer was" + word) ;
    }
    }
}
