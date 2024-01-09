let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    let compChoices = ['rock', 'paper', 'scissor'];
    let randIndx = Math.floor(Math.random() * 3);
    return compChoices[randIndx];
    // console.log(`random number is = ${randIndx} and randomChoice is = ${}`);
}
const drawMatch = () => {
    msg.innerText = "Match Draw";
    msg.style.background = "black";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        msg.innerText = `You win! Your ${userChoice} win form ${compChoice}`;
        msg.style.background = 'green';
        userScorePara.innerText = userScore;
    }else{
        compScore++;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.background = 'red';
        compScorePara.innerText = compScore;
    }
}

const checkWinner = (userChoice) => {
    const compChoice = genCompChoice();
    // console.log("user choice = ", userChoice,'computer choice = ', compChoice)
    if(userChoice === compChoice){
        drawMatch();
    }else{
        let userWin = true;
        // console.log(typeof userChoice);
        if(userChoice === 'rock'){
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === 'paper'){
            userWin = compChoice === "scissor" ? false : true;
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice, compChoice) 
    }

}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        // console.log('choice was click', choice.id);
        checkWinner(choice.id);
    });
});

