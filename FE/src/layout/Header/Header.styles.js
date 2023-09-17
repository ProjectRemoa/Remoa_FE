import styled from "styled-components";

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #fada5e;
  z-index: 3;
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;
const Item = styled.li`
  font-weight: bold;
  font-size: 20px;
  margin-right: 30px;
  position: relative;
  a {
    color: black;
    text-decoration: none;
    /* text-decoration-color: white;
      text-decoration-thickness: 3px;
      text-underline-offset: 6px; */
  }
  @media ${(props) => props.theme.desktop} {
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
const Underline = styled.span``;

const Logo = styled.a`
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
`;

const HoverlineUnder1 = styled.div`
  width: 75px;
  border: 2px solid #ffffff;
  position: absolute;
  top: 30px;
`;
const HoverlineUnder2 = styled.div`
  width: 100px;
  border: 2px solid #ffffff;
  position: absolute;
  top: 30px;
`;
const HoverlineUnder3 = styled.div`
  width: 95px;
  border: 2px solid #ffffff;
  position: absolute;
  top: 30px;
`;

const BellButton = styled.button`
  border: solid 2px white;
  width: 3rem;
  height: 3rem;
  background: #ffffff;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
`;
const BellNotice = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #f27a7a;
  border-radius: 50%;
  border: solid 0.5px white;
  left: 28px;
  top: 7px;
`;
const StyledButton = styled.button`
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
`;

const S = {
  Header,
  Contents,
  Items,
  Item,
  Underline,
  Logo,
  HoverlineUnder1,
  HoverlineUnder2,
  HoverlineUnder3,
  BellButton,
  BellNotice,
  StyledButton,
};

export default S;
