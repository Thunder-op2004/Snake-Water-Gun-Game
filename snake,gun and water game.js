const prompt = require("prompt-sync")(); //Comment this out while executing the program in browser
let choice = ["snake", "gun", "water"]
let machineInput = () => {
    let machine_choice = choice[Math.floor(Math.random() * choice.length)];
    return machine_choice
}

let userInput = () => {
    let user_choice = prompt("Enter your choice (snake,water,gun) :")
    while (!choice.includes(user_choice)) {
        console.log("Invalid Input!")
        user_choice = prompt(" Enter your choice again (snake,water,gun) :")
    }
    return user_choice
}



let winner = (a, b) => {
    if (a === b) {
        return "It is a TIE!"
    }
    else if (a == "gun" && b == "snake" || a == "water" && b == "gun" || a == "snake" && b == "water") {
        return "User Wins"
    }
    else {
        return "Machine Wins"
    }
}

let game = ()=>{

    user_score = 0
    machine_score = 0
    for (i = 1; i <= 8; i++) {
        let a = userInput();
        let b = machineInput();
        console.log("Round", i)
        console.log("User chose", a)
        console.log("Machine chose", b)
        let result = winner(a, b)
        if (result === "It is a TIE!") {

            console.log("It is a Tie")
        }
        else if (result === "User Wins") {
            console.log("User Wins")
            user_score = user_score + 1
        }
        else {
            console.log("Machine Wins")
            machine_score = machine_score + 1
        }
        console.log(`The Current score User -  ${user_score}  Machine score - ${machine_score}`)


    }
    console.log(`The Final Score - User ${user_score} Machine Score- ${machine_score}`)
    if (machine_score > user_score) {
        console.log("Machine Wins the game")
    }
    else if (user_score > machine_score) {
        console.log("User Wins")
    }
    else {
        console.log("Its a Tie")
    }
}
game()



