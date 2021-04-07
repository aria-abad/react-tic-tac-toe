import { useState } from "react";

function App() {

  const [board, setBoard] = useState(["0", "1", "2", "3", "4", "5", "6", "7", "8"])
  const [XO, setXO] = useState('X');
  
  return (
    <div className="App">
      <div className="board">
        {board.map((square, id) => {
          return (<div className={`square square${id}`} key={id} onClick={() => {
            const newBoard = [...board];
            if (newBoard[id] === 'X' || newBoard[id] === 'O') return
            newBoard[id] = XO;
            setBoard(newBoard);
            XO === 'X' ? setXO('O') : setXO('X');
          }}> {square} </div>)
        })}
      </div>
    </div>
  );
}

export default App;