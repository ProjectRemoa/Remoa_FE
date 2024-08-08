import { useEffect, useState } from "react";
import { S } from "./FeedbackCommentList.styles";
import CustomLikeButton from "../../../../components/common/LikeButton";
import {
  likeFeedbackComment,
  putFeedbackComment,
  deleteFeedbackComment,
} from "../../../../apis/modal/feedbackComment";
import { getReference } from "../../../../apis/modal/reference";
import { onChangeHandler } from "../../../../functions/onChangeHandler";
import { S as WS } from "../FeedbackCommentWrite/FeedbackCommentWrite.styles";
import YellowButton from "../../../../components/common/Button/YellowButton.styles";
import { FaCaretDown } from "react-icons/fa";
import CustomProfileImage from "../../../../components/common/ProfileSize";
import FeedbackCommentWriteReply from "../FeedbackCommentWriteReply";
import FeedbackCommentListReply from "../FeedbackCommentListReply";
import TextArea from "../../../../components/common/TextArea/TextArea.styles";
import Pre from "../../../../components/common/TextArea/Pre.styles";
import Line from "../../../../components/common/TextArea/Line.styles";
import {
  EditNbsp,
  EditText,
} from "../../../../components/common/TextArea/Edit.styles";
import { handleOnFollowModal } from "../../../../functions/handleOnFollowModal";
import RefModalFollow from "../../RefModalFollow";

export default function FeedbackCommentList({
  feedbacks,
  link,
  setFeedback,
  id,
  isFromManage
}) {
  const [contents, setContents] = useState("");
  const [putMemberId, setPutMemberId] = useState(0); //수정할 member id
  const refreshToken = sessionStorage.getItem("refreshToken");
  const [openWriteReply, setOpenWriteReply] = useState("");
  const [selectedPostId, setSelectedPostId] = useState("");

  const showReply = (feedbackMemberLogId) => {
    setOpenWriteReply(feedbackMemberLogId);
  };

  const onChangeContents = (event) => {
    onChangeHandler(event, 300, setContents);
  };

  const handleLinkClick = (event) => {
    if (isFromManage) {
      event.preventDefault();
    }
  };

  const onClickThumb = async (feedback_member_id) => {
    const res = await likeFeedbackComment(id, feedback_member_id);
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
      const response = await putFeedbackComment(id, feedback_id, {
        feedback: contents,
      });
      setFeedback(response.data);
      setPutMemberId(0);
    }
  };

  const onClickDelete = async (feedback_id) => {
    const response = await deleteFeedbackComment(id, feedback_id);
    setFeedback(response.data);
  };

  return (
    <S.EachFeedWrapper>
      {feedbacks &&
        feedbacks.map((feedbacks, index) => (
          <div key={index}>
            <S.FeedWrapperHeader>
              <div style={{ position: "relative" }}>
                <CustomProfileImage
                  src={feedbacks.member.profileImage}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    handleOnFollowModal(
                      feedbacks.member.memberId,
                      selectedPostId,
                      setSelectedPostId
                    )
                  }
                />
                {feedbacks.member.memberId === selectedPostId && (
                  <RefModalFollow member={feedbacks.member} />
                )}
              </div>
              <S.ProfileName>{feedbacks.member.nickname}</S.ProfileName>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  right: "14px",
                }}
              >
                {refreshToken && (
                  <S.LikeButton
                    onClick={() => {
                      showReply(feedbacks.feedbackMemberLogId);
                    }}
                  >
                    답글
                  </S.LikeButton>
                )}
                <CustomLikeButton
                  onClick={() => onClickThumb(feedbacks.member.memberId)}
                  count={feedbacks.likeCount}
                  isLiked={feedbacks.isLiked}
                />
              </div>
            </S.FeedWrapperHeader>
            <Line style={{ marginTop: 0 }} />
            {feedbacks.feedbackInfos.map((feedback, index) => (
              <div key={index}>
                {putMemberId === feedback.feedbackId ? (
                  <div id={feedback.feedbackId} style={{ marginTop: "10px" }}>
                    <WS.RegTop>
                      <WS.FeedbackTextNum style={{ marginLeft: "-27px" }}>
                        페이지 번호
                      </WS.FeedbackTextNum>
                      <WS.FeedbackSelect
                        disabled={true}
                        style={{ left: "10px", alignItems: "center" }}
                      >
                        {feedback.page || 1}
                        <FaCaretDown style={{ marginLeft: "5px" }} />
                      </WS.FeedbackSelect>
                      <YellowButton
                        onClick={() => {
                          return onPutHandler(feedback.feedbackId);
                        }}
                        style={{
                          width: "72px",
                          height: "42px",
                        }}
                      >
                        <span>수정</span>
                      </YellowButton>
                    </WS.RegTop>
                    <TextArea
                      style={{ height: "96px" }}
                      required
                      placeholder="최대 300자까지 피드백을 남겨주세요."
                      onChange={onChangeContents}
                      defaultValue={feedback.feedback}
                    />
                  </div>
                ) : (
                  <>
                    <S.FeedWrapperButton>
                      {!link ? (
                        <S.WrapperSearch href={`#${feedback.page}`} onClick={handleLinkClick}>
                          {feedback.page}페이지
                        </S.WrapperSearch>
                      ) : (
                        <S.WrapperSearch>동영상</S.WrapperSearch>
                      )}
                    </S.FeedWrapperButton>
                    <Pre Feed>{feedback.feedback}</Pre>
                  </>
                )}
                <S.ButtonWrapper>
                  {feedbacks.member.nickname ===
                    sessionStorage.getItem("nickname") &&
                    putMemberId !== feedback.feedbackId && (
                      <>
                        <EditText
                          onClick={() => setPutMemberId(feedback.feedbackId)}
                        >
                          수정하기
                        </EditText>
                        <EditNbsp> &nbsp;|&nbsp; </EditNbsp>
                        <EditText
                          onClick={() => onClickDelete(feedback.feedbackId)}
                        >
                          삭제하기
                        </EditText>
                      </>
                    )}
                </S.ButtonWrapper>
              </div>
            ))}
            <FeedbackCommentWriteReply
              referenceId={id}
              feedbackMemberLogId={feedbacks.feedbackMemberLogId}
              openWriteReply={openWriteReply}
              setOpenWriteReply={setOpenWriteReply}
              setFeedback={setFeedback}
            />
            {feedbacks.replies.map((feedback) => (
              <FeedbackCommentListReply
                feedback={feedback}
                feedbackMemberLogId={feedbacks.feedbackMemberLogId}
                setFeedback={setFeedback}
              />
            ))}

            <Line
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
