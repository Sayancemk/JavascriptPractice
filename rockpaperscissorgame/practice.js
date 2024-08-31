let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let printResult=document.querySelector("#show-result")
let winValueOfUser=document.querySelector("#win-value-user")
let winValueOfComputer=document.querySelector("#win-value-computer")

let resulttantArray = ["User is win", "Computer is win", "It is draw match"]
let countWinByUser=0;
let countWinByComputer=0;


let computerGenerateNumber = () => {
    let number = Math.round(Math.random() * 2);
    return computerChoice(number);
}

let computerChoice = (number) => {
    let computerChoicethings;
    if (number === 0) {
        computerChoicethings = "rock"
    } else if (number === 1) {
        computerChoicethings = "paper"
    } else {
        computerChoicethings = "scissors"
    }
    return computerChoicethings;
}

rock.addEventListener('click', () => {
    let computerChoicethings = computerGenerateNumber();
    let userChoice = "rock";
    let result1;
    if (computerChoicethings === "rock") {
        result1 = resulttantArray[2];
    }
    else if (computerChoicethings === "paper") {
        result1 = resulttantArray[1];
    } else {
        result1 = resulttantArray[0];
    }
    generateWinValue(result1);
    result(userChoice, computerChoicethings, result1);
})


paper.addEventListener('click', () => {
    let computerChoicethings = computerGenerateNumber();
    let userChoice = "paper";
    let result1;
    if (computerChoicethings === "rock") {
        result1 = resulttantArray[0];
    }
    else if (computerChoicethings === "paper") {
        result1 = resulttantArray[2];
    } else {
        result1 = resulttantArray[1];
    }
    generateWinValue(result1);
    result(userChoice, computerChoicethings, result1);
})

scissors.addEventListener('click', () => {
    let computerChoicethings = computerGenerateNumber();
    let userChoice = "scissors";
    let result1;
    if (computerChoicethings === "rock") {
        result1 = resulttantArray[1];
    }
    else if (computerChoicethings === "paper") {
        result1 = resulttantArray[0];
    } else {
        result1 = resulttantArray[2];
    }
    generateWinValue(result1);
    result(userChoice, computerChoicethings, result1);
})

let generateWinValue=(result1)=>{
    if(result1===resulttantArray[0]){
        countWinByUser++;
        winValueOfUser.innerText=countWinByUser;                
    }else if(result1==resulttantArray[1]){
        countWinByComputer++;
        winValueOfComputer.innerText=countWinByComputer;
    }else{
        printResult.value="It is a draw match"
    }
}

let result = (userChoice, computerChoice, result) => {
        if(result!==resulttantArray[2]){
    printResult.value=`User choice is ${userChoice} , Computer choice is ${computerChoice}  and the result is ${result}`
}
}