const CLIENT_ID=process.env.REACT_APP_REST_API_KEY;
const REDIRECT_URL="http://localhost:3000/kakaologin";

export const KAKAO_AUTH_URL= `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=code`;