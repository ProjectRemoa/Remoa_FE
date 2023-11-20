import React, {  useState } from "react";
import S from "./ManageFeedbackContainer.styles"


function ManageFeedbackContainer() {
  const [checkIdx, setCheckIdx] = useState([1, 0, 0, 0, 0, 0]);
  const [categoryName, setCategoryName] = useState("all");

  const onChangeCategory = (category) => {
    setCategoryName(category);
    if (category === "all") setCheckIdx([1, 0, 0, 0, 0, 0]);
    if (category === "idea") setCheckIdx([0, 1, 0, 0, 0, 0]);
    if (category === "marketing") setCheckIdx([0, 0, 1, 0, 0, 0]);
    if (category === "video") setCheckIdx([0, 0, 0, 1, 0, 0]);
    if (category === "design") setCheckIdx([0, 0, 0, 0, 1, 0]);
    if (category === "etc") setCheckIdx([0, 0, 0, 0, 0, 1]);

  };

  return (
    <S.ManageListContainer>
      <S.CategoryBox>
        <S.Category
          onClick={() => onChangeCategory("all")}
          checked={checkIdx[0]}
        >
          <S.CategoryText>전체</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("idea")}
          checked={checkIdx[1]}
        >
          <S.CategoryText>기획/아이디어</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("marketing")}
          checked={checkIdx[2]}
        >
          <S.CategoryText>광고/마케팅</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("video")}
          checked={checkIdx[3]}
        >
          <S.CategoryText>영상</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("design")}
          checked={checkIdx[4]}
        >
          <S.CategoryText>디자인/사진</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("etc")}
          checked={checkIdx[5]}
        >
          <S.CategoryText>기타아이디어</S.CategoryText>
        </S.Category>
      </S.CategoryBox>
    </S.ManageListContainer>
  );
}

export default ManageFeedbackContainer;