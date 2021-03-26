import { useState } from "react";

function App() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])

  return (
    <div className="App">
      <h1>Tic Tac Toe game app</h1>
    </div>
  );
}

export default App;
