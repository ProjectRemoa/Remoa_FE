import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RefModal from "../../modal/RefModalPages/RefModal";
import styledComponent from "./MyPageFeedback.styles";
const {
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
  MyPaginate,
} = styledComponent;

function MyPageFeedback(props) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");

  useEffect(() => {
    axios
      .get(`/BE/user/comment?page=${page}`)
      .then((res) => {
        setData(res.data.data.contents);
        setTotalPage(res.data.data.totalPages);
      })
      .catch((res) => {
        console.log("error");
      });
  }, [page]);

  const onClickModal = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };

  return (
    <Wrapper>
      <CommentContainer>
        코멘트 및 피드백을 단 작업물
        <CommentListContainer>
          {totalPage === 0 ? (
            <NullData>
              <span
                style={{ fontSize: "22px", fontFamily: "Pretendard-SemiBold" }}
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
                          <ProfileNickname>
                            {data.member?.nickname}
                          </ProfileNickname>
                          <MyComment>{data.content}</MyComment>
                        </ProfileContents>
                      </ProfileContainer>
                    </Contents>
                  </SectionContainer>
                </ContentsContainer>
              ))}
              <MyPaginate
                pageCount={totalPage}
                previousLabel="<"
                nextLabel=">"
                onPageChange={(e) => setPage(e.selected + 1)}
              />
            </>
          )}
        </CommentListContainer>
      </CommentContainer>

      {modalVisibleId !== "" && (
        <RefModal
          id2={postId}
          modalVisibleId2={modalVisibleId}
          setModalVisibleId2={setModalVisibleId}
        />
      )}
    </Wrapper>
  );
}

export default MyPageFeedback;
