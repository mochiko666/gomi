"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        alert("Memento mori.");
        window.close();
      },
      10 * 60 * 60,
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
      default:
        break;
    }
  }, [count]);

  return (
    <main className="px-16 py-10 bg-blue-600 border-2 border-pink-300 text-center">
      <h1 className="Are you sure you're playing this f**kin' sh*t?"></h1>
      <span onClick={() => setCount((prev) => prev + 1)} className="text-2xl text-green-400">{count}</span>
    </main>
  );
}
