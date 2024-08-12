import React, { useState } from "react";
import { S } from "./FeedbackCommentWriteReply.styles";
import YellowButton from "../../../../components/common/Button/YellowButton.styles";
import WhiteButton from "../../../../components/common/Button/WhiteButton.styles";
import { onChangeHandler } from "../../../../functions/onChangeHandler";
import { postFeedbackCommentReply } from "../../../../apis/modal/feedbackCommentReply";
import TextArea from "../../../../components/common/TextArea/TextArea.styles";
import Line from "../../../../components/common/TextArea/Line.styles";
export default function FeedbackCommentWriteReply({
  referenceId,
  feedbackMemberLogId,
  openWriteReply,
  setOpenWriteReply,
  setFeedback
}) {
  const [contents, setContents] = useState("");
  const onChangeContents = (event) => {
    onChangeHandler(event, 300, setContents);
  };
  const onSubmitHandler = async (e) => {
    if (contents) {
      e.preventDefault();
      const response = await postFeedbackCommentReply(
        referenceId,
        feedbackMemberLogId,
        {
          feedbackReply: contents,
        }
      );

      setFeedback(response.data);
    } else {
      e.preventDefault();
      alert("내용을 입력하세요!");
    }
    setContents("");
    setOpenWriteReply("");
  };

  return (
    <S.FeedbackCommentWriteReplyWrapper
      isVisible={openWriteReply === feedbackMemberLogId}
    >
      <Line />
      <S.WrapperTop>
        답글 달기
        <div style={{ display: "flex", flexDirection: "row"}}>
          <WhiteButton
            style={{ width: "72px", height: "40px", marginLeft: "8px" }}
            onClick={() => {
              setOpenWriteReply("");
            }}
          >
            닫기
          </WhiteButton>
          <YellowButton
            style={{ width: "72px", height: "40px", marginLeft: "8px" }}
            onClick={onSubmitHandler}
          >
            등록
          </YellowButton>
        </div>
      </S.WrapperTop>
      <TextArea
        wrap="hard"
        onChange={onChangeContents}
        value={contents}
        placeholder="최대 300자까지 피드백을 남겨주세요."
        style={{height:'96px'}}
      />
    </S.FeedbackCommentWriteReplyWrapper>
  );
}
