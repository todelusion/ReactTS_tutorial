import React, { useState } from "react";
import Button from "../../components/Button";

function Lesson1component(): JSX.Element {
  return (
    <div className="flex flex-col items-center">
      <h2 className="title mb-10">定義component props 以及 children </h2>
      <Button text="按鈕" />
    </div>
  );
}

export default Lesson1component;
