import React, {useState} from 'react'
import S from "./manageDeleteAllContainer.styles"
import Cancel from "../../../images/cancel.svg"
function ManageDeleteAllContainer(props) {
  return (
    <S.ManageDeleteAllContainer>
      <S.CancelWrapper src={Cancel} alt="cancel" onClick={() => {
        props.setButtonColor([0, props.buttonColor[1]])
      }} />
      <S.Text>작품 전체를 삭제하시겠습니까?</S.Text>
      <S.SubText>누군가에게 도움이 될 작품이에요!</S.SubText>
      <S.ButtonWrapper>
        <S.Button checked={true}>네 삭제할게요</S.Button>
        <S.Button checked={false}>조금 더 생각해볼게요</S.Button>
      </S.ButtonWrapper>
    </S.ManageDeleteAllContainer>
  );
}

export default ManageDeleteAllContainer
