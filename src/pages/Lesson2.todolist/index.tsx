import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Controlled from "./Controlled";
import UnControlled from "./UnControlled";

function Lesson2todolist(): JSX.Element {
  return (
    <section className="flex-col-center min-h-screen">
      <h2 className="title mb-10">使用 useState 建構本地 todolist</h2>
      <div className="w-full">
        <Controlled className="mb-10" />
        <UnControlled />
      </div>
    </section>
  );
}

export default Lesson2todolist;
