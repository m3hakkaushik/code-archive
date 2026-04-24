import { useState, useEffect } from 'react';

export default function Snake() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 5, y: 5 });
  const [dir, setDir] = useState({ x: 0, y: -1 });

  // Simple grid rendering
  const gridSize = 20;

  return (
    <div className="flex flex-col items-center p-10 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Snake & Ball</h1>
      <div className="relative bg-black" style={{ width: 300, height: 300 }}>
        {snake.map((seg, i) => (
          <div key={i} className="absolute bg-green-500" style={{ left: seg.x * 15, top: seg.y * 15, width: 14, height: 14 }} />
        ))}
        <div className="absolute bg-red-500 rounded-full" style={{ left: food.x * 15, top: food.y * 15, width: 14, height: 14 }} />
      </div>
      <p className="mt-4 text-gray-500">Use arrow keys or simple controls to play!</p>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div /> <button onClick={() => setDir({x:0, y:-1})} className="bg-gray-300 p-2 rounded">↑</button> <div />
        <button onClick={() => setDir({x:-1, y:0})} className="bg-gray-300 p-2 rounded">←</button>
        <button onClick={() => setDir({x:0, y:1})} className="bg-gray-300 p-2 rounded">↓</button>
        <button onClick={() => setDir({x:1, y:0})} className="bg-gray-300 p-2 rounded">→</button>
      </div>
    </div>
  );
}