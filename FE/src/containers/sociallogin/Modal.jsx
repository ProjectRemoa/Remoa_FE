import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from "@mui/material";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import "./Modal.scss";
import styled from "styled-components";
import Agree from "./Agree";
import { useNavigate } from "react-router-dom";
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
  height: 40px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 10px;
  box-shadow: none;
  color: black;

  cursor: ${(props) => (props.state ? "pointer" : "default")};
  background: ${(props) => (props.state ? "#FADA5E" : "#D9D9D9")};
  border: 1px solid ${(props) => (props.state ? "#FADA5E" : "#D9D9D9")};
`;

function Modal({ modalOpen }) {
  const navigate = useNavigate();
  /* 약관 동의 체크박스 */
  const [checkList, setCheckList] = useState([]);
  const [buttonColor, setButtonColor] = useState(false);

  const [detail1, setDetail1] = useState(false);
  const [detail2, setDetail2] = useState(false);
  const [detail3, setDetail3] = useState(false);

  const checkAll = (e) => {
    e.target.checked
      ? setCheckList(["terms", "collect", "marketing", "age"])
      : setCheckList([]);
  };
  const check = (e) => {
    e.target.checked
      ? setCheckList([...checkList, e.target.name])
      : setCheckList(checkList.filter((choice) => choice !== e.target.name));
  };

  useEffect(() => {
    if (
      checkList.includes("terms") &&
      checkList.includes("collect") &&
      checkList.includes("age")
    ) {
      setButtonColor(true);
    } else {
      setButtonColor(false);
    }
  });
  const closeModal = () => {
    //setModalOpen(false);
  };

  const onClickDetail1 = () => {
    setDetail1(!detail1);
  };
  const onClickDetail2 = () => {
    setDetail2(!detail2);
  };
  const onClickDetail3 = () => {
    setDetail3(!detail3);
  };

  const onClickStart = () => {
    var termConsent = false;
    if (checkList.includes("marketing")) {
      termConsent = true;
    }

    const KakaoSignupForm = {
      kakaoId: sessionStorage.getItem("id"),
      email: sessionStorage.getItem("email"),
      nickname: sessionStorage.getItem("nickname"),
      profileImage: sessionStorage.getItem("image"),
      termConsent: termConsent,
    };

    // termConsent와 JSESSIONID 쿠키만 보내기로 결정
    axios
      .post(`/BE/signup/kakao`, KakaoSignupForm)
      .then((res) => {
        console.log(res);
        // userInfo 보냈으면 sessionStorage에 있는 것들 id빼고 다 지우기
        //sessionStorage.setItem("nickname", res.data.data.nickname);
        //alert("환영합니다, " + sessionStorage.getItem("nickname") + "님!"); // 한글 깨짐 문제 존재
        sessionStorage.removeItem("email");
        //sessionStorage.removeItem("nickname");
        sessionStorage.removeItem("image");
        sessionStorage.removeItem("id");
        alert("회원가입이 완료되었습니다.");
        // 수정부분
        //sessionStorage.removeItem("new");
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/");
  };

  return (
    <div className="wrapper">
      <div className="box">
        <div className="container">
          <h1
            style={{
              margin: "35px 20px 5px 20px",
              fontWeight: "700",
              fontFamily: "NotoSansKR-700",
            }}
          >
            이용약관에 동의해주세요
          </h1>
          <span style={{ margin: "20px" }}>
            레모아를 이용하기 위한 마지막 단계에요
          </span>
          <ThemeProvider theme={theme}>
            <FormControl component="fieldset" style={{ width: "100%" }}>
              <FormGroup aria-label="position" row>
                {/* 전체 동의 */}
                <div
                  className="agree"
                  style={{
                    background: "rgba(250, 218, 94, 0.5)",
                    marginTop: "30px",
                  }}
                >
                  <div style={{ float: "left", width: "13%" }}>
                    <FormControlLabel
                      style={{
                        float: "left",
                      }}
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleOutlineRounded />}
                          id="1"
                          name="all"
                          onChange={checkAll}
                          checked={checkList.length === 4 ? true : false}
                        />
                      }
                      labelPlacement="start"
                    />
                  </div>
                  <div style={{ float: "left", width: "87%" }}>
                    <label htmlFor="1" style={{ cursor: "pointer" }}>
                      <span>
                        <b style={{ fontSize: "1.2rem" }}>전체 동의하기</b>
                        <br />
                        전체 동의는 이벤트 및 마케팅성 홍보글 수신 동의를 포함한
                        <br />
                        선택 동의 사항 및 필수 동의 사항들을 포함하고 있어요
                      </span>
                    </label>
                  </div>
                </div>

                {/* (필수) 레모아 이용약관 동의 */}
                <div className="agree">
                  <div className="left">
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleOutlineRounded />}
                          id="2"
                          name="terms"
                          onChange={check}
                          checked={checkList.includes("terms") ? true : false}
                        />
                      }
                      labelPlacement="start"
                    />
                  </div>
                  <div className="right">
                    <label htmlFor="2" style={{ cursor: "pointer" }}>
                      <span>(필수) 레모아 이용약관 동의</span>
                    </label>
                  </div>
                  <div className="later" onClick={onClickDetail1}>
                    {detail1 === true ? "숨기기" : "자세히보기"}
                  </div>
                </div>
                {detail1 && <Agree name={0} />}

                {/*개인 정보 수집 및 처리 방침*/}
                <div className="agree">
                  <div className="left">
                    <FormControlLabel
                      value="개인 정보 수집"
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleOutlineRounded />}
                          id="3"
                          name="collect"
                          onChange={check}
                          checked={checkList.includes("collect") ? true : false}
                        />
                      }
                      labelPlacement="start"
                    />
                  </div>
                  <div className="right">
                    <label htmlFor="3" style={{ cursor: "pointer" }}>
                      <span>(필수) 개인정보 수집 및 처리에 대한 동의</span>
                    </label>
                  </div>
                  <div className="later" onClick={onClickDetail2}>
                    {detail2 === true ? "숨기기" : "자세히보기"}
                  </div>
                </div>
                {detail2 && <Agree name={1} />}

                {/* (선택) E-mail 등 광고성 정보 수신 동의 */}
                <div className="agree">
                  <div className="left">
                    <FormControlLabel
                      value="수신 동의"
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleOutlineRounded />}
                          id="4"
                          name="marketing"
                          onChange={check}
                          checked={
                            checkList.includes("marketing") ? true : false
                          }
                        />
                      }
                      labelPlacement="start"
                    />
                  </div>
                  <div className="right">
                    <label htmlFor="4" style={{ cursor: "pointer" }}>
                      <span>(선택) E-mail 등 광고성 정보 수신 동의</span>
                    </label>
                  </div>
                  <div className="later" onClick={onClickDetail3}>
                    {detail3 === true ? "숨기기" : "자세히보기"}
                  </div>
                </div>
                {detail3 && <Agree name={2} />}

                {/* (필수) 본인은 만 14세 이상입니다 */}
                <div className="agree" style={{ marginBottom: "10px" }}>
                  <div className="left" style={{ width: "13%" }}>
                    <FormControlLabel
                      value="14세"
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleOutlineRounded />}
                          id="5"
                          name="age"
                          onChange={check}
                          checked={checkList.includes("age") ? true : false}
                        />
                      }
                      labelPlacement="start"
                    />
                  </div>
                  <div className="right" style={{ width: "87%" }}>
                    <label htmlFor="5" style={{ cursor: "pointer" }}>
                      <span>(필수) 본인은 만 14세 이상입니다</span>
                      <br />
                      <span style={{ fontSize: "0.8rem" }}>
                        만 14세 이하 청소년은 본 서비스를 이용할 수 없습니다
                      </span>
                    </label>
                  </div>
                </div>
              </FormGroup>
            </FormControl>
          </ThemeProvider>
        </div>
        <Button
          disabled={!buttonColor}
          state={buttonColor}
          onClick={onClickStart}
        >
          레모아 시작하기
        </Button>
      </div>
    </div>
  );
}

export default Modal;
