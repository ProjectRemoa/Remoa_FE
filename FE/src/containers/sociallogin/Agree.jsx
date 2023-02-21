import React from "react";
import AgreeList from "./AgreeList";

const Item = ({ text }) => {
  return (
    <>
      {text.split("\n").map((txt) => (
        <span key={txt}>
          {txt}
          <br />
        </span>
      ))}
    </>
  );
};

function Agree(props) {
  return (
    <div
      style={{
        border: "1px solid #D9D9D9",
        fontSize: "0.8rem",
        margin: "0px 20px",
        width: "100%",
        padding: "10px",
        maxHeight: "180px",
        overflow: "auto",
      }}
    >
      <Item text={AgreeList[props.name].summary} />
    </div>
  );
}

export default Agree;
