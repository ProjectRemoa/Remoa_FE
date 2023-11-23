import MyPageCommentContainer from "../MyPageCommentContainer";
import MyPageScrapContainer from "../MyPageScrapContainer";
import styledComponent from "./MyPageWorkContainer.styles";
const { Wrapper } = styledComponent;

function MyPageWorkContainer() {
  return (
    <Wrapper>
      <MyPageCommentContainer />
      <MyPageScrapContainer />
    </Wrapper>
  );
}

export default MyPageWorkContainer;
