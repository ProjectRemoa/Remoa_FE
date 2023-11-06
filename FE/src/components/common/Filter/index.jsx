import React from 'react'
import { filterOptions } from '../../../containers/reference/constants'
import S from "./Filter.styles"
import arrow from "../../../images/arrow.svg";
import { useState } from 'react';
import { useEffect } from 'react';

function Filter() {
  const [filter, setFilter] = useState(1); // filter option
  const [isClicked, setisClicked] = useState(false);

  const onChangeFilter = () => {
    setisClicked(!isClicked);
  }

  useEffect(() => {
    console.log("isClicked : ", isClicked)
  },[isClicked])
  return (
    <S.FilterBox>
      <li>
        <div onClick={onChangeFilter}>
          최신순&nbsp;
          <img src={arrow} alt="arrow" />
        </div>
        <S.Filter state={isClicked}>
          {filterOptions.map((option, index) => {
            return (
              <li
                state={filter}
                onClick={() => {
                  setFilter(option.index);
                }}
              >
                <S.FilterEach>{option.value}</S.FilterEach>
              </li>
            );
          })}
        </S.Filter>
      </li>
    </S.FilterBox>
  );
}

export default Filter
