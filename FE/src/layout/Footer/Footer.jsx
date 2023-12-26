import img from '../../images/LOGO_SYMBOLMARK.png';

import { useAuth } from '../../hooks/useAuth';

import StyledComponents from './Footer.styles';
const {
  FooterContainer,
  FooterInner,
  FooterEmail,
  FooterLogo,
  FooterLink,
  FooterMenu,
} = StyledComponents;

function Footer() {
  const { handleLogout } = useAuth();

  return (
    <FooterContainer>
      <FooterInner>
        <FooterLogo src={img} alt="" />
        <FooterLink>
          <FooterEmail>이메일 : referencemoa@gmail.com</FooterEmail>

          <FooterMenu>
            <li>이용약관</li>
            <li>개인정보 처리방침</li>
            <li>문의하기</li>
            <li onClick={handleLogout}>로그아웃</li>
          </FooterMenu>
        </FooterLink>
      </FooterInner>
    </FooterContainer>
  );
}

export default Footer;
