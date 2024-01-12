import styled from "styled-components";

const CommentContainer = styled.div`
  font-weight: 700;
  font-size: 25px;
  text-align: left;
`;

const CommentListContainer = styled.div`
  width: 100%;
`;

const NullData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 86px;
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

const styledComponent = {
  CommentContainer,
  CommentListContainer,
  NullData,
  MoreSearch,
  MoreButtonContainer,
  MoreButton,
};

export default styledComponent;
