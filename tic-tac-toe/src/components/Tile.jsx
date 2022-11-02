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
      className='w-20 h-20 sm:w-32 sm:h-32 flex border-2 border-white'>
      <h1 className="w-full text-4xl sm:text-7xl flex justify-center items-center">{tileValue}</h1>
    </div>

  );
};

export default Tile;
