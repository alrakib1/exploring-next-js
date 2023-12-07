"use client";

import { useState } from "react";

import '../../app/globals.css'
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="text-2xl text-center">
      Count : {count}
      <div className="mt-10">
        <button
          className="btn bg-blue-900 p-1 text-black"
          onClick={() => setCount(count + 1)}
        >
          {" "}
          increase
        </button>

        <button
          className="btn bg-blue-400 p-1 text-black ml-10"
          onClick={() => setCount(count - 1)}
        >
          {" "}
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
