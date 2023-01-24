import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import kakao_login_large from "../../images/kakao_login_large.png";
import kakao_login_small from "../../images/kakao_login_small.png";

import { useNavigate } from "react-router-dom";

function LoginContainer() {
  const KAKAO_AUTH_URL = "https://developers.kakao.com/tool/resource/login";

  const [inputEmail, setInputEmail] = useState("");
  const [inputPw, setInputPw] = useState("");

  const [inputEmailError, setInputEmailError] = useState(false);
  const [inputPwError, setInputPwError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        heigth: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onChangeEmail = (e) => {
    setInputEmailError(false);
    // 유효성 검사
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (emailRegex.test(e.target.value)) {
      setInputEmailError(false); // 정상
      console.log("email correct");
    } else {
      setInputEmailError(true);
      console.log("email error");
      setErrorMessage("이메일 형식이 맞지 않습니다.");
    }

    setInputEmail(e.target.value);
  };

  const onChangePw = (e) => {
    setInputPwError(false);
    if (e.target.value.length < 8 || e.target.value.length > 20) {
      console.log("pw error");
      setInputPwError(true);
      setErrorMessage("비밀번호는 8자 이상 20자 이하입니다.");
    } else {
      console.log("pw correct");
      setInputPwError(false);
    }
    setInputPw(e.target.value);
  };

  const validation = () => {
    if (inputEmailError) {
      // email 유효성 검사 탈락
      alert(errorMessage);
      return false;
    }
    // 백엔드에서도 검사
    // 프론트에서도 검사
    if (inputPwError) {
      // pw 유효성 검사(길이) 탈락
      alert(errorMessage);
      return false;
    }

    return true;
  };

  const onClickLogin = () => {
    if (validation()) {
      // 유효성 검사를 통과했다면
      // alert("통과");
      const LoginForm = {
        email: inputEmail,
        password: inputPw,
      };
      const config = { "Conteny-Type": "application/json" };
      axios
        .post("/login", LoginForm, config)
        .then((result) => {
          console.log(result);
          if (result.status === 200 && result.data !== "login fail") {
            localStorage.setItem("username", result.data);
            alert("로그인 완료");
            navigate("/");
          } else {
            // 회원 정보 불일치
            alert("정보가 일치하지 않습니다.");
          }
          // 작업 완료 되면 페이지 이동(새로고침)
        })
        .catch((error) => {
          alert(error.response.data.detail);
        });
    }
  };

  const onClickEM = () => {
    navigate("/emailfind");
  };

  const onClickPW = () => {
    navigate("/passwordfind");
  };

  const onClickRegister = () => {
    // 회원가입 페이지로 이동
    navigate("/signup");
  };

  return (
    <div
      style={{
        border: "1px solid grey",
        borderRadius: "25px",
        fontFamily: "NotoSansKR-400",
        boxShadow: "0px 4px 4px rgba(0, 0, 0,  0.25)",
        width: "42%",
        marginTop: "250px",
        padding: "40px 0px 40px 0px",
      }}
    >
      <span style={{ fontSize: "25px" }}>
        <span style={{ fontFamily: "NotoSansKR-700", fontSize: "25px" }}>
          로그인
        </span>
        을 통해
        <br />더 많은 기능을 이용해보세요!
      </span>
      <br />

      {/* ID */}
      <form
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <input
          className={styles.input}
          type="id"
          placeholder="이메일을 입력해주세요"
          name="input_id"
          value={inputEmail}
          onChange={onChangeEmail}
        />
        <br />
        {/* PASSWORD */}
        <input
          className={styles.input}
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="input_pw"
          value={inputPw}
          onChange={onChangePw}
        />
      </form>

      {/* 로그인 버튼 */}
      <div
        style={{
          paddingTop: "5px",
          paddingBottom: "10px",
        }}
      >
        <button className={styles.button} onClick={onClickLogin}>
          로그인
        </button>
      </div>

      {/* 카카오로 로그인 버튼*/}
      {windowSize.width >= 840 ? (
        <a href={KAKAO_AUTH_URL}>
          <img src={kakao_login_large} alt="kakaologin" />
        </a>
      ) : (
        <a href={KAKAO_AUTH_URL}>
          <img src={kakao_login_small} alt="kakaologin" />
        </a>
      )}

      {/* 회원가입, 비밀번호 찾기 */}
      <div style={{ paddingTop: "3px" }}>
        <span style={{ fontFamily: "NotoSansKR-300", fontSize: "10px" }}>
          아직 회원이 아니신가요?&nbsp;
        </span>
        <span
          style={{
            fontFamily: "NotoSansKR-700",
            fontSize: "10px",
            color: "#F27A7A",
            textDecoration: "underline",
            textUnderlinePosition: "under",
            cursor: "pointer",
          }}
          onClick={onClickRegister}
        >
          회원가입
        </span>
        <br />
        <span style={{ fontFamily: "NotoSansKR-300", fontSize: "10px" }}>
          이메일, 비밀번호가 기억나지 않나요? &nbsp; |
          <span
            style={{
              textDecoration: "underline",
              textUnderlinePosition: "under",
              cursor: "pointer",
              padding: "0px 5px 0px 5px",
            }}
            onClick={onClickEM}
          >
            이메일 찾기
          </span>
          |
          <span
            style={{
              textDecoration: "underline",
              textUnderlinePosition: "under",
              cursor: "pointer",
              padding: "0px 5px 0px 5px",
            }}
            onClick={onClickPW}
          >
            비밀번호 찾기
          </span>
        </span>
      </div>
    </div>
  );
}

export default LoginContainer;
