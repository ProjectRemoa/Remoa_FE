import { S } from "./CommentWriteReply.styles";
import { useState, useEffect } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { S as SS } from "../CommentList/CommentList.styles";
import { postCommentReply } from "../../../../apis/modal/commentReply";
import { getUserInfo, getUserProfileImg } from "../../../../apis/mypage/user";

export default function CommentWriteReply({
  id,
  openWriteAgain,
  setOpenWriteAgain,
  comments,
  postId,
  setComments,
}) {
  const [contents, setContents] = useState("");
  const token = sessionStorage.getItem("token");
  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
      setContents(inputValue.substring(0, 300));
      return;
    }
    setContents(inputValue);
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!token) {
      alert("로그인 후 이용해주세요.");
      window.location.href = "/sociallogin";
      return;
    }
    if (contents) {
      const response = await postCommentReply(postId, comments.commentId, {
        commentReply: contents,
      });
      setComments(response.data);
    } else {
      alert("내용을 입력하세요!");
    }
    setContents("");
    setOpenWriteAgain("");
  };

  const onCloseHandler = () => {
    setOpenWriteAgain("");
  };
  const getProfile = async () => {
    if (token) {
      const res = await getUserInfo();
      setUserData(res.nickname);
    } else {
      setUserData("비로그인 유저");
    }
  };

  const [userData, setUserData] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const getProfileImg = async () => {
    if (token) {

        const response = await getUserProfileImg()
        setProfileImage(response);
      
    } else {
      setProfileImage(
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Black_colour_br_.webp"
      );
    }
  };

  useEffect(() => {
    getProfile();
    getProfileImg();
  }, []);

  return (
    <div style={{ display: openWriteAgain === id ? "block" : "none", marginBottom:'10px' }}>
      <table>
        <tbody>
          <tr>
            <td rowSpan="2">
              <MdOutlineSubdirectoryArrowRight style={{ fontSize: "23px" }} />
            </td>
            <td rowSpan="2">
              <SS.ProfileSize
                src={profileImage}
                style={{ position: "relative" }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ position: "relative", width:'100%' }}>
              <S.Nickname>{userData}</S.Nickname>
              <S.WriteInput
                wrap="hard"
                onChange={onChangeContents}
                value={contents}
                placeholder="해당 작업물에 대한 의견을 최대 300자까지 남길 수 있어요!
          욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다."
              />
              <div
                style={{
                  position: "absolute",
                  right: 1,
                  bottom: 5,
                  margin: "12px",
                }}
              >
                <S.CloseButton
                  onClick={onCloseHandler}
                  style={{
                    marginRight: "12px",
                    backgroundColor: "white",
                    border: "1px solid black",
                  }}
                >
                  닫기
                </S.CloseButton>
                <S.CloseButton onClick={onSubmitHandler}>등록</S.CloseButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
