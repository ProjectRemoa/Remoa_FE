import MyPageCommentContainer from "../MyPageCommentContainer";
import MyPageScrapContainer from "../MyPageScrapContainer";
import styledComponent from "./MyPageWorkContainer.styles";
const { Wrapper, HorizonLine } = styledComponent;

function MyPageWorkContainer() {
  return (
    <Wrapper>
      <MyPageCommentContainer />
      <HorizonLine />
      <MyPageScrapContainer />
    </Wrapper>
  );
}

export default MyPageWorkContainer;
