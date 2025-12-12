let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".resetbtn");
let winner=document.querySelector(".winner");
let turnO=true;

let win_patterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
          if(turnO){
            box.innerText="O";
            turnO=false;
          }
          else{
             box.innerText="X";
             turnO=true;
          }
          box.disabled=true;
          checkwin();
     })
})
let disableboxes=()=>{
     for(let box of boxes){
         box.disabled=true;
     }
}
let enableboxes=()=>{
     for(let box of boxes){
         box.disabled=false;
         box.innerText="";
     }
}
let reset=()=>{
    turnO=true;
    enableboxes();
    winner.innerText="";
}
let checkwin=()=>{
       for(let pattern of win_patterns){
          let a=boxes[pattern[0]].innerText;
          let b=boxes[pattern[1]].innerText;
          let c=boxes[pattern[2]].innerText;
          if(a!="" && b!="" && c!=""){
              if(a===b && b===c){
                  winner.innerText=`winner ${a}`;
                  disableboxes();
              }
          }
       }
}

resetbtn.addEventListener("click",reset);