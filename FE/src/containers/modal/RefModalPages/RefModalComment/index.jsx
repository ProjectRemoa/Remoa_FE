import { S } from '../../CommentPages/CommentWrite/CommentWrite.styles';
import CommentList from '../../CommentPages/CommentList';
import CommentWrite from '../../CommentPages/CommentWrite';
import React from 'react';

export default function RefModalComment({ comments, setComments, postId }) {
  return (
    <S.CommentWrapper>
      <S.CommentWriteWrapperInnerDiv />
      <CommentWrite postId={postId} setComments={setComments}/>
      <CommentList
        comments={comments}
        postId={postId}
        setComments={setComments}
      />
    </S.CommentWrapper>
  );
}
