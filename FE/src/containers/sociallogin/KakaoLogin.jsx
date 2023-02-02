import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { KAKAO_AUTH_URL } from "./kakaodata";
import axios from "axios";

function KakaoLogin() {
  // 인가 코드 받기
  const code = new URL(window.location.href).searchParams.get("code");
  // localStoarge에 인가 코드 저장
  sessionStorage.setItem("code", code);
  const navigate = useNavigate();

  useEffect(() => {
    getToken();
    console.log(sessionStorage.getItem("code"));
  });

  const getToken = () => {
    axios({
      method: "GET",
      url: `http://localhost:3000/sociallogin?code=${code}`,
    })
      .then((result) => {
        // result : 인가 코드 주고 토큰 받아옴(JWT)
        console.log(sessionStorage.getItem("code"));
        console.log(result);
        //localStorage.setItem("token", result.data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("로그인에 실패하였습니다.");
        navigate("/sociallogin");
      });
  };
  return <div></div>;
}

export default KakaoLogin;
