"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setCount(-666666666);
        alert("Memento mori.");
        window.close();
      },
      1 * 60 * 1000,
    );

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    switch (count) {
      case 10:
        alert("oh, you got 10.");
        break;
      case 100:
        alert("One hundred?? Unbelievable!!");
        break;
      case 666:
        alert("You got the mark of the beast.");
        break;
      case 1000:
        alert("This is incredible!! you finally reached 1000!!!");
        break;
      case 10000:
        alert("nice auto clicker w");
        break;
    }
  }, [count]);

  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="text-4xl text-pink-300 text-shadow-blue-400">
        Are you sure you're playing this f**kin' sh*t?
      </h1>
      <button
        onClick={() => setCount((prev) => prev + 1)}
        className="px-16 py-10 text-2xl text-green-400 bg-blue-700 border-2 border-pink-300 text-center"
      >
        {count}
      </button>
    </main>
  );
}
