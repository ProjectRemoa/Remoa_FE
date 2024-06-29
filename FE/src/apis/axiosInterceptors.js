import axios from "axios";
import { getRefreshToken } from "../functions/getRefreshToken";

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
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
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
  (error) => {
    if (error.response) {
      const { status } = error.response;
      switch (status) {
        case 400:
          console.error("Bad Request");
          alert("잘못된 요청입니다.");
          break;
        case 401:
          console.error("Unauthorized");
          alert("로그인이 되지 않았거나 인증이 이루어지지 않았습니다.");
          break;
        case 403:
          console.error("Forbidden");
          alert("권한이 없습니다.");
          break;
        case 404:
          console.error("Not Found");
          alert("페이지를 찾을 수 없습니다.");
          break;
        case 423:
          console.log("토큰 만료!");
          getRefreshToken();
          break;
        case 500:
          console.error("Internal Server Error");
          alert("서버에 문제가 발생했습니다.");
          break;
        default:
          console.error(`Error: ${status}`);
          alert("알 수 없는 오류가 발생했습니다.");
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

export default axiosInstance;
