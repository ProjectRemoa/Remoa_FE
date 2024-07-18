import React, { useState, useEffect } from "react";
import YellowButton from "../../../../components/common/Button/YellowButton.styles";
import Line from "../../../../components/common/TextArea/Line.styles";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import CustomProfileImage from "../../../../components/common/ProfileSize";
import Pre from "../../../../components/common/TextArea/Pre.styles";
import {
  EditNbsp,
  EditText,
} from "../../../../components/common/TextArea/Edit.styles";
import {
  putFeedbackCommentReply,
  deleteFeedbackCommentReply,
} from "../../../../apis/modal/feedbackCommentReply";
import { onChangeHandler } from "../../../../functions/onChangeHandler";
import TextArea from "../../../../components/common/TextArea/TextArea.styles";

export default function FeedbackCommentListReply({
  feedback,
  feedbackMemberLogId,
  setFeedback,
}) {
  const [contents, setContents] = useState("");
  const [putMemberId, setPutMemberId] = useState(0);
  const onChangeContents = (event) => {
    onChangeHandler(event, 300, setContents);
  };

  const onPutHandler = async (replyId) => {
    if (!contents) {
      alert("내용이 수정되지 않았습니다.");
    } else {
      const response = await putFeedbackCommentReply(
        feedbackMemberLogId,
        replyId,
        {
          feedbackReply: contents,
        }
      );
      setFeedback(response.data);
      setPutMemberId(0);
    }
  };

  const onClickDelete = async (replyId) => {
    const response = await deleteFeedbackCommentReply(
      feedbackMemberLogId,
      replyId
    );
    setFeedback(response.data);
  };
  return (
    <div key={feedback.feedbackReplyId}>
      <Line />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <MdOutlineSubdirectoryArrowRight
          style={{ fontSize: "24px", color: "#A7A7A7" }}
        />
        <CustomProfileImage
          src={feedback.member.profileImage}
          style={{ width: "24px", height: "24px", margin: "0px 8px" }}
        />
        <span style={{ fontSize: "15px", lineHeight: "24px" }}>
          {feedback.member.nickname}
        </span>
      </div>
      {putMemberId === feedback.feedbackReplyId ? (
        <div style={{ marginTop: "12px" }}>
          <TextArea
            style={{ height: "96px" }}
            required
            placeholder="최대 300자까지 피드백을 남겨주세요."
            onChange={onChangeContents}
            defaultValue={feedback.content}
          />
          <YellowButton
            onClick={() => {
              return onPutHandler(feedback.feedbackReplyId);
            }}
            style={{
              width: "72px",
              height: "40px",
              position: "relative",
              top: "8px",
              left: '355px'
            }}
          >
            <span>수정</span>
          </YellowButton>
        </div>
      ) : (
        <Pre feed>{feedback.content}</Pre>
      )}
      <div style={{ marginTop: "8px" }}>
        {feedback.member.nickname === sessionStorage.getItem("nickname") &&
          putMemberId !== feedback.feedbackReplyId && (
            <>
              <EditText
                onClick={() => setPutMemberId(feedback.feedbackReplyId)}
              >
                수정하기
              </EditText>
              <EditNbsp> &nbsp;|&nbsp; </EditNbsp>
              <EditText onClick={() => onClickDelete(feedback.feedbackReplyId)}>
                삭제하기
              </EditText>
            </>
          )}
      </div>
    </div>
  );
}
