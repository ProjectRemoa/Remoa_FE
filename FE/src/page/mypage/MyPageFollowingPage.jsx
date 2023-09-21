import Layout from "../../layout/Layout";
import React from "react";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageFollow from "../../containers/mypage/MyPageFollow";

function MyPageFollowingPage() {
  return (
    <Layout>
      <MyPageContainer />
      <MyPageFollow />
    </Layout>
  );
}
export default MyPageFollowingPage;
