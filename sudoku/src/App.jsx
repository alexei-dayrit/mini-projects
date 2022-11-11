import { useState } from 'react';
import './App.css';

function App() {
  const [sudokuGrid, setSudokuGrid] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ]);

  const handleCellChange = (event, colIndex, cellIndex) => {
    const userInput = event.target.value;
    const updatedGrid = [...sudokuGrid];
    updatedGrid[colIndex][cellIndex] = userInput;
    setSudokuGrid(updatedGrid);
  };

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <div className='grid'>
        {sudokuGrid.map((col, colIndex) => (
          <div key={colIndex} className='col'>
            {col.map((cell, cellIndex) => (
              <div key={cellIndex} className='cell'>
                <input value={cell} onChange={event => handleCellChange(event, colIndex, cellIndex)} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
