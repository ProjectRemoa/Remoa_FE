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
  const [data, setData] = useState();
  const [allComments, setAllComments] = useState(0);
  const [myFeedback, setMyFeedback] = useState("");
  const [myScrapCount, setMyScrapCount] = useState(0);
  const [postId, setPostId] = useState(0);
  const [modalVisibleId, setModalVisibleId] = useState("");
  const [allPage, setAllPage] = useState([]);

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
        console.log(res.data.data.contents);
        setData(...res.data.data.contents);
        setAllPage(Array.from({ length: res.data.data.totalPages }));
        setAllComments(res.data.data.totalAllComments);
      })
      .catch((res) => {
        console.log("error");
      });
  }, []);

  const FeedBackComponent = () => {
    return (
      <div
        style={{ display: "flex", alignContent: "center", marginTop: "19px" }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={data.thumbnail}
            alt=""
            style={{
              width: "264px",
              height: "150px",
            }}
          />
          <button
            style={{
              background: "#FADASE",
              border: "1px solid #B0B0B0",
              borderRadius: "10px",
              width: "264px",
              height: "27px",
              marginTop: "7px",
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
              width: "264px",
              height: "27px",
              marginTop: "7px",
            }}
            onClick={() => {
              onClickModal(data.postId);
            }}
          >
            상세 피드백
          </button>
        </div>
        <div
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            marginLeft: "13px",
          }}
        >
          <div
            style={{
              textAlign: "left",
              fontSize: "23px",
              fontWeight: "500",
              marginBottom: "9px",
            }}
          >
            {data.title}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #FADA5E",
              borderRadius: "10px",
              padding: "20px 31px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "35%",
              }}
            >
              <div
                style={{
                  textAlign: "left",
                  fontSize: "20px",
                }}
              >
                내가 작성한 코멘트
              </div>
              <div
                style={{
                  textAlign: "left",
                  fontSize: "15px",
                  fontWeight: "400",
                }}
              >
                가장 먼저 작성된 코멘트 1개만 보입니다.
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginTop: "24px",
              }}
            >
              <img
                src={data.member.profileImage}
                alt=""
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "50%",
                  border: "1px solid black",
                  marginRight: "12px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "18px",
                  }}
                >
                  {data.member.nickname}
                  <span
                    style={{
                      marginLeft: "23px",
                    }}
                  >
                    👍 {data.likeCount}
                  </span>
                </div>
                <div
                  style={{
                    textAlign: "left",
                    fontSize: "16px",
                    marginTop: "4px",
                  }}
                >
                  {data.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const onClickModal = (postId) => {
    setPostId(postId);
    setModalVisibleId(postId);
  };

  const onClickMoreFeedback = () => {
    navigate("/mypage/myfeedback");
  };

  return (
    <Wrapper>
      <CommentContainer>
        코멘트 및 피드백을 단 작업물
        {allPage.length === 0 ? (
          <NullData>공유 자료가 없어요.</NullData>
        ) : (
          <FeedBackComponent />
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
