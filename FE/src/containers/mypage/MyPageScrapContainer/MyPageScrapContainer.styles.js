import styled from "styled-components";

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

const MoreSearch = styled.button`
  width: 236px;
  height: 48px;
  margin-top: 46px;
  background-color: #fada5e;
  border: none;
  border-radius: 50px;
  font-family: Pretendard-SemiBold;
  &:hover {
    background-color: #dfb71c;
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
  ScrapContainer,
  CategoryContainer,
  CategoryButton,
  MoreSearch,
  ScrapListContainer,
  ScrapButton,
};

export default styledComponent;
