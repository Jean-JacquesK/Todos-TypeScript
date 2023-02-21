type TodoProps = {
  todo: {
    id: number;
    completed: boolean;
    title: string;
    userId: number;
  };
};
function Todo({ todo }: TodoProps) {
  return (
    <li>
      <h1>{todo.title}</h1>
    </li>
  );
}
export default Todo;
