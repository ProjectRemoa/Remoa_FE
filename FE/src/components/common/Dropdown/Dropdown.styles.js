import styled from "styled-components"

const DropdownContainer = styled.div`
  background-color: #ffffff;
  cursor: pointer;
  width: 68px;
  color:#464646;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const BottomArrow = styled.img`
width: 10px;
`

const CurrentFilter = styled.div`
  font-size: 15px;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
`;

const DropDownPosition = styled.div`
  position: absolute;
  top: 25px;
  left: 0;
  width: 100%;
  overflow: hidden;
  background-color: white;
  z-index: 5;
  border: 1px solid #d5d5d5;;
  border-radius: 4px;
`;

const DropdownItem = styled.div`
  padding: 10px 0px;
  margin: 5px;
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  :hover {
    background-color: #f0f0f0;
    border-radius: 4px;
  }
  white-space: nowrap;
`;

const S = {
  DropdownContainer,
  BottomArrow,
  DropdownItem,
  CurrentFilter,
  DropDownPosition,
};

export default S;

