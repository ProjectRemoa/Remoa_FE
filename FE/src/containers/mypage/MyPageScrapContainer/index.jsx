import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styledComponent from "./MyPageScrapContainer.styles";
import styled from "styled-components";
import RefCard from "../../reference/RefCard";
import RefModal from "../../modal/RefModalPages/RefModal";
const {
  ScrapContainer,
  CategoryContainer,
  CategoryButton,
  MoreSearch,
  ScrapListContainer,
  ScrapButton,
  MoreButtonContainer,
  MoreButton,
} = styledComponent;

const RefList = styled.div`
  display: grid;
  gap: 20px 26px;
  grid-template-columns: repeat(auto-fill, minmax(291px, 1fr));
  margin-top: 20px;
`;

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
  const [category, setCategory] = useState(""); // 카테고리
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
    if (category.path === "/") {
      navigate(`/${data.postId}`);
    } else {
      navigate(`${category.path}/${data.postId}`);
    }
  };

  const handleProfileModal = (postId) => {
    setSelectedPostId(postId);
    console.log(selectedPostId);
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
          <span>총 몇개</span>
          <span>최신순</span>
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
            <MoreSearch>지금 탐색하러 가기</MoreSearch>
          </div>
        ) : (
          // <>
          //   <ScrapListContainer>
          //     {scrapData
          //       .filter(
          //         (data) =>
          //           categoryName === "전체" ||
          //           data.categoryName === categoryName
          //       )
          //       .map((data) => {
          //         return (
          //           <div key={data.postId}>
          //             <img
          //               src={data.thumbnail}
          //               alt=""
          //               style={{
          //                 width: "100%",
          //                 height: "164px",
          //                 border: "1px solid #e1e2e5",
          //                 borderRadius: "8px",
          //               }}
          //             />
          //             <span style={{ display: "block", marginTop: "16px" }}>
          //               {data.title}
          //             </span>
          //             <div
          //               style={{
          //                 display: "flex",
          //                 justifyContent: "space-between",
          //                 alignItems: "center",
          //                 marginTop: "12px",
          //               }}
          //             >
          //               <div style={{ display: "flex", alignItems: "center" }}>
          //                 <img
          //                   src={data.postMember.profileImage}
          //                   alt=""
          //                   style={{
          //                     width: "24px",
          //                     height: "24px",
          //                     borderRadius: "50%",
          //                   }}
          //                 />
          //                 <span style={{ fontSize: "14px", marginLeft: "8px" }}>
          //                   {data.postMember.nickname}
          //                 </span>
          //               </div>
          //               <ScrapButton>스크랩 해제</ScrapButton>
          //             </div>
          //           </div>
          //         );
          //       })}
          //   </ScrapListContainer>
          //   <MoreButtonContainer>
          //     <MoreButton onClick={() => navigate("/mypage/scrap")}>
          //       더 보기 &gt;
          //     </MoreButton>
          //   </MoreButtonContainer>
          // </>
          <RefList>
            {scrapData.map((reference, index) => (
              <RefCard
                key={reference.postId}
                data={reference}
                location={modalLocation(index + 1)}
                selectedPostId={selectedPostId}
                onSelectedData={handleSelectData}
                onProfileModal={handleProfileModal}
              />
            ))}
          </RefList>
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
