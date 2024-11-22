"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const state = count % 2 === 0 ? "even" : "odd";
  const isEven = state === "even";

  return (
    <main className="flex min-h-screen flex-col gap-2 items-center p-24 font-[family-name:var(--font-geist-mono)]">
      <p>state: {state}</p>

      <div className="grid grid-cols-2 gap-2 w-1/2">
        <div className="flex flex-col">
          <p className="text-xs">v4: data-state=even data-state=odd</p>
          <button
            data-state={state}
            className="p-2 border border-white data-state=even:bg-red-500 data-state=odd:bg-blue-500"
            onClick={() => setCount((c) => c + 1)}
          >
            count: {count}
          </button>
        </div>

        <div className="flex flex-col">
          <p className="text-xs">v3: data-[state=even] data-[state=odd]</p>
          <button
            data-state={state}
            className="p-2 border border-white data-[state=even]:bg-red-500 data-[state=odd]:bg-blue-500"
            onClick={() => setCount((c) => c + 1)}
          >
            count: {count}
          </button>
        </div>

        <div className="flex flex-col">
          <p className="text-xs">v4: data-even</p>
          <button
            data-even={isEven}
            className="p-2 border border-white data-even:bg-red-500 bg-blue-500"
            onClick={() => setCount((c) => c + 1)}
          >
            count: {count}
          </button>
        </div>

        <div className="flex flex-col">
          <p className="text-xs">v3: data-[even=true]</p>
          <button
            data-even={isEven}
            className="p-2 border border-white data-[even=true]:bg-red-500 bg-blue-500"
            onClick={() => setCount((c) => c + 1)}
          >
            count: {count}
          </button>
        </div>

        <div className="flex flex-col">
          <p className="text-xs">v4: data-even w/ undefined for false</p>
          <button
            data-even={isEven || undefined}
            className="p-2 border border-white data-[even=true]:bg-red-500 bg-blue-500"
            onClick={() => setCount((c) => c + 1)}
          >
            count: {count}
          </button>
        </div>
      </div>
    </main>
  );
}
