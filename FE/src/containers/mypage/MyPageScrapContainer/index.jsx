import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RefCard from "../../reference/RefCard";
import RefModal from "../../modal/RefModalPages/RefModal";
import styledComponent from "./MyPageScrapContainer.styles";
const {
  ScrapContainer,
  CategoryContainer,
  CategoryButton,
  MoreSearch,
  ScrapListContainer,
  MoreButtonContainer,
  MoreButton,
  MyPaginate,
} = styledComponent;

const categoryButtons = [
  "전체",
  "기획/아이디어",
  "광고/마케팅",
  "영상",
  "디자인/사진",
  "기타아이디어",
];

function MyPageScrapContainer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [scrapData, setScrapData] = useState([]);
  const [clicked, setClicked] = useState(0);
  const [categoryName, setCategoryName] = useState("전체");

  useEffect(() => {
    // 스크랩한 작업물 1페이지
    axios.get(`/BE/user/scrap?page=${1}`).then((res) => {
      setScrapData(res.data.data.posts);
    });
    modalLocation();
  }, []);

  const handleCategoryClick = (category) => {
    setCategoryName(category);
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
    <ScrapContainer>
      <span style={{ display: "block", marginBottom: "40px" }}>
        스크랩한 작업물
      </span>

      <div style={{ width: "100%" }}>
        <CategoryContainer>
          {categoryButtons.map((data, i) => (
            <CategoryButton
              key={i}
              onClick={() => {
                handleCategoryClick(data);
                setClicked(i);
              }}
              clicked={clicked === i}
            >
              {data}
            </CategoryButton>
          ))}
        </CategoryContainer>

        <hr />

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "Pretendard-Medium", fontSize: "15px" }}>
            총 {scrapData.length}개
          </span>
          <span style={{ fontSize: "15px" }}>최신순</span>
        </div>
        {!scrapData.length ? (
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
              style={{ fontSize: "22px", fontFamily: "Pretendard-SemiBold" }}
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
              <MyPaginate previousLabel="<" nextLabel=">" />
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
  );
}

export default MyPageScrapContainer;
