import Layout from "../../layout/Layout";
import React from "react";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageScrapContainer from "../../containers/mypage/MyPageScrapContainer";
function MyPageScrapPage() {
  return (
    <Layout>
      <MyPageContainer />
      <MyPageScrapContainer />
    </Layout>
  );
}
export default MyPageScrapPage;
