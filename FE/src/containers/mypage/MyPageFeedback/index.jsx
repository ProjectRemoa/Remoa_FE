import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { getComment } from "../../../apis/mypage/comment";
import CommentContainerComponent from "../../../components/common/CommentContainerComponent";
import Loading from "../../../styles/Loading";
import styledComponent from "./MyPageFeedback.styles";
const {
  Wrapper,
  CommentContainer,
  CommentListContainer,
  NullData,
  MoreSearch,
} = styledComponent;

function MyPageFeedback() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const { data, isLoading } = useQuery(
    ["comment", page],
    () => getComment(page),
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (page < data?.totalPages) {
      const nextPage = page + 1;
      queryClient.prefetchQuery(["nextPageComment", nextPage], () =>
        getComment(nextPage)
      );
    }
  }, [page, data?.totalPages, queryClient]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Wrapper>
          <CommentContainer>
            코멘트 및 피드백을 단 작업물
            <CommentListContainer>
              {!data.contents ? (
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
                  <CommentContainerComponent
                    data={data.contents}
                    setPage={setPage}
                    totalPages={data.totalPages}
                    isLoading={isLoading}
                  />
                </>
              )}
            </CommentListContainer>
          </CommentContainer>
        </Wrapper>
      )}
    </>
  );
}

export default MyPageFeedback;
