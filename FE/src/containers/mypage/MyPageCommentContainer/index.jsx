import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { getOneComment } from "../../../apis/mypage/comment";
import Loading from "../../../styles/Loading";
import styledComponent from "./MyPageCommentContainer.styles";
import CommentContainerComponent from "../../../components/common/CommentContainerComponent";
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
  const { data, isLoading } = useQuery(["comment"], getOneComment);
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
                <CommentContainerComponent data={data} />
                <MoreButtonContainer>
                  <MoreButton onClick={() => navigate("/mypage/myfeedback")}>
                    더 보기 &gt;
                  </MoreButton>
                </MoreButtonContainer>
              </>
            )}
          </CommentListContainer>
        </CommentContainer>
      )}
    </>
  );
}

export default MyPageCommentContainer;
