import React from "react";
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

  return (
    <DF.EachFeedWrapper>
      {feedbacks &&
        feedbacks.map((f, index) => (
          <div key={index} style={{ marginBottom: "30px" }}>
            <DF.FeedWrapperHeader>
              <DF.ProfileSize src={f.member.profileImage} />
              <DF.ProfileName>{f.member.nickname}</DF.ProfileName>
              <DF.ButtonWrapper>
                <DF.HeaderButton>
                  <ThumbUpIcon onClick={() => onClickFeedback(f.feedbackId)} />
                  <DF.ThumbCount>{f.likeCount}</DF.ThumbCount>
                </DF.HeaderButton>
                {/* <DF.HeaderButton style={{top:"-5.5px",position:"relative",marginLeft:"3px",color:"black"}}>
                답글
              </DF.HeaderButton> */}
              </DF.ButtonWrapper>
            </DF.FeedWrapperHeader>

            <div>
              <DF.FeedWrapperButton>
                {link ? (
                  <DF.WrapperSearch>동영상</DF.WrapperSearch>
                ) : (
                  <DF.WrapperSearch
                    href={`#${f.page}`}
                    style={{ fontSize: "90%" /* 글자 크기 조절했습니다 */ }}
                  >
                    {f.page}페이지
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
                {f.feedback}
              </p>

              {/* <DetailedFeedbackCommentAgain />*/}
            </div>
          </div>
        ))}
    </DF.EachFeedWrapper>
  );
}
