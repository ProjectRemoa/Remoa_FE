import { useState } from "react";
import { DF } from "../../../layout/DetailFeedbackStyle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DetailedFeedbackCommentAgain from "./DetailedFeedbackCommentAgain";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function DetailedFeedbackComment({
  feedbacks,
  link,
  setFeedback,
  id3,
}) {
  const navigate = useNavigate();
  console.log(feedbacks);

  const [contents, setContents] = useState("");
  const [putMemberId, setPutMemberId] = useState(0); //수정할 member id
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onClickFeedback = (feedbackId) => {
    console.log("feedbackId : " + feedbackId);
    if (sessionStorage.getItem("nickname") !== null) {
      axios
        .post(`/BE/reference/feedback/${feedbackId}/like`)
        .then((res) => {
          console.log(res);
          axios.get(`/BE/reference/${id3}`).then((res) => {
            setFeedback(res.data.data.feedbacks);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/sociallogin");
    }
  };
  const onClickModify = () => {};
  const onClickDelete = (feedback_id) => {
    axios.delete(`/BE/reference/feedback/${feedback_id}`).then((res) => {
      console.log(res);
      axios.get(`/BE/reference/${id3}`).then((res) => {
        setFeedback(res.data.data.feedbacks);
      });
    });
  };

  const onClickThumb = (feedback_id) => {
    axios
      .post(`/BE/reference/feedback/${feedback_id}/like`)
      .then((res) => {
        console.log(res);
        setFeedback(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onPutHandler = (feedback_id) => {
    const UploadComment = {
      feedback: contents,
    };
    axios
      .put(`/BE/reference/feedback/${feedback_id}`, UploadComment)
      .then((response) => {
        console.log(response);
        setFeedback(response.data.data);
        alert("댓글 수정이 완료되었습니다.");
        setPutMemberId(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <DF.EachFeedWrapper>
      {feedbacks &&
        feedbacks.map((feedbacks, index) => (
          <div style={{ marginBottom: "30px" }} key={index}>
            <DF.FeedWrapperHeader>
              <DF.ProfileSize src={feedbacks.member.profileImage} alt="" />
              <DF.ProfileName>{feedbacks.member.nickname}</DF.ProfileName>
              <DF.ButtonWrapper>
                <DF.HeaderButton>
                  <ThumbUpIcon />
                  <DF.ThumbCount>{feedbacks.likeCount}</DF.ThumbCount>
                </DF.HeaderButton>
                {feedbacks.member.nickname ===
                  sessionStorage.getItem("nickname") && (
                  <>
                    <DF.HeaderButton
                      style={{
                        top: "-5.5px",
                        position: "relative",
                        marginLeft: "3px",
                        color: "black",
                      }}
                      onClick={() => {
                        onPutHandler(feedbacks.feedbackId);
                        setContents(feedbacks.feedback);
                      }}
                    >
                      수정
                    </DF.HeaderButton>
                    <DF.HeaderButton
                      style={{
                        top: "-5.5px",
                        position: "relative",
                        marginLeft: "3px",
                        color: "black",
                      }}
                      onClick={() => {
                        onClickDelete(feedbacks.feedbackId);
                      }}
                    >
                      삭제
                    </DF.HeaderButton>
                  </>
                )}
              </DF.ButtonWrapper>
            </DF.FeedWrapperHeader>
            <div>
              <DF.FeedWrapperButton>
                {link ? (
                  <DF.WrapperSearch>동영상</DF.WrapperSearch>
                ) : (
                  <DF.WrapperSearch href={`#${feedbacks.page}`}>
                    {feedbacks.page}페이지
                  </DF.WrapperSearch>
                )}
              </DF.FeedWrapperButton>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "22px",
                  textAlign: "left",
                }}
              >
                {feedbacks.feedback}
              </p>

              {/* <DetailedFeedbackCommentAgain />*/}
            </div>
          </div>
        ))}
    </DF.EachFeedWrapper>
  );
}
