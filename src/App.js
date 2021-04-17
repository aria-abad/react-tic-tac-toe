import { useState } from "react";

function App() {

  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', ''])
  const [XO, setXO] = useState('X');

  const winnerState = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function calculateWinner(squares) {
    for(let i=0; i<winnerState.length; i++) {
      const [a, b, c] = winnerState[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
  return null;
  }
  
  return (
    <div className="App">
      <div className="board">
        {board.map((square, id) => {
          return (<div className={`square ${square}`} key={id} onClick={() => {
            const newBoard = [...board];
            if (newBoard[id] === 'X' || newBoard[id] === 'O') return
            newBoard[id] = XO;
            setBoard(newBoard);
            XO === 'X' ? setXO('O') : setXO('X');
          }}> {square} </div>)
        })}
        {console.log(board)}
        {console.log(calculateWinner(board))}
      </div>
    </div>
  );
}

export default App;