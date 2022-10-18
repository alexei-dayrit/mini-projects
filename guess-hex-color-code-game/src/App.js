import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [answer, setAnswer] = useState('');
  const [choices, setChoices] = useState([]);
  const [userAnswer, setUserAnswer] = useState('');

  const generateRandomColor = () => {
    let color = '#';
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
      const randomDigit = Math.floor(Math.random() * digits.length);
      color += digits[randomDigit];
    }
    return color;
  };

  const handleButtonClick = event => {
    if (event.target.tagName !== 'BUTTON') return;
    setUserAnswer(event.target.value);
  };

  const handleRestartClick = event => {
    if (event.target.value !== 'Restart') return;

    setUserAnswer('');
    const correctColor = generateRandomColor();
    const randomizeChoices = () => {
      const orderedChoices = [
        correctColor,
        generateRandomColor(),
        generateRandomColor()
      ];
      const randomizedChoices = orderedChoices.sort(
        (a, b) => 0.5 - Math.random()
      );
      return randomizedChoices;
    };

    setAnswer(correctColor);
    setChoices(randomizeChoices());
  };

  useEffect(() => {
    const correctColor = generateRandomColor();
    const randomizeChoices = () => {
      const orderedChoices = [
        correctColor,
        generateRandomColor(),
        generateRandomColor()
      ];
      const randomizedChoices = orderedChoices.sort(
        (a, b) => 0.5 - Math.random()
      );
      return randomizedChoices;
    };

    setAnswer(correctColor);
    setChoices(randomizeChoices());
  }, []);

  const buttonChoices = choices.map((choice, index) => {
    return (
      <button
        style={
          userAnswer === choice
            ? {
                border: '3px solid black',
                backgroundColor: choice === answer ? 'green' : 'red'
              }
            : userAnswer
            ? choice === answer
              ? { backgroundColor: 'green' }
              : { backgroundColor: 'red' }
            : null
        }
        onClick={handleButtonClick}
        key={index}
        value={choice}
        disabled={userAnswer}>
        {choice}
      </button>
    );
  });

  return (
    <section className="container">
      <h1 className="col-full">Hex Color Code Game</h1>

      <div className="flex-center">
        <div className="col-full">
          <div className="color-box" style={{ backgroundColor: answer }}></div>
        </div>
        <button onClick={handleRestartClick} value="Restart">
          Restart
        </button>
        <h2 className="col-full">Take your guess:</h2>
        {buttonChoices}
      </div>

      {userAnswer ? (
        userAnswer === answer ? (
          <h2 className="results correct">Correct!</h2>
        ) : (
          <div className="results">
            <h1 className="incorrect">Incorrect!</h1>
            <h2>
              The correct answer is <span className="correct">{answer}</span>
            </h2>
          </div>
        )
      ) : null}
    </section>
  );
}

export default App;
