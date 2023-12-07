import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getComment } from "../../../apis/mypage/comment";
import RefModal from "../../modal/RefModalPages/RefModal";
import Loading from "../../../styles/Loading";
import styledComponent from "./MyPageCommentContainer.styles";
const {
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
  MoreButtonContainer,
  MoreButton,
} = styledComponent;

function MyPageCommentContainer() {
  const navigate = useNavigate();
  const { data, isLoading } = useQuery(["comment"], getComment);
  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");

  const onClickModal = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <CommentContainer>
          코멘트 및 피드백을 단 작업물
          <CommentListContainer>
            {!data ? (
              <NullData>
                <span
                  style={{
                    fontSize: "22px",
                    fontFamily: "Pretendard-SemiBold",
                  }}
                >
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
                <MoreSearch onClick={() => navigate("/")}>
                  지금 탐색하러 가기
                </MoreSearch>
              </NullData>
            ) : (
              <>
                <ContentsContainer>
                  <AsideContainer>
                    <Img src={data.thumbnail} alt="thumbnail" />
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
                    <Title>{data.title}</Title>
                    <HorizonLine />
                    <Contents>
                      <CommentsContainer>
                        <MyCommentTitle>내가 작성한 코멘트</MyCommentTitle>
                        <OneComment>
                          가장 먼저 작성한 코멘트 1개만 노출됩니다
                        </OneComment>
                      </CommentsContainer>
                      <ProfileContainer>
                        <ProfileImg src={data.member?.profileImage} alt="" />
                        <ProfileContents>
                          <ProfileNickname>
                            {data.member?.nickname}
                          </ProfileNickname>
                          <MyComment>{data.content}</MyComment>
                        </ProfileContents>
                      </ProfileContainer>
                    </Contents>
                  </SectionContainer>
                </ContentsContainer>
                <MoreButtonContainer>
                  <MoreButton onClick={() => navigate("/mypage/myfeedback")}>
                    더 보기 &gt;
                  </MoreButton>
                </MoreButtonContainer>
              </>
            )}
          </CommentListContainer>
          {modalVisibleId !== "" && (
            <RefModal
              id2={postId}
              modalVisibleId2={modalVisibleId}
              setModalVisibleId2={setModalVisibleId}
            />
          )}
        </CommentContainer>
      )}
    </>
  );
}

export default MyPageCommentContainer;
