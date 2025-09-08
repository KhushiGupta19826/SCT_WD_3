const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset-btn");

let turn0 = true; //player X , player 0
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () =>{
    for(pattern of winPatterns){
        console.log("check patterns");
    }
}

