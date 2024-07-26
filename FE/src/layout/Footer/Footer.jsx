import img from '../../images/LOGO_SYMBOLMARK.png';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import StyledComponents from './Footer.styles';
const {
  FooterContainer,
  FooterInner,
  FooterEmail,
  FooterLogo,
  FooterLink,
  FooterMenu,
  FooterLinkLi
} = StyledComponents;

function Footer() {
  const { isLogin, handleLogout } = useAuth();
  const navigate = useNavigate()
  return (
    <FooterContainer>
      <FooterInner>
        <FooterLogo src={img} alt="" />
        <FooterLink>
          <FooterEmail>이메일 : referencemoa@gmail.com</FooterEmail>
          <FooterMenu>
            <li><FooterLinkLi href="https://mica-jujube-f6b.notion.site/7d7f50c7eebd42459c461208ede7ece9?pvs=4" target="_blank" rel="noreferrer">이용약관</FooterLinkLi></li>
            <li><FooterLinkLi href="https://mica-jujube-f6b.notion.site/f6132877f124479a9777e391ebdf580b?pvs=4" target="_blank" rel="noreferrer">개인정보 처리방침</FooterLinkLi></li>
            <li onClick={()=>{navigate(`/mypage/faq`)}}>문의하기</li>
            {isLogin && <li onClick={handleLogout}>로그아웃</li>}
          </FooterMenu>
        </FooterLink>
      </FooterInner> 
    </FooterContainer>
  );
}
export default Footer;
