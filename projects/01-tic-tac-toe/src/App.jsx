import { useState } from "react";
import "./App.css";
import "./index.css";

const TURNS = { X: "x", O: "o" };

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

function App() {
  // * initial board value
  const [board, setBoard] = useState(Array(9).fill(null));

  // * Turns state
  const [turn, setTurn] = useState(TURNS.X);

  // * changes turn, shows x or y
  const updateBoard = (index) => {
    // * if the arr in that position has something do not do anything
    if (board[index]) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <main className="board">
      <h1>tic tac toe</h1>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >

              {board[index]}
              
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
    </main>
  );
}

export default App;
