import React from 'react'
import { styledComponent } from "./CommentContainer.styles";

const {
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
} = styledComponent;

function CommentContainer({ data, onClickViewer, onClickFeedback }) {
  return (
    <ContentsContainer key={data.postId}>
      <AsideContainer>
        <Img src={data.thumbnail} alt="thumbnail" />
        <ButtonBox>
          <Button
            onClick={() => {
              onClickViewer(data.postId);
            }}
          >
            작업물 뷰어 보기
          </Button>
          <Button
            onClick={() => {
              onClickFeedback(data.postId);
            }}
          >
            내 피드백 바로가기
          </Button>
        </ButtonBox>
      </AsideContainer>
      <SectionContainer>
        <Title>{data.title}</Title>
        <HorizonLine />
        <Contents>
          <CommentsContainer>
            <MyCommentTitle>내가 받은 코멘트</MyCommentTitle>
            <OneComment>가장 먼저 작성된 코멘트 1개만 노출됩니다</OneComment>
          </CommentsContainer>
          <ProfileContainer>
            <ProfileImg src={data.member?.profileImage} alt="" />
            <ProfileContents>
              <ProfileNickname>{data.member?.nickname}</ProfileNickname>
              <MyComment>{data.content}</MyComment>
            </ProfileContents>
          </ProfileContainer>
        </Contents>
      </SectionContainer>
    </ContentsContainer>
  );
}

export default CommentContainer
