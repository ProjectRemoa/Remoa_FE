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
    console.log(sessionStorage.getItem("kakao"));
    console.log("=============================");
    // url이 자동으로 인코딩되지 않아 encodeURI 함수 사용
    // BE 측에서 CORS 설정하면 withCredentials 설정 안해도 되는 듯
    axios
      .get(`/login/kakao?code=` + encodeURI(code))
      .then((res) => {
        console.log(res);
        // 성공
        if (res.status === 200) {
          // 객체로 만들려고 했으나.. 처리가 불편한 관계로 따로 설정했음
          sessionStorage.setItem("email", res.data.data.email);
          sessionStorage.setItem("id", res.data.data.id);
          sessionStorage.setItem("image", res.data.data.image);
          sessionStorage.setItem("nickname", res.data.data.nickname);
        }
        // 회원가입하는 회원이면 modal창을 켜야함
        if (res.data.detail === "회원가입하는 회원입니다") {
          sessionStorage.setItem("new", true);
        } else {
          sessionStorage.setItem("new", false);
        }
        //alert("로그인 성공");
        navigate("/sociallogin");
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 실패");
        navigate("/sociallogin");
      });
  };

  /* 카카오에서 인가코드 받아와서 백엔드에 넘겨주기 */
  useEffect(() => {
    sendToken();
  }, []);
  return <div></div>;
}

export default KakaoLogin;
