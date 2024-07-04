import { useEffect, useState } from "react";
import { S } from "./FeedbackCommentList.styles";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { B } from "../../../../styles/Button";
import {
  likeFeedbackComment,
  putFeedbackComment,
  deleteFeedbackComment,
} from "../../../../apis/modal/feedbackComment";
import { getReference } from "../../../../apis/modal/reference";

export default function FeedbackCommentList({
  feedbacks,
  link,
  setFeedback,
  id,
}) {

  const [contents, setContents] = useState("");
  const [putMemberId, setPutMemberId] = useState(0); //수정할 member id

  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
      setContents(inputValue.substr(0, 1000));
      return;
    }
    setContents(inputValue);
  };

  const onClickThumb = async (feedback_id) => {
    const res = await likeFeedbackComment(feedback_id);
    try {
      const res = await getReference(id);
      setFeedback(res.data.feedbacks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getReference(id);
      setFeedback(res.data.feedbacks);
    };
    fetchData();
  }, [id, setFeedback]);

  const onPutHandler = async (feedback_id) => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
    } else {
      const response = await putFeedbackComment(feedback_id, {
        feedback: contents,
      })
      setFeedback(response.data);
      setPutMemberId(0);
    }
  };

  const onClickDelete = async (feedback_id) => {
    const response = await deleteFeedbackComment(feedback_id)
    setFeedback(response.data);
  };

  return (
    <S.EachFeedWrapper>
      {feedbacks &&
        feedbacks.map((feedbacks, index) => (
          <div key={index}>
            <S.FeedWrapperHeader>
              <S.ProfileSize src={feedbacks.member.profileImage} alt="" />
              <S.ProfileName>{feedbacks.member.nickname}</S.ProfileName>
              <B.LikeButton
                style={{ right: "28px", position: "absolute" }}
                onClick={() => onClickThumb(feedbacks.feedbackId)}
              >
                <BsFillHandThumbsUpFill />
                {feedbacks.likeCount}
              </B.LikeButton>
            </S.FeedWrapperHeader>
            <S.Line />
            {feedbacks.feedbackInfos.map((feedback, index) => (
              <div key={index}>
                {putMemberId === feedback.feedbackId ? (
                  <div id={feedback.feedbackId}>
                    <S.FeedWrapperButton>
                      {link ? (
                        <S.WrapperSearch>동영상</S.WrapperSearch>
                      ) : (
                        <S.WrapperSearch href={`#${feedback.page}`}>
                          {feedback.page}페이지
                        </S.WrapperSearch>
                      )}
                    </S.FeedWrapperButton>
                    <S.ModifyText
                      required
                      placeholder="해당 작업물에 대한 의견을 최대 1000자까지 남길 수 있어요!"
                      onChange={onChangeContents}
                      defaultValue={feedback.feedback}
                    />
                    <S.ModifyFin
                      onClick={() => {
                        return onPutHandler(feedback.feedbackId);
                      }}
                    >
                      수정완료
                    </S.ModifyFin>
                  </div>
                ) : (
                  <>
                    <S.FeedWrapperButton>
                      {link ? (
                        <S.WrapperSearch>동영상</S.WrapperSearch>
                      ) : (
                        <S.WrapperSearch href={`#${feedback.page}`}>
                          {feedback.page}페이지
                        </S.WrapperSearch>
                      )}
                    </S.FeedWrapperButton>
                    <S.FeedbackView>{feedback.feedback}</S.FeedbackView>
                  </>
                )}
                <S.ButtonWrapper>
                  <S.HeaderButton>답글</S.HeaderButton>

                  {feedbacks.member.nickname ===
                    sessionStorage.getItem("nickname") &&
                    putMemberId !== feedback.feedbackId && (
                      <>
                        <S.Nbsp> &nbsp;|&nbsp; </S.Nbsp>
                        <S.HeaderButton
                          onClick={() => setPutMemberId(feedback.feedbackId)}
                        >
                          수정하기
                        </S.HeaderButton>
                        <S.Nbsp> &nbsp;|&nbsp; </S.Nbsp>
                        <S.HeaderButton
                          onClick={() => onClickDelete(feedback.feedbackId)}
                        >
                          삭제하기
                        </S.HeaderButton>
                      </>
                    )}
                </S.ButtonWrapper>
              </div>
            ))}
            <S.Line
              style={{
                height: "8px",
                width: "477px",
                left: "-21px",
                position: "relative",
                marginTop: "22px",
              }}
            />
          </div>
        ))}
    </S.EachFeedWrapper>
  );
}
