import { Cookies, cookie, useCookies } from "react-cookie";

const cookies = new Cookies();
//const [cookies, setCookies] = useCookies(["JSESSIONID"]);

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { ...options });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const loadCookie = (name) => {
  return cookie.load(name);
};
