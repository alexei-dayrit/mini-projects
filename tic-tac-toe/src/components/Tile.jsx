const Tile = ({ tile, tileId, handleTileClick }) => {

  return (
    <div
      onClick={handleTileClick}
      className='w-20 h-20 sm:w-32 sm:h-32 flex border-2 border-white'>
      <h1
        className="w-full text-4xl sm:text-7xl flex justify-center items-center"
        data-tile-id={tileId}>
        {tile}
      </h1>
    </div>

  );
};

export default Tile;
