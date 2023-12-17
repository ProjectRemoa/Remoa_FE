import { useState } from "react";
import RefModal from "../../../containers/modal/RefModalPages/RefModal";
import styledComponent from "./CommentContainerComponent.styles";
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
  MyPaginate,
} = styledComponent;

function CommentContainerComponent({ data, setPage, totalPages }) {
  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");

  const onClickModal = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };

  return (
    <>
      {data.map((data) => (
        <ContentsContainer key={data.postId}>
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
                  <ProfileNickname>{data.member?.nickname}</ProfileNickname>
                  <MyComment>{data.content}</MyComment>
                </ProfileContents>
              </ProfileContainer>
            </Contents>
          </SectionContainer>
        </ContentsContainer>
      ))}
      <MyPaginate
        pageCount={totalPages}
        previousLabel="<"
        nextLabel=">"
        onPageChange={(e) => setPage(e.selected + 1)}
      />
      {modalVisibleId !== "" && (
        <RefModal
          id2={postId}
          modalVisibleId2={modalVisibleId}
          setModalVisibleId2={setModalVisibleId}
        />
      )}
    </>
  );
}

export default CommentContainerComponent;
