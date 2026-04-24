import { useState } from 'react';

export default function GuessNumber() {
  const [target] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1 and 100');

  const checkGuess = () => {
    const num = parseInt(guess);
    if (num === target) setMessage("🎉 Correct! You nailed it!");
    else if (num > target) setMessage("Too high! Try lower.");
    else setMessage("Too low! Try higher.");
  };

  return (
    <div className="p-10 text-center dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Guess The Number</h1>
      <p className="mb-4 text-xl">{message}</p>
      <input 
        type="number" value={guess} onChange={(e) => setGuess(e.target.value)}
        className="border-2 p-2 rounded text-black mb-4"
      />
      <br />
      <button onClick={checkGuess} className="bg-green-500 text-white px-6 py-2 rounded">Check</button>
    </div>
  );
}