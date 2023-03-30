import Layout from "../../layout/Layout";
import React from "react";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import Following from "../../containers/mypage/Follow/Following";
function PageFollowing() {
  return (
    <Layout>
      <MyPageContainer />
      <Following></Following>
    </Layout>
  )
}
export default PageFollowing;