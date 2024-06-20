import { S } from '../../ModalCommentPages/ModalCommentWrite/ModalCommentWrite.styles';
import ModalCommentList from '../../ModalCommentPages/ModalCommentList';
import ModalCommentWrite from '../../ModalCommentPages/ModalCommentWrite';
import React from 'react';

export default function RefModalComment({ comments, setComments, postId }) {
  return (
    <S.CommentWrapper>
      <S.CommentWriteWrapperInnerDiv />
      <ModalCommentWrite postId={postId} setComments={setComments}/>
      <ModalCommentList
        comments={comments}
        postId={postId}
        setComments={setComments}
      />
    </S.CommentWrapper>
  );
}
