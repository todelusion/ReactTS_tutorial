import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Layout/Nav";
import Home from "./pages/Home";
import Lesson1UseState from "./pages/Lesson1.useState";

function Router(): JSX.Element {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1/useState" element={<Lesson1UseState />} />
      </Route>
    </Routes>
  );
}

export default Router;
