import styled from "styled-components";

const Wrapper = styled.div`
  width: 65vw;
  display: flex;
  flex-direction: column;
  margin: 61px 0 55px;
`;

const CommentContainer = styled.div`
  font-weight: 700;
  font-size: 25px;
  text-align: left;
`;

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 54px;
`;

const MoreButton = styled.button`
  width: 160px;
  height: 48px;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  color: #464646;
  background-color: transparent;
  font-size: 16px;
  font-family: Pretendard-SemiBold;
  &:hover {
    background-color: #e1e2e5;
  }
`;

const ScrapContainer = styled.div`
  width: 100%;
  font-size: 25px;
  font-weight: 700;
  text-align: left;
  margin-top: 96px;
`;
const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CategoryButton = styled.button`
  width: 15.8%;
  height: 44px;
  border: 1px solid #cecece;
  border-radius: 10px;
  background-color: ${(props) => (props.clicked ? "#fada5e" : "transparent")};
  &:hover {
    background-color: ${(props) => (props.clicked ? "#dfb71c" : "#cecece")};
  }
`;
const ScrapListContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px 24px;
  margin-top: 40px;
`;

const ScrapButton = styled.button`
  width: 80px;
  height: 24px;
  font-family: Pretendard-Medium;
  font-size: 12px;
  border: 1px solid #e1e2e5;
  border-radius: 8px;
  background-color: transparent;
  &:hover {
    background-color: #a7a7a7;
  }
`;

const styledComponent = {
  Wrapper,
  CommentContainer,
  MoreButtonContainer,
  MoreButton,
  ScrapContainer,
  CategoryContainer,
  CategoryButton,
  ScrapListContainer,
  ScrapButton,
};

export default styledComponent;
