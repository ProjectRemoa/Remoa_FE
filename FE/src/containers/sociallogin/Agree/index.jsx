import React from "react";
import AgreeList from "./AgreeList";
import S from "./Agree.module.css";

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
    <div className={S.AgreeBox}>
      <Item text={AgreeList[props.name].summary} />
    </div>
  );
}

export default Agree;
