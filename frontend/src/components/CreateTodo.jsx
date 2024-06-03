export function CreateTodo() {
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        style={{
          padding: 10,
        }}
      />{" "}
      <br />
      <br />
      <input
        type="text"
        placeholder="desc"
        style={{
          padding: 10,
        }}
      />{" "}
      <br />
      <br />
      <button>add todo</button>
    </div>
  );
}
