//create an array for words to guess and one to store guesses? keep track of score.
        
        var wordArray = ["CHIVE", "MARIO", "FANCY", "WEB", "VAIN", "PLOT", "FALSE", "DOG"];
        
        var rightAnswer = [];
        var allKeysPushed = [];
        var tries = 7;
        var blank = [];
        var wins = 0;
        var losses = 0;
        var playerGuess = [];
        var playWord;
        
        
        
        //string.join?    try this to remove all the ,,, in blank and playerGuess    
        
        
        //function to do:
        //randomly choose a word from array  --- math.floor math.random
        //define length of word in array, create string store to guess?
        //figure out how to display number of letters for player to guess --- this must be displayed on screen --- for loop?
        //find out to how to make a click to start/play?  right now you must click a key button to populate the play word --- function/function?
        
function clickToStart() {
            //alert("let's go!");
            
            if (wins > 3) {
                    document.write("Thanks for being such a winner!     REFRESH TO PLAY AGAIN");
            }
        
                    if (losses > 3) {
                            document.write("It's not that hard.... But, you failed.    REFRESH TO PLAY AGAIN");  
                    }
    
                        
            
                        else {
                               startGame(); 
                        }
            
           
            
}
        
function startGame () { 
    var allKeysPushed = [];
            playWord = wordArray[Math.floor(Math.random() * wordArray.length)];
            console.log("play word = " + playWord);
            
        
            for (var i = 0; i < playWord.length; i++) {
                    blank.push("_");
            }
            
            
            document.getElementById("blankButton").textContent = blank.join(" ");
        
            
              
            document.onkeyup = function (event) {
                    playerGuess = event.key.toUpperCase();


            if (blank.indexOf(playerGuess) == -1 && allKeysPushed.indexOf(playerGuess)== -1) { 
                    
                                                                    //from bands... if no match, will return (-1), then continue through "playWord" starting at first letter [0]  huh?
                    if (playWord.indexOf(playerGuess) > -1) {
                            for (var i = 0; i < playWord.length; i++) {
                                    if (playWord[i] === playerGuess) {
                                        blank[i] = playerGuess;
                                        rightAnswer.push(playerGuess.toString());
                                        
                                        console.log("pushed to right answer " + rightAnswer);
                                    }
                            }
//                                        allKeysPushed.push(playerGuess.toString());
                                        console.log(blank);
                                        document.getElementById("blankButton").textContent = blank.join(" ");
//                                        document.getElementById("guessedText").textContent = rightAnswer.join(", ");
                                        
                    }
                    
                                    else {
                                        allKeysPushed.push(playerGuess);
                                        tries--;
                                        console.log("tries = ", tries);
                                        console.log("player guessed " + playerGuess);
                                    }
                    console.log("all key  "+ allKeysPushed)
                    document.getElementById("gButton").textContent = tries;
                    document.getElementById("guessedText").textContent = allKeysPushed;
                    
                    if (tries === 0) {

                        alert("TRY AGAIN! ");
                        blank.length = 0;
                        
                        tries = 7;
                        losses++;

                        console.log("losses = " + losses);
                        document.getElementById("lossesText").textContent = losses;



                    }

                    if (rightAnswer.length === playWord.length)
                    {
                        alert("Great Job!")
                        blank.length = 0;
                        
                        tries = 7;
                        rightAnswer.length = 0;
                        wins++;
                        console.log("wins = " + wins);
                        document.getElementById("winsText").textContent = wins;

                    }
                }

                else {
                   // already used letter
                    //alert("you've already choosen that letter")
                }

  }
}

startGame();           
            
            
        //get guess from player
        //check to see if player guess is correct  -- keep score to record number of guesses
        //if guess is right, display letter on screen   --- push to array?
        //if guess is wrong, remove number of tries available    ---  push to array?
    
    
    