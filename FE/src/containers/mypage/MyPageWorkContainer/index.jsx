import { useState, useEffect } from "react";
import axios from "axios";
import MyPageScrapContainer from "../MyPageScrapContainer";
import RefModal from "../../modal/RefModalPages/RefModal";
import styledComponent from "./MyPageWorkContainer.styles";
import FeedBackComponent from "../../../Components/FeedBackComponent";
const { Wrapper, CommentContainer } = styledComponent;

function MyPageWorkContainer() {
  const [myFeedback, setMyFeedback] = useState("");
  const [myScrapCount, setMyScrapCount] = useState(0);
  const [scrapData, setScrapData] = useState([]);
  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");

  useEffect(() => {
    axios
      .get(`/BE/user/activity?comment=${1}&scrap=${1}`)
      .then((res) => {
        setMyFeedback(res.data.data.content);
        setMyScrapCount(res.data.data.posts.length);
      })
      .catch((err) => {
        console.log("error");
      });
    axios.get(`/BE/user/scrap?page=${1}`).then((res) => {
      console.log(res.data.data.posts);
      setScrapData(res.data.data.posts);
    });
  }, []);

  return (
    <Wrapper>
      <CommentContainer>
        코멘트 및 피드백을 단 작업물
        <FeedBackComponent />
        {modalVisibleId !== "" && (
          <RefModal
            id2={postId}
            modalVisibleId2={modalVisibleId}
            setModalVisibleId2={setModalVisibleId}
          />
        )}
      </CommentContainer>
      {/* <div
        style={{
          fontSize: "25px",
          fontWeight: "700",
          textAlign: "left",
          marginTop: "68px",
        }}
      >
        스크랩한 작업물
        <div>
          {scrapData.map((data) => {
            console.log(data);
            return (
              <img
                src={data.thumbnail}
                alt=""
                style={{ width: "291px", height: "164px" }}
              />
            );
          })}
        </div>
      </div> */}

      <div style={{ display: "grid", gap: "20px 26px" }}>
        {scrapData.map((data) => (
          <div></div>
        ))}
      </div>
      {/* <MyPageScrapContainer from={"work"} /> */}
    </Wrapper>
  );
}

export default MyPageWorkContainer;
