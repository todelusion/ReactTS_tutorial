import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../components/Button";

function Nav(): JSX.Element {
  return (
    <>
      <div className="mx-auto mt-10">
        <ul className="flex px-10 py-5 text-black">
          <li className="mx-10">
            <Link to="/">
              <Button text="home" />
            </Link>
          </li>
          <li>
            <Link to="/lesson1/useState">
              <Button text="useState" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="p-10 text-white">
        <Outlet />
      </div>
    </>
  );
}

export default Nav;
