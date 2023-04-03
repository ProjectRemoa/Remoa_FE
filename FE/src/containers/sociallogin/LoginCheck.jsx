import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import axios from "axios";

const Style = {
  StyledButton: styled.button`
    width: 7.5rem; //10rem;
    height: 2.5rem; //3rem;;
    background-color: white;
    color: #464646;
    font-size: 80%; //15px;;
    border: solid 2px white;
    cursor: pointer;
    letter-spacing: 0.1em;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    margin-left: 10px;
    float: left;
    font-family: NotoSansKR-500;
  `,
};

function LoginCheck() {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);

  // cookie로 진행하면 보안 문제에 매우 취약
  // localStorage나 sessionStorage를 권장

  useEffect(() => {
    if (
      sessionStorage.getItem("nickname") !== null ||
      sessionStorage.getItem("email") !== null
    ) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const logoutOnClick = () => {
    axios
      .post("/BE/user/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
        alert("로그아웃 되었습니다.");
        window.location.replace("/"); // 새로고침
        navigate("/");
        // JSESSIONID가 삭제는 안되고, 대신 무효화된다
      })
      .catch((err) => {
        console.log(err);
      });
    sessionStorage.removeItem("nickname");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("new");
    setIsLogin(false);
    navigate("/");
  };
  const loginOnClick = () => {
    navigate("/sociallogin");
  };
  const onClickShare = () => {
    navigate("/manage/share");
  };
  return (
    <div>
      {isLogin ? (
        <>
          <Style.StyledButton onClick={logoutOnClick}>
            로그아웃
          </Style.StyledButton>
          <Style.StyledButton onClick={onClickShare}>
            작업물 공유하기
          </Style.StyledButton>
        </>
      ) : (
        <Style.StyledButton onClick={loginOnClick}>로그인</Style.StyledButton>
      )}
    </div>
  );
}

export default LoginCheck;
