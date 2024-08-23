import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function AuthLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("nickname")) {
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
