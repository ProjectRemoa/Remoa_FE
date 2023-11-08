import styled from "styled-components";

const SearchWrapper = styled.div`
  width: 100%;
  height: 48px;
  position: relative;
  margin-top: 25px;
`;
const SearchInput = styled.input`
  box-sizing: border-box;
  padding: 16px 32px;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #464646;
  border-radius: 40px;
  &::placeholder {
    vertical-align: middle;
    font-size: 14px;
    font-weight: 500;
  }
`;
const SearchIcon = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 60%;
  right: 32px;
  transform: translateY(-50%);
  cursor: pointer;

  svg {
    width: 20.48px;
    height: 20.48px;
  }
`;

const styledComponent = {
  SearchWrapper,
  SearchInput,
  SearchIcon,
};

export default styledComponent;
