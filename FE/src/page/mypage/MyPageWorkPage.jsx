import React from "react";
import Layout from "../../layout/Layout";
import MyPageContainer from "../../containers/mypage/MyPageContainer";
import MyPageWorkContainer from "../../containers/mypage/MyPageWorkContainer";
function MyPageWorkPage() {
  return (
    <Layout>
      <MyPageContainer />
      <MyPageWorkContainer />
    </Layout>
  );
}

export default MyPageWorkPage;
