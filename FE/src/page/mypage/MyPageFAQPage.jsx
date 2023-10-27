import Layout from "../../layout/Layout";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageFAQ from "../../containers/mypage/MyPageFAQ";
function MyPageFAQPage() {
  return (
    <Layout>
      <div style={{ flexDirection: "column" }}>
        <MyPageContainer />
        <MyPageFAQ />
      </div>
    </Layout>
  );
}
export default MyPageFAQPage;
