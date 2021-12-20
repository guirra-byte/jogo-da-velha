

document.addEventListener("DOMContentLoaded", ()=>{

changeText = document.querySelector(".resultParagraf")
pointXNumber = document.querySelector(".resultValueX")
pointONumber = document.querySelector(".resultValueO")

div =  document.getElementById('gameOver');
restartButton = document.querySelector('.restartGame')

saveResultButton = document.querySelectorAll('.saveResultButton')

saveResultButton.forEach((saveButton)=>{
  saveButton.addEventListener("click", verifyPlayer)
})

  pointONumber.innerHTML = points
  pointXNumber.innerHTML = points
  let squares = document.querySelectorAll(".square") 

  squares.forEach((square)=>{
    square.addEventListener("click", changeSquare)
  })
})

function onload(player, pointer, otherPointer){

  if(player === "playerX"){

    let otherPointX = document.querySelector(".resultValueX")
    let saveOtherResult = localStorage.getItem('pointer')
    otherPointX.innerHTML = saveOtherResult


  }

  else if(player === "playerO"){

    let otherPointO = document.querySelector(".resultValueO")
    
    let saveResult = localStorage.getItem('otherPointer')
    otherPointO.innerHTML = saveResult

  }

  localStorage.getItem(pointer)
}

let verifyPlayer = (event)=>{

  let verify = event.target
  let player = verify.id

  if(player === "playerX" && points !== 0){

      let pointsString = toString(points)
      let playerXLocal = localStorage.setItem('pointer', '3')
      onload(player, playerXLocal)

  }
  else if(player === 'playerO' && points !== 0){

      localStorage.setItem('otherPointer', '2')
      onload(player, 'otherPointer')
    
  }


}


let changeSquare = (event)=>{

  square = event.target
  position = square.id
  
  if(handleClick(position)){
    setTimeout(()=>{

      let result = symbolGamer[changeGamer]
      changeText.innerHTML = "O Jogador vencedor foi: " + result;
      
      div.style.display = "flex"
      
      restartButton.addEventListener('click', ()=>{

        div.style.display = "none"
      })
      
      

      if(result === "x"){
        points++
        pointXNumber.innerHTML = points

      }else if(result === "o"){
        points++
        pointONumber.innerHTML = points
      }
    },40)
  }
  
  updateSquares();
}

let player1Points = (buttonEvent)=>{
  buttonClick = buttonEvent
  positionButton = buttonClick.id

  if(positionButton === "addPlayer1"){
    
    verifiPlayer1(positionButton)
  }
}

let removePlayer1Points = (otherButtonEvent)=>{

  otherButtonClick = otherButtonEvent
  otherPosition = otherButtonClick.id

  if(otherPosition === "removePlayer1"){

    removePoints1(otherPosition)
  }
}

let player2Points = (player2ButtonAdd)=>{

    secondButton = player2ButtonAdd
    secondPosition = secondButton.id

    if(secondPosition === "addPlayer2"){

      verifiPlayer2(secondPosition)
    }
}

let removePlayer2Points = (player2ButtonRemove)=>{

  removeButton = player2ButtonRemove
  secondRemovePosition = removeButton.id

  if(secondRemovePosition === "removePlayer2"){

    removePoints2(secondRemovePosition)
  }
}



let updateSquares = ()=>{

  let squared = document.querySelectorAll(".square")

  squared.forEach((square)=>{

    let position = square.id
    let symbolGamer = camp[position]

    if(symbolGamer !== ""){
      square.innerHTML = `<div class='${symbolGamer}'></div>`
    }
  })
}