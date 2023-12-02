import React from 'react'
import { filterOptions } from '../../../containers/reference/constants'
import S from "./Dropdown.styles"
import arrow from "../../../images/arrow.svg";
import { useState } from 'react';

function Dropdown(props) {
  /**
   * filter : filterOptions의 value 값
   * setFilter : filter값 변경
   * setSortOption : filterOptions의 key값으로 변경
   */

  const [showDropdown, setShowDropdown] = useState(false);

  const onClickDropdown = () => {
    setShowDropdown(!showDropdown);
  }
  
  return (
    <S.DropdownContainer onClick={onClickDropdown}>
      <S.CurrentFilter>{props.filter}</S.CurrentFilter>
      <S.BottomArrow src={arrow} alt="arrow" />
      {showDropdown && (
        <S.DropDownPosition>
          {filterOptions.map((option, index) => (
            <S.DropdownItem onClick={() => {
              props.setFilter(option.value);
              props.setSortOption(option.key);
            }}
              style={{ fontWeight: option.value === props.filter && '700', color: option.value === props.filter && 'black' }}>
              {option.value}
            </S.DropdownItem>
          ))}
        </S.DropDownPosition>
      )}
    </S.DropdownContainer>
  );
}

export default Dropdown;
