import { useNavigate } from 'react-router-dom';

export const useCheckLike = (postMemberNickname) => {
  const navigate = useNavigate();

  const checkLike = () => {
    const userNickname = sessionStorage.getItem('nickname');
    if (userNickname === null) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/sociallogin');
      return;
    }
    if (postMemberNickname === userNickname) {
      alert('내 작품에는 불가능합니다.');
      return;
    }
  };

  return { checkLike };
};