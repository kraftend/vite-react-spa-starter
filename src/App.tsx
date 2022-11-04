import { useState } from 'react';

import reactLogo from '@/assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col justify-center items-center gap-8">
      <div className="flex flex-row gap-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src="/vite.svg"
            className="w-32 drop-shadow-sm hover:drop-shadow-xl transition"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="w-32 drop-shadow-sm hover:drop-shadow-xl transition mt-4"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="font-bold text-5xl">Vite + React</h1>
      <div className="bg-white px-4 py-3 shadow-sm border border-gray-200 rounded flex flex-col items-center gap-4">
        <button
          className="bg-gray-200 px-3 py-1.5 rounded border border-gray-300 hover:border-purple-500"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
