import axios from "axios";
import { tokenRefresh, getAccessToken, getRefreshToken } from "../functions/getToken";

// Axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: "/BE/", // 절대 경로 사용
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();
    if (!accessToken) {
      window.location.href = '/sociallogin';
      return config;
    }

    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${accessToken}`;
    config.headers['Refresh-Token'] = `Bearer ${refreshToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response) {
      const { status } = error.response;
      if (status === 423 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const newAccessToken = await tokenRefresh();
          const newRefreshToken = getRefreshToken(); // 새로고침된 토큰 가져오기

          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
          axiosInstance.defaults.headers.common['Refresh-Token'] = `Bearer ${newRefreshToken}`;

          originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          originalRequest.headers['Refresh-Token'] = `Bearer ${newRefreshToken}`;

          return axiosInstance(originalRequest);
        } catch (error) {
          console.error("Failed to refresh token2:", error);
        }
      } else {
        handleCommonErrors(status);
      }
    } else if (error.request) {
      console.error("No response received");
      alert("서버로부터 응답이 없습니다.");
    } else {
      console.error("Error setting up the request");
      alert("요청 설정 중 오류가 발생했습니다.");
    }
    return Promise.reject(error);
  }
);

function handleCommonErrors(status) {
  switch (status) {
    case 400:
      console.error("Bad Request");
      alert("잘못된 요청입니다.");
      break;
    case 401:
      console.error("Unauthorized");
      alert("로그인이 되지 않았거나 인증이 이루어지지 않았습니다.");
      window.location.href = '/sociallogin';
      break;
    case 403:
      console.error("Forbidden");
      alert("권한이 없습니다.");
      break;
    case 404:
      console.error("Not Found");
      alert("페이지를 찾을 수 없습니다.");
      break;
    case 500:
      console.error("Internal Server Error");
      alert("서버에 문제가 발생했습니다.");
      break;
    default:
      console.error(`Error: ${status}`);
      alert("알 수 없는 오류가 발생했습니다.");
  }
}
export default axiosInstance;