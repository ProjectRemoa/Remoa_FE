import axios from 'axios';
import { useRecoilState } from 'recoil';
import { loginState } from '../state/loginState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  useEffect(() => {
    const nickname = sessionStorage.getItem('nickname');

    nickname ? setIsLogin(true) : setIsLogin(false);
  }, [setIsLogin]);

  const handleLogout = async () => {
    try {
      await axios.post('/BE/user/logout', {}, { withCredentials: true });

      sessionStorage.removeItem('nickname');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('new');

      setIsLogin(false);

      alert('로그아웃 되었습니다.');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return { isLogin, handleLogout };
};
