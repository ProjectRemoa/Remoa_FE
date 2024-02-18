import { S } from "./ui";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import React, { useState } from "react";
import axios from "axios";
import ModalCommentWriteAgain from "../ModalCommentWriteAgain";
import ModalCommentListAgain from "../ModalCommentListAgain";

export default function ModalCommentList({
  comments,
  postId,
  setComments,
  setAgainComments,
  againComments,
}) {
  comments.sort((a, b) => {
    return new Date(a.commentedTime) - new Date(b.commentedTime);
  });

  const [isEdit, setIsEdit] = useState(false);
  const [contents, setContents] = useState("");
  // const [timer, setTimer] = useState(null); // 디바운싱 구현

  // 수정할 member id
  const [putMemberId, setPutMemberId] = useState(0);

  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
      setContents(inputValue.substring(0, 300));
      return;
    }
    setContents(inputValue);
    // if (timer) clearTimeout(timer)

    // const newTimer = setTimeout(() => {
    //     setContents(inputValue);
    // }, 500);
    // console.log(contents)
    // setTimer(newTimer);
  };

  const onPutHandler = (commentId) => {
    const UploadComment = {
      comment: contents,
    };
    if (!contents) UploadComment.comment = contents;
    axios
      .put(`/BE/reference/comment/${commentId}`, UploadComment)
      .then((response) => {
        console.log(response);
        setComments(response.data.data);
        alert("댓글 수정이 완료되었습니다.");
        setPutMemberId(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = (commentId) => {
    axios
      .delete(`/BE/reference/comment/${commentId}`)
      .then((response) => {
        console.log(response);
        setComments(response.data.data);
        alert("댓글 삭제가 완료되었습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickThumb = (commentId) => {
    axios
      .post(`/BE/comment/${commentId}/like`)
      .then((res) => {
        console.log(res);
        axios
          .get(`/BE/reference/${postId}`)
          .then((res) => {
            console.log(res);
            setComments(res.data.data.comments);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 대댓
  const [openWriteAgain, setOpenWriteAgain] = useState("");
  const showAgain = (commentId) => {
    setOpenWriteAgain(commentId);
  };

  return (
    <div style={{ backgroundColor: "skyblue" }}>
      {comments &&
        comments.map((comments, index) => (
          <S.AgainWrapper key={index}>
            <S.AgainTable>
              <tbody>
                <tr style={{ display: "flex", position: "relative" }}>
                  <td style={{ width: "40px" }} rowSpan="3">
                    <S.ProfileSize src={comments.member.profileImage} alt="" />
                  </td>
                  <td>
                    <S.ProfileName>{comments.member.nickname}</S.ProfileName>
                  </td>
                </tr>

                <tr>
                  <td style={{ textAlign: "left", paddingLeft: "52px" }}>
                    {putMemberId === comments.commentId ? (
                      <div id={comments.commentId}>
                        <S.EditButton
                          onClick={() => {
                            return (
                              onPutHandler(comments.commentId),
                              setIsEdit(!isEdit)
                            );
                          }}
                        >
                          수정완료
                        </S.EditButton>
                        <S.WriteInput
                          placeholder="해당 작업물에 대한 의견을 최대 300자까지 남길 수 있어요!
                          욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다."
                          onChange={onChangeContents}
                          defaultValue={comments.comment}
                        />
                      </div>
                    ) : (
                      <div style={{ position: "relative" }}>
                        <S.Comment>{comments.comment}</S.Comment>
                      </div>
                    )}
                  </td>
                </tr>

                <tr>
                  <td style={{ height: "28px", paddingLeft: "52px" }}>
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
                        <S.ThumbCount
                          onClick={() => onClickThumb(comments.commentId)}
                        >
                          <BsFillHandThumbsUpFill />
                          <span>{comments.likeCount}</span>
                        </S.ThumbCount>
                      </S.CommentTableBottom>
                    )}
                  </td>
                </tr>
              </tbody>
            </S.AgainTable>
            <ModalCommentWriteAgain
              openWriteAgain={openWriteAgain}
              setOpenWriteAgain={setOpenWriteAgain}
              id={comments.commentId}
              postId={postId}
              comments={comments}
              setAgainComments={setAgainComments}
              againComments={againComments}
            />
            <ModalCommentListAgain
              replies={comments.replies}
              postId={postId}
              commentId={comments.commentId}
            />
          </S.AgainWrapper>
        ))}
    </div>
  );
}
