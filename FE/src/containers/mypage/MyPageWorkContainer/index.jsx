import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RefModal from "../../modal/RefModalPages/RefModal";
import FeedBackComponent from "../../../components/common/FeedBackComponent";
import MyPageScrapContainer from "../MyPageScrapContainer";
import styledComponent from "./MyPageWorkContainer.styles";
const {
  Wrapper,
  CommentContainer,
  MoreButtonContainer,
  MoreButton,
  ScrapContainer,
  CategoryContainer,
  CategoryButton,
  ScrapListContainer,
  ScrapButton,
} = styledComponent;

function MyPageWorkContainer() {
  const navigate = useNavigate();
  const [myFeedback, setMyFeedback] = useState("");
  const [myScrapCount, setMyScrapCount] = useState(0);
  const [scrapData, setScrapData] = useState([]);
  const [clicked, setClicked] = useState(0);
  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");

  const [categoryName, setCategoryName] = useState("전체");

  const categoryButtons = [
    "전체",
    "기획/아이디어",
    "광고/마케팅",
    "영상",
    "디자인/사진",
    "기타아이디어",
  ];

  useEffect(() => {
    axios
      .get("/BE/user/activity?comment=2&scrap=1")
      .then((res) => {
        setMyFeedback(res.data.data.content);
        setMyScrapCount(res.data.data.posts.length);
      })
      .catch((err) => {
        console.log("error");
      });
    // 스크랩한 작업물 1페이지
    axios.get(`/BE/user/scrap?page=${1}`).then((res) => {
      setScrapData(res.data.data.posts);
      console.log(res.data.data.posts);
    });
  }, []);

  const onClickMoreFeedback = () => {
    navigate("/mypage/myfeedback");
  };

  const handleCategoryClick = (category) => {
    setCategoryName(category);
  };

  return (
    <Wrapper>
      <CommentContainer>
        <span>코멘트 및 피드백을 단 작업물</span>
        <FeedBackComponent />
        <MoreButtonContainer>
          <MoreButton onClick={onClickMoreFeedback}>더 보기 &gt;</MoreButton>
        </MoreButtonContainer>
        {modalVisibleId !== "" && (
          <RefModal
            id2={postId}
            modalVisibleId2={modalVisibleId}
            setModalVisibleId2={setModalVisibleId}
          />
        )}
      </CommentContainer>

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
        </div>
      </ScrapContainer>

      {/* <MyPageScrapContainer from={"work"} /> */}
    </Wrapper>
  );
}

export default MyPageWorkContainer;
