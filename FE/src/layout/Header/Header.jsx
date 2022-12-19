import { useEffect, useRef, useState } from "react";
import styles from './Header.module.css';
import styled from "styled-components";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    justify-content: space-between;
    background-color: #FFF48C;
    z-index: 2;
  `,
  Logo: styled.div`
    width: 224px;
    height: 80px;
    background-color: #D3A8FF;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    margin-left: 60px;
    cursor: pointer;
  `,
  NavWrapper: styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-around; /*space-evenly;*/
    align-items: center;
    margin-right: 60px;
    height: 80px;
    gap: 85px;
  `,
  NavItem: styled.span`
    color: black;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
  `,
  StyledButton: styled.button` 
      width: 10rem;
      height : 3rem;
      background-color: white;
      color: black;
      font-size: 15px 10%;
      border: solid 2px white;
      cursor: pointer;
      border-radius: 5px;
      box-shadow: 1px 1px 1px 1px grey;
      letter-spacing: 0.2em;
      font-weight: 550;
      display: flex;
      align-items : center;
      border-radius: 30px;
      justify-content: center;
  `
};

const Header = ({ home, about, feature, gathering }) => {
  const [windowHeight, setWindowHeight] = useState();

  const refOnClick = () => {
    if (home !== undefined && home.current !== null)
      home.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
  };
  const taskOnClick = () => {
    if (about !== undefined && about.current !== null)
      about.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
  };
  const myOnClick = () => {
    if (feature !== undefined && feature.current !== null)
      feature.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
  };
  const qnaOnClick = () => {
    if (gathering !== undefined && gathering.current !== null)
      gathering.current.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
  };

  const noticeOnClick = () => {

  }

  const loginOnClick = () => {

  }

  console.log(windowHeight);
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <Style.Logo>
          로고
        </Style.Logo>


        <Style.NavWrapper>
            <Style.NavItem onClick={refOnClick}>레퍼런스</Style.NavItem>
            <Style.NavItem onClick={taskOnClick}>작업물 관리</Style.NavItem>
            <Style.NavItem onClick={myOnClick}>마이페이지</Style.NavItem>
            <Style.NavItem onClick={qnaOnClick}>고객센터</Style.NavItem>
            <Style.StyledButton onClick={noticeOnClick}>
              알림
            </Style.StyledButton>
            <Style.StyledButton onClick={loginOnClick}>
              로그인
            </Style.StyledButton>          
        </Style.NavWrapper>
      </div>

      
    </header>
  );
};

export default Header;