import { S } from "./CommentWrite.styles";
import React, { useState } from "react";
import { postComment } from "../../../../apis/modal/comment";

export default function CommentWrite({ postId, setComments }) {
  const [comment, setCommentChange] = useState("");
  const onChangeComments = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
      setCommentChange(inputValue.substring(0, 300));
      return;
    }
    setCommentChange(inputValue);
  };

  const onSumbitHandler = async (e) => {
    if (comment) {
      e.preventDefault();
      try {
        const response = await postComment(postId, {comment})
        setComments(response.data);
        alert("댓글 등록이 완료되었습니다.");
      } catch (err) {
        console.log(err);
      }
    } else {
      e.preventDefault();
      alert("내용을 입력하세요!");
    }
    
    setCommentChange("");
  };

  return (
    <S.CommentWriteWrapper>
      <S.CommentWriteHeader>
        <S.CommentTitle>Comment</S.CommentTitle>
        <S.CommentButton onClick={onSumbitHandler}>등록</S.CommentButton>
      </S.CommentWriteHeader>
      <S.WriteInput
        placeholder="해당 작업물에 대한 의견을 최대 300자까지 남길 수 있어요!
        욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다."
        onChange={onChangeComments}
        value={comment}
      />
    </S.CommentWriteWrapper>
  );
}
