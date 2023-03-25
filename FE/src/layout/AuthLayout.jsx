import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function AuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("nickname")) {
      alert("로그인 후 이용해주세요.");
      navigate("/sociallogin");
    }
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
}

export default AuthLayout;
