import { useState } from "react";

function App() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])

  return (
    <div className="App">
      <div className="board">
        <div className="square square00">square 0 0</div>
        <div className="square square01">square 0 1</div>
        <div className="square square02">square 0 2</div>
        <div className="square square10">square 1 0</div>
        <div className="square square11">square 1 1</div>
        <div className="square square12">square 1 2</div>
        <div className="square square20">square 2 0</div>
        <div className="square square21">square 2 1</div>
        <div className="square square22">square 2 2</div>
      </div>
    </div>
  );
}

export default App;