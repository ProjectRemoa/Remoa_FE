import styled from "styled-components";

const Wrapper = styled.div`
  width: 684px;
  height: 51px;
  border-radius: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 43px;
  background-color: #f7f6f5;
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
  font-size: 16px;
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 15px;
  }

  a {
    text-decoration: none;
    &.active {
      font-weight: 700;
    }
  }

  a:active,
  a:visited {
    color: inherit;
  }
`;

const styledComponent = { Wrapper, Sort };

export default styledComponent;
