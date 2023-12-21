import React, {useState} from 'react'
import S from "./manageDeleteAllContainer.styles"
import Cancel from "../../../images/cancel.svg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ManageDeleteContainer({
  setButtonColor,
  buttonColor,
  isAll,
  setIsDelete,
  deletedData,
  setDeletedData
}) {
  const onClickDelete = () => {
    console.log("onClickDelete");
    if (isAll) {
      // 전체 삭제 API
    } else {
      // 부분삭제 API
      console.log(deletedData);
      let endpoint;
      const fetchData = async (endpoint) => {
        try {
          const response = await axios.delete(endpoint);
          console.log(response);
        } catch (err) {
          console.log(err);
          return err;
        }
      };
      for (let i = 0; i < deletedData.length; i++){
        endpoint = `/BE/user/reference/${deletedData[i]}`;
        fetchData(endpoint);
      }
      //alert("삭제되었습니다.");
      window.location.reload();
    }
  };

  const onClickHold = () => {
    setButtonColor([false, false]);
    setIsDelete(false);
    setDeletedData([]);
  };

  return (
    <S.ModalWrapper>
      <S.ManageDeleteAllContainer>
        <S.CancelWrapper
          src={Cancel}
          alt="cancel"
          onClick={() => {
            setButtonColor([false, false]);
            setIsDelete(false);
            setDeletedData([]);
          }}
        />
        <S.Text>
          {isAll ? (
            <>작품 전체를 삭제하시겠습니까?</>
          ) : (
            <>선택한 작품 {deletedData.length}개를 삭제하시겠습니까?</>
          )}
        </S.Text>
        <S.SubText>누군가에게 도움이 될 작품이에요!</S.SubText>
        <S.ButtonWrapper>
          <S.Button checked={true} onClick={onClickDelete}>
            네 삭제할게요
          </S.Button>
          <S.Button checked={false} onClick={onClickHold}>
            조금 더 생각해볼게요
          </S.Button>
        </S.ButtonWrapper>
      </S.ManageDeleteAllContainer>
    </S.ModalWrapper>
  );
}

export default ManageDeleteContainer
