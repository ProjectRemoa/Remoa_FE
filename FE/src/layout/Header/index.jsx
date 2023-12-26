import { useLocation, useNavigate } from 'react-router-dom';
import img from '../../images/LEMOA_TEXT_MARK.png';
import LoginCheck from '../../containers/sociallogin/LoginCheck';
import * as S from './Header.styles';

const CATEGORY_LINKS = [
  {
    name: '레퍼런스',
    link: '/',
    index: null,
    identifier: 'reference',
  },
  {
    name: '작업물 관리',
    link: '/manage',
    index: '/list',
    identifier: 'manage',
  },
  {
    name: '마이페이지',
    link: '/mypage',
    index: '/profile',
    identifier: 'mypage',
  },
];
function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.Header>
      <S.HeaderInner>
        <S.Logo href="/">
          <img src={img} alt="Remoa Logo" />
        </S.Logo>

        <S.Items>
          {CATEGORY_LINKS.map((item) => {
            const isActive =
              (pathname.startsWith(item.link) &&
                pathname.includes(item.identifier)) ||
              (item.identifier === 'reference' &&
                (pathname === '/' || pathname.startsWith('/ref')));

            return (
              <S.Item
                key={item.name}
                className={isActive ? 'active' : ''}
                onClick={() =>
                  navigate(item.index ? item.link + item.index : item.link)
                }
              >
                {item.name}
              </S.Item>
            );
          })}
        </S.Items>

        {/* 로그인 / 로그아웃 시 변경되는 메뉴 */}
        <S.UserAction>
          <LoginCheck />
        </S.UserAction>
      </S.HeaderInner>
    </S.Header>
  );
}

export default Header;
