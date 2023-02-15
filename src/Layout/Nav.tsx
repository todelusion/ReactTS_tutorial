import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Button from "../components/Button";
import ButtonStyle from "../components/Button/type";
import navData from "./data";

function Nav(): JSX.Element {
  const [state, setState] = useState(0);

  const handleClick = (index: number): void => {
    setState(index);
  };

  return (
    <>
      <div className="mx-auto max-w-3xl pt-10">
        <ul className="flex text-black">
          {navData.map((data, index) => (
            <li key={data.path} className="mx-10">
              <Link to={data.path}>
                <Button
                  onClick={() => handleClick(index)}
                  text={data.name}
                  className={
                    state === index ? ButtonStyle.ACTIVE : ButtonStyle.DEFAULT
                  }
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-10">
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
