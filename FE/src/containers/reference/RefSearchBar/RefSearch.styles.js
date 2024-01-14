import styled from 'styled-components';

const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1260px;
  margin: 68px auto 0;
`;

const Title = styled.div`
  display: inline-flex;
  justify-self: center;
  width: fit-content;
  font-family: 'Noto Sans KR';
  font-weight: 500;
  font-size: 44px;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0 4px;
  width: 100%;
  max-width: 692px;
  height: 58px;
  margin-top: 28px;
  padding: 17px 30px 17px 32px;
  border-radius: 40px;
  border: 2px solid #464646;
  box-sizing: border-box;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: #ffffff;
  font-size: 16px;

  // (index.css) reset.css 추가할 내용
  border: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;

  &::placeholder {
    font-size: 16px;
  }
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
  cursor: pointer;

  svg {
    width: 24px;
    height: 24px;
    fill: #a7a7a7;
  }
`;

const StyledComponents = {
  SearchDiv,
  Title,
  SearchInput,
  SearchButton,
  SearchBar,
};

export default StyledComponents;
