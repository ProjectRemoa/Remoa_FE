import Layout from "../../layout/Layout";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageProfile from "../../containers/mypage/MyPageProfile";

function MyPageProfilePage() {
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
        <MyPageProfile />
      </div>
    </Layout>
  );
}
export default MyPageProfilePage;
