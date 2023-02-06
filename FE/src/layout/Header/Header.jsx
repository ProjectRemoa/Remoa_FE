import { useEffect, useRef, useState} from "react";
import styles from './Header.module.css';
import styled from "styled-components";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useNavigate } from "react-router-dom";

const Style = {
  Wrapper: styled.div`
    width: 100vw;
    height: 80px;
    display: flex;
    position: fixed;
    top: 0;
    justify-content: space-between;
    background-color: #FFF48C;
  `,
  Logo: styled.div`
    width: 224px;
    height: 80px;
    background-color: #D3A8FF;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    margin-left: 45px;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    margin-right:0px;
    @media ${props => props.theme.desktop} {

    }
    @media ${props => props.theme.mobile} {

    }
  `,
  NavWrapper: styled.div`
    width: 1550px;
    display: flex;
    align-items: center;
    margin-right: 75px;
    height: 80px;
    gap: 85px;
    position:relative;
  `,
  NavItemWrapper: styled.div`
    position:relative;
    left:0%;
    @media ${props => props.theme.desktop} {

    }
    @media ${props => props.theme.mobile} {
      display: none;
    }
  `,
  NavItem: styled.span`
    color: black;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    margin-right:30px;
  `,
  ButtonWrapper: styled.div`
    display:flex;
    flex-direction:row;
    position:absolute;
    right:0%;
    @media ${props => props.theme.desktop} {
      
    }
    @media ${props => props.theme.mobile} {
    }
  `,
  BellButton: styled.button`
    border: solid 2px white;
    width: 3rem;
    height : 3rem;
    background: #FFFFFF;
    border-radius: 50px;
    cursor: pointer;
    position:relative;
  `,
  BellNotice: styled.div`
    position:absolute;
    width: 10px;
    height : 10px;
    background: #F27A7A;
    border-radius: 50%;
    border: solid 0.5px white;
    left:28px;
    top:7px;

  `,
  StyledButton: styled.button` 
      width: 10rem;
      height : 3rem;
      background-color: white;
      color: #464646;
      font-size: 15px;
      border: solid 2px white;
      cursor: pointer;
      letter-spacing: 0.1em;
      font-weight: 550;
      display: flex;
      align-items : center;
      justify-content: center;
      background: #FFFFFF;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50px;
      margin-left:10px;
  `,
  HoverlineUnder1: styled.div` 
    width:75px;
    border:2px solid #FFFFFF;
    position:absolute;
    top:33px;
    left:3px;
  `,
  HoverlineUnder2: styled.div` 
    width:100px;
    border:2px solid #FFFFFF;
    position:absolute;
    top:33px;
    left:114px;
  `,
  HoverlineUnder3: styled.div` 
    width:95px;
    border:2px solid #FFFFFF;
    position:absolute;
    top:33px;
    left:249px;
  `,
};

const Header = () => {
  const Navigate=useNavigate();

  const refOnClick = () => {
    Navigate('/')
  };
  const taskOnClick = () => {
    Navigate('/manage/list')
  };
  const myOnClick = () => {
    Navigate('/mypage/profile')
  };

  const noticeOnClick = () => {

  }

  const loginOnClick = () => {
    Navigate('/login')
  }

  const bellOnClick = () => {
    
  }

  const shareOnClick = () => {
    
  }

  const signupOnClick = () => {
    
 }

  const loginYN=false;
  //구체적인 로그인 여부 작업 전이라 임시적으로 만든 변수로 boolean 값에 따라 다른 헤더 출력
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <Style.Logo>
          레모아 로고
        </Style.Logo>
        <Style.NavWrapper>
          <Style.NavItemWrapper>
            <Style.NavItem onClick={refOnClick}>레퍼런스</Style.NavItem>
            <Style.NavItem onClick={taskOnClick}>작업물 관리</Style.NavItem>
            <Style.NavItem onClick={myOnClick}>마이페이지</Style.NavItem>
            {(window.location.pathname.includes('/ref') || window.location.pathname=='/')
            ?<Style.HoverlineUnder1 />:""}
            {(window.location.pathname.includes('/manage'))?<Style.HoverlineUnder2 />:""}
            {(window.location.pathname.includes('/mypage'))?<Style.HoverlineUnder3 />:""}
          </Style.NavItemWrapper>

          <Style.ButtonWrapper>
            {(loginYN)? 
            <>
              <Style.BellButton onClick={noticeOnClick}>
                <NotificationsNoneIcon  style={{color:"B0B0B0",fontSize:"35px"}} onClick={bellOnClick} />
                <Style.BellNotice />
              </Style.BellButton>
              <Style.StyledButton onClick={shareOnClick}>
                작업물 공유하기
              </Style.StyledButton>
            </>:
            <>
              <Style.StyledButton onClick={loginOnClick}>
                로그인
              </Style.StyledButton>
              <Style.StyledButton onClick={signupOnClick}>
                회원가입
              </Style.StyledButton>
            </>}  
          </Style.ButtonWrapper>

        </Style.NavWrapper>
      </div>

      
    </header>
  );
};

export default Header;