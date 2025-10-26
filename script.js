function getComputerChoice() {
    const choices = ['paper','scissors','rock'];
    const num = Math.floor(Math.random() * 3); // Gets a random integer: 0, 1, or 2


    const choice = choices[num];
    console.log("Computer Choice: " + choice);
    return choice;
}

function getHumanChoice(){
    let userChoice = prompt("Enter your choice: ", "Pick between 'paper', 'scissors', 'rock'");

    while(userChoice.toLowerCase() != 'paper' && userChoice.toLowerCase() != 'scissors' && userChoice.toLowerCase() != 'rock'){
        console.log("Incorrect value! Try again.");
        userChoice = prompt("Enter your choice: ", "Pick between 'paper', 'scissors', 'rock'");
    };

    console.log("Human Choice: " + userChoice);
    return userChoice.toLowerCase();
}


let humanScore = 0;
let computerScore = 0;

function playRound(){
    
    for(let i = 1; i < 6; i++){
        alert("Time for Round " + i );

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if((humanSelection.toLowerCase() === 'paper' && computerSelection === 'rock') || (humanSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') || (humanSelection.toLowerCase() === 'rock' && computerSelection === 'scissors')){
            alert("You won Round " + i + "!");
            humanScore++;
        }
        else if(humanSelection === computerSelection){
            alert(`Round ${i} is a tie! Both chose ${humanSelection}`);
       }
        else{
            alert("You lost Round " + i + "!");
            computerScore++;
        }
        
       
    }

    alert(`The final score is:\nHuman: ${humanScore}\nComputer: ${computerScore}`);

    if(humanScore > computerScore){
        alert("You won!");
    }
    else if(humanScore === computerScore){
        alert("The game end in a tie!")
    }
    else{
        alert("You lost!");
    }
}

playRound();