import { S } from "./CommentWriteReply.styles";
import { useState, useEffect } from "react";
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import CustomProfileImage from "../../../../components/common/ProfileSize";
import { postCommentReply } from "../../../../apis/modal/commentReply";
import { getUserInfo, getUserProfileImg } from "../../../../apis/mypage/user";
import { onChangeHandler } from "../../../../functions/onChangeHandler";
import YellowButton from "../../../../components/common/Button/YellowButton.styles";
import WhiteButton from "../../../../components/common/Button/WhiteButton.styles";
import { placeholder } from "../../../../components/common/Placeholder";
import { checkNonMember } from "../../../../functions/checkNonMember";
import TextArea from "../../../../components/common/TextArea/TextArea.styles";

export default function CommentWriteReply({
  id,
  openWriteAgain,
  setOpenWriteAgain,
  comments,
  postId,
  setComments,
}) {
  const [contents, setContents] = useState("");
  const refreshToken = sessionStorage.getItem("refreshToken");
  const onChangeContents = (event) => {
    onChangeHandler(event, 300, setContents);
  };
  const onSubmitHandler = async (e) => {
    checkNonMember(refreshToken);

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
    if (refreshToken) {
      const res = await getUserInfo();
      setUserData(res.nickname);
    } else {
      setUserData("비로그인 유저");
    }
  };

  const [userData, setUserData] = useState("");
  const [profileImage, setProfileImage] = useState("");

  const getProfileImg = async () => {
    if (refreshToken) {
      const response = await getUserProfileImg();
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
    <div
      style={{
        display: openWriteAgain === id ? "block" : "none",
        marginBottom: "10px",
      }}
    >
      <table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ display: "flex" }}>
            <td>
              <MdOutlineSubdirectoryArrowRight style={{ fontSize: "23px" }} />
            </td>
            <td>
              <CustomProfileImage src={profileImage} />
            </td>
            <td style={{ position: "relative", width: "100%", paddingLeft: "5px" }}>
              <S.Nickname>{userData}</S.Nickname>
              <TextArea
                wrap="hard"
                onChange={onChangeContents}
                value={contents}
                placeholder={placeholder}
              />
              <div style={{display:'flex', marginTop:'10px', float:'right'}}>
                <WhiteButton
                  onClick={onCloseHandler}
                  style={{ width: "72px", height: "40px",marginRight:'10px' }}
                >
                  닫기
                </WhiteButton>
                <YellowButton
                  onClick={onSubmitHandler}
                  style={{ width: "72px", height: "40px" }}
                >
                  등록
                </YellowButton>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
