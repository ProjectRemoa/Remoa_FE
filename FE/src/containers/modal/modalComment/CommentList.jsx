import { DF } from "../../../layout/DetailFeedbackStyle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import React, { useState } from "react";
import { MS } from "../../../layout/ModalStyle";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RMCommentList(props) {
  const comments = props.comments;
  const [isEdit, setIsEdit] = useState(false);
  const [contents, setContents] = useState("");
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const navigate = useNavigate();
  console.log(props);

  const onPutHandler = (commentId) => {
    if (isEdit) {
      const UploadComment = {
        comment: contents,
      };
      //const data =

      axios
        .put(`/BE/reference/comment/${commentId}`, UploadComment)
        .then((response) => {
          console.log(response);
          props.setComments({ comments: response.data.data });
          alert("댓글 수정이 완료되었습니다.");
        })
        .catch((err) => {
          console.log(err);
        });
      //navigate("/");

      //return data;
    } else {
      console.log(isEdit);
    }
  };
  const onDelete = (commentId) => {
    //const data = axios
    axios
      .delete(`/BE/reference/comment/${commentId}`)
      .then((response) => {
        console.log(response);
        props.setComments({ comments: response.data.data });
        alert("댓글 삭제가 완료되었습니다.");
        // if (response.status === 200) alert(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    //return data;
  };

  const onClickThumb = (commentId) => {
    axios
      .post(`/BE/comment/${commentId}/like`)
      .then((res) => {
        console.log(res);
        setThumb(res.data.data.LikeCount);
        alert("댓글을 추천하였습니다.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [thumb, setThumb] = useState(0);

  return (
    <>
      {comments &&
        comments.map((comments, index) => (
          <DF.AgainWrapper key={index}>
            <DF.AgainTable>
              <tbody>
                <tr>
                  <td>
                    <DF.ProfileSize src={comments.member.profileImage} />
                  </td>
                  <td style={{ width: "100px", fontSize: "90%" }}>
                    {comments.member.nickname}
                  </td>
                  <td
                    style={{ float: "left", position: "relative", top: "15px" }}
                  >
                    <DF.HeaderButton>
                      <ThumbUpIcon
                        onClick={() => onClickThumb(comments.commentId)}
                      />
                      <DF.ThumbCount>{thumb}</DF.ThumbCount>
                    </DF.HeaderButton>
                    {comments.member.nickname ===
                      // 내가 해당 댓글 작성자여야만 수정 버튼이 보여야 함
                      sessionStorage.getItem("nickname") && (
                      <>
                        <DF.HeaderButton
                          style={{
                            top: "-4px",
                            position: "relative",
                            color: "black",
                            marginLeft: "22px",
                          }}
                          onClick={() => {
                            setIsEdit(!isEdit);
                          }}
                        >
                          수정
                        </DF.HeaderButton>
                        <DF.HeaderButton
                          style={{
                            top: "-4px",
                            position: "relative",
                            color: "black",
                            marginLeft: "22px",
                          }}
                          onClick={() => onDelete(comments.commentId)}
                        >
                          삭제
                        </DF.HeaderButton>
                      </>
                    )}
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="2" style={{ textAlign: "left" }}>
                    {isEdit ? (
                      <div id={comments.commentId}>
                        <MS.WriteInput
                          required
                          placeholder="해당 작업물에 대한 의견을 자유롭게 남겨주세요!
                          욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다."
                          onChange={onChangeContents}
                          defaultValue={comments.comment}
                        />
                        <button
                          onClick={() => {
                            return onPutHandler(comments.commentId);
                          }}
                        >
                          수정 완료하기
                        </button>
                      </div>
                    ) : (
                      comments.comment
                    )}
                  </td>
                </tr>
              </tbody>
            </DF.AgainTable>
          </DF.AgainWrapper>
        ))}
    </>
  );
}
