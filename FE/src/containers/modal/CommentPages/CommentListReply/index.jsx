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
import TextArea from "../../../../components/common/TextArea/TextArea.styles";
import Pre from "../../../../components/common/TextArea/Pre.styles";
import {
  EditNbsp,
  EditText,
} from "../../../../components/common/TextArea/Edit.styles";
import RefModalFollow from "../../RefModalFollow";
import { handleOnFollowModal } from "../../../../functions/handleOnFollowModal";
export default function CommentListReply({
  reply,
  postId,
  commentId,
  setComments,
}) {
  const [putMemberId, setPutMemberId] = useState(0);
  const [contents, setContents] = useState("");
  const [selectedPostId, setSelectedPostId] = useState("");

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
    let updatedContents = contents;
    if (!updatedContents) {
      updatedContents = reply.content;
    }
    const response = await putCommentReply(commentId, replyId, {
      commentReply: updatedContents,
    });
    setComments(response.data);
    setPutMemberId(0);
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
              <div style={{ position: "relative" }}>
                <CustomProfileImage
                  src={reply.member.profileImage}
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    handleOnFollowModal(
                      reply.member.memberId,
                      selectedPostId,
                      setSelectedPostId
                    )
                  }
                />
                {reply.member.memberId === selectedPostId && (
                  <RefModalFollow member={reply.member} location={0} />
                )}
              </div>
            </td>
            <td style={{ width: "100%", paddingLeft: "5px" }}>
              <S.Nickname>{reply.member.nickname}</S.Nickname>
              <div style={{ margin: "6px 0" }}>
                {putMemberId === reply.member.memberId ? (
                  <div id={reply.commentReplyId}>
                    <TextArea
                      placeholder={placeholder}
                      onChange={onChangeContents}
                      defaultValue={reply.content}
                    />
                    <YellowButton
                      onClick={() => onPutHandler(reply.commentReplyId)}
                      style={{
                        width: "72px",
                        height: "40px",
                        float: "right",
                        marginTop: "10px",
                      }}
                    >
                      수정
                    </YellowButton>
                  </div>
                ) : (
                  <>
                    <Pre>{reply.content}</Pre>
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
                      <div>
                        <EditText
                          onClick={() => setPutMemberId(reply.member.memberId)}
                        >
                          수정하기
                        </EditText>
                        <EditNbsp>&nbsp; | &nbsp;</EditNbsp>
                        <EditText
                          onClick={() => onDelete(reply.commentReplyId)}
                        >
                          삭제하기
                        </EditText>
                      </div>

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
