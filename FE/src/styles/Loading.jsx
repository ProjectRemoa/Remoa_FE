import React from "react";
import styled from "styled-components";
import LoadingIcon from "../images/loading.gif"

const Background = styled.div`
  position: absolute;
  //border-radius: 1vw / 1vw; // MS.MobalBox와 동일하게
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: white;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  border-radius: 12px;
  width:100%;
  //background-color:white;
`
const LoadingBox=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const LoadingText = styled.div`
  text-align: center;
`;

function Loading() {
  return (
    <Background>
      <Container>
        <LoadingBox>
          <img src={LoadingIcon} alt="loading" style={{width:"10%"}} />
        </LoadingBox>
        <LoadingText>로딩중 . . .</LoadingText>
      </Container>
    </Background>
  );
}

export default Loading;
