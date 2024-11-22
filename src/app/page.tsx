"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const state = count % 2 === 0 ? "even" : "odd";
  const isEven = state === "even";

  console.log(state);

  return (
    <main className="flex min-h-screen flex-col gap-2 items-center p-24 *:p-2 *:border *:border-white font-[family-name:var(--font-geist-mono)]">
      <p>state: {state}</p>

      <button
        data-state={state}
        className="data-state=even:bg-red-500 data-state=odd:bg-blue-500"
        onClick={() => setCount((c) => c + 1)}
      >
        count: {count}
      </button>

      <button
        data-even={isEven}
        className="data-even:bg-red-500 bg-blue-500"
        onClick={() => setCount((c) => c + 1)}
      >
        count: {count}
      </button>
    </main>
  );
}
