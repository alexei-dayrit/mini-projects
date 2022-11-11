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

  return (
    <div className="App">
      <h1>Sudoku</h1>
      <div className='grid'>
        {sudokuGrid.map((col, colIndex) => (
          <div key={colIndex} className='col'>
            {col.map((cell, cellIndex) => (
              <div key={cellIndex} className='cell'>
                <input value={cell}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
