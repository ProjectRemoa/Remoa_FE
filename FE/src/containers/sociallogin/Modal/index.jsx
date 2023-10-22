import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { ThemeProvider } from "@mui/material";
import { CheckCircleOutlineRounded , CheckCircleRounded} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import Agree from "../Agree";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import line from "../../../images/line.png"
import S from "./Modal.styles"


function Modal({ modalOpen }) {
  const navigate = useNavigate();
  /* 약관 동의 체크박스 */
  const [checkList, setCheckList] = useState([]);
  const [buttonColor, setButtonColor] = useState(false);

  const [detail1, setDetail1] = useState(false);
  const [detail2, setDetail2] = useState(false);

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

    // termConsent와 JSESSIONID만 보내기로 결정
    axios
      .post(`/BE/signup/kakao`, KakaoSignupForm)
      .then((res) => {
        console.log(res);
        // userInfo 보냈으면 sessionStorage에 있는 것들 id빼고 다 지우기
        sessionStorage.setItem("nickname", res.data.data.nickname);
        sessionStorage.removeItem("id");

        alert("회원가입이 완료되었습니다.");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/");
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Box>
          <S.AgreeText>이용약관에 동의해주세요</S.AgreeText>
          <S.AgreeLastText>
            레모아를 이용하기 위한 마지막 단계에요
          </S.AgreeLastText>
          <ThemeProvider theme={S.Theme}>
            <FormControl component="fieldset">
              <FormGroup aria-label="position" row>
                {/* 전체 동의 */}
                <S.AgreeAllBox>
                  <S.AgreeAllCheckBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleRounded />}
                          id="1"
                          name="all"
                          onChange={checkAll}
                          checked={checkList.length === 4 ? true : false}
                        />
                      }
                      labelPlacement="start"
                    />
                  </S.AgreeAllCheckBox>
                  <S.AgreeAllTextBox>
                    <label htmlFor="1">
                      <S.AgreeAllText>전체 동의하기</S.AgreeAllText>
                      <S.AgreeAllSubText>
                        전체 동의는 이벤트 및 마케팅성 홍보글 수신 동의를 포함한
                        <br />
                        선택 동의 사항 및 필수 동의 사항들을 포함하고 있어요
                      </S.AgreeAllSubText>
                    </label>
                  </S.AgreeAllTextBox>
                </S.AgreeAllBox>
                <img src={line} alt="line" width="404px" />
                {/* (필수) 레모아 이용약관 동의 */}
                <S.AgreeBox>
                  <S.AgreeCheckBox>
                    <FormControlLabel
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleRounded />}
                          id="2"
                          name="terms"
                          onChange={check}
                          checked={checkList.includes("terms") ? true : false}
                        />
                      }
                      labelPlacement="start"
                    />
                    <label htmlFor="2">
                      <S.AgreeSubText>
                        (필수) 레모아 이용약관 동의
                      </S.AgreeSubText>
                    </label>
                  </S.AgreeCheckBox>
                  <S.AgreeDetailBox>
                    <S.DetailButton onClick={onClickDetail1} state={detail1}>
                      {detail1 === true ? "숨기기" : "자세히보기"}
                    </S.DetailButton>
                  </S.AgreeDetailBox>
                </S.AgreeBox>
                {detail1 && <Agree name={0} />}

                {/*개인 정보 수집 및 처리 방침*/}
                <S.AgreeBox>
                  <S.AgreeCheckBox>
                    <FormControlLabel
                      value="개인 정보 수집"
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleRounded />}
                          id="3"
                          name="collect"
                          onChange={check}
                          checked={checkList.includes("collect") ? true : false}
                        />
                      }
                      labelPlacement="start"
                    />
                    <label htmlFor="3">
                      <S.AgreeSubText>
                        (필수) 개인정보 수집 및 처리에 대한 동의
                      </S.AgreeSubText>
                    </label>
                  </S.AgreeCheckBox>
                  <S.AgreeDetailBox>
                    <S.DetailButton onClick={onClickDetail2} state={detail2}>
                      {detail2 === true ? "숨기기" : "자세히보기"}
                    </S.DetailButton>
                  </S.AgreeDetailBox>
                </S.AgreeBox>
                {detail2 && <Agree name={1} />}

                {/* (선택) E-mail 등 광고성 정보 수신 동의 */}
                <S.AgreeBox>
                  <S.AgreeCheckBox>
                    <FormControlLabel
                      value="수신 동의"
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleRounded />}
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
                    <label htmlFor="4">
                      <S.AgreeSubText>
                        (선택) E-mail 등 광고성 정보 수신 동의
                      </S.AgreeSubText>
                    </label>
                  </S.AgreeCheckBox>
                </S.AgreeBox>

                {/* (필수) 본인은 만 14세 이상입니다 */}
                <S.AgreeBox>
                  <S.AgreeCheckBox>
                    <FormControlLabel
                      value="14세"
                      control={
                        <Checkbox
                          color="primary"
                          icon={<CheckCircleOutlineRounded />}
                          checkedIcon={<CheckCircleRounded />}
                          id="5"
                          name="age"
                          onChange={check}
                          checked={checkList.includes("age") ? true : false}
                        />
                      }
                      labelPlacement="start"
                    />
                    <label htmlFor="5">
                      <S.AgreeSubText>
                        (필수) 본인은 만 14세 이상입니다
                        <br />
                        <p
                          style={{
                            fontSize: "12px",
                            color: "#A7A7A7",
                            paddingLeft: "50px",
                            marginTop: "-8px",
                          }}
                        >
                          만 14세 이하 청소년은 본 서비스를 이용할 수 없습니다
                        </p>
                      </S.AgreeSubText>
                    </label>
                  </S.AgreeCheckBox>
                </S.AgreeBox>
              </FormGroup>
            </FormControl>
          </ThemeProvider>
        </S.Box>
        <S.ButtonBox>
          <S.Button
            disabled={!buttonColor}
            state={buttonColor}
            onClick={onClickStart}
          >
            레모아 시작하기
          </S.Button>
        </S.ButtonBox>
      </S.Container>
    </S.Wrapper>
  );
}

export default Modal;
