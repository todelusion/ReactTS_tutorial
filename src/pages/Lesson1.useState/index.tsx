import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

function Lesson1useState(): JSX.Element {
  const [count, setCount] = useState(0);
  const handleCount = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <section className="flex-col-center min-h-screen">
      <h2 className="title mb-10">useState泛型與自動推斷</h2>
      <button onClick={handleCount} type="button" className="countBtn mb-5">
        count {count}
      </button>
      <button
        type="button"
        className="countBtn mb-10"
        onClick={() => setCount("123")}
      >
        錯誤按鈕
      </button>
    </section>
  );
}

export default Lesson1useState;
