import styled from 'styled-components';

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86vw;
  margin: 0 auto;
`;

const Title = styled.div`
  display: inline-flex;
  justify-self: center;
  width: fit-content;
  font-family: 'Noto Sans KR';
  font-weight: 500;
  font-size: 18px;
`;

const SearchBar = styled.div`
  display: flex;
  gap: 0 4px;
  width: 469px;
  height: 39px;
  margin-top: 14px;
`;

const SearchInput = styled.input`
  width: 384px;
  height: 39px;
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #b0b0b0;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  padding-left: 20px;
`;

const SearchButton = styled.button`
  // (index.css) reset.css 추가할 내용
  margin: 0;
  padding: 0;
  border: 0;
  width: auto;
  border-radius: 0;
  box-shadow: none;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 39px;
  background: #fada5e;
  border: 1px solid #fada5e;

  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  cursor: pointer;
`;

const StyledComponents = {
  SearchDiv,
  Title,
  SearchInput,
  SearchButton,
  SearchBar,
};

export default StyledComponents;
