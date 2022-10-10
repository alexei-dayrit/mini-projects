import './App.css';

function App() {
  return (
    <section className="container">
      <h1 className="col-full">Hex Color Code Game</h1>

      <div className="flex-center">
        <div className="col-full">
          <div className="color-box">FULL COLOR BOX</div>
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
