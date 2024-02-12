import axios from 'axios'
import { S } from './ui';
import { useState, useEffect } from 'react';
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { S as SS } from '../ModalCommentList/ui'

export default function ModalCommentWriteAgain({id, openWriteAgain, setOpenWriteAgain,comments,postId,  setAgainComments, againComments }) {
  const [contents, setContents] = useState('');
  const [timer, setTimer] = useState(null); // 디바운싱 구현
  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
        setContents(inputValue.substring(0, 300));
        return;
    }
    if (timer) clearTimeout(timer)

    const newTimer = setTimeout(() => {
        setContents(inputValue);
    }, 500); 
    setTimer(newTimer);
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

  const onCloseHandler = () => { setOpenWriteAgain("") }

  const getProfile = async () => {
    try {
      const res = await axios.get("/BE/user", { withCredentials: true });
      if (res.status === 200) setUserData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [userData, setUserData] = useState({});
  const [profileImage, setProfileImage] = useState("");

  const getProfileImg = async () => {
    try {
      const res = await axios.get("/BE/user/img");
      if (res.status === 200) setProfileImage(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
    getProfileImg();
  }, []);

  return (
    <div style={{display: openWriteAgain === id ? "block" : "none"}}>
      <S.Differentiate />  
      <table>
        <tr>
          <td rowSpan="2">
            <MdOutlineSubdirectoryArrowRight style={{ fontSize: '23px' }} />

          </td>
          <td rowSpan="2">
          <SS.ProfileSize src={profileImage} style={{position:'relative'}} />
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td style={{position:'relative', left:'40px'}}>
          <S.Nickname>{userData.nickname}</S.Nickname>
          <S.WriteInput wrap="hard" onChange={onChangeContents} value={contents} 
          placeholder='해당 작업물에 대한 의견을 최대 300자까지 남길 수 있어요!
          욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다.' />
            <div style={{position:'absolute', right:1, bottom:5, margin:'12px'}}>
              <S.CloseButton onClick={onCloseHandler} style={{marginRight:'12px', backgroundColor:'white', border:'1px solid black'}}>닫기</S.CloseButton>
              <S.CloseButton onClick={onSumbitHandler}>등록</S.CloseButton>
            </div>
          </td>
        </tr>
      </table>
      <S.Differentiate />
    </div>
  )
}
