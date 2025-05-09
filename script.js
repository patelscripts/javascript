let boxes = document.querySelectorAll(".box");
let restbtn = document.querySelector("#Reset-btn");
let Newgamebtn = document.querySelector("#rst-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player1, player2

const winpatterns = [
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
    box.addEventListener("click" ,()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        chechhkwinner();
    });
    
});
const resetgame = () =>{
    turnO = true;
    enableBox();
    msgContainer.classList.add("hide");

}
const disableBox = () =>{
    for( let box of boxes){
        box.disabled = true;
    }

}
const enableBox = () =>{
    for( let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }

}
const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBox();

}
const chechhkwinner =() => {
    for( let patterns of winpatterns){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;
        if(pos1val!="" && pos2val != "" && pos3val != ""){
            if(pos1val ===pos2val && pos1val ===pos3val){
                console.log("winner" , pos1val);
                showWinner(pos1val);
            }
        }
    }
}
Newgamebtn.addEventListener("click" , resetgame);
restbtn.addEventListener("click" , resetgame);