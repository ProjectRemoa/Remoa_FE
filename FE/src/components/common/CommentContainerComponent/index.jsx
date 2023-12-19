import { useState } from "react";
import RefModal from "../../../containers/modal/RefModalPages/RefModal";
import styledComponent from "./CommentContainerComponent.styles";
import DetailedFeedback from "../../../containers/modal/DetailedFeedbackPages/DetailedFeedback";
import axios from "axios";

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

function CommentContainerComponent({ data, setPage, totalPages, isFromManage }) {
  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");
  const [fbVisibleId, setFbVisibleId] = useState("");
  const [feedback, setFeedback] = useState();

  const onClickModal = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };
  const onClickPopupFeedback = (postId) => {
    setPostId(postId);
    setFbVisibleId(postId);
    let endpoint = `/BE/reference/${postId}`;

    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        console.log(response);
        
        const {
          data: {
            data: {
              feedbacks,
            },
          },
        } = response;
        
        setFeedback(feedbacks);
      } catch (err) {
        console.log(err);
        return err;
      }
    };

     fetchData();
  }
  

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
                  //if (isFromManage) {
                    onClickPopupFeedback(data.postId);
                  //}
                  //else onClickModal(data.postId);
                }}
              >
                {isFromManage === true ? (
                  <>상세 피드백 팝업</>
                ) : (
                  <>내 피드백 바로가기</>
                )}
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
      {fbVisibleId !== "" && (
        <DetailedFeedback
          id3={postId}
          modalVisibleId3={fbVisibleId}
          setModalVisibleId3={setFbVisibleId}
          numPages={1}
          media={data}
          link={data}
          feedbacks={feedback}
          setFeedback={setFeedback}
          isFromManage={true}
        />
      )}
    </>
  );
}

export default CommentContainerComponent;
