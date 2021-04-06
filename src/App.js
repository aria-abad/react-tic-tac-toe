import { useState } from "react";

function App() {

  const [board, setBoard] = useState(["0", "1", "2", "3", "4", "5", "6", "7", "8"])
  const [xo, setXo] = useState('X');
  
  return (
    <div className="App">
      <div className="board">
        {board.map((square, id) => {
          return (<div className={`square square${id}`} key={id} onClick={() => {
            board[id] = xo;
            setBoard([...board])
            xo === 'X' ? setXo('O') : setXo('X')
          }}> {square} </div>)
        })}
      </div>
    </div>
  );
}

export default App;