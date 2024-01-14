import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #fada5e;
  z-index: 3;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 120px;
  }
`;

export const HeaderInner = styled.div`
  display: flex;
  width: 100%;
  max-width: 1260px;
  align-items: center;
  margin: 0 auto;
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
  cursor: pointer;

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

export const UserAction = styled.div`
  margin-left: auto;
`;
