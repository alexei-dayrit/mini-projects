import { useState } from 'react';
import Tile from './Tile';

const INITIAL_GAME_STATE = [null, null, null, null, null, null, null, null, null];

const Board = () => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  function handleTileClick(event) {
    const id = event.target.getAttribute('key');
    console.log('id:', id);
    const test = gameState.concat([]);
    console.log(test);
    test[id] = currentPlayer;
    console.log(test);
    setGameState(test);
    if (currentPlayer === 'X') {
      console.log('x');
    }
  }

  return (
    <div className='w-[300px] sm:w-[450px] flex justify-center items-center gap-3 flex-wrap border-2 border-gray-700 p-4'>
      {gameState.map((tile, index) => {
        console.log('tile map:', tile);
        return (<Tile
          key={index}
          data-tile-id={index}
          {...{ handleTileClick, tile }}
        />);
      })}
    </div>
  );
};

export default Board;
