import Layout from "../../layout/Layout";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageFollow from "../../containers/mypage/MyPageFollow";

function MyPageFollowingPage() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MyPageContainer />
        <MyPageFollow />
      </div>
    </Layout>
  );
}
export default MyPageFollowingPage;
