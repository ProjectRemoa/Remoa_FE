import img from '../../images/LEMOA_TEXT_MARK.png';
import LoginCheck from '../../containers/sociallogin/LoginCheck';
import * as S from './Header.styles';

const CATEGORY_LINKS = [
  { name: '레퍼런스', link: '/' },
  { name: '작업물 관리', link: '/manage/list' },
  { name: '마이페이지', link: '/mypage/profile' },
];

function Header() {
  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo href="/">
          <img src={img} alt="Remoa Logo" />
        </S.Logo>

        <S.Items>
          {CATEGORY_LINKS.map((item) => (
            <S.Item key={item.name}>
              <S.StyledLink to={item.link}>{item.name}</S.StyledLink>
            </S.Item>
          ))}
        </S.Items>

        {/* 로그인 / 로그아웃 시 변경되는 메뉴 */}
        <LoginCheck />
      </S.HeaderInner>
    </S.Header>
  );
}

export default Header;
