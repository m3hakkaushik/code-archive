import { lazy, Suspense, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy loading the games
const Home = lazy(() => import('./pages/Home'));
const LanguageGame = lazy(() => import('./pages/LanguageGame'));
const TicTacToe = lazy(() => import('./pages/TicTacToe')); // Create basic placeholders for these
const GuessNumber = lazy(() => import('./pages/GuessNumber'));
const Snake = lazy(() => import('./pages/Snake'));

const Navbar = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className="p-4 bg-blue-600 dark:bg-gray-800 text-white flex justify-between shadow-md">
      <Link to="/" className="text-xl font-bold">GameHub</Link>
      <button onClick={toggleTheme} className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-3 py-1 rounded">
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </nav>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <ErrorBoundary>
            <Suspense fallback={<div className="text-center mt-20 text-xl dark:text-white">Loading Game...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/language" element={<LanguageGame />} />
                <Route path="/tictactoe" element={<TicTacToe />} />
                <Route path="/guess" element={<GuessNumber />} />
                <Route path="/snake" element={<Snake />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </div>
      </Router>
    </ThemeProvider>
  );
}