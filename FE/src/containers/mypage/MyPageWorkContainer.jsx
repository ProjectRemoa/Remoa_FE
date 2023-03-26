import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 12%;
  height: 40px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  box-shadow: none;
  color: #464646;
  font-size: 78%;

  cursor: pointer;
  background: #fada5e;
  font-family: NotoSansKR-700;
`;

const Line = styled.hr`
  width: 90%;
  border: none;
  margin: 0 auto;
`;

function MyPageWorkContainer() {
  const [myFeedback, setMyFeedback] = useState("");
  const [myScrap, setMyscrap] = useState([]);

  return <div> </div>;
}

export default MyPageWorkContainer;
