import axios from 'axios'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { S } from './ui';
import { S as SS } from '../ModalCommentList/ui'


export default function ModalCommentListAgain({replies,setAgainComments, againComments, postId, commentId}) {
  replies.sort((a, b) => {
    return  new Date(a.repliedTime)-new Date(b.repliedTime);
  });
  
  // 수정 삭제 명세서 최신화하고 진행해야할거같아요
  const onDelete = (commentId) => {
    axios
      .delete(`/BE/reference/${postId}/comment/${commentId}`)
      .then((response) => {
        console.log(response);
        alert('댓글 삭제가 완료되었습니다.');
        // if (response.status === 200) alert(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
    {replies && replies.map((replies)=>(
    <div>
    <S.Differentiate />
    <table style={{display: 'inherit'}}>
      <tr>
        <td rowspan="2" width={30}>
          <MdOutlineSubdirectoryArrowRight style={{ fontSize: '23px' }} />
        </td>
        <td rowspan="2" width={40}>
          <SS.ProfileSize src={replies.member.profileImage}
          style={{position:'relative'}}
           /> 
        </td>
        <td style={{width: 'auto'}}>{replies.member.nickname}</td>
      </tr>
      <tr>
        <td>{replies.content}</td>
      </tr>
    </table>
    <button onClick={onDelete}>삭제</button>
  </div>
    ))}
    </>
  )
}