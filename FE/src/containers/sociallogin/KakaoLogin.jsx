import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CLIENT_ID, KAKAO_AUTH_URL, REDIRECT_URL } from "./kakaodata";
import axios from "axios";

function KakaoLogin() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  sessionStorage.setItem("kakao", code);

  const sendToken = () => {
    // back에 인가 코드 보내기
    const config = { "Conteny-Type": "application/json" };
    const TokenForm = { code: sessionStorage.getItem("kakao") };
    console.log(sessionStorage.getItem("kakao"));
    console.log("=============================");
    axios
      .get(`http://localhost:8080/login/kakao?code=${code}}`)
      .then((res) => {
        console.log(res);
        alert("로그인 성공");
        if (res.status === 200) {
          console.log(res);
        }
        navigate("/sociallogin");
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 실패");
        navigate("/sociallogin");
      });
  };

  /* 카카오에서 토큰 받아와서 백엔드에 넘겨주기 */
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code");
    let grant_type = "authorization_code";

    sendToken();
    /*axios
      .get(`/login/kakao?code=${sessionStorage.getItem("id")}}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res);
        }
        navigate("/sociallogin");
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 실패");
        navigate("/sociallogin");
      });*/
  }, []);
  /* axios
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
        console.log(typeof res.data.access_token);
        sessionStorage.setItem("kakaotoken", res.data.access_token);
        sendToken();
      });
  });*/
  return <div></div>;
}

export default KakaoLogin;
