import { MS } from '../../layout/ModalStyle';
import RMCommentList from './modalComment/CommentList';
import RMCommentWrite from './modalComment/CommentWrite';
import React from 'react';

export default function RefModalComment({ comments, setComments, postId }) {
  return (
    <MS.CommentWrapper>
      <RMCommentWrite postId={ postId } setComments={ setComments } />
      <RMCommentList
        comments={ comments }
        postId={ postId }
        setComments={ setComments }
      />
    </MS.CommentWrapper>
  );
}
