const TodoItem = ({ todo, dispatch }) => {
    const handleToggle = () => {
      dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    };
  
    const handleDelete = () => {
      dispatch({ type: 'DELETE_TODO', payload: todo.id });
    };
  
    const handleEdit = () => {
      dispatch({ type: 'EDIT_TODO', payload: { id: todo.id, title: todo.title } });
    };
  
    const handleSave = (id, title) => {
      dispatch({ type: 'SAVE_TODO', payload: { id, title } });
    };
  
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
        />
        {todo.editing ? (
          <input
            type="text"
            value={todo.editValue}
            onChange={(e) =>
              dispatch({
                type: 'EDIT_TODO',
                payload: { id: todo.id, title: e.target.value }
              })
            }
          />
        ) : (
          <span>{todo.title}</span>
        )}
        {todo.editing ? (
          <button onClick={() => handleSave(todo.id, todo.editValue)}>Save</button>
        ) : (
          <>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete} disabled={!todo.completed}>
              Delete
            </button>
          </>
        )}
      </li>
    );
  };

  export default TodoItem;