import React from "react";

class Status extends React.Component {
  dragOver = (e) => {
    e.preventDefault();
    console.log("dragdOver");
  };
  dragLeave = () => {
    //this.setState({this.style.border = "none";})
    //
    console.log("dragleave");
  };
  dragEnter = () => {
    // this.style.border = "1px dashed #ccc";
    console.log("dragenter");
  };
  dragdrop = (ev, category) => {
    let id = ev.dataTransfer.getData("id");

    let todos = this.state.todos.filter((todo) => {
      if (todo.name === id) {
        todo.category = category;
      }
      return todo;
    });

    this.setState({
      ...this.state,
      todos,
    });
  };
  render() {
    const dragdrop = this.props.dragdrop;
    return (
      <div
        className="status"
        id={this.props.id}
        onDragOver={this.dragOver}
        onDragLeave={this.dragLeave}
        onDragEnter={this.dragEnter}
        onDrop={dragdrop}
      >
        {this.props.children}
      </div>
    );
  }
}
export default Status;
