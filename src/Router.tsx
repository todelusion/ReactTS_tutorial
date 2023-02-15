import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Layout/Nav";
import Home from "./pages/Home";
import Lesson1useState from "./pages/Lesson1.useState";
import Lesson2component from "./pages/Lesson2.component";

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1/useState" element={<Lesson1useState />} />
        <Route path="/lesson2/component" element={<Lesson2component />} />
      </Route>
    </Routes>
  );
}

export default Router;
