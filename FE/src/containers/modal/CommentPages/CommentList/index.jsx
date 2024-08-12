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
import TextArea from "../../../../components/common/TextArea/TextArea.styles";
import Pre from "../../../../components/common/TextArea/Pre.styles";
import {
  EditNbsp,
  EditText,
} from "../../../../components/common/TextArea/Edit.styles";
import RefModalFollow from "../../RefModalFollow";
import { handleOnFollowModal } from "../../../../functions/handleOnFollowModal";

export default function ModalCommentList({ comments, postId, setComments }) {
  const [isEdit, setIsEdit] = useState(false);
  const [contents, setContents] = useState("");
  const [putMemberId, setPutMemberId] = useState(0);

  const onChangeContents = (event) => {
    onChangeHandler(event, 300, setContents);
  };
 
  const onPutHandler = async (commentId) => {
    let updatedContents = contents;
    if (!updatedContents) {
      const foundComment = comments.find(comment => comment.commentId === commentId).content;
      updatedContents = foundComment;
    }
  
    const response = await putComment(commentId, {
      comment: updatedContents,
    });
    setComments(response.data);
    setPutMemberId(0);
  };

  const onDelete = async (commentId) => {
    const response = await deleteComment(commentId);
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

  const [selectedPostId, setSelectedPostId] = useState("");

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
                      style={{ position: "absolute", cursor: "pointer" }}
                      onClick={() => handleOnFollowModal(comments.member.memberId, selectedPostId, setSelectedPostId)}
                    />

                    {comments.member.memberId === selectedPostId && (
                      <RefModalFollow member={comments.member} />
                    )}
                  </td>
                  <td>
                    <S.ProfileName>{comments.member.nickname}</S.ProfileName>
                    <div style={{ margin: "10px 0px" }}>
                      {putMemberId === comments.commentId ? ( // 일치할 때만 수정 가능한 칸
                        <div id={comments.commentId}>
                          <TextArea
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
                          <Pre>{comments.content}</Pre>
                        </div>
                      )}
                    </div>
                    {putMemberId !== comments.commentId && (
                      <S.CommentTableBottom>
                        <EditText
                          style={{ cursor: "pointer" }}
                          onClick={() => showAgain(comments.commentId)}
                        >
                          답글
                        </EditText>

                        {comments.member.nickname ===
                          sessionStorage.getItem("nickname") && (
                          <>
                            <EditNbsp>&nbsp; | &nbsp;</EditNbsp>
                            <EditText
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                //setIsEdit(!isEdit);
                                setPutMemberId(comments.commentId);
                                setContents(comments.comment);
                              }}
                            >
                              수정하기
                            </EditText>
                            <EditNbsp>&nbsp; | &nbsp;</EditNbsp>
                            <EditText
                              onClick={() => onDelete(comments.commentId)}
                              style={{ cursor: "pointer" }}
                            >
                              삭제하기
                            </EditText>
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
