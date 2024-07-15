import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "react-query";
import { getComment } from "../../../apis/mypage/comment";
import CommentContainerComponent from "../../../components/common/CommentContainerComponent";
import Dropdown from "../../../components/common/Dropdown";
import Loading from "../../../styles/Loading";
import styledComponent from "./MyPageFeedback.styles";
const {
  Wrapper,
  CommentContainer,
  HorizonLine,
  CommentListContainer,
  NullData,
  MoreSearch,
} = styledComponent;

const filterOptions = [
  {
    key: "desc",
    value: "최신순",
  },
  {
    key: "asc",
    value: "오래된순",
  },
];

function MyPageFeedback() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState(filterOptions[0].value); // 필터 값 (한글)
  const [sortOption, setSortOption] = useState(filterOptions[0].key); // 필터 값 (영어)
  const { data, isLoading } = useQuery(
    ["comment", page, sortOption],
    () => getComment(page, sortOption),
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
            <HorizonLine />
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
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <span style={{ fontSize: "15px", fontWeight: 500 }}>
                      총 {data.contents.length}개
                    </span>
                    <Dropdown
                      filter={filter}
                      setFilter={setFilter}
                      filterOptions={filterOptions}
                      setSortOption={setSortOption}
                    />
                  </div>
                  <CommentContainerComponent
                    data={data.contents}
                    setPage={setPage}
                    totalPages={data.totalPages}
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
