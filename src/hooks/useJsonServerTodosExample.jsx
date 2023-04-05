import useJsonServer from './useJsonServer';

const TodoList = () => {
  const { data, create, update, remove } = useJsonServer(
    'http://localhost:3000/todos'
  );

  const handleCreate = (newTodo) => {
    create(newTodo);
  };

  const handleUpdate = (id, updatedTodo) => {
    update(id, updatedTodo);
  };

  const handleDelete = (id) => {
    remove(id);
  };

  function Todo(props) {
    return <h1>render todos...</h1>;
  }

  return (
    <div>
      {data.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      ))}
      <TodoForm onCreate={handleCreate} />
    </div>
  );
};
