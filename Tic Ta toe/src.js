
let boxs = document.querySelectorAll('.box')
let reset = document.querySelector('.reset')
let newgame = document.querySelector('.newgame')
let mascon = document.querySelector('.mascon')
let mas = document.querySelector('.mas')
let mascon2 = document.querySelector('.mascon2')
let mas2 = document.querySelector('.mas2')

let music = new Audio("win.mp3")
let turn = new Audio("click.mp3")
let gameover = new Audio("win2.mp3")

let turnO = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxs.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
            turn.play()
        }else{
            box.innerText = "X";
            turnO = true;
            turn.play()
        }
        box.disabled = true;
        chekWinner();
    })
})

const chekWinner = () => {
    for(let pattern of win){ 
        // console.log(boxs[pattern[0]],boxs[pattern[2]],boxs[pattern[3]])
        let pos1 = boxs[pattern[0]].innerText;
        let pos2 = boxs[pattern[1]].innerText;
        let pos3 = boxs[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""  ){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner",pos1)
                showinner(pos1);
                loser();
            }
        }
    }
}

const showinner =(winner) =>{
    mas.innerText = `Congratulatio, Winner is  '${winner}'`;
    gameover.play();
    music.play();
    mascon.classList.remove("hide");
    disabledbox();
}
const loser =() =>{
    mas2.innerText = `loser is ....`;
    mascon2.classList.remove("hide");
    disabledbox();
}

const disabledbox = () => {
    for(let box of boxs)
        box.disabled = true;
}

const restart = () => {
    for(let box of boxs)
        box.innerText = "";
}

const enabledbox = () => {
    for(let box of boxs)
        box.disabled =false;
    restart();
    
}

const resetgame = () =>{
    turnO = true;
    enabledbox();
    mascon.classList.add("hide")
    mascon2.classList.add("hide")
}

newgame.addEventListener("click",()=>{
    resetgame();
})

reset.addEventListener("click",()=>{
    resetgame();
})



let start = document.querySelector('.start')
    start.addEventListener("click",()=>{
    start.classList.add("hide")
})