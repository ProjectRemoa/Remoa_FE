import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { S } from "./CommentListReply.styles";
import { S as SS } from "../CommentList/CommentList.styles";
import { B } from "../../../../styles/Button";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import {
  likeCommentReply,
  deleteCommentReply,
  putCommentReply,
} from "../../../../apis/modal/commentReply";
import { getReference } from "../../../../apis/modal/reference";

export default function CommentListReply({
  reply,
  postId,
  commentId,
  setComments,
}) {
  const [putMemberId, setPutMemberId] = useState(0);
  const [originalContent, setOriginalContent] = useState("");
  const [contents, setContents] = useState("");

  useEffect(() => {
    // 초기 데이터로 상태 설정
    setContents(reply.content);
    setOriginalContent(reply.content);
  }, [reply]);

  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
      setContents(inputValue.substring(0, 300));
      return;
    }
    setContents(inputValue);
  };

  const onClickThumb = async (replyId) => {
    const res = await likeCommentReply(replyId);
    try {
      const res = await getReference(postId);
      setComments(res.data.comments);
    } catch (err) {
      console.log(err);
    }
  };
  const onDelete = async (replyId) => {
    const response = await deleteCommentReply(commentId, replyId);
    setComments(response.data);
  };

  const onPutHandler = async (replyId) => {
    try {
      if (contents === originalContent) {
        alert("변경된 내용이 없습니다.");
        return;
      }

      const response = await putCommentReply(commentId, replyId, {
        commentReply: contents,
      });
      setComments(response.data);
      setPutMemberId(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.Parent>
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <td>
              <MdOutlineSubdirectoryArrowRight style={{ fontSize: "23px" }} />
            </td>
            <td>
              <SS.ProfileSize
                src={reply.member.profileImage}
                style={{position:'relative'}}
                alt=""
              />
            </td>
            <td style={{width:'100%'}}>
              <S.Nickname>{reply.member.nickname}</S.Nickname>
              <div style={{margin:"10px 0"}}>
              {putMemberId === reply.member.memberId ? (
                <div id={reply.commentReplyId}>
                  <S.EditButton
                    onClick={() => onPutHandler(reply.commentReplyId)}
                  >
                    수정완료
                  </S.EditButton>
                  <S.WriteInput
                    placeholder="해당 작업물에 대한 의견을 최대 300자까지 남길 수 있어요! 욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다."
                    onChange={onChangeContents}
                    defaultValue={reply.content}
                  />
                </div>
              ) : (
                <>
                  <S.Content>{reply.content}</S.Content>
                </>
              )}
              </div>
              <div style={{display:'flex', alignItems:'center'}}>
                {putMemberId !== reply.member.memberId &&
                  reply.member.nickname ===
                    sessionStorage.getItem("nickname") && (
                    <>
                      <S.Edit>
                        <span
                          onClick={() => setPutMemberId(reply.member.memberId)}
                        >
                          수정하기
                        </span>
                        &nbsp;|&nbsp;
                        <span onClick={() => onDelete(reply.commentReplyId)}>
                          삭제하기
                        </span>
                      </S.Edit>

                      <B.LikeButton 
                      onClick={() => onClickThumb(reply.commentReplyId)}
                      style={{position:'absolute', right:'15px'}}
                      >
                        <BsFillHandThumbsUpFill />
                        <span>{reply.likeCount}</span>
                      </B.LikeButton>
                    </>
                  )}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </S.Parent>
  );
}
