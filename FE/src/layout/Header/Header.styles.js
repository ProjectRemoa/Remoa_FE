import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 80px;
  background-color: #fada5e;
  z-index: 3;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 45px;
  img {
    width: 120px;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
`;

export const Items = styled.ul`
  // reset.css
  margin: 0;
  padding: 0;
  list-style: none;

  display: flex;
  align-items: center;
  margin-left: 120px;
  gap: 0 64px;

  @media ${(props) => props.theme.desktop} {
    margin-left: 60px;
    gap: 0 40px;
  }
  @media ${(props) => props.theme.mobile} {
    margin-left: 30px;
  }
`;

export const Item = styled.li`
  font-weight: bold;
  font-size: 16px;

  a {
    color: black;
    text-decoration: none;
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: calc(100% + 6px);
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% + 22px);
      border-bottom: 4px solid #ffffff;
    }
  }
`;
