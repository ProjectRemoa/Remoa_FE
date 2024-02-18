import { useEffect, useState } from "react";
import { S } from "./ui";
import axios from "axios";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { B } from "../../../../styles/Button";

export default function DetailFeedbackComment({
  feedbacks,
  link,
  setFeedback,
  id,
}) {
  const [contents, setContents] = useState("");
  const [putMemberId, setPutMemberId] = useState(0); //수정할 member id

  // const [timer, setTimer] = useState(null); // 디바운싱 구현
  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
      setContents(inputValue.substr(0, 1000));
      return;
    }
    setContents(inputValue);
    // if (timer) clearTimeout(timer)

    // const newTimer = setTimeout(() => {
    //     setContents(inputValue);
    // }, 300);
    // setTimer(newTimer);
  };

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
  // 이미 해당 페이지에 대한 피드백을 작성했어요 처리하기
  return (
    <S.EachFeedWrapper>
      {feedbacks &&
        feedbacks.map((feedbacks, index) => (
          <div key={index}>
            <S.FeedWrapperHeader>
              <S.ProfileSize src={feedbacks.member.profileImage} alt="" />
              <S.ProfileName>{feedbacks.member.nickname}</S.ProfileName>
              {/* onClick={() => onClickThumb()} */}
              <B.LikeButton style={{ right: "28px", position: "absolute" }}>
                <BsFillHandThumbsUpFill />0
              </B.LikeButton>
            </S.FeedWrapperHeader>
            <S.Line />
            <div>
              {putMemberId === feedbacks.feedbackId ? (
                <div id={feedbacks.feedbackId}>
                  <S.FeedWrapperButton>
                {link ? (
                  <S.WrapperSearch>동영상</S.WrapperSearch>
                ) : (
                  <S.WrapperSearch href={`#${feedbacks.page}`}>
                    {feedbacks.page}페이지
                  </S.WrapperSearch>
                )}
              </S.FeedWrapperButton>
                  <S.ModifyText
                    required
                    placeholder="해당 작업물에 대한 의견을 최대 1000자까지 남길 수 있어요!"
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
                <>
                <S.FeedWrapperButton>
                {link ? (
                  <S.WrapperSearch>동영상</S.WrapperSearch>
                ) : (
                  <S.WrapperSearch href={`#${feedbacks.page}`}>
                    {feedbacks.page}페이지
                  </S.WrapperSearch>
                )}
              </S.FeedWrapperButton>
                <S.FeedbackView>{feedbacks.feedback}</S.FeedbackView>
                </>
              )}
              <S.ButtonWrapper>
                <S.HeaderButton>답글</S.HeaderButton>
                <S.Nbsp> &nbsp;|&nbsp; </S.Nbsp>
                {feedbacks.member.nickname ===
                  sessionStorage.getItem("nickname") && (
                  <>
                    <S.HeaderButton
                      onClick={() => setPutMemberId(feedbacks.feedbackId)}
                    >
                      수정하기
                    </S.HeaderButton>
                    <S.Nbsp> &nbsp;|&nbsp; </S.Nbsp>
                    <S.HeaderButton
                      onClick={() => onClickDelete(feedbacks.feedbackId)}
                    >
                      삭제하기
                    </S.HeaderButton>
                  </>
                )}
              </S.ButtonWrapper>
              {/* <DetaileSeedbackCommentAgain /> */}
            </div>
            <S.Line style={{height:'8px', width:'477px',left:'-21px',position:'relative',marginTop:'22px'}} />
          </div>
        ))}
    </S.EachFeedWrapper>
  );
}
