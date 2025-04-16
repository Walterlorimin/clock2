const Choices = ["Rock", "Paper", "Scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay"); // You forgot the ID

function playGame(playerChoice) {
    const computerChoice = Choices[Math.floor(Math.random() * 3)];

    let result = ""; // Initialize result variable

    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case "Rock":
                result = (computerChoice === "Scissors") ? "You win!" : "You lose!";
                break;
            case "Paper":
                result = (computerChoice === "Rock") ? "You win!" : "You lose!";
                break;
            case "Scissors":
                result = (computerChoice === "Paper") ? "You win!" : "You lose!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;
}