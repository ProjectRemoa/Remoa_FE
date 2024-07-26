import React from "react";
import { AgreeList } from "./AgreeList";
import S from "./Agree.styles";
import AgreeTable from "./AgreeTable";
export const Item = ({ text }) => {
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
      {props.name ? <AgreeTable name={props.name} /> : ""}
    </S.AgreeBox>
  );
}

export default Agree;
