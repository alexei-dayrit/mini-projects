import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState('');
  const [choices, setChoices] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');

  // hex code = 6 digits (0-9 and/or A-F)
  const generateColor = () => {
    let color = '#'
    const digits = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'A',
      'B',
      'C',
      'D',
      'E',
      'F'
    ];
    for (let i = 0; i < 6; i++) {
      const randomDigit = Math.floor(Math.random() * digits.length)
      color += digits[randomDigit]
    }
    setAnswer(color);
  };

  useEffect(() => {
    generateColor();
  }, []);

  return (
    <section className="container">
      <h1 className="col-full">Hex Color Code Game</h1>

      <div className="flex-center">
        <div className="col-full">
          <div className="color-box" style={{ backgroundColor: answer }}>
            FULL COLOR BOX
          </div>
        </div>
        <h2 className="col-full">Take your guess:</h2>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </div>
    </section>
  );
}

export default App;