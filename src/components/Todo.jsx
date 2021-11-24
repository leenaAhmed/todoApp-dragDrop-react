import React from "react";
class   Todo extends React.Component {
  drag = (e) => {
    e.dataTransfer.setData("transfer", e.target.id);
  };
  NotallowsDrop = (e) => {
    e.stopPropagation();
  }; 
  dragStart = (e ,id) => {
    console.log('dragstart:',id);
    e.dataTransfer.setData("id", id);
  }
    dragEnd = (e) => {
     console.log("dragEnd");
  }
    render() {
      const todo = this.props.todo; //
      const completeTasks = this.props.completeTasks; 
     return (
        
      <div className="todos" 
           draggable="true" 
           id={this.props.id}
           onDragOver={this.NotallowsDrop}
           onDragStart={this.dragStart}  
           onDragEnd={this.dragEnd}    >
           {todo.title}  
           {this.props.children}
        <span className="close" onClick={completeTasks}>
          &times;
        </span>
      </div>
    );}
  }
  export default Todo ;