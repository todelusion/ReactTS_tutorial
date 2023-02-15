import React from "react";

interface IButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

function index({ text, onClick, className }: IButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`${
        className ?? ""
      } min-w-[120px] rounded-3xl border-2 border-black py-5 px-5 font-bold duration-150 hover:bg-pink`}
    >
      {text}
    </button>
  );
}

export default index;
