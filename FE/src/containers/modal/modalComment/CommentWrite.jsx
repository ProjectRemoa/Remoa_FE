import { MS } from "../../../layout/ModalStyle"
import { useState, useEffect } from "react";
import axios from 'axios'

export default function RMCommentWrite() {
  const [contents, setContents] = useState("")
  const [commentList, setCommentList] = useState([]);
  let postId
  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const fetchData = async (postId) => {
    // const response = await axios.get(`localhost:8080/reference/${postId}/comment`)
    // setCommentList(response.data)
  }
  useEffect(() => {fetchData()},[]);

  const onSumbitHandler = async (postId) => {
    // postId.preventDefault()
    // await axios.post(`localhost:8080/reference/${postId}/comment`,contents)
    // .then((response) => {
    //   if (response.status === 200) alert("성공");
    // })
    // .catch(() => {alert("통신 오류");});
    // fetchData(postId)
  }

  return(
    <MS.CommentWriteWrapper>
      <p style={{float:"left", fontSize:"20px"}}>Comment</p>
      <MS.CommentButton>댓글 등록</MS.CommentButton>
      <MS.WriteInput required placeholder="해당 작업물에 대한 의견을 자유롭게 남겨주세요!
        욕설이나 비방 등 이용약관에 위배되는 코멘트는 서비스 이용 정지 사유가 될 수 있습니다." onChange={onChangeContents} />
    </MS.CommentWriteWrapper>
  )
}