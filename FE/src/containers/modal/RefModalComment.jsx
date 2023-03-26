import { MS } from "../../layout/ModalStyle";
import RMCommentList from "./modalComment/CommentList";
import RMCommentWrite from "./modalComment/CommentWrite";

export default function RefModalComment(props) {
  const comments = props.comments;
  return (
    <MS.CommentWrapper>
      <RMCommentWrite />
      <RMCommentList comments={comments} />
    </MS.CommentWrapper>
  );
}
