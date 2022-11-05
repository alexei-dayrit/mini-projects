import { useState, useEffect } from 'react';
import Tile from './Tile';
import { INITIAL_GAME_STATE, WINNING_STATES } from '../globals';

const Board = () => {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  useEffect(() => {
    checkWinner();
    if (winner) setTimeout(() => handleWinAlert(), 500);
  }, [gameState, winner]);

  function checkWinner() {
    if (winner) return;

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

  function handleWinAlert() {
    window.alert(`The winner is: ${winner}!`);
  }

  function resetGame() {
    setGameState(INITIAL_GAME_STATE);
    setCurrentPlayer('X');
    setWinner('');
  }

  function handleTileClick(event) {
    if (winner) return;
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
    <div>
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
      <div className='mt-4 text-center'>
        <button
          className='hover:scale-105 hover:bg-slate-300 p-1 border-2 border-[#3D4856]'
          onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default Board;
