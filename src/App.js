import React from "react";
import intialData from "./components/intialData";
import CreateTodo from "./components/creatTodo";
import Todo from "./components/Todo";

import "./App.css";

class App extends React.Component {
  state = intialData;
  completeTasks = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
    console.log(index);
  };

  updateNewTodo = (event) => {
    this.setState({
      newTask: event.target.value,
    });
  };

  addTodo = () => {
    const todos = [...this.state.todos];
    todos.push({
      title: this.state.newTask,
    });
    this.setState({
      todos,
      newTask: "",
    });
  };

  render() {
    return (
      <div>
        <CreateTodo
          value={this.state.newTask}
          onChange={this.updateNewTodo}
          addTodo={this.addTodo}
        />
        <div className="container">
          <div
            className="status"
            id="AddValue"
            onDragOver={(e) => e.preventDefault}
          >
            <h2>No status</h2>
            {this.state.todos.map((todo, index) => (
              <Todo
                todo={todo}
                key={index}
                draggable="true"
                completeTasks={() => {
                  this.completeTasks(index);
                }}
              />
            ))}
          </div>
          <div className="status" onDragOver={(e) => e.preventDefault}>
            <h2>In progress</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
