import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import S from "./LoginCheck.module.css"

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

  const logoutOnClick = () => {
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
  const loginOnClick = () => {
    navigate("/sociallogin");
  };
  const onClickShare = () => {
    navigate("/manage/share");
  };
  return (
    <div className={S.Containter}>
      {isLogin ? (
        <>
            <button className={S.Button} onClick={logoutOnClick}>
              로그아웃
            </button>
            <button className={S.Button} onClick={onClickShare}>
              작업물 공유하기
            </button>
        </>
      ) : (
        <button className={S.Button} onClick={loginOnClick}>
          로그인
        </button>
      )}
    </div>
  );
}

export default LoginCheck;
