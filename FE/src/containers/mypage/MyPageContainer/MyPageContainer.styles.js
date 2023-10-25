import styled from "styled-components";

const UnderHeader = styled.div`
  border: 1px solid #b0b0b0;
  border-radius: 20px;
  width: 891px;
  height: 59px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 44px;
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
  font-weight: 500;
  font-size: 18px;
  line-height: 21.48px;
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
  a:active,
  a:visited {
    color: inherit;
  }
`;

const PageStyle = styled.div`
  font-weight: 700;
`;

const styledComponent = { UnderHeader, Sort, PageStyle };

export default styledComponent;
