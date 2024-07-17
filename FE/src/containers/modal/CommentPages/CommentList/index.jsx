import { S } from "./CommentList.styles";
import CustomLikeButton from "../../../../components/common/LikeButton";
import React, { useState, useEffect } from "react";
import CommentWriteReply from "../CommentWriteReply";
import CommentListReply from "../CommentListReply";
import {
  deleteComment,
  likeComment,
  putComment,
} from "../../../../apis/modal/comment";
import { getReference } from "../../../../apis/modal/reference";
import CustomProfileImage from "../../../../components/common/ProfileSize";
import { onChangeHandler } from "../../../../functions/onChangeHandler";
import YellowButton from "../../../../components/common/Button/YellowButton.styles";
import { placeholder } from "../../../../components/common/Placeholder";
export default function ModalCommentList({ comments, postId, setComments }) {
  const [isEdit, setIsEdit] = useState(false);
  const [contents, setContents] = useState("");
  const [originalContent, setOriginalContent] = useState("");
  const [putMemberId, setPutMemberId] = useState(0);

  const onChangeContents = (event) => {
    onChangeHandler(event, 300, setContents);
  };
  // [{},{} 배열 형태로 들어옴]
  useEffect(() => {
    // 초기 데이터로 상태 설정
    setContents(comments.content);
    setOriginalContent(comments.content);
  }, [comments]);

  const onPutHandler = async (commentId) => {
    if (contents === originalContent) {
      alert("변경된 내용이 없습니다.");
      return;
    }

    const response = await putComment(commentId, {
      comment: contents,
    });
    console.log(response);
    setComments(response.data);
    alert("댓글 수정이 완료되었습니다.");
    setPutMemberId(0);
  };

  const onDelete = async (commentId) => {
    const response = await deleteComment(commentId);
    console.log(response);
    setComments(response.data);
  };

  const onClickThumb = async (commentId) => {
    const res = await likeComment(commentId);
    try {
      const res = await getReference(postId);
      setComments(res.data.comments);
    } catch (err) {
      console.log(err);
    }
  };

  // 대댓
  const [openWriteAgain, setOpenWriteAgain] = useState("");
  const showAgain = (commentId) => {
    setOpenWriteAgain(commentId);
  };

  return (
    <div>
      {comments &&
        comments.map((comments, index) => (
          <>
            <S.AgainTable key={index}>
              <tbody>
                <tr>
                  <td style={{ width: "40px" }}>
                    <CustomProfileImage
                      src={comments.member.profileImage}
                      alt=""
                      style={{ position: "absolute" }}
                    />
                  </td>
                  <td>
                    <S.ProfileName>{comments.member.nickname}</S.ProfileName>
                    <div style={{ margin: "10px 0px" }}>
                      {putMemberId === comments.commentId ? ( // 일치할 때만 수정 가능한 칸
                        <div id={comments.commentId}>
                          <S.WriteInput
                            placeholder={placeholder}
                            onChange={onChangeContents}
                            defaultValue={comments.content}
                          />
                          <YellowButton
                            style={{
                              width: "72px",
                              height: "40px",
                              float: "right",
                              marginTop: "10px",
                            }}
                            onClick={() => {
                              return (
                                onPutHandler(comments.commentId),
                                setIsEdit(!isEdit)
                              );
                            }}
                          >
                            수정
                          </YellowButton>
                        </div>
                      ) : (
                        <div>
                          <S.Comment>{comments.content}</S.Comment>
                        </div>
                      )}
                    </div>
                    {putMemberId !== comments.commentId && (
                      <S.CommentTableBottom>
                        <div
                          style={{ cursor: "pointer" }}
                          onClick={() => showAgain(comments.commentId)}
                        >
                          답글
                        </div>

                        {comments.member.nickname ===
                          sessionStorage.getItem("nickname") && (
                          <>
                            &nbsp; | &nbsp;
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                //setIsEdit(!isEdit);
                                setPutMemberId(comments.commentId);
                                setContents(comments.comment);
                              }}
                            >
                              수정하기
                            </div>
                            &nbsp; | &nbsp;
                            <div
                              onClick={() => onDelete(comments.commentId)}
                              style={{ cursor: "pointer" }}
                            >
                              삭제하기
                            </div>
                          </>
                        )}
                        <CustomLikeButton
                          style={{ position: "absolute", right: 0 }}
                          onClick={() => onClickThumb(comments.commentId)}
                          count={comments.likeCount}
                          isLiked={comments.isLiked}
                        />
                      </S.CommentTableBottom>
                    )}
                  </td>
                </tr>
              </tbody>
            </S.AgainTable>
            <S.Differentiate style={{ margin: "20px 0px" }} />
            <CommentWriteReply
              openWriteAgain={openWriteAgain}
              setOpenWriteAgain={setOpenWriteAgain}
              id={comments.commentId}
              postId={postId}
              comments={comments}
              setComments={setComments}
            />
            {comments?.commentReplies.map((reply, index) => (
              <CommentListReply
                key={index}
                reply={reply}
                postId={postId}
                commentId={comments.commentId}
                setComments={setComments}
              />
            ))}
          </>
        ))}
    </div>
  );
}
