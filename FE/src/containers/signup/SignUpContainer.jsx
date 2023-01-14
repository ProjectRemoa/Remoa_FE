import React from "react";
import { useState } from "react";
import styles from "./SingUp.module.css";

function SignUpContainer() {
  /* 변수 */
  const [uemail, setUemail] = useState("");
  const [upw, setUpw] = useState("");
  const [confirmupw, setConfirmupw] = useState("");
  const [uname, setUname] = useState("");
  const [ubirth, setUbirth] = useState("");
  const [usex, setUsex] = useState(false); // false : 여자, true : 남자
  const [uuniv, setUuniv] = useState("");
  const [utel, setUtel] = useState(""); // 필수 아님
  const [uconsent, setUconsent] = useState(false); // 약관 동의

  /* 에러 판별 변수 */
  const [uemailError, setUemailError] = useState(false);
  const [upwError, setUpwError] = useState(false);
  const [confirmupwError, setConfirmupwError] = useState(false);

  const [form, setForm] = useState({
    year: "2000",
    month: "01",
    day: "01",
  });

  /* 날짜 계산 */
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
  for (let d = 1; d <= date; d += 1) {
    if (d < 10) {
      // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
      days.push("0" + d.toString());
    } else {
      days.push(d.toString());
    }
  }

  const onChangeEmail = (e) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setUemailError(false);
    else setUemailError(true);
    setUemail(e.target.value);
  };

  /* 비밀번호 */
  const onChangePw = (e) => {
    const passwordRegex = /^[a-zA-z0-9]{8,20}$/;
    if (!e.target.value || passwordRegex.test(e.target.value)) {
      setUpwError(false);
    } else setUpwError(true);
    setUpwError(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 16) {
      // 비밀번호가 4자 미만이면서 16자 초과인 경우
      setUpwError(true); // 오류
    } else {
      setUpwError(false);
    }
    if (!confirmupw || e.target.value === confirmupw) {
      setConfirmupwError(false);
    } else setConfirmupwError(true);

    setUpw(e.target.value);
  };

  /* 확인 비밀번호 */
  const onChangeConfirmupw = (e) => {
    if (upw === e.target.value) setConfirmupwError(false);
    else setConfirmupwError(true);
    setConfirmupw(e.target.value);
  };

  /* 이름 */
  const onChangeName = (e) => {
    setUname(e.target.value);
  };

  const onChangeBirth = (e) => {
    setUbirth(e.target.value);
  };

  const onChangeSex = (e) => {
    if (e.target.value === "male") {
      // 남자는 true
      setUsex(true);
    } else {
      // 여자는 false
      setUsex(false);
    }
    /*
    console.log(typeof e.target.value);
    console.log(e.target.value);
    console.log(typeof usex);
    console.log(usex);
    */
  };

  const onChangeUniv = (e) => {
    setUuniv(e.target.value);
  };

  const onChangeTel = (e) => {
    setUtel(e.target.value);
  };

  const onChangeConsent = (e) => {
    if (e.target.checked) {
      setUconsent(true);
    } else {
      setUconsent(false);
    }
  };

  return (
    <div style={{ width: "60%" }}>
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
            <tr>
              <th>
                <label>이메일</label>
              </th>
              <td className={styles.td} colSpan={2}>
                <input
                  required
                  type="email"
                  className={styles.input}
                  placeholder="이메일을 입력해주세요"
                  onChange={onChangeEmail}
                  value={uemail}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>비밀번호</label>
              </th>
              <td className={styles.td} colSpan={2}>
                <input
                  required
                  className={styles.input}
                  type="password"
                  placeholder="8-20자리 / 영문자, 숫자 혼합"
                  onChange={onChangePw}
                  value={upw}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>비밀번호 확인</label>
              </th>
              <td className={styles.td} colSpan={2}>
                <input
                  required
                  type="password"
                  className={styles.input}
                  placeholder="비밀번호를 다시 입력해주세요"
                  onChange={onChangeConfirmupw}
                  value={confirmupw}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>이름</label>
              </th>
              <td className={styles.td} colSpan={2}>
                <input
                  required
                  type="text"
                  className={styles.input}
                  placeholder="이름을 입력해주세요"
                  onChange={onChangeName}
                  value={uname}
                />
              </td>
            </tr>
            <tr>
              <th>
                <label>생년월일</label>
              </th>
              <td className={styles.td} colSpan={2}>
                <select
                  value={form.year}
                  onChange={(e) => {
                    setForm({ ...form, year: e.target.value });
                  }}
                >
                  {years.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>{" "}
                년
                <select
                  value={form.month}
                  onChange={(e) => {
                    setForm({ ...form, month: e.target.value });
                  }}
                >
                  {month.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>{" "}
                월
                <select
                  value={form.day}
                  onChange={(e) => {
                    setForm({ ...form, day: e.target.value });
                  }}
                >
                  {days.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                일
              </td>
            </tr>
            <tr>
              <th>
                <label>성별</label>
              </th>
              <td>
                <div style={{ padding: "0px 10px 0px 10px" }}>
                  <div className={styles.form_radio_btn}>
                    <input
                      id="radio-1"
                      type="radio"
                      name="sex"
                      value="male"
                      checked
                    />
                    <label for="radio-1">남성</label>
                  </div>
                  <div className={styles.form_radio_btn}>
                    <input
                      id="radio-2"
                      type="radio"
                      name="sex"
                      value="female"
                      className={styles.form_radio_btn}
                    />
                    <label for="radio-2">여성</label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>
                <label>연락처</label>
              </th>
              <td className={styles.td} colSpan={2}>
                <input
                  required
                  type="text"
                  className={styles.input}
                  placeholder="전화번호를 입력해주세요"
                  onChange={onChangeTel}
                  value={utel}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SignUpContainer;
