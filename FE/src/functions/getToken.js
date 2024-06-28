import axiosInstance from "../apis/axiosInterceptors";

export const getAccessToken = () => {
  return sessionStorage.getItem("accessToken")
};
export const getRefreshToken = () => {
  return sessionStorage.getItem("refreshToken");
};
export const tokenRefresh = async () => {

  try {
    const { data } = await axiosInstance.put(
      '/api/member/reissue',
      {}, 
      {
        headers: {
          Authorization: getAccessToken(),
          "Refresh-Token": `Bearer ${getRefreshToken()}`
        },
      }
    );
    const newAccessToken = data.remoaToken.accessToken;
    sessionStorage.setItem('accessToken', newAccessToken);

    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    throw error;
  }
};