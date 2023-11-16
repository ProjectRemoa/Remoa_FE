import axios from "axios";
import { useEffect, useState } from "react";
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
} = styledComponent;

function FeedBackComponent() {
  const [data, setData] = useState({});
  const [allPage, setAllPage] = useState(0);
  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");

  const { thumbnail, title, member, content } = data;

  useEffect(() => {
    axios
      .get(`/BE/user/comment?page=${1}`)
      .then((res) => {
        setData(...res.data.data.contents);
        setAllPage(res.data.data.totalPages);
      })
      .catch((res) => {
        console.log(res);
      });
  }, []);

  const onClickModal = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };

  return (
    <Wrapper>
      {allPage === 0 ? (
        <NullData>
          <span style={{ fontSize: "22px", fontFamily: "Pretendard-SemiBold" }}>
            코멘트나 피드백을 단 작업물이 없어요
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "#727272",
              marginTop: "14px",
              fontWeight: "500",
            }}
          >
            새로운 작업물을 탐색하러 가볼까요?
          </span>
          <button
            style={{
              width: "236px",
              height: "48px",
              marginTop: "46px",
              backgroundColor: "#fada5e",
              border: "none",
              borderRadius: "50px",
              fontFamily: "Pretendard-SemiBold",
            }}
          >
            지금 탐색하러 가기
          </button>
        </NullData>
      ) : (
        <ContentsContainer>
          <AsideContainer>
            <Img src={thumbnail} alt="thumbnail" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "9.75px",
              }}
            >
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
                내 피드백 바로가기
              </Button>
            </div>
          </AsideContainer>

          <SectionContainer>
            <Title>{title}</Title>
            <HorizonLine />
            <Contents>
              <CommentsContainer>
                <MyCommentTitle>내가 작성한 코멘트</MyCommentTitle>
                <OneComment>
                  가장 먼저 작성한 코멘트 1개만 노출됩니다
                </OneComment>
              </CommentsContainer>
              <ProfileContainer>
                <ProfileImg src={member?.profileImage} alt="" />
                <ProfileContents>
                  <ProfileNickname>{member?.nickname}</ProfileNickname>
                  <MyComment>{content}</MyComment>
                </ProfileContents>
              </ProfileContainer>
            </Contents>
          </SectionContainer>
        </ContentsContainer>
      )}
    </Wrapper>
  );
}

export default FeedBackComponent;
