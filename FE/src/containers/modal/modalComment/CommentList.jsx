import { DF } from "../../../layout/DetailFeedbackStyle";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { useState } from "react";
import { MS } from "../../../layout/ModalStyle";
import axios from "axios";
export default function RMCommentList(props) {
  const comments = props.comments;
  const [isEdit, setIsEdit] = useState(false);
  const [contents, setContents] = useState("");
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const onPutHandler = () => {
    if (isEdit) {
      const UploadComment = {
        comment: contents,
      };
      const data = axios
        .put(`/BE/reference/comment/${props.postId}`, UploadComment)
        .then((response) => {
          if (response.status === 200) alert(response.data);
        })
        .catch(() => {
          alert("통신 오류");
        });

      return data;
    } else {
    }
  };
  const onDelete = () => {
    const data = axios
      .delete(`/BE/reference/comment/${props.postId}`)
      .then((response) => {
        if (response.status === 200) alert(response.data);
      })
      .catch(() => {
        alert("통신 오류");
      });
    return data;
  };
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
                  <td style={{ width: "100px" }}>{comments.member.nickname}</td>
                  <td
                    style={{ float: "left", position: "relative", top: "15px" }}
                  >
                    <DF.HeaderButton>
                      <ThumbUpIcon />
                      <DF.ThumbCount>{comments.likeCount}</DF.ThumbCount>
                    </DF.HeaderButton>
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
                      onClick={onDelete()}
                    >
                      삭제
                    </DF.HeaderButton>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="2" style={{ textAlign: "left" }}>
                    {isEdit ? (
                      <>
                        <MS.WriteInput
                          required
                          placeholder="해당 작업물에 대한 의견을 자유롭게 남겨주세요!
              욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다."
                          onChange={onChangeContents}
                          defaultValue={comments.comment}
                        />
                        <button onClick={onPutHandler}>수정 완료하기</button>
                      </>
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
