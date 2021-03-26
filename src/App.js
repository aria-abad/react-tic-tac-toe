import { useState } from "react";

function App() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])

  return (
    <div className="App">
      <div className="board"></div>
    </div>
  );
}

export default App;
