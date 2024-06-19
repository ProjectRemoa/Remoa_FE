import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { S } from "./ModalCommentListAgain.styles";
import { S as SS } from "../ModalCommentList/ModalCommentList.styles";
import { B } from "../../../../styles/Button";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { deleteCommentAgain, putCommentAgain } from "../../../../apis/modal/commentAgain";

export default function ModalCommentListAgain({
  replies,
  setAgainComments,
  againComments,
  postId,
  commentId,
}) {
  if (Array.isArray(replies)) {
    replies.sort((a, b) => {
      return new Date(a.commentRepliedTime) - new Date(b.commentRepliedTime);
    });
  }

  const onDelete = async (commentReplyId) => {
    try {
      const response = await deleteCommentAgain(commentId, commentReplyId);
      setAgainComments(response.data)
    } catch (err) {
      console.log(err);
    }
  };
/* 
  const onPutHandler = async (commentReplyId) => {
    try {
      if (contents === originalContent) {
        alert('변경된 내용이 없습니다.');
        return;
      }
      
      const response = await putCommentAgain(commentReplyId, {
        comment: contents,
      });
      console.log(response);
      setComments(response.data);
      alert("댓글 수정이 완료되었습니다.");
      setPutMemberId(0);
    } catch (err) {
      console.log(err);
    }
  };
*/
  return (
    <>
      {replies &&
        replies.map((replies) => (
          <S.Parent>
            <div
              style={{
                gridArea: "1 / 1 / 2 / 2",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <MdOutlineSubdirectoryArrowRight style={{ fontSize: "23px" }} />
            </div>
            <div style={{ gridArea: "1 / 2 / 2 / 3" }}>
              <SS.ProfileSize
                src={replies.member.profileImage}
                style={{ position: "relative" }}
                alt=""
              />
            </div>
            <div
              style={{
                gridArea: "1 / 3 / 2 / 4",
                paddingLeft: "12px",
              }}
            >
              <S.Nickname>{replies.member.nickname}</S.Nickname>
              <S.Content>{replies.content}</S.Content>
            </div>
            <div style={{ gridArea: "2 / 1 / 3 / 2" }}></div>
            <div style={{ gridArea: "2 / 2 / 3 / 3" }}></div>
            <div
              style={{
                gridArea: "2 / 3 / 3 / 4",
                paddingLeft: "12px",
              }}
            >
              {replies.member.nickname ===
                sessionStorage.getItem("nickname") && (
                <S.Edit><span>수정하기</span> &nbsp;|&nbsp; <span onClick={onDelete(replies.commentReplyId)}>삭제하기</span></S.Edit>
              )}
              <B.LikeButton
                style={{ top: "-22px", position: "relative", left: "1136px" }}
              >
                <BsFillHandThumbsUpFill />0
              </B.LikeButton>
            </div>
          </S.Parent>
        ))}
    </>
  );
}
