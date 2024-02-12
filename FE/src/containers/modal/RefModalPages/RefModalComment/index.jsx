import { S } from '../../ModalCommentPages/ModalCommentWrite/ui';
import ModalCommentList from '../../ModalCommentPages/ModalCommentList';
import ModalCommentWrite from '../../ModalCommentPages/ModalCommentWrite';
import React from 'react';

export default function RefModalComment({ comments, setComments, postId, setAgainComments, againComments }) {
  return (
    <S.CommentWrapper>
      <S.CommentWriteWrapperInnerDiv />
      <ModalCommentWrite postId={postId} setComments={setComments}/>
      <ModalCommentList
        comments={comments}
        postId={postId}
        setComments={setComments}
        setAgainComments={setAgainComments}
        againComments={againComments}
      />
    </S.CommentWrapper>
  );
}
