import React from "react";

export default function AuthenticationCheck(SpecificComponent, option) {
  /*
  null -> 누구나 출입이 가능한 페이지
  true -> 로그인한 유저만 출입이 가능한 페이지
  false -> 로그인한 유저가 account 페이지 가려고 하면 막아준다
  */

  console.log("함수 안");
  let isAuth = localStorage.getItem("nickname");

  // console.log(isAuth === null);

  //Not Loggined in Status
  if (isAuth === null) {
    //if (option) {
    window.document.location.href = "/sociallogin";
    //}
    //Loggined in Status
  } else {
    if (option === false) {
      window.document.location.href = "/";
    }
  }

  return <SpecificComponent />;
}
