import Layout from "../../layout/Layout";
import React from "react";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageFAQ from "../../containers/mypage/MyPageFAQ";
function MyPageFAQPage() {
  return (
    <Layout>
      <MyPageContainer />
      <MyPageFAQ></MyPageFAQ>
    </Layout>
  );
}
export default MyPageFAQPage;
