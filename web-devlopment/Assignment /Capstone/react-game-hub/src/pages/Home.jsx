import { Link } from 'react-router-dom';

export default function Home() {
  const games = [
    { name: "Language Master", path: "/language", color: "bg-purple-500", desc: "Learn IT, JP, DE!" },
    { name: "Tic Tac Toe", path: "/tictactoe", color: "bg-blue-500", desc: "Classic X and O" },
    { name: "Guess the Number", path: "/guess", color: "bg-green-500", desc: "Test your luck" },
    { name: "Snake & Ball", path: "/snake", color: "bg-red-500", desc: "Retro snake game" },
  ];

  return (
    <div className="p-8 text-center">
      <h1 className="text-4xl font-bold mb-8 dark:text-white">Choose Your Game</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {games.map((game) => (
          <Link key={game.path} to={game.path}>
            <div className={`${game.color} text-white p-8 rounded-xl shadow-lg hover:opacity-90 transform hover:scale-105 transition-all`}>
              <h2 className="text-2xl font-bold">{game.name}</h2>
              <p className="mt-2">{game.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}