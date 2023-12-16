import styled from 'styled-components'

const Wrapper = styled.div`
  width: 65vw;
  margin: 61px 0 55px;
`;

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

const ContentsContainer = styled.div`
  display: flex;
  align-items: end;
  margin-top: 40px;
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 297px;
  height: 167px;
  border-radius: 8px;
  border: 1px solid #e1e2e5;
`;

const Button = styled.button`
  width: 146px;
  height: 40px;
  background-color: #fada5e;
  border: none;
  border-radius: 8px;
  font-family: Pretendard-Medium;
  font-size: 13px;
  &:hover {
    background-color: #dfb71c;
  }
`;

const SectionContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 24px;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;

const HorizonLine = styled.hr`
  height: 1px;
  background: #e7e7e7;
  border: 0;
`;
const Contents = styled.div`
  /* display: flex;
  flex-direction: column; */
`;

const CommentsContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const MyCommentTitle = styled.div`
  font-size: 18px;
`;

const OneComment = styled.div`
  font-size: 14px;
  font-family: Pretendard-SemiBold;
  color: #727272;
  margin-left: 12px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  height: 104px;
  box-sizing: border-box;
  padding: 28px 24px;
  border: none;
  border-radius: 12px;
  background-color: #f7f6f5;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const ProfileContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 12px;
  font-size: 16px;
`;

const ProfileNickname = styled.div`
  font-weight: 700;
`;

const MyComment = styled.div`
  font-weight: 500;
  color: #464646;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9.75px;
`;

export const styledComponent = {
  Wrapper,
  CommentContainer,
  CommentListContainer,
  NullData,
  MoreSearch,
  ContentsContainer,
  AsideContainer,
  Img,
  Button,
  SectionContainer,
  Title,
  HorizonLine,
  Contents,
  CommentsContainer,
  MyCommentTitle,
  OneComment,
  ProfileContainer,
  ProfileImg,
  ProfileContents,
  ProfileNickname,
  MyComment,
  ButtonBox,
};
