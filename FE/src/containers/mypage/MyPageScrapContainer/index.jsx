import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getScrap } from "../../../apis/mypage/scrap";
import Loading from "../../../styles/Loading";
import RefCard from "../../reference/RefCard";
import RefModal from "../../modal/RefModalPages/RefModal";
import Category from "../../../components/common/Category";
import styledComponent from "./MyPageScrapContainer.styles";
const {
  ScrapContainer,
  MoreSearch,
  ScrapListContainer,
  MoreButtonContainer,
  MoreButton,
  MyPaginate,
} = styledComponent;

function MyPageScrapContainer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [scrapPage, setScrapPage] = useState(1);
  const [checkIdx, setCheckIdx] = useState(0);
  const [scrapData, setScrapData] = useState([]);
  const [categoryName, setCategoryName] = useState("all");

  const { data, isLoading } = useQuery(["categoryName"], () =>
    getScrap(scrapPage, categoryName)
  );

  // if (!isLoading) console.log(data.posts);
  // console.log(scrapData);

  useEffect(() => {
    modalLocation();
    console.log(isLoading);
    if (!isLoading) {
      console.log(data.posts);
      console.log(categoryName);
      setScrapData(data.posts);
    }
  }, [data, categoryName]);

  const handleCategoryClick = (category) => {
    setCategoryName(category);
    switch (category) {
      case "all":
        setCheckIdx(0);
        break;
      case "idea":
        setCheckIdx(1);
        break;
      case "marketing":
        setCheckIdx(2);
        break;
      case "video":
        setCheckIdx(3);
        break;
      case "design":
        setCheckIdx(4);
        break;
      case "digital":
        setCheckIdx(5);
        break;
      case "etc":
        setCheckIdx(6);
        break;

      default:
        break;
    }
  };

  //////////////////////////////////////////////
  const [isRefModal, setIsRefModal] = useState(); // TODO : 모달 리팩토링 후 boolean으로 수정
  const [selectedData, setSelectedData] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  function modalLocation(i) {
    if (window.innerWidth <= 1023) {
      if (i % 2 === 0) {
        return 2;
      } else return 0;
    } else if (window.innerWidth <= 1439) {
      if (i % 3 === 0) {
        return 3;
      } else return 0;
    } else {
      if (i % 4 === 0) {
        return 4;
      } else return 0;
    }
  }

  const handleSelectData = (data) => {
    setSelectedData(data);
    setIsRefModal(data.postId); // TODO : boolean으로 수정하면 해당 라인 삭제
  };

  const handleProfileModal = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ScrapContainer>
          <span
            style={{
              display: "block",
              marginBottom: "40px",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            스크랩한 작업물
          </span>

          <div style={{ width: "100%" }}>
            <Category
              main={false}
              onClickCategory={handleCategoryClick}
              checkIdx={checkIdx}
            />

            <hr />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span
                style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}
              >
                총 {scrapData.length}개
              </span>
            </div>
            {scrapData.length === 0 ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "40px",
                }}
              >
                <span
                  style={{
                    fontSize: "22px",
                    fontFamily: "Pretendard-SemiBold",
                  }}
                >
                  아직 스크랩한 작업물이 없어요
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
              </div>
            ) : (
              <>
                <ScrapListContainer>
                  {scrapData.map((scrapData, index) => (
                    <RefCard
                      key={scrapData.postId}
                      data={scrapData}
                      location={modalLocation(index + 1)}
                      selectedPostId={selectedPostId}
                      onSelectedData={handleSelectData}
                      onProfileModal={handleProfileModal}
                    />
                  ))}
                </ScrapListContainer>
                {id === "work" ? (
                  <MoreButtonContainer>
                    <MoreButton onClick={() => navigate("/mypage/scrap")}>
                      더 보기 &gt;
                    </MoreButton>
                  </MoreButtonContainer>
                ) : (
                  <MyPaginate
                    pageCount={scrapData?.totalPages}
                    previousLabel="<"
                    nextLabel=">"
                    onPageChange={(e) => setScrapPage(e.selected + 1)}
                  />
                )}
              </>
            )}
          </div>
          {selectedData && isRefModal !== "" && (
            <RefModal
              id2={selectedData.postId}
              setData={selectedData}
              setModalVisibleId2={setIsRefModal}
            />
          )}
        </ScrapContainer>
      )}
    </>
  );
}

export default MyPageScrapContainer;
