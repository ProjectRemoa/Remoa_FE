import styled from "styled-components";

export const S = {
  Header: styled.nav`
    position: fixed;
    width: 100vw;
    height: 80px;
    background-color: #fada5e;
    z-index: 3;
  `,
  Contents: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Logo: styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 45px;
    img {
      width: 120px;
    }
    @media ${(props) => props.theme.desktop} {
    }
    @media ${(props) => props.theme.mobile} {
    }
  `,
  NavWrapper: styled.div`
    width: 1550px;
    display: flex;
    align-items: center;
  `,
  NavItemWrapper: styled.div`
    position: relative;
    left: 5%;
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
    right: 0;
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
