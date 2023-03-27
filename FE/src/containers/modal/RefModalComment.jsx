import { MS } from "../../layout/ModalStyle";
import RMCommentList from "./modalComment/CommentList";
import RMCommentWrite from "./modalComment/CommentWrite";
import React from "react";

export default function RefModalComment(props) {
  const comments = props.comments;
  const postId = props.postId;
  return (
    <MS.CommentWrapper>
      <RMCommentWrite postId={postId} />
      <RMCommentList comments={comments} postId={postId} />
    </MS.CommentWrapper>
  );
}
