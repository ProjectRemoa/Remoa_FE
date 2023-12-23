export const CLIENT_ID = process.env.REACT_APP_REST_API_KEY;
export const REDIRECT_URI =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_REDIRECT_URI
    : process.env.REACT_APP_PROD_REDIRECT_URI;

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
