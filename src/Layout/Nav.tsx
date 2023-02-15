import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button";
import ButtonStyle from "../components/Button/type";
import Modal from "../components/Modal";
import useScrollTop from "../hooks/useScrollTop";
import navData from "./data";

function Nav(): JSX.Element {
  const [state, setState] = useState(0);
  useScrollTop();

  const handleClick = (index: number): void => {
    setState(index);
  };

  return (
    <>
      <h1 className="absolute -z-10 font-dela text-4xl text-blue-700">
        React 搭配 <br /> Typescript 應用
      </h1>
      <div className="mx-auto max-w-3xl pt-16">
        <ul className="grid grid-cols-3 justify-items-center gap-10 text-black">
          {navData.map((data, index) => (
            <li key={data.path} className="col-span-1 w-full">
              <Link to={data.path} className="w-full">
                <Button
                  onClick={() => handleClick(index)}
                  text={data.name}
                  className={`${
                    state === index ? ButtonStyle.ACTIVE : ButtonStyle.DEFAULT
                  } w-full`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-auto max-w-3xl p-10">
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
