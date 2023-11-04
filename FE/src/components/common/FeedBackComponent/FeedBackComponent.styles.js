import styled from "styled-components";

const Wrapper = styled.div``;

const NullData = styled.div`
  text-align: center;
  font-size: 35px;
`;

const ContentsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 19px;
`;

const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 264px;
  height: 150px;
`;

const Button = styled.button`
  background-color: #fada5e;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  width: 264px;
  height: 27px;
  margin-top: 7px;
`;

const SectionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-left: 13px;
`;

const Title = styled.div`
  text-align: left;
  font-size: 23px;
  font-weight: 500;
  margin-bottom: 9px;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #fada5e;
  border-radius: 10px;
  padding: 20px 31px;
`;

const CommentsContainer = styled.div`
  width: 100%;
  height: 35%;
`;

const MyCommentTitle = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: 700;
`;

const OneComment = styled.div`
  text-align: left;
  font-size: 15px;
  font-weight: 400;
`;

const ProfileContainer = styled.div`
  display: flex;
  margin-top: 24px;
`;

const ProfileImg = styled.img`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 12px;
`;

const ProfileContents = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  font-weight: 700;
`;

const ProfileNickname = styled.div`
  text-align: left;
  font-size: 18px;
`;

const LikeCount = styled.span`
  margin-left: 23px;
`;

const MyComment = styled.div`
  text-align: left;
  font-size: 16px;
  margin-top: 4px;
`;

const MoreButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 26px;
`;

const MoreButton = styled.button`
  width: 12%;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  color: #464646;
  font-size: 78%;
  background: #fada5e;
  font-family: NotoSansKR-700;
`;

const styledComponent = {
  Wrapper,
  NullData,
  ContentsContainer,
  AsideContainer,
  Img,
  Button,
  SectionContainer,
  Title,
  Contents,
  CommentsContainer,
  MyCommentTitle,
  OneComment,
  ProfileContainer,
  ProfileImg,
  ProfileContents,
  ProfileNickname,
  LikeCount,
  MyComment,
  MoreButtonContainer,
  MoreButton,
};

export default styledComponent;
