import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import img from "../../images/LEMOA_TEXT_MARK.png";
import LoginCheck from "../../containers/sociallogin/LoginCheck";
import S from "./Header.styles";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("id") !== null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

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
        <S.Items>
          <S.Item>
            <S.Logo href="/">
              <img src={img} alt="로고대체" />
            </S.Logo>
          </S.Item>
          <S.Item>
            <Link to="/">
              레퍼런스
              {Boolean(
                location.pathname.includes("/ref") || location.pathname === "/"
              ) && <S.HoverlineUnder1 />}
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/manage/list">
              작업물 관리
              {Boolean(location.pathname.includes("/manage")) && (
                <S.HoverlineUnder2 />
              )}
            </Link>
          </S.Item>
          <S.Item>
            <Link to="/mypage/profile">
              마이페이지
              {Boolean(location.pathname.includes("/mypage")) && (
                <S.HoverlineUnder3 />
              )}
            </Link>
          </S.Item>
        </S.Items>
      </S.Contents>
      <S.Contents>
        <LoginCheck />
      </S.Contents>
    </S.Header>
  );
}

export default Header;
