import { useState } from "react";

function App() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])

  return (
    <div className="App">
      <div className="board">
        {board.map((square, id) => {
          return (<div className="square" key={id} onClick={() => console.log(id)} > {square} </div>)
        })}
      </div>
    </div>
  );
}

export default App;