import { S } from "./Header.styles";
import { useNavigate } from "react-router-dom";
import img from "../../images/LEMOA_TEXT_MARK.png";
import axios from "axios";
import React, { useState, useEffect } from "react";
import LoginCheck from "../../containers/sociallogin/LoginCheck";

const Header = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("id") !== null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  const refOnClick = () => {
    navigate("/");
  };
  const taskOnClick = () => {
    navigate("/manage/list");
  };
  const myOnClick = () => {
    navigate("/mypage/profile");
  };

  const noticeOnClick = () => {};

  const loginOnClick = () => {
    navigate("/login");
  };

  const logoutOnClick = () => {
    axios.defaults.withCredentials = true;
    // 404 error 발생
    axios
      .post(`/user/logout`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    sessionStorage.removeItem("id");
    navigate("/");
  };

  const bellOnClick = () => {};

  const shareOnClick = () => {};

  const signupOnClick = () => {
    navigate("/signup");
  };

  return (
    <S.Header>
      <S.Contents>
        <S.Logo href="/">
          <img src={img} alt="로고대체" />
        </S.Logo>
        <S.NavWrapper>
          <S.NavItemWrapper>
            <S.NavItem onClick={refOnClick}>레퍼런스</S.NavItem>
            <S.NavItem onClick={taskOnClick}>작업물 관리</S.NavItem>
            <S.NavItem onClick={myOnClick}>마이페이지</S.NavItem>
            {window.location.pathname.includes("/ref") ||
            window.location.pathname == "/" ? (
              <S.HoverlineUnder1 />
            ) : (
              ""
            )}
            {window.location.pathname.includes("/manage") ? (
              <S.HoverlineUnder2 />
            ) : (
              ""
            )}
            {window.location.pathname.includes("/mypage") ? (
              <S.HoverlineUnder3 />
            ) : (
              ""
            )}
          </S.NavItemWrapper>
          <S.ButtonWrapper>
            <LoginCheck />
          </S.ButtonWrapper>
        </S.NavWrapper>
      </S.Contents>
    </S.Header>
  );
};

export default Header;
