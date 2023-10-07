import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyPageScrapContainer from "../MyPageScrapContainer";
import RefModal from "../../modal/RefModal";
import styledComponent from "./MyPageWorkContainer.styles";
const { Wrapper, CommentContainer, ButtonContainer, Button, NullData } =
  styledComponent;

function MyPageWorkContainer() {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [allComments, setAllComments] = useState(0);
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
      .catch((err) => {});
    axios
      .get(`/BE/user/comment?page=${1}`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data.contents[0]);
        setAllComments(res.data.data.totalAllComments);
      })
      .catch((res) => {
        console.log("error");
      });
  }, []);

  const FeedBackPage = ({ data }) => {
    return (
      <>
        {data && (
          <div
            style={{
              display: "flex",
              margin: "2%",
              width: "100%",
              //height: "25%",
              maxHeight: "230px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "30%",
                maxHeight: "100%",
              }}
            >
              <img
                src={data.thumbnail}
                alt=""
                style={{
                  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                  margin: "2%",
                  maxWidth: "100%",
                  minHeight: "70%",
                  maxHeight: "80%",
                }}
              />
              <button
                style={{
                  background: "#FADASE",
                  border: "1px solid #B0B0B0",
                  borderRadius: "10px",
                  margin: "1%",
                  marginLeft: "2%",
                  width: "95%",
                  height: "10%",
                  fontFamily: "NotoSansKR-500",
                  fontSize: "70%",
                }}
                onClick={() => {
                  onClickModal(data.postId);
                }}
              >
                작업물 뷰어 보기
              </button>
              <button
                style={{
                  background: "#FADASE",
                  border: "1px solid #B0B0B0",
                  borderRadius: "10px",
                  margin: "1%",
                  marginLeft: "2%",
                  width: "95%",
                  height: "10%",
                  fontFamily: "NotoSansKR-500",

                  fontSize: "70%",
                }}
                onClick={() => {
                  onClickModal(data.postId);
                }}
              >
                {" "}
                상세 피드백{" "}
              </button>
            </div>

            <div
              style={{
                width: "70%",
                display: "flex",
                flexDirection: "column",
                maxHeight: "100%",
              }}
            >
              <div
                style={{
                  textAlign: "left",
                  fontSize: "1.4em",
                  width: "100%",
                  height: "15%",
                  margin: "1%",
                }}
              >
                {" "}
                {data.title}{" "}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "83%",
                  border: "1px solid #FADA5E",
                  borderRadius: "10px",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "35%",
                    marginLeft: "5%",
                    marginTop: "3%",
                    marginBottom: "2%",
                  }}
                >
                  <div style={{ textAlign: "left", fontSize: "18px" }}>
                    내가 작성한 코맨트
                  </div>
                  <div style={{ textAlign: "left", fontSize: "14px" }}>
                    가장 먼저 작성된 코멘트 1개만 보입니다.
                  </div>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "50%",
                    display: "flex",
                    marginLeft: "5%",
                    marginBottom: "5%",
                  }}
                >
                  <img
                    src={data.member.profileImage}
                    alt=""
                    style={{
                      marginTop: "2%",
                      maxWidth: "20%",
                      maxHeight: "80%",
                      borderRadius: "40px",
                    }}
                  />
                  <div
                    style={{
                      width: "80%",
                      height: "100%",
                      marginLeft: "2%",
                      marginTop: "4%",
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <div style={{ textAlign: "left", fontSize: "18px" }}>
                      {data.member.nickname}
                      <span style={{ marginLeft: "2%" }}>
                        👍 {data.likeCount}
                      </span>
                    </div>
                    <div
                      style={{
                        textAlign: "left",
                        fontSize: "16px",
                        marginTop: "1%",
                      }}
                    >
                      {data.content}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  const onClickModal = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };

  const onClickMoreFeedback = () => {
    navigate("/mypage/myfeedback");
  };

  const onClickMoreScrap = () => {
    navigate("/mypage/scrap");
  };

  return (
    <Wrapper>
      <CommentContainer>
        코멘트 및 피드백을 단 작업물
        {!allComments ? (
          <NullData>공유 자료가 없어요.</NullData>
        ) : (
          <FeedBackPage data={data} />
        )}
        {!allComments || allComments === undefined ? null : (
          <ButtonContainer>
            <Button onClick={onClickMoreFeedback}>더보기 &gt;</Button>
          </ButtonContainer>
        )}
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
