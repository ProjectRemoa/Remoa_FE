import React from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import kakao_login from "../../images/kakako_login.png";
import { KAKAO_AUTH_URL } from "./kakaodata";
import axios from "axios";
import { useEffect } from "react";
import KakaoLogin from "./KakaoLogin";

const Style = {
  Container: styled.div`
    box-sizing: border-box;
    width: 450px; //100%;
    height: 60px;
    background: #f8f8f8;
    border-radius: 30px;
    font-family: "NotoSansKR-700";
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    font-family: NotoSansKR-700;
  `,

  Wrapper: styled.div`
    width: 450px;
    margin: 0px auto;
    font-family: NotoSansKR-400;
    font-weight: 500;
  `,
};

function SocialLoginContainer() {
  const code = new URL(window.location.href).searchParams.get("code");

  const navigate = useNavigate();

  useEffect(() => {
    console.log(code);
  }, [code]);

  /*const getSession = () => {
    const config = { "Conteny-Type": "application/json" };
    axios
      .post("/signup/kakao", code, config)
      .then((result) => {
        console.log(result);
        if (result.status === 200 && result.data !== "login fail") {
        }
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("로그인에 실패하였습니다.");
        navigate("/sociallogin");
      });
  };*/

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          lineHeight: "40px",
          fontSize: "1.5rem",
          fontFamily: "NotoSansKR-700",
          marginBottom: "40px",
        }}
      >
        간단한 로그인으로 <br /> 공모전 관련 자료를 자유롭게 찾아보세요
      </div>

      <Style.Container>
        📚 공모전 수상작을 포함한 참가 작품들을 자유롭게 열람
      </Style.Container>
      <Style.Container>
        💡참가작 공유를 통한 다양한 피드백 및 코멘트 수령
      </Style.Container>

      <Style.Wrapper>
        <span
          style={{
            fontSize: "0.8rem",
          }}
        >
          카카오 계정으로 3초만에 가입하기
        </span>
        <a href={KAKAO_AUTH_URL}>
          <img src={kakao_login} alt="kakaologin" />
        </a>
      </Style.Wrapper>
    </div>
  );
}

export default SocialLoginContainer;
