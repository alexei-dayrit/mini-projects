import { useState } from 'react';

const Tile = ({ currentPlayer }) => {
  const [tileValue, setTileValue] = useState('');

  function handleClick() {
    console.log('currentPlayer', currentPlayer);
    if (currentPlayer === 'X') {
      setTileValue('X');
    } else {
      setTileValue('O');
    }
  }

  return (
    <div
      onClick={handleClick}
      className='w-20 h-20 sm:w-32 sm:h-32 border-2 border-white'>
      {tileValue}
    </div>

  );
};

export default Tile;
