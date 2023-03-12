import { MS } from "../../layout/ModalStyle";
import RMCommentList from "./modalComment/CommentList";
import RMCommentWrite from "./modalComment/CommentWrite";

export default function RefModalComment() {
  return (
    <MS.CommentWrapper>
      <RMCommentWrite />
      <RMCommentList />
    </MS.CommentWrapper>
  )
}