import axios from 'axios';
import getAccessToken from '../functions/getToken';

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: '/BE/',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getAccessToken()}`, // 토큰이 있으면 토큰을 불러오고 아니면 null값
  },
});

// 요청
axiosInstance.interceptors.request.use(
  (config) => {
    return config; // 요청을 보내기 전
  },
  (error) => {
    return Promise.reject(error); // 요청 오류
  }
);

// 응답
axiosInstance.interceptors.response.use(
  (response) => {
    return response; // 2xx 범위
  },
  (error) => {
    if (error.response) {
      // 서버가 응답을 했지만 상태 코드는 2xx 범위가 아님
      const { status } = error.response;
      switch (status) {
        case 400:
          console.error('Bad Request');
          alert('잘못된 요청입니다.');
          break;
        case 401:
          console.error('Unauthorized');
          alert('인증이 필요합니다.');
          break;
        case 403:
          console.error('Forbidden');
          alert('권한이 없습니다.');
          break;
        case 404:
          console.error('Not Found');
          alert('페이지를 찾을 수 없습니다.');
          break;
        case 500:
          console.error('Internal Server Error');
          alert('서버에 문제가 발생했습니다.');
          break;
        default:
          console.error(`Error: ${status}`);
          alert('알 수 없는 오류가 발생했습니다.');
      }
    } else if (error.request) {
      console.error('No response received');
      alert('서버로부터 응답이 없습니다.');
    } else {
      console.error('Error setting up the request');
      alert('요청 설정 중 오류가 발생했습니다.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;