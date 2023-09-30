import React from "react";
import { useNavigate } from "react-router";
import kakao_login from "../../images/kakao_login_large.png";
import { KAKAO_AUTH_URL } from "./KakaoLogin/kakaodata";
import { useEffect } from "react";
import Modal from "./Modal";
import S from "./SocialLoginContainer.styles";

function SocialLoginContainer() {
  const navigate = useNavigate();

  const isNotLogin = () => {
    alert("이미 로그인 되어있습니다.");
    navigate("/");
  };

  useEffect(() => {
    if (
      sessionStorage.getItem("nickname") != null &&
      sessionStorage.getItem("new") === null
    ) {
      console.log(sessionStorage.getItem("nickname"));
      isNotLogin();
    }
  }, []);

  return (
    <>
      {sessionStorage.getItem("new") && <Modal />}
      <S.Container>
        <S.OuterBox>
          <S.TextBox>
            간단한 로그인으로 <br /> 공모전 관련 자료를 자유롭게 찾아보세요
          </S.TextBox>
          <S.InnerBox>
            <S.CommentBox>
              <p>
                📚 공모전 수상작을 포함한 참가 작품들을 자유롭게 열람
              </p>
            </S.CommentBox>
            <S.CommentBox>
              <p>💡 참가작 공유를 통한 다양한 피드백 및 코멘트 수령</p>
            </S.CommentBox>
          </S.InnerBox>
          <S.LoginBox>
            <S.LoginInfoBox>
              카카오 계정으로 3초만에 가입하기
            </S.LoginInfoBox>
            <a href={KAKAO_AUTH_URL}>
              <img src={kakao_login} alt="kakaologin" />
            </a>
          </S.LoginBox>
        </S.OuterBox>
      </S.Container>
    </>
  );
}

export default SocialLoginContainer;
