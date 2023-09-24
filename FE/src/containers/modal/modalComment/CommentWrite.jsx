import { MS } from '../../../layout/ModalStyle';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RMCommentWrite({ postId, setComments }) {
  const navigate = useNavigate();
  const [contents, setContents] = useState('');

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onSumbitHandler = (e) => {
    if (sessionStorage.getItem('nickname') === null) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/sociallogin');
    } else {
      e.preventDefault();
      const UploadComment = {
        comment: contents,
      };
      //const data = axios
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
    }
    setContents('');
  };

  return (
    <MS.CommentWriteWrapper>
      <p style={{ float: 'left', fontSize: '20px' }}>Comment</p>
      <MS.CommentButton onClick={ onSumbitHandler }>댓글 등록</MS.CommentButton>
      <MS.WriteInput
        required
        placeholder='해당 작업물에 대한 의견을 자유롭게 남겨주세요!
        욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다.'
        onChange={ onChangeContents }
        value={ contents }
      />
    </MS.CommentWriteWrapper>
  );
}
