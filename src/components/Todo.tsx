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
    <li className='list-group-item'>
      <p>{todo.title}</p>
    </li>
  );
}
export default Todo;
