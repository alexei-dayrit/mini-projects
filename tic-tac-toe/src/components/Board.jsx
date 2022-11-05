import { useState, useEffect } from 'react';
import Tile from './Tile';
import { INITIAL_GAME_STATE, WINNING_STATES } from '../globals';

const Board = () => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  useEffect(() => {
    checkWinner();
  }, [gameState]);

  function checkWinner() {
    for (let index = 0; index < WINNING_STATES.length; index++) {
      const checkCombo = [];
      const winningCombo = WINNING_STATES[index];

      winningCombo.forEach(boxIndex => {
        checkCombo.push(gameState[boxIndex]);
      });

      if (checkCombo.every(element => element === 'X') || checkCombo.every(element => element === 'O')) {
        checkCombo[0] === 'X' ? setWinner('X') : setWinner('O');
      }
    }
  }

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
