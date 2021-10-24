function CreateTodo(props) {
    return (
      <div className="body">
        <input
          type="text"
          id="todo_input"
          placeholder="add todo"
          value={props.newValue}
          onChange={props.onChange}
        />
        <button onClick={props.addTodo} id="todo_submit">
          Add Todo
        </button>
      </div>
    );
  }
  export default CreateTodo ;