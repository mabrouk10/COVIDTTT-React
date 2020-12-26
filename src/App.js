import React, { Component } from 'react'
// import Square from './Components/Square'
import './App.css'
import Restart from './components/Restart'

class App extends Component{
  constructor(){
    super()
    this.state = {
      player: "🦠",
      board: ["", "", "", "", "", "", "", "", "",]
    }
    this.squareClicked = this.squareClicked.bind(this)
  }

  onClick = (index) => {

    if(this.state.board[index] === ""){
    this.squareClicked(index)
    }
  }

  restartGame = () => {
    //destructure board from state
    let board = this.state
    let player = this.state
    //reset all elements in the board array to blank again
    board = ["", "", "", "", "", "", "", "", "",]
    player = "🦠"
    
    this.setState({board: board, player: player})
  }


  // squareClicked = (index, player, board) => {
    
  squareClicked = (index) => {
    //destructure player and board
    let player = this.state.player
    let board = this.state.board

    //alernating turns with emoji
    //if player is emoji 1 then emoji 2 will be loaded
    // else emoji one will be loaded
    player = (player == "🦠") ? "🧼" : "🦠"

  

    board[index] = player
    //list all the different ways to win

    let winArray= [
    [0,1,2],
    [3,4,5], 
    [6,7,8], 
    [0,3,6], 
    [1,4,7], 
    [2,5,8], 
    [0,4,8], 
    [2,4,6]
  ]
    //check if the filled in squares in the game fit any of the win combinations
    //iterating through all the ways to win
    //assigning each one of those arrays to wincheck when going thru
    //checking the contents of the new wincheck array
    //c0 will look thru the first element of the wincheck. should return which emoji is in that slot
    // same with c1 and c2
  for (let i = 0; i < winArray.length; i++) {
    let winCheck = winArray[i]
    let c0 = winCheck[0]
    let c1 = winCheck[1]
    let c2 = winCheck[2]

    //if c0 c1 and c3 are all the same that means they all have the same emoji amongst them
    //meaning they were made into a winning combination which means a winner is found
    
    // player = (player == "🦠") ? "🧼" : "🦠"
    // board[index] = player
    if(board[c0] != "" && board[c0] === board[c1] && board[c1]=== board[c2]){
      alert(`Winner! Player: ${player} is the winner!`)
      this.restartGame()
    }else if (board.length === 8){
      alert("Tie Game")
    }
  }

    this.setState({
      player: player,
      board: board
    })


  }

  render(){
    return(
      <div className = "App">
        <h1>🦠 COVID TIC-TAC-TOE 🦠</h1>

        <div id = "board">
          {/* mapping thru the board in state to generate a game board.
              each iteration will have an onClick connecting it to the squareClicked function above
              each iteration will also have square rendered that follows the square id in CSS
          */}
          {this.state.board.map((value, index) => {
            
            return (<div onClick = {() => this.onClick(index)} id = "square">{value}</div>)
          })}
      </div> 



        <Restart 
          restartGame = {this.restartGame}
        />  
      </div>
    )
  }
}
export default App


// import React, { Component } from 'react'
// import Square from './components/Square'
// import './App.css'

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
//       count: 0,
//       player1: [],
//       player2: [],
//       winArray: [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
//     }
//   }

//   // componentDidMount() {
//   //   let treasure = Math.floor(Math.random() * this.state.squares.length)
//   //   this.setState({treasureLocation: treasure})
//   // }



//     //PLAYER 1 + PLAYER 2
//     //define player 1 and player 2 - set index = emoji
//     //make count = 0 in state, set count to new num when we go through
//     //if count is %2 = 0 => emoji 1 (if even = p1)
//     //else emoji 2 (if odd = p2)
//     //players cant click a filled space

//   handleGamePlay = (index) => {
//     const { squares, player1, player2, count } = this.state
//       if(count >= 8){
//         console.log("tie game")
//         alert("tie game")
//       }else if (count % 2 === 0){
//       squares[index] = "🦠"
//       player1.push(index)
//       console.log("player1:", player1)
//       console.log("index", index)
//       console.log("count:", count)

//       this.setState({ squares: squares, count: count + 1, player1: player1 })

//     }else {
//       squares[ index ] = "🧼"
//       player2.push(index)
//       console.log("player2:", player2)
//       console.log("index", index)
//       console.log("count:", count)

//       this.setState({ squares: squares, count: count + 1, player2: player2 })
//     }
//   }


//     //WIN CONDITIONS
//     //define 8 win conditions 
//     //store players click index into an empty array
//     //compare players click array with win conditions
//     //create winArray containing 8 winning arrays
//     //loop through winning arrays, compare to player click array, compare player click array to winArray

//     //if players click = win array, alert WIN 
//     //else if count === 9, alert TIE
//     //else keep playing

//     //RESTART GAME FUNCTION
//     //if game WIN OR TIE => reset game

//     //CANNOT CLICK FILLED BOX
//     //Player 1 array cannot contain values in Player2 array
//     //Vice versa
    


//   render(){
//     console.log("treasure:", this.state.treasureLocation)
//     return(
//       <React.Fragment>
//         <h1>TIC-TAC-TOE</h1>
        
//         <div id="gameboard">
//         { this.state.squares.map((value, index) => {
//           return (
//             <Square 
//               value = { value }
//               key = { index }
//               index = { index }
//               handleGamePlay = { this.handleGamePlay }
//             />
//           )
//         })
//         }
//         </div>

//       </React.Fragment>
//     )
//   }
// }
// export default App
