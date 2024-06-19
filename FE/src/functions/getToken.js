export default function getAccessToken() {
  const token = sessionStorage.getItem("token");
  return token
}