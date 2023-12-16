import axios from 'axios'
import { S } from './ui';
import { useState } from 'react';
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

export default function ModalCommentWriteAgain({id, openWriteAgain, setOpenWriteAgain,comments,postId,  setAgainComments, againComments }) {
  const [contents, setContents] = useState('');
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onSumbitHandler = (e) => {
    if (contents) {
      e.preventDefault();
      const UploadComment = {
        comment:contents,
      };
      axios
        .post(`/BE/reference/${postId}/comment/${comments.commentId}`, UploadComment)
        .then((response) => {
          console.log(response);
          setAgainComments(response.data.data.replies);
          alert('대댓글 등록이 완료되었습니다.');
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
  const onCloseHandler = () => {
  	setOpenWriteAgain("")
  }
  return (
    <div style={{display: openWriteAgain === id ? "block" : "none"}}>
      <S.Differentiate />
      <table style={{display: 'inherit',}}>
        <tr>
          <S.Imsi rowspan="2" width={30}>
            <MdOutlineSubdirectoryArrowRight style={{ fontSize: '23px' }} />
          </S.Imsi>
          <S.Imsi rowspan="2" width={40}>
          <button onClick={onSumbitHandler}>등록</button>
          </S.Imsi>
          <S.Imsi style={{width: 'auto'}} onClick={onCloseHandler}>닫기</S.Imsi>
        </tr>
        <tr>
          <S.Imsi>
            <S.WriteInput onChange={onChangeContents}
        value={contents} />
          </S.Imsi>
        </tr>
      </table>
      <S.Differentiate />
    </div>
  )
}