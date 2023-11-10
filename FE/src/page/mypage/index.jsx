import { useParams } from "react-router-dom";
import Layout from "../../layout/Layout";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageProfile from "../../containers/mypage/MyPageProfile";
import MyPageFollow from "../../containers/mypage/MyPageFollow";
import MyPageWorkContainer from "../../containers/mypage/MyPageWorkContainer";
import MyPageFeedback from "../../containers/mypage/MyPageFeedback";
import MyPageScrapContainer from "../../containers/mypage/MyPageScrapContainer";
import MyPageFAQ from "../../containers/mypage/MyPageFAQ";
import MyPageWrapper from "./MyPage.styles";

function MyPage() {
  const { id } = useParams();

  const params = {
    profile: MyPageProfile,
    following: MyPageFollow,
    work: MyPageWorkContainer,
    myfeedback: MyPageFeedback,
    scrap: MyPageScrapContainer,
    faq: MyPageFAQ,
  };

  const ParamsToRender = params[id];

  return (
    <Layout>
      <MyPageWrapper>
        <MyPageContainer />
        {ParamsToRender && <ParamsToRender />}
      </MyPageWrapper>
    </Layout>
  );
}

export default MyPage;
