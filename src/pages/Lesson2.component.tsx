import React, { useState } from "react";

function Lesson2component(): JSX.Element {
  const [count, setCount] = useState(0);
  const handleCount = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="title mb-10">定義component props 以及 children </h2>
    </div>
  );
}

export default Lesson2component;
