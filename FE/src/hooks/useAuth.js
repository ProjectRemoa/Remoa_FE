import axios from 'axios';

export const useAuth = () => {
  const handleLogout = async () => {
    try {
      await axios.post('/BE/user/logout', {}, { withCredentials: true });

      sessionStorage.removeItem('nickname');
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('new');

      alert('로그아웃 되었습니다.');
    } catch (err) {
      console.log(err);
    }
  };

  return { handleLogout };
};
