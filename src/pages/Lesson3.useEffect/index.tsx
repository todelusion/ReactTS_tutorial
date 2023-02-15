import axios, { AxiosResponse } from "axios";
import React, { useEffect, useRef, useState } from "react";
import Modal from "../../components/Modal";
const baseUrl = "https://fathomless-brushlands-42339.herokuapp.com/todo8";

function Lesson3useEffect(): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<Array<{ content: string; id: number }>>();

  const fetchData = async (): Promise<void> => {
    const res = await axios.get(`${baseUrl}`);
    console.log(res.data);
    setTodos(res.data);
  };

  useEffect(() => {
    fetchData().catch((err) => console.error(err));
  }, []);

  const handleInput = async (
    e: React.KeyboardEvent<HTMLInputElement>
  ): Promise<void> => {
    if (e.code !== "Enter" || inputRef.current === null) return;
    await axios.post(baseUrl, { content: inputRef.current.value });
    await fetchData();
    inputRef.current.value = "";
  };
  const handleDelete = async (id: number): Promise<void> => {
    await axios.delete(`${baseUrl}/${id}`);
    await fetchData();
  };

  const clearAll = async (): Promise<void> => {
    if (todos === undefined) return;
    await Promise.all(
      todos.map(async (todo) => axios.delete(`${baseUrl}/${todo.id}`))
    ).catch((err) => console.error(err));
    await fetchData();
  };

  if (todos === undefined) return <Modal />;

  return (
    <section className="flex-col-center min-h-screen">
      <h2 className="title mb-10">取得 api 資料後，使用 useEffect 改變狀態</h2>
      <button type="button" className="countBtn mb-5" onClick={clearAll}>
        刪除全部
      </button>
      <input
        ref={inputRef}
        type="text"
        onKeyUp={handleInput}
        className=" mb-5 w-full border-2 border-black"
      />
      <ul className="flex flex-wrap">
        {todos.map((todo) => (
          <li
            // eslint-disable-next-line react/no-array-index-key
            key={todo.id}
          >
            <button
              className="m-2 w-max rounded-xl border-2 border-pink p-2 hover:bg-white"
              type="button"
              onClick={async () => handleDelete(todo.id)}
            >
              {todo.content}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Lesson3useEffect;
