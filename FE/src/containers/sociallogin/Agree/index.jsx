import React from "react";
import AgreeList from "./AgreeList";
import S from "./Agree.styles";

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
    <S.AgreeBox>
      <Item text={AgreeList[props.name].summary} />
    </S.AgreeBox>
  );
}

export default Agree;
