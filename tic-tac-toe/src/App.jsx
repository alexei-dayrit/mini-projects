import { useState } from 'react';
import './App.css';

function App() {

  return (
    <div className='w-[450px] flex justify-center items-center gap-3 flex-wrap border-2 border-gray-700 p-4'>
      <div className='flex gap-3 w-full'>
        <div className='w-32 h-32 border-2 border-white'></div>
        <div className='w-32 h-32 border-2 border-white'></div>
        <div className='w-32 h-32 border-2 border-white'></div>
      </div>
      <div className='flex gap-3 w-full'>
        <div className='w-32 h-32 border-2 border-white'></div>
        <div className='w-32 h-32 border-2 border-white'></div>
        <div className='w-32 h-32 border-2 border-white'></div>
      </div>
      <div className='flex gap-3 w-full'>
        <div className='w-32 h-32 border-2 border-white'></div>
        <div className='w-32 h-32 border-2 border-white'></div>
        <div className='w-32 h-32 border-2 border-white'></div>
      </div>
    </div>
  );
}

export default App;
