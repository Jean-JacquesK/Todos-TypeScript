function Todo(todo: { completed: boolean; title: string; userId: number }) {
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  );
}
export default Todo;
