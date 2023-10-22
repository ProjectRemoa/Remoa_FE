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
      <MyPageScrapContainer from={"work"} />
    </Wrapper>
  );
}

export default MyPageWorkContainer;
