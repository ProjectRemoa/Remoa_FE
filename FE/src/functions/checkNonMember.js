export function checkNonMember(token) {
  if (!token) {
    alert("로그인 후 이용해주세요.");
    window.location.href = "/sociallogin";
    return;
  }
}