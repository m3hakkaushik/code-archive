import { useState } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calculateWinner = (squares) => {
    const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
  };

  const winner = calculateWinner(board);
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  const handleClick = (i) => {
    if (winner || board[i]) return;
    const nextBoard = board.slice();
    nextBoard[i] = isXNext ? 'X' : 'O';
    setBoard(nextBoard);
    setIsXNext(!isXNext);
  };

  return (
    <div className="flex flex-col items-center p-10 dark:text-white">
      <h2 className="text-2xl font-bold mb-4">{status}</h2>
      <div className="grid grid-cols-3 gap-2 bg-gray-400 p-2 rounded">
        {board.map((val, i) => (
          <button key={i} className="w-20 h-20 bg-white dark:bg-gray-700 text-3xl font-bold flex items-center justify-center rounded" onClick={() => handleClick(i)}>
            {val}
          </button>
        ))}
      </div>
      <button onClick={() => setBoard(Array(9).fill(null))} className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
    </div>
  );
}



