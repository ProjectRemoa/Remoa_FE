import { S } from "./CommentWrite.styles";
import React, { useState, useEffect } from "react";
import { postComment } from "../../../../apis/modal/comment";
import { getUserProfileImg } from "../../../../apis/mypage/user";
import CustomProfileImage from "../../../../components/common/ProfileSize";
import YellowButton from "../../../../components/common/Button/YellowButton.styles";
import { placeholder } from "../../../../components/common/Placeholder";
import { onChangeHandler } from "../../../../functions/onChangeHandler";
export default function CommentWrite({ postId, setComments }) {
  const [comment, setCommentChange] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const token = sessionStorage.getItem("accessToken");

  const onChangeComments = (event) => {
    onChangeHandler(event,300,setCommentChange)
  };

  const onSubmitHandler = async (e) => {
    if (comment) {
      e.preventDefault();
      try {
        const response = await postComment(postId, { comment });
        setComments(response.data);
        alert("댓글 등록이 완료되었습니다.");
      } catch (err) {
        console.log(err);
      }
    } else {
      e.preventDefault();
      alert("내용을 입력하세요!");
    }

    setCommentChange("");
  };

  const getProfileImg = async () => {
    if (token) {
      const response = await getUserProfileImg();
      setProfileImage(response);
    } else {
      setProfileImage(
        "https://upload.wikimedia.org/wikipedia/commons/e/ec/Black_colour_br_.webp"
      );
    }
  };
  useEffect(() => {
    getProfileImg();
  }, []);

  return (
    <S.CommentWriteWrapper>
      <S.CommentWriteHeader>
        <S.CommentTitle>Comment</S.CommentTitle>
      </S.CommentWriteHeader>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom:'20px' }}>
        <CustomProfileImage src={profileImage} style={{ marginTop: "12px" }} />
        <S.WriteInput
          placeholder={placeholder}
          onChange={onChangeComments}
          value={comment}
        />
      </div>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
      <YellowButton onClick={onSubmitHandler} style={{width:'72px',height:'40px'}}>
        <span>등록</span>
      </YellowButton>
      </div>
    </S.CommentWriteWrapper>
  );
}
