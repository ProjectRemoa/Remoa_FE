import React from 'react'
import S from "./Category_.styles"
import { pageLinks } from './constants'

function Category_({ onClickCategory, checkedArr }) {
  return (
    <S.CategoryBox>
      {pageLinks.map((data, index) => (
        <S.Category
          onClick={() => {
            onClickCategory(data.keyword);
          }}
          checked={checkedArr[index]}
        >
          {data.text}
        </S.Category>
      ))}
    </S.CategoryBox>
  );
}

export default Category_
