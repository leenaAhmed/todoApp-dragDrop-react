import React from "react";
import propTypes from "prop-types";

export default class Drabbable extends React.components {
  drop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("transfer");
    e.target.appendChild(document.getelementById(data));
  };
  allowsDrop = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <div
        id={this.props.id}
        onDragOver={this.allowsDrop}
        OnDrop={this.drop}
        style={this.props.style}
      >
        {this.props.children}
      </div>
    );
  }
}
Drabbable.prototype = {
  id: propTypes.string,
  style: propTypes.object,
  children: propTypes.node,
};
