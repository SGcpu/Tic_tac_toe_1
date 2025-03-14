let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector(".reset");
let msgbox = document.querySelector(".msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Add event listeners to all boxes
boxes.forEach(box => {
    box.addEventListener("click", () => {   //An event listerner is added to every box in the nodelist of boxes and is wating for a box to be clicked to execute the parenthesis fucntions
        console.log("Box was clicked");
        if (turnO) {
            box.innerText = "O";
        } else {
            box.innerText = "X";
        }
        turnO = !turnO;

        // Prevent further clicks on the clicked box
        box.disabled = true;

        // Check for a winner
        checkwinner();
    });
});

// Function to check the winner
function checkwinner() {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                msgbox.innerText = `${pos1Val} WINS!`;
                disableAllBoxes();
                return;
            }
        }
    }

    // Check for a tie
    if ([...boxes].every(box => box.innerText !== "")) {
        msgbox.innerText = "It's a Tie!";
    }
}

// Function to disable all boxes after the game ends
function disableAllBoxes() {
    boxes.forEach(box => {
        box.disabled = true;
    });
}

// Reset button functionality
restbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    msgbox.innerText = "";
    turnO = true;
});
