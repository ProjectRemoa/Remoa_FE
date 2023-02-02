import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CLIENT_ID, KAKAO_AUTH_URL, REDIRECT_URL } from "./kakaodata";
import axios from "axios";

function KakaoLogin() {
  const navigate = useNavigate();

  const sendToken = () => {
    // back에 인가 코드 보내기
  };
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("kakaotoken", res.data);
        sendToken();
      });
  });
  return <div></div>;
}

export default KakaoLogin;
