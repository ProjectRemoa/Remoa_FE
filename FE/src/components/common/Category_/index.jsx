import React from 'react'
import S from "./Category_.styles"
import { pageLinks } from './constants'

function Category_({ onClickCategory, checked }) {
  return (
    <S.CategoryBox>
      {pageLinks.map((data, index) => (
        <S.Category
          onClick={() => {
            onClickCategory(data.keyword);
          }}
          checked={index === checked}
        >
          {data.text}
        </S.Category>
      ))}
    </S.CategoryBox>
  );
}

export default Category_
