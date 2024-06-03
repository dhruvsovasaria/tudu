import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        id="title"
        style={{
          padding: 10,
        }}
        onChange={function (e) {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        type="text"
        id="desc"
        placeholder="description"
        style={{
          padding: 10,
        }}
      />
      <br />
      <br />
      <button
        onClick={() => {
          //better use axios lib
          fetch("http://localhost:3000/todos", {
            method: "POST",
            body: JSON.stringify({
              // title: document.getElementById("title").innerText ,
              title,
              description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
          });
        }}
      >
        add todo
      </button>
    </div>
  );
}
