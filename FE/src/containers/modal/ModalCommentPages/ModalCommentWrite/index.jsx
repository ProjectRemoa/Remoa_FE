import { S } from './ui';
import React, { useState } from 'react';
import axios from 'axios';

export default function ModalCommentWrite({ postId, setComments }) {
  const [contents, setContents] = useState('');

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if(contents.length > 300) setContents(contents.substr(0, 300))
  };

  const onSumbitHandler = (e) => {

    if (contents) {
      e.preventDefault();
      const UploadComment = {
        comment: contents,
      };
      axios
        .post(`/BE/reference/${postId}/comment`, UploadComment)
        .then((response) => {
          console.log(response);
          setComments(response.data.data);
          alert('댓글 등록이 완료되었습니다.');
          //if (response.status === 200) alert(response.data);
        })
        .catch((err) => {
          alert('통신 오류');
          console.log(err);
        });
    } else {
      e.preventDefault()
      alert('내용을 입력하세요!')
    }
    setContents('');
  };

  return (
    <S.CommentWriteWrapper>
      <S.CommentWriteHeader>
        <S.CommentTitle>Comment</S.CommentTitle>
        <S.CommentButton onClick={onSumbitHandler}>등록</S.CommentButton>
      </S.CommentWriteHeader>
      <S.WriteInput
        placeholder='해당 작업물에 대한 의견을 최대 300자까지 남길 수 있어요!
        욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다.'
        onChange={onChangeContents}
        value={contents}
      />
    </S.CommentWriteWrapper>
  );
}
