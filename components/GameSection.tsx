import { useState, useEffect } from "react";
import Image from "next/image";

export default function GameSection() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);
  const [pokeballPosition, setPokeballPosition] = useState({ x: 0, y: 0 });
  const [pokeballVisible, setPokeballVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let gameInterval: NodeJS.Timeout;
    let timerInterval: NodeJS.Timeout;

    if (isGameActive && timeLeft > 0) {
      // Start timer
      timerInterval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsGameActive(false);
            setPokeballVisible(false);
            setShowModal(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Start moving pokeball
      gameInterval = setInterval(() => {
        if (isGameActive) {
          const maxX = 240 - 64;
          const maxY = 240 - 64;
          setPokeballPosition({ 
            x: Math.random() * maxX, 
            y: Math.random() * maxY 
          });
          setPokeballVisible(true);
        }
      }, 1200);
    }

    return () => {
      clearInterval(gameInterval);
      clearInterval(timerInterval);
    };
  }, [isGameActive, timeLeft]);

  const startGame = () => {
    setIsGameActive(true);
    setScore(0);
    setTimeLeft(30);
    setShowModal(false);
    const maxX = 240 - 64;
    const maxY = 240 - 64;
    setPokeballPosition({ 
      x: Math.random() * maxX, 
      y: Math.random() * maxY 
    });
    setPokeballVisible(true);
  };

  const stopGame = () => {
    setIsGameActive(false);
    setPokeballVisible(false);
    setTimeLeft(30);
  };

  const catchPokeball = () => {
    if (!isGameActive) return;
    
    setScore(prev => prev + 1);
    setPokeballVisible(false);
    
    setTimeout(() => {
      if (isGameActive) {
        const maxX = 240 - 64;
        const maxY = 240 - 64;
        setPokeballPosition({ 
          x: Math.random() * maxX, 
          y: Math.random() * maxY 
        });
        setPokeballVisible(true);
      }
    }, 200);
  };

  const closeModal = () => {
    setShowModal(false);
    setTimeLeft(30);
  };

  return (
    <div className="w-full">
      <div className="text-center mb-6">
        <p className="text-sm text-apple-gray-600 dark:text-apple-gray-400 leading-6 mb-4">
          Let's have some fun! Try to catch as many Pokeballs as you can. Ready for the challenge? 
        </p>
      </div>
      
      <div className="glass-apple dark:glass-apple-dark rounded-apple-lg shadow-apple-lg p-6 border border-apple-gray-200/30 dark:border-apple-dark-700/30">
        <div className="text-center mb-4">
          <div className="text-xl font-bold text-apple-blue-600 dark:text-apple-blue-400 mb-2">
            {score} Pokeball{score !== 1 ? 's' : ''} Caught! 🎯
          </div>
          <div className="text-lg text-apple-gray-900 dark:text-apple-gray-300 mb-4">
            Time: {timeLeft}s
          </div>
          <div className="flex gap-3 justify-center">
            {!isGameActive ? (
              <button 
                onClick={startGame}
                className="apple-button px-6 py-3 bg-apple-blue-600 text-white rounded-apple hover:bg-apple-blue-700 transition-all duration-300 font-medium text-sm shadow-apple apple-focus"
              >
                Start Game
              </button>
            ) : (
              <button 
                onClick={stopGame}
                className="apple-button px-6 py-3 bg-red-500 text-white rounded-apple hover:bg-red-600 transition-all duration-300 font-medium text-sm shadow-apple apple-focus"
              >
                Stop Game
              </button>
            )}
          </div>
        </div>
        
        <div className="relative w-60 h-60 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900/40 dark:to-yellow-800/40 rounded-apple-lg overflow-hidden border-2 border-yellow-300/50 dark:border-yellow-600/30 mx-auto shadow-apple-inner">
          {pokeballVisible && isGameActive && (
            <div 
              className="absolute w-16 h-16 cursor-pointer transition-all duration-300 flex items-center justify-center apple-button z-20"
              style={{ 
                left: pokeballPosition.x + 'px',
                top: pokeballPosition.y + 'px'
              }}
              onClick={catchPokeball}
            >
              <Image
                src="/Poke_Ball.png"
                alt="Pokeball"
                width={64}
                height={64}
                className="hover:scale-110 transition-transform duration-200 drop-shadow-md"
              />
            </div>
          )}
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-apple-gray-600 dark:text-apple-gray-400">
            Click fast and have fun! 🎮⚡
          </p>
        </div>
      </div>

  
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="glass-apple-dark rounded-apple-xl shadow-apple-2xl p-8 max-w-sm mx-4 border border-apple-gray-200/20 dark:border-apple-dark-700/20 animate-scale-in">
            <div className="text-center">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                Nice Job! 🎉
              </h3>
              <p className="text-lg text-apple-gray-300 mb-6">
                You caught <span className="font-bold text-apple-blue-400">{score}</span> Pokeball{score !== 1 ? 's' : ''}! {score >= 10 ? "Wow, you're fast! ⚡" : score >= 5 ? "Not bad! 👍" : "Keep practicing! 💪"}
              </p>
              <div className="flex gap-3 justify-center">
                <button 
                  onClick={closeModal}
                  className="apple-button px-6 py-3 bg-apple-gray-600 text-white rounded-apple hover:bg-apple-gray-700 transition-all duration-300 font-medium shadow-apple apple-focus"
                >
                  Close
                </button>
                <button 
                  onClick={startGame}
                  className="apple-button px-6 py-3 bg-apple-blue-600 text-white rounded-apple hover:bg-apple-blue-700 transition-all duration-300 font-medium shadow-apple apple-focus"
                >
                  Play Again
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 