import React from "react";

function Home(): JSX.Element {
  return (
    <section className="min-h-screen">
      <h2 className="title mb-10">首頁</h2>
      <ul className="grid grid-cols-3 justify-items-center">
        <li className="col-span-1 h-24 w-24 bg-slate-700" />
        <li className="col-span-1 h-24 w-24 bg-slate-700" />
        <li className="col-span-1 h-24 w-24 bg-slate-700" />
      </ul>
    </section>
  );
}

export default Home;
