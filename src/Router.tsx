import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Layout/Nav";
import Home from "./pages/Home";
import Lesson1useState from "./pages/Lesson1.useState";
import Lesson1component from "./pages/Lesson1.component";
import Lesson2todolist from "./pages/Lesson2.todolist";
import Lesson3useEffect from "./pages/Lesson3.useEffect";
import Lesson4context from "./pages/Lesson4.context";

function Router(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route path="/" element={<Home />} />
        <Route path="/lesson1/useState" element={<Lesson1useState />} />
        <Route path="/lesson1/component" element={<Lesson1component />} />
        <Route path="/lesson2/todolist" element={<Lesson2todolist />} />
        <Route path="/lesson3/useEffect" element={<Lesson3useEffect />} />
        <Route path="/lesson4/context" element={<Lesson4context />} />
      </Route>
    </Routes>
  );
}

export default Router;
