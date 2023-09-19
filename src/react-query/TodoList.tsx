import useTodoss from "./hooks/useTodoss";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodoss();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
function useTodos(): { data: any; error: any; isLoading: any } {
  throw new Error("Function not implemented.");
}
