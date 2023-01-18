import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import styles from "./SingUp.module.css";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from "@mui/material";
import { RadioButtonUncheckedRounded } from "@mui/icons-material";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import styled from "styled-components";
import axios from "axios";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#FADA5E", // 노란색으로 커스텀
      darker: "#053e85",
    },
    neutral: {
      main: "#FADA5E",
      contrastText: "#fff",
    },
  },
});

const Button = styled.button`
  width: 100%;
  height: 45px;

  background: ${(props) => (props.state ? "#FADA5E" : "#C8D1E0")};
  border-radius: 10px;
  border: #fff48c;
  font-family: "NotoSansKR-400";
  font-size: 15px;
  text-align: center;
  cursor: ${(props) => (props.state ? "pointer" : "default")};
`;

function SignUpContainer() {
  /* 변수 */
  const [uemail, setUemail] = useState("");
  const [upw, setUpw] = useState("");
  const [confirmupw, setConfirmupw] = useState("");
  const [uname, setUname] = useState("");
  const [ubirth, setUbirth] = useState("");
  const [usex, setUsex] = useState(true);
  const [utel, setUtel] = useState("");
  //const [uconsent, setUconsent] = useState(false);

  /* 약관 동의 체크박스 */
  const [checkList, setCheckList] = useState([]);
  const [buttonColor, setButtonColor] = useState(false);
  const checkAll = (e) => {
    e.target.checked
      ? setCheckList(["terms", "collect", "marketing"])
      : setCheckList([]);
  };
  const check = (e) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

  /* 에러 판별 변수 */
  const [uemailError, setUemailError] = useState(true);
  const [upwLetterError, setUpwLetterError] = useState(true);
  const [upwLengthError, setUpwLengthError] = useState(true);
  const [confirmupwError, setConfirmupwError] = useState(true);
  const [utelError, setUtelError] = useState(true);
  const [ubirthError, setUbirthError] = useState(true);
  const [unameError, setUnameError] = useState(true);

  /* 오류 메세지 상태 저장 */
  const [emailMessage, setEmailMessage] = useState("");
  const [pwLetterMessage, setPwLetterMessage] = useState("");
  const [pwLengthMessage, setPwLengthMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [confirmpwMessage, setConfirmpwMessage] = useState("");
  const [telMessage, setTelMessage] = useState("");
  const [birthMessage, setBirthMessage] = useState("");

  /* 날짜 계산 */
  const [form, setForm] = useState({
    year: "2000",
    month: "01",
    day: "01",
  });
  function calcDate() {
    const now = new Date();
    let years = [];
    for (let y = now.getFullYear(); y >= 1930; y -= 1) {
      years.push(y);
    }
    let month = [];
    for (let m = 1; m <= 12; m += 1) {
      if (m < 10) {
        // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
        month.push("0" + m.toString());
      } else {
        month.push(m.toString());
      }
    }
    let days = [];
    let date = new Date(form.year, form.month, 0).getDate();
    // 오늘 이후의 날짜는 입력받으면 안되므로 date 수정
    if (form.year == now.getFullYear() && form.month == now.getMonth() + 1) {
      date = now.getDate();
    }
    for (let d = 1; d <= date; d += 1) {
      if (d < 10) {
        // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
        days.push("0" + d.toString());
      } else {
        days.push(d.toString());
      }
    }

    return { years, month, days };
  }
  var d = calcDate();

  /* 이메일 */
  const onChangeEmail = useCallback((e) => {
    console.log("e.target.value : " + e.target.value);
    setUemail(e.target.value);
    // uemail로 검사를 하면 비동기라서 반응이 느림. e.target.value로 진행
    /* 이메일 유효성 검사 */
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    console.log("uemail : " + uemail);
    if (emailRegex.test(e.target.value)) {
      setUemailError(false);
      setEmailMessage("올바른 형식입니다.");
      console.log(uemailError);
      console.log(emailMessage);
    } else {
      setUemailError(true);
      setEmailMessage("이메일이 유효하지 않습니다.");
      console.log(uemailError);
      console.log(emailMessage);
    }
  }, []);

  /* 비밀번호 */
  const onChangePw = useCallback((e) => {
    setUpw(e.target.value);

    /* 비밀번호 유효성 검사 */
    const passwordRegex = /^(?=.*?[A-z])(?=.*?[0-9]).{1,}$/;
    if (passwordRegex.test(e.target.value)) {
      setUpwLetterError(false);
    } else {
      setUpwLetterError(true); // 오류
      setPwLetterMessage("비밀번호는 대소문자와 숫자를 포함해야 합니다.");
    }
    if (e.target.value.length < 8 || e.target.value.length > 20) {
      setUpwLengthError(true); // 오류
      setPwLengthMessage("비밀번호는 8자 이상, 20자 이하여야 합니다.");
    } else {
      setUpwLengthError(false);
    }
  }, []);

  /* 확인 비밀번호 */
  const onChangeConfirmupw = useCallback(
    (e) => {
      setConfirmupw(e.target.value);

      /* 확인 비밀번호 일치 검사 */
      if (upw === e.target.value) {
        setConfirmupwError(false);
      } else {
        setConfirmupwError(true);
        setConfirmpwMessage("입력하신 비밀번호와 일치하지 않습니다.");
      }
    },
    [upw]
  );

  /* 이름 */
  const onChangeName = useCallback((e) => {
    setUname(e.target.value);
    if (e.target.value.length < 2) {
      setUnameError(true);
      setNameMessage("이름을 입력해주세요.");
    } else {
      setUnameError(false);
      setNameMessage("");
    }
  }, []);

  /* 생년월일 YYYYMMDD */
  useEffect(() => {
    var b = form.year + form.month + form.day;
    setUbirth(b);
    if (isChild(b)) {
      setUbirthError(true);
      setBirthMessage("만 14세 미만은 가입할 수 없습니다.");
    } else {
      setUbirthError(false);
    }
  }, [form]);
  function isChild(birthDate) {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm =
      today.getMonth() < 9
        ? "0" + (today.getMonth() + 1)
        : today.getMonth() + 1;
    var dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

    // true :만 14세 미만
    return parseInt(yyyy + mm + dd) - parseInt(birthDate) - 140000 < 0;
  }

  /* 성별 */
  const onChangeSex = useCallback((e) => {
    setUsex(true);
    if (e.target.value === "male") {
      // 남자는 true
      setUsex(true);
    } else {
      // 여자는 false
      setUsex(false);
    }
  }, []);

  /* 연락처 */
  const onChangeTel = useCallback((e) => {
    setUtel(e.target.value);

    /* 연락처 유효성 검사 */
    if (isTel(e.target.value)) {
      setUtelError(false);
    } else {
      setUtelError(true);
      setTelMessage("전화번호가 유효하지 않습니다.");
    }
  }, []);
  function isTel(tel) {
    // 010XXXXYYY, 010XXXYYYY
    if (/^[0-9]{3}[0-9]{3,4}[0-9]{4}/.test(tel)) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    if (checkList.includes("terms") && checkList.includes("collect")) {
      // 하나라도 true면 button은 false
      // 모두 false여야 button이 true
      if (
        uemailError ||
        upwLengthError ||
        upwLetterError ||
        ubirthError ||
        utelError ||
        unameError
      ) {
        setButtonColor(false);
      } else {
        setButtonColor(true);
      }
    } else {
      setButtonColor(false);
    }
  }, [
    checkList,
    uemailError,
    upwLengthError,
    upwLetterError,
    ubirthError,
    utelError,
    unameError,
  ]);

  /*useEffect(() => {
    setErrors(validate());
    console.log(errors);
  }, [uemail, upw, confirmupw, utel, ubirth]);*/

  const onClickRegister = () => {
    console.log("흠냐");
    alert("성공");
  };
  /* const onClickRegister = useCallback(
    async (e) => {
      alert("성공");
      /*e.preventDefault();
      try{
        await axios.post(/*link*, {
          email : uemail,
          password: upw,
          name :uname,
          sex:usex,
          birth:ubirth,
          phone_number:utel,
        })
        .then((res)=>{
          console.log(res);
          if(res.status===200){
            // 성공
          }
        })
      }
      catch(err){
        console.log(err);
      }
    },
    [uemail, upw, uname, usex, ubirth, utel]
  );*/

  return (
    <div style={{ width: "60%", margin: "100px 0px 20px 0px" }}>
      {/* 회원가입 안내 */}
      <h1
        style={{
          fontFmaily: "NotoSansKR-700",
          fontSize: "40px",
          fontWeight: "700",
        }}
      >
        무료 회원가입
      </h1>
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          margin: "20px 0px 20px 0px",
        }}
      >
        <ul
          style={{
            fontFamily: "NotoSansKR-500",
            fontSize: "1.2rem",
            textAlign: "left",
          }}
        >
          <li>다양한 카테고리에 속한 많은 작품들을 확인할 수 있어요</li>
          <li>내 작품의 피드백을 받아보고 또 피드백을 전달할 수 있어요</li>
          <li>필요한 작업물을 관리하고 스크랩할 수 있어요</li>
        </ul>
      </div>

      {/* 회원가입 입력창 */}
      <div
        style={{
          border: "1px solid #D0D0D0",
          borderRadius: "25px",
          fontFamily: "NotoSansKR-400",
          boxShadow: "0px 4px 4px rgba(0, 0, 0,  0.25)",
          width: "100%",
          /*height: "410px",*/
          padding: "40px 0px 40px 0px",
        }}
      >
        <table>
          <tbody>
            {/* 이메일 */}
            <tr>
              <th>
                <label>이메일</label>
              </th>
              <td className={styles.td}>
                <input
                  required
                  type="email"
                  className={styles.input}
                  placeholder="이메일을 입력해주세요"
                  onChange={onChangeEmail}
                  value={uemail}
                />
                {uemail.length > 0 && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.7rem",
                    }}
                  >
                    {uemailError ? emailMessage : ""}
                  </span>
                )}
              </td>
            </tr>
            {/* 비밀번호 */}
            <tr>
              <th>
                <label>비밀번호</label>
              </th>
              <td className={styles.td}>
                <input
                  required
                  className={styles.input}
                  type="password"
                  placeholder="8-20자리 / 영문자, 숫자 혼합"
                  onChange={onChangePw}
                  value={upw}
                />
                {upw.length > 0 && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.7rem",
                    }}
                  >
                    {upwLengthError ? pwLengthMessage : ""}
                    {upwLengthError ? <br /> : ""}

                    {upwLetterError ? pwLetterMessage : ""}
                  </span>
                )}
              </td>
            </tr>
            {/* 비밀번호 확인 */}
            <tr>
              <th>
                <label>비밀번호 확인</label>
              </th>
              <td className={styles.td}>
                <input
                  required
                  type="password"
                  className={styles.input}
                  placeholder="비밀번호를 다시 입력해주세요"
                  onChange={onChangeConfirmupw}
                  value={confirmupw}
                />
                {confirmupw.length > 0 && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.7rem",
                    }}
                  >
                    {confirmupwError ? confirmpwMessage : ""}
                  </span>
                )}
              </td>
            </tr>
            {/* 이름 */}
            <tr>
              <th>
                <label>이름</label>
              </th>
              <td className={styles.td}>
                <input
                  required
                  type="text"
                  className={styles.input}
                  placeholder="이름을 입력해주세요"
                  onChange={onChangeName}
                  value={uname}
                />
                {uname.length > 0 && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.7rem",
                    }}
                  >
                    {unameError ? nameMessage : ""}
                  </span>
                )}
              </td>
            </tr>
            {/* 생년월일 */}
            <tr>
              <th>
                <label>생년월일</label>
              </th>
              <td className={styles.td}>
                <div>
                  <div
                    style={{
                      width: "33%",
                      float: "left",
                    }}
                  >
                    {/* 년 */}
                    <select
                      value={form.year}
                      onChange={(e) => {
                        setForm({ ...form, year: e.target.value });
                      }}
                    >
                      {d.years.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>{" "}
                    년
                  </div>
                  <div
                    style={{
                      width: "33%",
                      float: "left",
                    }}
                  >
                    {/* 월 */}
                    <select
                      value={form.month}
                      onChange={(e) => {
                        setForm({ ...form, month: e.target.value });
                      }}
                    >
                      {d.month.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>{" "}
                    월
                  </div>

                  <div
                    style={{
                      width: "33%",
                      float: "left",
                    }}
                  >
                    {/* 일 */}
                    <select
                      value={form.day}
                      onChange={(e) => {
                        setForm({ ...form, day: e.target.value });
                      }}
                    >
                      {d.days.map((item) => (
                        <option value={item} key={item}>
                          {item}
                        </option>
                      ))}
                    </select>{" "}
                    일
                  </div>
                </div>
                {ubirth.length > 0 && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.7rem",
                    }}
                  >
                    {ubirthError ? birthMessage : ""}
                  </span>
                )}
              </td>
            </tr>
            {/* 성별 */}
            <tr>
              <th>
                <label>성별</label>
              </th>
              <td>
                <div
                  style={{
                    padding: "10px 5px",
                  }}
                >
                  <div
                    className={styles.form_radio_btn}
                    style={{ marginRight: "5px", marginLeft: "5px" }}
                  >
                    <input
                      id="radio-1"
                      type="radio"
                      name="sex"
                      value="male"
                      checked
                      onChange={onChangeSex}
                    />
                    <label htmlFor="radio-1">남성</label>
                  </div>
                  <div
                    className={styles.form_radio_btn}
                    style={{ marginLeft: "10px" }}
                  >
                    <input
                      id="radio-2"
                      type="radio"
                      name="sex"
                      value="female"
                      className={styles.form_radio_btn}
                      onChange={onChangeSex}
                    />
                    <label htmlFor="radio-2">여성</label>
                  </div>
                </div>
              </td>
            </tr>
            {/* 연락처 */}
            <tr>
              <th>
                <label>연락처</label>
              </th>
              <td className={styles.td}>
                <input
                  required
                  type="text"
                  className={styles.input}
                  placeholder="전화번호를 입력해주세요"
                  onChange={onChangeTel}
                  value={utel}
                />
                {utel.length > 0 && (
                  <span
                    style={{
                      color: "red",
                      fontSize: "0.7rem",
                    }}
                  >
                    {utelError ? telMessage : ""}
                  </span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 동의 */}
      <ThemeProvider theme={theme}>
        <FormControl component="fieldset" style={{ width: "100%" }}>
          <FormGroup aria-label="position" row>
            {/* 전체 동의 */}
            <div
              className={styles.agree}
              style={{
                marginTop: "30px",
                border: "1px solid #B0B0B0",
                borderRadius: "30px",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className={styles.left}>
                <label htmlFor="1">
                  <span style={{ cursor: "pointer" }}>
                    아래 내용에 전체 동의합니다
                  </span>
                </label>
              </div>
              <div className={styles.right}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      icon={<RadioButtonUncheckedRounded />}
                      checkedIcon={<CheckCircleOutlineRounded />}
                      id="1"
                      style={{ transform: "scale(1.3)" }}
                      name="all"
                      onChange={checkAll}
                      checked={checkList.length === 3 ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </div>
            </div>

            {/*이용 약관*/}
            <div className={styles.agree}>
              <div className={styles.left}>
                <label htmlFor="2">
                  <span style={{ cursor: "pointer" }}>
                    <span style={{ color: "#B0B0B0" }}>[필수]</span> 이용 약관
                  </span>
                </label>
              </div>
              <div className={styles.right}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="primary"
                      icon={<RadioButtonUncheckedRounded />}
                      checkedIcon={<CheckCircleOutlineRounded />}
                      id="2"
                      style={{ transform: "scale(1.3)" }}
                      name="terms"
                      onChange={check}
                      checked={checkList.includes("terms") ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </div>
            </div>

            {/*개인 정보 수집 및 처리 방침*/}
            <div className={styles.agree}>
              <div className={styles.left}>
                <label htmlFor="3">
                  <span style={{ cursor: "pointer" }}>
                    <span style={{ color: "#B0B0B0" }}>[필수]</span> 개인 정보
                    수집 및 처리 방침
                  </span>
                </label>
              </div>
              <div className={styles.right}>
                <FormControlLabel
                  value="개인 정보 수집"
                  control={
                    <Checkbox
                      color="primary"
                      icon={<RadioButtonUncheckedRounded />}
                      checkedIcon={<CheckCircleOutlineRounded />}
                      id="3"
                      style={{ transform: "scale(1.3)" }}
                      name="collect"
                      onChange={check}
                      checked={checkList.includes("collect") ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </div>
            </div>

            {/*정보 및 이벤트성 이메일 수신 동의*/}
            <div className={styles.agree}>
              <div className={styles.left}>
                <label htmlFor="4">
                  <span style={{ cursor: "pointer" }}>
                    <span style={{ color: "#B0B0B0" }}>[선택]</span> 정보 및
                    이벤트성 이메일 수신 동의
                  </span>
                </label>
              </div>
              <div className={styles.right}>
                <FormControlLabel
                  value="수신 동의"
                  control={
                    <Checkbox
                      color="primary"
                      icon={<RadioButtonUncheckedRounded />}
                      checkedIcon={<CheckCircleOutlineRounded />}
                      id="4"
                      style={{ transform: "scale(1.3)" }}
                      name="marketing"
                      onChange={check}
                      checked={checkList.includes("marketing") ? true : false}
                    />
                  }
                  labelPlacement="start"
                />
              </div>
            </div>
          </FormGroup>
        </FormControl>
      </ThemeProvider>

      <Button
        disabled={!buttonColor}
        state={buttonColor}
        onClick={onClickRegister}
      >
        가입 완료
      </Button>
    </div>
  );
}

export default SignUpContainer;
