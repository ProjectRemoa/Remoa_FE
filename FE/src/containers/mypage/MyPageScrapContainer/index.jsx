import { useEffect, useState } from "react";
import axios from "axios";
import styledComponent from "./MyPageScrapContainer.styles";

const {
  ScrapContainer,
  CategoryContainer,
  CategoryButton,
  MoreSearch,
  ScrapListContainer,
  ScrapButton,
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
  const [scrapData, setScrapData] = useState([]);
  const [clicked, setClicked] = useState(0);

  const [categoryName, setCategoryName] = useState("전체");

  useEffect(() => {
    // 스크랩한 작업물 1페이지
    axios.get(`/BE/user/scrap?page=${1}`).then((res) => {
      setScrapData(res.data.data.posts);
      console.log(res.data.data.posts);
    });
  }, []);

  const handleCategoryClick = (category) => {
    setCategoryName(category);
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
        {scrapData.length > 0 ? (
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
          <ScrapListContainer>
            {scrapData
              .filter(
                (data) =>
                  categoryName === "전체" || data.categoryName === categoryName
              )
              .map((data) => {
                return (
                  <div key={data.postId}>
                    <img
                      src={data.thumbnail}
                      alt=""
                      style={{
                        width: "100%",
                        height: "164px",
                        border: "1px solid #e1e2e5",
                        borderRadius: "8px",
                      }}
                    />
                    <span style={{ display: "block", marginTop: "16px" }}>
                      {data.title}
                    </span>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginTop: "12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <img
                          src={data.postMember.profileImage}
                          alt=""
                          style={{
                            width: "24px",
                            height: "24px",
                            borderRadius: "50%",
                          }}
                        />
                        <span style={{ fontSize: "14px", marginLeft: "8px" }}>
                          {data.postMember.nickname}
                        </span>
                      </div>
                      <ScrapButton>스크랩 해제</ScrapButton>
                    </div>
                  </div>
                );
              })}
          </ScrapListContainer>
        )}
      </div>
    </ScrapContainer>
  );
}

export default MyPageScrapContainer;
