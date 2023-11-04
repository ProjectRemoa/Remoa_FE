import React from 'react'
import { filterOptions } from '../../../containers/reference/constants'
import S from "./Filter.styles"


function Filter() {
  return (
    <S.FilterBox>
      <ul>{filterOptions.map((option, index) => {
        return (
          <li>{option.value}</li>
          )
        })}
        </ul>
    </S.FilterBox>
  );
}

export default Filter
