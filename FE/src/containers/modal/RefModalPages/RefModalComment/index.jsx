import { S } from "../../ModalCommentPages/ModalCommentWrite/ui";
import ModalCommentList from "../../ModalCommentPages/ModalCommentList";
import ModalCommentWrite from "../../ModalCommentPages/ModalCommentWrite";
import React from "react";

export default function RefModalComment({ comments, setComments, postId }) {
  return (
    <S.CommentWrapper>
      <ModalCommentWrite postId={postId} setComments={setComments} />
      <ModalCommentList
        comments={comments}
        postId={postId}
        setComments={setComments}
      />
    </S.CommentWrapper>
  );
}
