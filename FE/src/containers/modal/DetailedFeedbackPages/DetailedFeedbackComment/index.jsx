import { useEffect, useState } from "react";
import { S } from './ui'
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import axios from "axios";

export default function DetailFeedbackComment({
  feedbacks,
  link,
  setFeedback,
  id,
}) {
  const [contents, setContents] = useState("");
  const [putMemberId, setPutMemberId] = useState(0); //수정할 member id

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  /*const onClickFeedback = (feedbackId) => {
    console.log('feedbackId : ' + feedbackId);
    if (sessionStorage.getItem('nickname') !== null) {
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
      alert('로그인이 필요한 서비스입니다.');
      navigate('/sociallogin');
    }
  };*/

  const onClickThumb = (feedback_id) => {
    axios
      .post(`/BE/reference/feedback/${feedback_id}/like`)
      .then((res) => {
        console.log(res);
        console.log("id3 : " + id);
        axios
          .get(`/BE/reference/${id}`)
          .then((res) => {
            console.log(res);
            setFeedback(res.data.data.feedbacks);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`/BE/reference/${id}`)
      .then((res) => {
        console.log(res);
        setFeedback(res.data.data.feedbacks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setFeedback]);

  const onPutHandler = (feedback_id) => {
    const UploadComment = {
      feedback: contents,
    };
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
    } else {
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
    }
  };

  const onClickDelete = (feedback_id) => {
    axios
      .delete(`/BE/reference/feedback/${feedback_id}`)
      .then((response) => {
        console.log(response);
        setFeedback(response.data.data);
        alert("댓글 삭제가 완료되었습니다.");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <S.EachFeedWrapper>
      {feedbacks &&
        feedbacks.map((feedbacks, index) => (
          <div style={{ marginBottom: "30px" }} key={index}>
            <S.FeedWrapperHeader>
              <S.ProfileSize src={feedbacks.member.profileImage} alt="" />
              <S.ProfileName>{feedbacks.member.nickname}</S.ProfileName>
              <S.ButtonWrapper>
                <S.HeaderButton
                  onClick={() => onClickThumb(feedbacks.feedbackId)}
                >
                  <ThumbUpIcon />
                  <S.ThumbCount>{feedbacks.likeCount}</S.ThumbCount>
                </S.HeaderButton>
                {feedbacks.member.nickname ===
                  sessionStorage.getItem("nickname") && (
                  <>
                    <S.HeaderButton
                      style={{
                        top: "-5.5px",
                        position: "relative",
                        marginLeft: "3px",
                        color: "black",
                      }}
                      onClick={() => setPutMemberId(feedbacks.feedbackId)}
                    >
                      수정
                    </S.HeaderButton>
                    <S.HeaderButton
                      style={{
                        top: "-5.5px",
                        position: "relative",
                        marginLeft: "3px",
                        color: "black",
                      }}
                      onClick={() => onClickDelete(feedbacks.feedbackId)}
                    >
                      삭제
                    </S.HeaderButton>
                  </>
                )}
              </S.ButtonWrapper>
            </S.FeedWrapperHeader>
            <div>
              <S.FeedWrapperButton>
                {link ? (
                  <S.WrapperSearch>동영상</S.WrapperSearch>
                ) : (
                  <S.WrapperSearch href={`#${feedbacks.page - 1}`}>
                    {feedbacks.page}페이지
                  </S.WrapperSearch>
                )}
              </S.FeedWrapperButton>
              {putMemberId === feedbacks.feedbackId ? (
                <div id={feedbacks.feedbackId}>
                  <br />
                  <S.ModifyText
                    required
                    placeholder="상세 피드백을 수정하세요."
                    onChange={onChangeContents}
                    defaultValue={feedbacks.feedback}
                  />
                  <S.ModifyFin
                    onClick={() => {
                      return onPutHandler(feedbacks.feedbackId);
                    }}
                  >
                    수정 완료하기
                  </S.ModifyFin>
                </div>
              ) : (
                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "22px",
                    textAlign: "left",
                  }}
                >
                  {feedbacks.feedback}
                </p>
              )}
              {/* <DetaileSeedbackCommentAgain />*/}
            </div>
          </div>
        ))}
    </S.EachFeedWrapper>
  );
}
