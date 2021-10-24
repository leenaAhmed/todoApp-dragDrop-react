function Todo(props) {
    const todo = props.todo; //
    const completeTasks = props.completeTasks;
    return (
      <div className="todos">
        {todo.title}
        <span className="close" onClick={completeTasks}>
          &times;
        </span>
      </div>
    );
  }
  export default Todo ;