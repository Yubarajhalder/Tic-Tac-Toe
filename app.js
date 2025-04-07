let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector("#but");
let msgbox = document.querySelector("#msg")
let intxt=document.querySelector(".pmsg")

let turn = true; 
boxes.forEach((box)=>{
  box.addEventListener(("click"),()=>{
    if(turn){
      box.innerText="O";
      turn=false
    }else{
      box.innerText="X"
      turn=true
    }
    box.disabled=true;
    checkwinner(); 
  })
})
let disbtn=()=>{
  for(let box of boxes){
    box.disabled=true
  }

}
let winpattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
]
const checkwinner=()=>{
  for(let pattern of winpattern){
    p1=boxes[pattern[0]].innerText
    p2=boxes[pattern[1]].innerText
    p3=boxes[pattern[2]].innerText
  
   if(p1!=""&&p2!=""&&p3!=""){
    if(p1==p2&&p2==p3){
      winner()
    }
   }
  }
  
}
const newbtn=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText=""
  }
  
  msgbox.classList.add("hide")
  turn= true;


}
const rbtn=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText=""
  }
  
  turn= true;
}
const winner=()=>{
  msgbox.classList.remove("hide")  
  intxt.innerText=`Winner is ${p1}`
  disbtn()

}
newGameBtn.addEventListener("click",()=>{
  newbtn()
})
resetBtn.addEventListener("click",()=>{
  rbtn()
})