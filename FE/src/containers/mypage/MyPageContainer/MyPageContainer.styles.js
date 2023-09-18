import styled from "styled-components";
const UnderHeader = styled.div`
  box-sizing: border-box;
  position: absolute;
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  width: 803px;
  height: 59px;
  top: 90px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-around;
  @media ${(props) => props.theme.desktop} {
    width: 700px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 430px;
    padding-left: 15px;
    padding-right: 15px;
    height: 79px;
  }
`;
const Sort = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #464646;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }
  a {
    text-decoration: none;
  }
  a:active {
    color: inherit;
  }
`;
const PageStyle = styled.div`
  color: #fada5e;
`;

const S = { UnderHeader, Sort, PageStyle };

export default S;
