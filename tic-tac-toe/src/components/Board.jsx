import { useState } from 'react';
import Tile from './Tile';

const INITIAL_GAME_STATE = [null, null, null, null, null, null, null, null, null];
const WINNING_STATES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
/*
  - Horizontal wins
  - Vertical wins
  - Diagnol wins
*/

const Board = () => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function handleTileClick(event) {
    if (event.target.tagName !== 'H1') return;
    if (event.target.textContent) return;

    const tileId = Number(event.target.getAttribute('data-tile-id'));
    const updatedGameState = [...gameState];
    updatedGameState[tileId] = currentPlayer;
    setGameState(updatedGameState);

    if (currentPlayer === 'X') {
      setCurrentPlayer('O');
    } else {
      setCurrentPlayer('X');
    }
  }

  return (
    <div className='w-[300px] sm:w-[450px] flex justify-center items-center gap-3
      flex-wrap border-2 border-[#3D4856] p-4'>
      {gameState.map((player, index) => {
        return (<Tile
          key={index}
          player={player}
          tileId={index}
          handleTileClick={handleTileClick}
        />);
      })}
    </div>
  );
};

export default Board;
