let camp = ["", "", "", "", "", "", "", "", ""];
let changeGamer = 0;
let symbolGamer = ["x", "o"]

let points = 0

let gamerX = symbolGamer[0]
let gamerO = symbolGamer[1]

let gameOver = false;

let winChanges = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

let handleClick = (position)=>{

  if(gameOver){
    return
  }

  
  if(camp[position] === ""){
    camp[position] = symbolGamer[changeGamer]

    gameOver = verifiPositions();
  
    if(gameOver == false){
    
      if(changeGamer === 0){
        changeGamer = 1
      }else{
        changeGamer = 0
      }
    }
    
    }
 
return gameOver;

}

let verifiPositions = ()=>{
  for(let indice = 0; indice < winChanges.length; indice++){
    let seq = winChanges[indice]

    let position1 = seq[0]
    let position2 = seq[1]
    let position3 = seq[2]

    if(camp[position1] === camp[position2] &&
       camp[position1] === camp[position3] &&
       camp[position1] !== ""){
         
         return true;
       }
       else{
         console.log("Deu Velha")
       }
 
}
  return false; 
}

