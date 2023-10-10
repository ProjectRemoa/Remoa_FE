import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import S from "./LoginCheck.styles";

function LoginCheck() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

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

  const onClickLogout = () => {
    axios
      .post("/BE/user/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
        alert("로그아웃 되었습니다.");
        window.location.replace("/"); // 새로고침
        navigate("/");
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

  const onClickLogin = () => {
    navigate("/sociallogin");
  };
  
  const onClickShare = () => {
    navigate("/manage/share");
  };
  
  return (
    <S.Container>
      {isLogin ? (
        <>
          <S.Button onClick={onClickLogout}>
            로그아웃
          </S.Button>
          <S.Button onClick={onClickShare}>
            작업물 공유하기
          </S.Button>
        </>
      ) : (
        <S.Button onClick={onClickLogin}>
          로그인
        </S.Button>
      )}
    </S.Container>
  );
}

export default LoginCheck;
