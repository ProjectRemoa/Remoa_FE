import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CLIENT_ID, KAKAO_AUTH_URL, REDIRECT_URL } from "./kakaodata";
import axios from "axios";
import { useCookies, Cookies } from "react-cookie";

function KakaoLogin() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  sessionStorage.setItem("kakao", code);

  const sendToken = () => {
    // back에 인가 코드 보내기
    console.log("인가코드 : " + sessionStorage.getItem("kakao"));
    console.log("=============================");
    // url이 자동으로 인코딩되지 않아 encodeURI 함수 사용
    // BE 측에서 CORS 설정하면 withCredentials 설정 안해도 되는 듯
    axios
      .get(`/BE/login/kakao?code=` + encodeURI(code))
      .then((res) => {
        console.log(res);

        // 성공
        if (res.status === 201) {
          // 201 : 회원가입
          // 객체로 만들려고 했으나.. 처리가 불편한 관계로 따로 설정했음
          localStorage.setItem("email", res.data.data.email);
          localStorage.setItem("id", res.data.data.id);
          localStorage.setItem("image", res.data.data.image);
          localStorage.setItem("nickname", res.data.data.nickname);

          // 회원가입하는 회원이면 modal창을 켜야함
          localStorage.setItem("new", true);
          navigate("/sociallogin");
        } else if (res.status === 200) {
          // 200 : 로그인
          localStorage.setItem("id", res.data.data.id);
          alert("환영합니다! " + res.data.data.nickname + "님!");
          navigate("/");
        }
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
