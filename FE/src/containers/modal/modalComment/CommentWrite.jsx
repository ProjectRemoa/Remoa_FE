import { MS } from "../../../layout/ModalStyle"
import { useState } from "react";

export default function RMCommentWrite() {
  const [contents, setContents] = useState("");
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  return(
    <MS.CommentWriteWrapper>
      <p style={{float:"left", fontSize:"20px"}}>Comment</p>
      <MS.WriteInput placeholder="해당 작업물에 대한 의견을 자유롭게 남겨주세요!
욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다." />
    </MS.CommentWriteWrapper>
  )
}