import axios from "axios";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { S } from "./ui";
import { S as SS } from "../ModalCommentList/ui";

export default function ModalCommentListAgain({
  replies,
  setAgainComments,
  againComments,
  postId,
  commentId,
}) {
  replies.sort((a, b) => {
    return new Date(a.repliedTime) - new Date(b.repliedTime);
  });

  // 수정 삭제 명세서 최신화하고 진행해야
  // 등록 시 로그인 여부 체크 / 수정 삭제는 아이디 같은 사람만
  const onDelete = (commentId) => {
    axios
      .delete(`/BE/reference/${postId}/comment/${commentId}`)
      .then((response) => {
        console.log(response);
        alert("댓글 삭제가 완료되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {replies &&
        replies.map((replies) => (
          <S.Parent>
            <div
              style={{ gridArea: "1 / 1 / 2 / 2", justifyContent: "center", display:'flex' }}>
              <MdOutlineSubdirectoryArrowRight style={{ fontSize: "23px" }} />
            </div>
            <div style={{ gridArea: "1 / 2 / 2 / 3" }}>
            <SS.ProfileSize src={replies.member.profileImage} style={{ position:'relative' }} alt='프로필 이미지' />
            </div>
            <div style={{ gridArea: "1 / 3 / 2 / 4", paddingLeft:'12px'}}>
              {replies.member.nickname}
              <br />
              <S.Nickname>{replies.content}</S.Nickname>
            </div>
            <div style={{ gridArea: "2 / 1 / 3 / 2" }}></div>
            <div style={{ gridArea: "2 / 2 / 3 / 3" }}></div>
            <div style={{ gridArea: "2 / 3 / 3 / 4", paddingLeft:'12px' }}>
              답글 | 수정하기 | 삭제하기
            </div>
          </S.Parent>
          // <div>
          //   <S.Differentiate />
          //   <table style={{ display: "inherit" }}>
          //     <tr>
          //       <td
          //         rowSpan="2"
          //         style={{
          //           width: "52px",
          //           display: "flex",
          //           justifyContent: "center",
          //         }}
          //       >
          //         <MdOutlineSubdirectoryArrowRight
          //           style={{ fontSize: "23px" }}
          //         />
          //       </td>
          //       <td rowSpan="2">
          //         <SS.ProfileSize
          //           src={replies.member.profileImage}
          //           style={{ position: "relative" }}
          //         />
          //       </td>
          //       <td style={{ width: "auto" }}>{replies.member.nickname}</td>
          //     </tr>
          //     <tr>
          //       <td>
          //         <S.Nickname>{replies.content}</S.Nickname>
          //       </td>
          //     </tr>
          //   </table>
          //   <span>대댓글 좋아요 {replies.likeCount}</span>
          //   <button onClick={onDelete}>삭제</button>
          // </div>
        ))}
    </>
  );
}
