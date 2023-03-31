import Layout from "../../layout/Layout";
import React from "react";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import Follow from "../../containers/mypage/Follow"
function PageFollowing() {
  return (
    <Layout>
      <MyPageContainer />
      <Follow></Follow>
    </Layout>
  )
}
export default PageFollowing;