import axiosInstance from './axiosInterceptors';

// 토큰 갱신
export const tokenRefreshRequest = async () => {
  try {
    const refreshToken = sessionStorage.getItem('refreshToken');
    const response = await axiosInstance.put(
      '/api/member/reissue',
      {},
      {
        headers: {
          'Refresh-Token': `Bearer ${refreshToken}`,
        },
      }
    );
    sessionStorage.setItem('accessToken', response.data.remoaToken.accessToken);
    sessionStorage.setItem(
      'refreshToken',
      response.data.remoaToken.refreshToken
    );

    return response.data.remoaToken.accessToken;
  } catch (e) {
    console.log(e);
  }
};
