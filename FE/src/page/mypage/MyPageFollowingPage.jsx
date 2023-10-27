import Layout from "../../layout/Layout";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageFollow from "../../containers/mypage/MyPageFollow";

function MyPageFollowingPage() {
  return (
    <Layout>
      <div style={{ flexDirection: "column" }}>
        <MyPageContainer />
        <MyPageFollow />
      </div>
    </Layout>
  );
}
export default MyPageFollowingPage;
