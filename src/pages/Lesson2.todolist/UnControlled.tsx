import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

let count = 0;
function UnControlled(): JSX.Element {
  console.log(`非控制元件被渲染了 ${(count += 1)}`);

  //   Ref
  const inputRef = useRef<HTMLInputElement>(null);
  //

  const [todos, setTodos] = useState<string[]>([]);

  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code !== "Enter" || inputRef.current === null) return;
    const newTodos = [...todos, inputRef.current.value];
    setTodos(newTodos);
    inputRef.current.value = "";
  };
  const handleDelete = (selectedIndex: number): void => {
    const newTodos = todos.filter((todo, index) => index !== selectedIndex);
    setTodos(newTodos);
  };

  return (
    <>
      <h3 className="mb-2 text-xl ">使用非控制元件</h3>
      <p className="mb-5">
        非控制元件，
        <br />
        <span className="font-bold text-yellow-600">
          也就是不受 React 控制的元件
        </span>
        ，白話一點就是操作到 real dom，這個情況下就跟 React
        沒有關係了，要收集表單資料的方法就是使用 html 原生提供的 from 方法 綁定
        form 元素，當用戶點擊 submit 的時候，才會收集到資料
      </p>
      <input
        ref={inputRef}
        type="text"
        onKeyUp={handleInput}
        className=" mb-5 w-full border-2 border-black"
      />
      <ul className="flex flex-wrap">
        {todos.map((todo, index) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          >
            <button
              className="m-2 w-max rounded-xl border-2 border-pink p-2 hover:bg-white"
              type="button"
              onClick={() => handleDelete(index)}
            >
              {todo}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UnControlled;
