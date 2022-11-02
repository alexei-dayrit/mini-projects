import { useState } from 'react';

const INITIAL_GAME_STATE = [null, null, null, null, null, null, null, null, null];

function App() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  return (
    <div className='w-[300px] sm:w-[450px] flex justify-center items-center gap-3 flex-wrap border-2 border-gray-700 p-4'>
      {gameState.map((tile, index) => (
        <div key={index} className='w-20 h-20 sm:w-32 sm:h-32 border-2 border-white'></div>
      ))}
    </div>
  );
}

export default App;
