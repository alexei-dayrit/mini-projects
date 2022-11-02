import { useState } from 'react';
import Board from './Board';

const INITIAL_GAME_STATE = [null, null, null, null, null, null, null, null, null];

function App() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);

  return (
    <Board gameState={gameState}/>
  );
}

export default App;
