import { useState } from 'react';
import Tile from './Tile';

const INITIAL_GAME_STATE = [null, null, null, null, null, null, null, null, null];

const Board = () => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function handleTileClick(event) {
    if (event.target.tagName !== 'H1') return;

    const tileId = event.target.getAttribute('data-tile-id');
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
    <div className='w-[300px] sm:w-[450px] flex justify-center items-center gap-3 flex-wrap border-2 border-gray-700 p-4'>
      {gameState.map((tile, index) => {
        return (<Tile
          key={index}
          tile={tile}
          tileId={index}
          handleTileClick={handleTileClick}
        />);
      })}
    </div>
  );
};

export default Board;
