import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styledComponent from "./FeedBackComponent.styles";
const {
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
} = styledComponent;

function FeedBackComponent() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");
  const [allPage, setAllPage] = useState([]);
  const [allComments, setAllComments] = useState(0);

  useEffect(() => {
    axios
      .get(`/BE/user/comment?page=${1}`)
      .then((res) => {
        setData(...res.data.data.contents);
        setAllPage(Array.from({ length: res.data.data.totalPages }));
        setAllComments(res.data.data.totalOfAllComments);
      })
      .catch((res) => {
        console.log("error");
      });
  }, []);

  const onClickModal = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };

  const onClickMoreFeedback = () => {
    navigate("/mypage/myfeedback");
  };

  return (
    <Wrapper>
      {allPage.length === 0 ? (
        <NullData>공유 자료가 없어요.</NullData>
      ) : (
        <ContentsContainer>
          <AsideContainer>
            <Img src={data.thumbnail} alt="" />
            <Button
              onClick={() => {
                onClickModal(data.postId);
              }}
            >
              작업물 뷰어 보기
            </Button>
            <Button
              onClick={() => {
                onClickModal(data.postId);
              }}
            >
              상세 피드백
            </Button>
          </AsideContainer>
          <SectionContainer>
            <Title>{data.title}</Title>
            <Contents>
              <CommentsContainer>
                <MyCommentTitle>내가 작성한 코멘트</MyCommentTitle>
                <OneComment>가장 먼저 작성된 코멘트 1개만 보입니다.</OneComment>
              </CommentsContainer>
              <ProfileContainer>
                <ProfileImg src={data.member.profileImage} alt="" />
                <ProfileContents>
                  <ProfileNickname>
                    {data.member.nickname}
                    <LikeCount>👍 {data.likeCount}</LikeCount>
                  </ProfileNickname>
                  <MyComment>{data.content}</MyComment>
                </ProfileContents>
              </ProfileContainer>
            </Contents>
          </SectionContainer>
        </ContentsContainer>
      )}
      {allComments && (
        <MoreButtonContainer>
          <MoreButton onClick={onClickMoreFeedback}>더보기 &gt;</MoreButton>
        </MoreButtonContainer>
      )}
    </Wrapper>
  );
}

export default FeedBackComponent;
