import React from "react";
import styled from "styled-components";
import Drabbable from "./drabbable";
import Draggable from "./draggable";
const Wrapper = styled.div`
  width: 100px;
  disply: flex;
  padding: 32px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const drabbableStyle = styled.div`
  padding: 8px;
  width: 100%;
  height: 80%;
  background: #333;
`; //

export default class TestWrapper extends React.components {
  render() {
    return (
      <Wrapper>
        <Drabbable id="dre1" style={drabbableStyle}>
          <Draggable id="items" style={{ margin: "10px" }}>
            localhost
          </Draggable>
        </Drabbable>
        <Drabbable id="dre2" style={drabbableStyle}></Drabbable>
      </Wrapper>
    );
  }
}
