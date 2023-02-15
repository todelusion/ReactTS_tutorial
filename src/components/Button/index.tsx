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
      } min-w-[120px] rounded-full bg-white py-5 text-2xl text-black`}
    >
      {text}
    </button>
  );
}

export default index;
