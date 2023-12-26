import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 238px;
  max-height: 238px;
  padding: 44px 0 48px;
  background: #f5f5f5;

  // reset.css
  box-sizing: border-box;
`;

const FooterInner = styled.div`
  display: inline-flex;
  flex-direction: column;
  margin: 0 auto;
`;

const FooterLogo = styled.img`
  width: 150px;
  height: 35px;
  margin: auto;
  display: block;
  position: relative;
  top: 10px;
`;

const FooterLink = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  display: inline-block;
  text-align: center;
  margin: auto;
`;

const FooterEmail = styled.p`
  margin-top: 32px;
  font-size: 16px;
  font-weight: 500;
`;

const FooterMenu = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  gap: 0 60px;

  // reset.css
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    font-size: 16px;
    cursor: pointer;
  }
`;

const StyledComponents = {
  FooterContainer,
  FooterInner,
  FooterEmail,
  FooterLogo,
  FooterLink,
  FooterMenu,
};

export default StyledComponents;
