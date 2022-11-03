const Tile = ({ player, tileId, handleTileClick }) => {
  const textColor = player === 'X' ? 'text-[#A8F497]' : 'text-[#F9F871]';
  const hover = 'duration-300 hover:scale-105';

  return (
    <div
      onClick={handleTileClick}
      className={`w-20 h-20 sm:w-32 sm:h-32 flex border-2 border-[#617085] ${hover}`}>
      <h1
        className={`w-full text-4xl sm:text-7xl flex justify-center items-center ${textColor}`}
        data-tile-id={tileId}>
        {player}
      </h1>
    </div>

  );
};

export default Tile;
