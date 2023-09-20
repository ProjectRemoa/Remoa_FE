import Layout from "../../layout/Layout";
import React from "react";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageProfile from "../../containers/mypage/MyPageProfile";

function MyPageProfilePage() {
  return (
    <Layout>
      <MyPageContainer />
      <MyPageProfile />
    </Layout>
  );
}
export default MyPageProfilePage;
