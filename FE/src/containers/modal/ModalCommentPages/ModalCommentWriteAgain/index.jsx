import { S } from './ModalCommentWriteAgain.styles';
import { useState, useEffect } from 'react';
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { S as SS } from '../ModalCommentList/ModalCommentList.styles'
import { postCommentAgain } from '../../../../apis/modal/commentAgain';
import { getUserInfo, imsi } from '../../../../apis/mypage/user';

export default function ModalCommentWriteAgain({id, openWriteAgain, setOpenWriteAgain,comments,postId,  setAgainComments }) {
  const [contents, setContents] = useState('');
  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
        setContents(inputValue.substring(0, 300));
        return;
    }
    setContents(inputValue)
  };

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    if (contents) {
      try {
        const response = await postCommentAgain(postId, comments.commentId,{Comment:contents})
        setAgainComments(response.data.replies);
      } catch (err) {
        console.log(err);
      }
    } else {
      alert('내용을 입력하세요!');
    }
    setContents('');
  };

  const onCloseHandler = () => { setOpenWriteAgain("") }

  const getProfile = async () => {
    const res = await getUserInfo()
    setUserData(res.data.nickname);
  };

  const [userData, setUserData] = useState('');
  const [profileImage, setProfileImage] = useState("");

  const getProfileImg = async () => {
    const res = await imsi();
    setProfileImage(res.data);
  };

  useEffect(() => {
    getProfile();
    getProfileImg();
  }, []);

  return (
    <div style={{display: openWriteAgain === id ? "block" : "none"}}>
      <table>
        <tr>
          <td rowSpan="2"  style={{border:'1px solid red'}}>
            <MdOutlineSubdirectoryArrowRight style={{ fontSize: '23px' }} />

          </td>
          <td rowSpan="2"  style={{border:'1px solid red'}}>
          <SS.ProfileSize src={profileImage} style={{position:'relative'}} />
          </td>
        </tr>
        <tr>
          <td style={{position:'relative', border:'1px solid red'}}>
          <S.Nickname>{userData}</S.Nickname>
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
    </div>
  )
}
