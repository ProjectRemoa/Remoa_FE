import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function KakaoLogin() {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");
  sessionStorage.setItem("kakao", code);

  const sendToken = () => {
    // back에 인가 코드 보내기
    axios
      .get(`/BE/login/kakao?code=${code}`)
      .then((res) => {
        // 성공
        if (res.status === 201) {
          // 201 : 회원가입
          sessionStorage.setItem("email", res.data.data.email);
          sessionStorage.setItem("id", res.data.data.id);

          // 회원가입하는 회원이면 modal창을 켜야함
          sessionStorage.setItem("new", true);
          navigate("/sociallogin");
        } else if (res.status === 200) {
          // 200 : 로그인
          sessionStorage.setItem("nickname", res.data.data.nickname);
          sessionStorage.setItem("token", res.data.data.token);
          alert("환영합니다! " + sessionStorage.getItem("nickname") + "님!");
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("로그인 실패");
        navigate("/sociallogin");
      });
    sessionStorage.removeItem("kakao");
  };

  /* 카카오에서 인가코드 받아와서 백엔드에 넘겨주기 */
  useEffect(() => {
    sendToken();
  }, []);

  return <div></div>;
}

export default KakaoLogin;
