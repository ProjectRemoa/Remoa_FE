import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { useState, useEffect } from "react";
import { S } from "./CommentListReply.styles";
import CustomProfileImage from "../../../../components/common/ProfileSize";
import CustomLikeButton from "../../../../components/common/LikeButton";
import {
  likeCommentReply,
  deleteCommentReply,
  putCommentReply,
} from "../../../../apis/modal/commentReply";
import { getReference } from "../../../../apis/modal/reference";
import { onChangeHandler } from "../../../../functions/onChangeHandler";
import YellowButton from "../../../../components/common/Button/YellowButton.styles";
import { placeholder } from "../../../../components/common/Placeholder";
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
    onChangeHandler(event, 300, setContents);
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
      <table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ display: "flex" }}>
            <td>
              <MdOutlineSubdirectoryArrowRight style={{ fontSize: "23px" }} />
            </td>
            <td>
              <CustomProfileImage src={reply.member.profileImage} />
            </td>
            <td style={{ width: "100%", paddingLeft: "5px" }}>
              <S.Nickname>{reply.member.nickname}</S.Nickname>
              <div style={{ margin: "6px 0" }}>
                {putMemberId === reply.member.memberId ? (
                  <div id={reply.commentReplyId}>
                    <S.WriteInput
                      placeholder={placeholder}
                      onChange={onChangeContents}
                      defaultValue={reply.content}
                    />
                    <YellowButton
                      onClick={() => onPutHandler(reply.commentReplyId)}
                      style={{width:'72px', height:'40px',float: "right",
                        marginTop: "10px",}}
                    >
                      수정
                    </YellowButton>
                  </div>
                ) : (
                  <>
                    <S.Content>{reply.content}</S.Content>
                  </>
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
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
                        &nbsp; | &nbsp;
                        <span onClick={() => onDelete(reply.commentReplyId)}>
                          삭제하기
                        </span>
                      </S.Edit>

                      <CustomLikeButton
                        style={{ position: "absolute", right: "15px" }}
                        onClick={() => onClickThumb(reply.commentReplyId)}
                        count={reply.likeCount}
                        isLiked={reply.isLiked}
                      />
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
