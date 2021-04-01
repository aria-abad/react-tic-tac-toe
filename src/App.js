import { useState } from "react";

function App() {

  const [board, setBoard] = useState(["0", "1", "2", "3", "4", "5", "6", "7", "8"])

  function testFunc(id) {
    console.log("test")
    console.log("id:", id)
    console.log(board)
    // setBoard( ...board )
    console.log(board[id])
  }
  
  return (
    <div className="App">
      <div className="board">
        {board.map((square, id) => {
          return (<div className={`square square${id}`} key={id} onClick={() => testFunc(id)}> {square} </div>)
        })}
      </div>
    </div>
  );
}

export default App;