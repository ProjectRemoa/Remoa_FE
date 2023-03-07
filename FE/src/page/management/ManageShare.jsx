import Layout from "../../layout/Layout";
import React, { useEffect, useState } from "react";
import ManageContainer from "../../containers/manage/ManageContainer";
import ManageShareContainer from "../../containers/manage/ManageShareContainer";
import { useNavigate } from "react-router";
function ManageShare() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("id")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      alert("로그인 후 이용 가능합니다.");
      navigate("/sociallogin");
    }
  }, []);

  return (
    <Layout>
      {isLogin && (
        <>
          <ManageContainer />
          <ManageShareContainer />
        </>
      )}
    </Layout>
  );
}
export default ManageShare;
