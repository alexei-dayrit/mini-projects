import Board from './components/Board';

function App() {
  const background = 'bg-[#94A4BA] bg-gradient-to-r from-[#A0ACBD] to-[#BA9BA4]';

  return (
    <div className={`h-screen ${background}`}>
      <div className='h-screen flex flex-col justify-center items-center'>
        <div className='m-4 text-4xl'>Tic-Tac-Toe</div>
        <Board />
      </div>
    </div>
  );
}

export default App;
