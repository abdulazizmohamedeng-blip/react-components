import { useState } from "react";
import "./style.css";
export default function TicTacToe() {
  let [player, setPlayer] = useState(false);
  let [winner, setWinner] = useState(null);
  let [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  function handlePlay(row, col) {
    if (board[row][col] != "") return;
    let currentPlayer = player ? "O" : "X";
    let newVal = board.map((row) => [...row]);
    newVal[row][col] = currentPlayer;
    console.log(newVal);
    setBoard(newVal);
    setPlayer((prev) => !prev);
    if (winDetection(newVal, row, col, currentPlayer)) {
      console.log(`${currentPlayer} winner`);
      setWinner(currentPlayer);
    }
  }

  function winDetection(board, row, col, player) {
    // Check row
    let count = 0;
    for (let i = 0; i < 3; i++) {
      if (board[row][i] == player) {
        count++;
      }
    }
    if (count == 3) return true;
    count = 0;
    // Check col
    for (let i = 0; i < 3; i++) {
      if (board[i][col] == player) {
        count++;
      }
    }
    if (count == 3) return true;

    return false;
  }
  return (
    <div className="game-container">
      <h1 className="title">Tic Tac Toe</h1>

      <div className="status">Player {player ? "O" : "X"} Turn</div>

      <div className="board">
        {board.map((row, row_index) =>
          row.map((col, col_ndex) => (
            <div
              key={`${row_index}-${col_ndex}`}
              className="cell"
              onClick={() => handlePlay(row_index, col_ndex)}
            >
              {col}
            </div>
          )),
        )}
      </div>

      <button className="reset-btn">Restart Game</button>
    </div>
  );
}
