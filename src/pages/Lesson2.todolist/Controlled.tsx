import React, { useState } from "react";

let count = 0;
function Controlled({ className }: { className?: string }): JSX.Element {
  console.log(`控制組件被渲染第 ${(count += 1)} 次`);
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState<string[]>([]);
  const handleInput = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code !== "Enter") return;
    setInput("");
    const newTodos = [...todos, input];
    setTodos(newTodos);
  };
  const handleDelete = (selectedIndex: number): void => {
    const newTodos = todos.filter((todo, index) => index !== selectedIndex);
    setTodos(newTodos);
  };
  return (
    <div className={className}>
      <h3 className="mb-2 text-xl ">使用控制元件</h3>
      <p className="mb-5">
        控制元件，
        <br />
        <span className="font-bold text-blue-700">
          顧名思義就是受 React 控制的原件
        </span>
        ，表單的 value 值會直接與 React state 關聯，而用戶的操作行為例如 onClick
        或 onChange 所帶入的值由 setState 接受並改變狀態
        優點：即時顯示錯誤資訊，例如密碼格式錯誤 缺點：這個 component
        會不斷的重複渲染
      </p>
      <input
        type="text"
        value={input}
        onKeyUp={handleInput}
        onChange={(e) => setInput(e.target.value)}
        className="mb-5 w-full border-2 border-black"
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
    </div>
  );
}

export default Controlled;
