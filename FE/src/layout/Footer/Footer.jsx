import React from "react";
import styles from "./Footer.module.css";
import styled from "styled-components";
import img from "../../images/LOGO_SYMBOLMARK.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Style = {
  FooterEmail: styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
  `,
  FooterLogo: styled.img`
    width: 150px;
    height: 35px;
    margin: auto;
    display: block;
    position: relative;
    top: 10px;
  `,
  FooterLink: styled.div`
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    display: inline-block;
    text-align: center;
    margin: auto;
  `,
  onCursor: styled.span`
    margin-left: 44px;
    cursor: pointer;
  `,
};
function Footer() {
  const navigate = useNavigate();
  const logoutOnClick = () => {
    axios
      .post("/BE/user/logout", {}, { withCredentials: true })
      .then((res) => {
        console.log(res);
        alert("로그아웃 되었습니다.");
        window.location.replace("/");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
    sessionStorage.removeItem("nickname");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("new");
    navigate("/");
  };
  return (
    <footer
      className={styles.footer}
      style={
        window.location.href.includes("mypage/myfeedback") ||
        window.location.href.includes("manage/feedback") ||
        window.location.href.includes("manage/share") ||
        window.location.href.includes("user/list")
          ? { position: "relative" }
          : { position: "absolute", bottom: "-150px" }
      }
    >
      <div className={styles.contents}>
        <Style.FooterLogo src={img} alt="" />
        <br />

        <Style.FooterLink>
          <Style.FooterEmail>이메일 : referencemoa@gmail.com</Style.FooterEmail>
          <Style.onCursor style={{ marginLeft: "0px" }}>
            이용약관
          </Style.onCursor>
          <Style.onCursor>개인정보 처리방침</Style.onCursor>
          <Style.onCursor>문의하기</Style.onCursor>
          <Style.onCursor onClick={logoutOnClick}>로그아웃</Style.onCursor>
        </Style.FooterLink>
      </div>
    </footer>
  );
}

export default Footer;
