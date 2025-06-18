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
      }, 1500);
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
    setPokeballVisible(true);
    setShowModal(false);
    const maxX = 240 - 64;
    const maxY = 240 - 64;
    setPokeballPosition({ 
      x: Math.random() * maxX, 
      y: Math.random() * maxY 
    });
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
        <p className="text-sm text-black dark:text-gray-400 leading-6 mb-4">
          Take a quick break and play a mini-game! Click the Pokeball to catch it. 
          How many can you catch in 30 seconds?
        </p>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-4">
          <div className="text-xl font-bold text-netflix-400 dark:text-netflix-300 mb-2">
            {score} Pokeball Caught!
          </div>
          <div className="text-lg text-black dark:text-gray-400 mb-4">
            Time: {timeLeft}s
          </div>
          <div className="flex gap-3 justify-center">
            {!isGameActive ? (
              <button 
                onClick={startGame}
                className="px-4 py-2 bg-netflix-400 text-white rounded-lg hover:bg-netflix-500 transition-colors font-medium text-sm"
              >
                Start Game
              </button>
            ) : (
              <button 
                onClick={stopGame}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium text-sm"
              >
                Stop Game
              </button>
            )}
          </div>
        </div>
        
        <div className="relative w-60 h-60 bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-900 dark:to-yellow-800 rounded-xl overflow-hidden border-2 border-yellow-300 dark:border-yellow-600 mx-auto">
          {pokeballVisible && isGameActive && (
            <div 
              className="absolute w-16 h-16 cursor-pointer transition-all duration-300 flex items-center justify-center"
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
                className="hover:scale-110 transition-transform duration-200"
              />
            </div>
          )}
        </div>
        
        <div className="text-center mt-4">
          <p className="text-xs text-black dark:text-gray-400">
            Click the Pokeball as fast as you can! 🎮
          </p>
        </div>
      </div>

      {/* Custom Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm mx-4 border border-gray-100 dark:border-gray-700">
            <div className="text-center">
              <div className="text-4xl mb-3">🎉</div>
              <h3 className="text-xl font-bold text-netflix-400 dark:text-netflix-300 mb-3">
                Game Over!
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-300 mb-4">
                You caught <span className="font-bold text-netflix-400 dark:text-netflix-300">{score}</span> Pokeball!
              </p>
              <div className="flex gap-2 justify-center">
                <button 
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium text-sm"
                >
                  Close
                </button>
                <button 
                  onClick={startGame}
                  className="px-4 py-2 bg-netflix-400 text-white rounded-lg hover:bg-netflix-500 transition-colors font-medium text-sm"
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