import { useNavigate } from 'react-router';

import { useAuth } from '../../../hooks/useAuth';

import S from './LoginCheck.styles';

function LoginCheck() {
  const navigate = useNavigate();

  const { isLogin, handleLogout } = useAuth();

  return (
    <S.Container>
      {isLogin ? (
        <>
          <S.Button onClick={handleLogout}>로그아웃</S.Button>
          <S.Button
            onClick={() => navigate('/manage/share')}
            style={{ width: '128px' }}
          >
            작업물 공유하기
          </S.Button>
        </>
      ) : (
        <S.Button onClick={() => navigate('/sociallogin')}>로그인</S.Button>
      )}
    </S.Container>
  );
}

export default LoginCheck;
