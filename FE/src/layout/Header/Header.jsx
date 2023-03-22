import styles from "./Header.module.css";
import styled from "styled-components";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useNavigate } from "react-router-dom";
import img from "../../images/로고대체.jpg";
import axios from "axios";
import { useState, useEffect } from "react";
import LoginCheck from "../../containers/sociallogin/LoginCheck";
const Style = {
  Header: styled.div`
    position: fixed;
    width: 1920px;
    height: 80px;
    background-color: #fada5e;
    z-index: 3;
    @media ${(props) => props.theme.desktop} {
      width: 1023px;
    }
    @media ${(props) => props.theme.mobile} {
      width: 767px;
    }
  `,
  Wrapper: styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-between;
    background-color: #fff48c;
  `,
  Logo: styled.div`
    width: 135px;
    height: 80px;
    background-color: #d3a8ff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    margin-left: 45px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    margin-right: 0px;
    @media ${(props) => props.theme.desktop} {
    }
    @media ${(props) => props.theme.mobile} {
    }
  `,
  NavWrapper: styled.div`
    width: 1550px;
    display: flex;
    align-items: center;
    margin-right: 75px;
    height: 80px;
    gap: 85px;
    position: relative;
  `,
  NavItemWrapper: styled.div`
    position: relative;
    left: 0%;
    @media ${(props) => props.theme.desktop} {
    }
    @media ${(props) => props.theme.mobile} {
      display: none;
    }
  `,
  NavItem: styled.span`
    color: black;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    margin-right: 30px;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 0%;
    @media ${(props) => props.theme.desktop} {
    }
    @media ${(props) => props.theme.mobile} {
    }
  `,
  BellButton: styled.button`
    border: solid 2px white;
    width: 3rem;
    height: 3rem;
    background: #ffffff;
    border-radius: 50px;
    cursor: pointer;
    position: relative;
  `,
  BellNotice: styled.div`
    position: absolute;
    width: 10px;
    height: 10px;
    background: #f27a7a;
    border-radius: 50%;
    border: solid 0.5px white;
    left: 28px;
    top: 7px;
  `,
  StyledButton: styled.button`
    width: 10rem;
    height: 3rem;
    background-color: white;
    color: #464646;
    font-size: 15px;
    border: solid 2px white;
    cursor: pointer;
    letter-spacing: 0.1em;
    font-weight: 550;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    margin-left: 10px;
  `,
  HoverlineUnder1: styled.div`
    width: 75px;
    border: 2px solid #ffffff;
    position: absolute;
    top: 33px;
    left: 3px;
  `,
  HoverlineUnder2: styled.div`
    width: 100px;
    border: 2px solid #ffffff;
    position: absolute;
    top: 33px;
    left: 114px;
  `,
  HoverlineUnder3: styled.div`
    width: 95px;
    border: 2px solid #ffffff;
    position: absolute;
    top: 33px;
    left: 249px;
  `,
};

const Header = () => {
  const Navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("id") !== null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  });

  const refOnClick = () => {
    Navigate("/");
  };
  const taskOnClick = () => {
    Navigate("/manage/list");
  };
  const myOnClick = () => {
    Navigate("/mypage/profile");
  };

  const noticeOnClick = () => {};

  const loginOnClick = () => {
    Navigate("/login");
  };

  const logoutOnClick = () => {
    axios.defaults.withCredentials = true;
    // 404 error 발생..
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
    Navigate("/");
  };

  const bellOnClick = () => {};

  const shareOnClick = () => {};

  const signupOnClick = () => {
    Navigate("/signup");
  };

  return (
    <Style.Header>
      <div className={styles.contents}>
        <Style.Logo>
          <img src={img} alt="로고대체" />
        </Style.Logo>
        <Style.NavWrapper>
          <Style.NavItemWrapper>
            <Style.NavItem onClick={refOnClick}>레퍼런스</Style.NavItem>
            <Style.NavItem onClick={taskOnClick}>작업물 관리</Style.NavItem>
            <Style.NavItem onClick={myOnClick}>마이페이지</Style.NavItem>
            {window.location.pathname.includes("/ref") ||
            window.location.pathname == "/" ? (
              <Style.HoverlineUnder1 />
            ) : (
              ""
            )}
            {window.location.pathname.includes("/manage") ? (
              <Style.HoverlineUnder2 />
            ) : (
              ""
            )}
            {window.location.pathname.includes("/mypage") ? (
              <Style.HoverlineUnder3 />
            ) : (
              ""
            )}
          </Style.NavItemWrapper>

          <Style.ButtonWrapper>
            <LoginCheck  />
            {/*{loginYN ? (
              <>
                <Style.BellButton onClick={noticeOnClick}>
                  <NotificationsNoneIcon
                    style={{ color: "B0B0B0", fontSize: "35px" }}
                    onClick={bellOnClick}
                  />
                  <Style.BellNotice />
                </Style.BellButton>
                <Style.StyledButton onClick={shareOnClick}>
                  작업물 공유하기
                </Style.StyledButton>
              </>
            ) : (
              <>
                <LoginCheck />
              </>
            )}*/}
          </Style.ButtonWrapper>
        </Style.NavWrapper>
      </div>
    </Style.Header>
  );
};

export default Header;
