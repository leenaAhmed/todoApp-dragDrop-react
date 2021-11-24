import React from "react";
import intialData from "./components/intialData";
import CreateTodo from "./components/creatTodo";
import Todo from "./components/Todo";
import Status from "./components/status";
import "./App.css";

class App extends React.Component {
  state = intialData;
  constructor(props) {
    super(props);
    this.state = intialData;
  }
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

  addTodo = (e) => {
    const todos = [...this.state.todos];
    if (this.state.newTask !== " ") {
      todos.push({
        title: this.state.newTask,
      });
      this.setState({
        todos,
        newTask: " ",
      });
    } else {
    }

    console.log(this.state.newTask === " ");
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
          <Status>
            <h2>No status</h2>
            {this.state.todos.map((todo, index) => (
              <Todo
                todo={todo}
                key={index}
                draggable="true"
                completeTasks={() => {
                  this.completeTasks(index);
                }}
                dragEnd={() => {
                  this.dragEnd();
                }}
                dragStart={() => {
                  this.dragStart();
                }}
              />
            ))}
          </Status>
          <Status dragdrop={this.dragdrop}>
            <h2> In progress</h2>
          </Status>
        </div>
      </div>
    );
  }
}

export default App;
