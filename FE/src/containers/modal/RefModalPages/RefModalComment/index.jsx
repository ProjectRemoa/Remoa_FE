import { S } from '../../ModalCommentPages/ModalCommentWrite/ui';
import ModalCommentList from '../../ModalCommentPages/ModalCommentList';
import ModalCommentWrite from '../../ModalCommentPages/ModalCommentWrite';
import React from 'react';

export default function RefModalComment({ comments, setComments, postId, setAgainComments, againComments }) {
  return (
    <S.CommentWrapper>
      <div style={{background: 'var(--line, #E1E2E5)', width: 'auto', height: '1px', flexShrink: '0' }} />
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
