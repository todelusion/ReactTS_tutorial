import React, { createContext, useState } from "react";

export const ColorContext = createContext(null);

export function ColorProvider(): JSX.Element {
  const [color, setColor] = useState(false);

  return <div>ColorContext</div>;
}
