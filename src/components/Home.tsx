import { useState } from 'react';

import reactLogo from '@/assets/react.svg';
import { useBreakpointValue } from '@/hooks/useBreakpoint';

export function Home() {
  const [count, setCount] = useState(0);
  const breakpoint = useBreakpointValue();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-8 bg-gray-50">
      <div className="flex flex-row gap-8">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src="/vite.svg"
            className="w-32 drop-shadow-sm transition hover:drop-shadow-xl"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="mt-4 w-32 drop-shadow-sm transition hover:drop-shadow-xl"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold">Vite + React</h1>
      <div className="flex flex-col items-center gap-4 rounded border border-gray-200 bg-white px-4 py-3 shadow-sm">
        <button
          className="rounded border border-gray-300 bg-gray-200 px-3 py-1.5 hover:border-purple-500"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>
          Current breakpoint: <code>{breakpoint}</code>
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}
