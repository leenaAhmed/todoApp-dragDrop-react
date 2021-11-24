import React from "react";
import propTypes from "prop-types";

export default class Draggable extends React.Component {
  drag = (e) => {
    e.dataTransfer.setData("transfer", e.target.id);
  };
  NotallowsDrop = (e) => {
    e.stopPropagation();
  };
  render() {
    return (
      <div
        id={this.props.id}
        draggable="true"
        onDragOver={this.NotallowsDrop}
        onDragStart={this.drag}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}
Draggable.propTypes = {
  id: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
};
