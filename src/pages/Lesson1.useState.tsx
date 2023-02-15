import React, { useState } from "react";

function Lesson1useState(): JSX.Element {
  const [count, setCount] = useState(0);
  const handleCount = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <section className="flex-col-center min-h-screen">
        <h2 className="title mb-10">useState泛型與自動推斷</h2>
        <button onClick={handleCount} type="button" className="countBtn mb-5">
          count {count}
        </button>
        <button
          type="button"
          className="countBtn"
          onClick={() => setCount("123")}
        >
          錯誤按鈕
        </button>
      </section>
      <hr />
      <section className="flex-col-center min-h-screen">
        <h1>123</h1>
      </section>
    </>
  );
}

export default Lesson1useState;
