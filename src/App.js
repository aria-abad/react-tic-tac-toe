import { useState } from "react";

function App() {

  const [board, setBoard] = useState(["0", "1", "2", "3", "4", "5", "6", "7", "8"])

  // const testFunc = id => {
  //   console.log("id:", id)
  //   console.log(board)
  //   let temp = board;
  //   temp[id] = 'x';
  //   console.log(temp);
  //   setBoard(temp);
  //   console.log(board);
  //   // window.location.reload();
  // }
  
  return (
    <div className="App">
      <div className="board">
        {board.map((square, id) => {
          return (<button className={`square square${id}`} key={id} onClick={() => {
            board[id] = 'x'
            setBoard([...board])
          }}> {square} </button>)
        })}
      </div>
    </div>
  );
}

export default App;