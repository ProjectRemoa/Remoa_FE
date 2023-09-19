import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultImage from "../../images/profile_img.png";
import { useRef } from "react";
import { useEffect } from "react";
import PopupContent from "./MyPageProfilePopupContent";

const Style = {
  Wrapper: styled.div`
    margin-top: 48px;
    margin-bottom: 145px;
  `,
  ProfileImg: styled.img`
    width: 222px;
    height: 222px;
    border-radius: 70%;
    overflow: hidden;
  `,
  ProfileImgIntro: styled.div`
    color: #c3c3c3;
    font-size: 15px;
    font-weight: 700;
    font-family: "Inter";
    margin-top: 22px;
    span {
      color: #000000;
    }
  `,
  ProfileImgBtnWrapper: styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 19px;
  `,
  ProfileImageBtn: styled.label`
    background-color: #fada5e;
    color: #ffffff;
    border-radius: 30px;
    padding: 9px 37px;
    margin: 0px 11px;
    font-size: 13px;
    font-weight: 700;
    font-family: "Inter";
    &:focus,
    &:hover {
      background-color: #ffbe0a;
      color: #ffffff;
    }
  `,
  HorizonLine: styled.hr`
    width: 891px;
    color: #b0b0b0;
    margin-top: 19.35px;
  `,
  DirectionTxt: styled.div`
    color: #5d5d5d;
    text-align: left;
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    margin-top: 22.1px;
  `,
  ProfileWrapper: styled.form`
    width: 891px;
    text-align: left;
  `,
  ProfileItemWrapper: styled.div`
    margin-top: 22px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
  `,
  Title: styled.span`
    width: 200px;
    font-size: 20px;
    font-weight: bold;
    font-family: "Inter";
  `,
  Input: styled.input`
    width: 264px;
    height: 42px;
    color: #1f1f1f;
    border: 1px solid #b0b0b0;
    border-radius: 10px;
    font-family: "Inter";
    &::placeholder {
      color: #1f1f1f;
    }
    &:focus {
      outline: none;
      border: 1px solid #fada5e;
    }
  `,
  University: styled.div`
    width: 264px;
    height: 42px;
    color: #1f1f1f;
    border: 1px solid #b0b0b0;
    border-radius: 10px;
    font-family: "Inter";
  `,
  ItemButton: styled.button`
    width: 142px;
    height: 42px;
    background-color: #fada5e;
    color: #464646;
    border-radius: 10px;
    border: 1px solid #b0b0b0;
    line-height: 40px;
    font-size: 15px;
    font-weight: bold;
    font-family: "Inter";
    &:hover {
      background-color: #ffbe0a;
      color: #ffffff;
    }
  `,
  ModifyButton: styled.button`
    width: 906px;
    height: 68px;
    background: #fada5e;
    border: 1px solid #d0d0d0;
    border-radius: 30px;
    margin-top: 48px;
    font-size: 20px;
    color: #010101;
    font-weight: bold;
    font-family: "Noto Sans KR";
    &:hover {
      background-color: #ffbe0a;
      color: #ffffff;
    }
  `,
};

function MyPageProfile() {
  const navigate = useNavigate();
  const [profileImage, setProfileImage] = useState();
  const [previewImage, setPreviewImage] = useState(); //defaultImage);
  const [idcheck, setIdcheck] = useState();
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const imgInput = useRef();

  const [input, setInput] = useState({
    email: "", //'maninhat@kakao.com',
    nickname: "", //'호갱',
    phoneNumber: "", //'01012345678',
    university: "", //'한국대학교',
    oneLineIntroduction: "", //'안녕하세요 만나서 반갑습니다! 좋은 자료 많이 공유할게요!'
  });

  const { email, nickname, phoneNumber, university, oneLineIntroduction } =
    input;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const changePhone = (e) => {
    let phone = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

    setInput({
      ...input,
      //   ["phoneNumber"]: phone, 일단 주석 처리 230918
    });
  };

  const changeUniversity = (name) => {
    setInput({
      ...input,
      //   ["university"]: name, 일단 주석 처리 230918
    });
  };

  const onChangeImg = (e) => {
    console.log(e);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    return new Promise((resolve) => {
      reader.onload = () => {
        setProfileImage(reader.result);
        setPreviewImage(e.target.files[0]);
        resolve();
      };
    });
  };

  const sendProfileImg = () => {
    imgInput.current.click();
  };

  const nicknameOverlapCheck = (nickname) => {
    axios
      .get(`/BE/nickname?nickname=${nickname}`)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data);
          if (!res.data.data) {
            setIdcheck(
              <div
                style={{
                  width: "200px",
                  color: "#FF0101",
                  lineHeight: "42px",
                  fontSize: "15px",
                }}
              >
                중복된 닉네임이 존재합니다.
              </div>
            );
          } else {
            if (checkUserId(nickname)) {
              setIdcheck(
                <div
                  style={{
                    width: "200px",
                    color: "#0075FF",
                    lineHeight: "42px",
                    fontSize: "15px",
                  }}
                >
                  닉네임을 사용하실 수 있습니다.
                </div>
              );
            } else window.location.reload();
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  const getProfileImg = () => {
    axios
      .get(`/BE/user/img`)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setProfileImage(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProfileImg = () => {
    axios
      .delete(`/BE/user/img`)
      .then(() => {
        console.log("프로필 이미지 삭제 완료");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeProfile = () => {
    axios
      .put(
        `/BE/user`,
        {
          nickname: nickname,
          phoneNumber: phoneNumber,
          university: university,
          oneLineIntroduction: oneLineIntroduction,
        },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.status === 200) {
          navigate("/");
          sessionStorage.setItem("nickname", nickname);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    const formData = new FormData();
    formData.append("file", previewImage);

    axios
      .put(`/BE/user/img`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getProfile = () => {
    axios
      .get("/BE/user", { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          setInput(res.data.data);
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const checkUserId = (id) => {
    if (id === "") return false;

    const idRegExp = /^[ㄱ-ㅎ가-힣a-zA-z0-9]{2,7}$/;
    if (!idRegExp.test(id)) {
      alert("닉네임은 한글, 영문 대소문자, 숫자 2~8자리로 입력해야합니다!");
      return false;
    }
    return true;
  };

  useEffect(() => {
    getProfile();
    getProfileImg();
  }, []);

  return (
    <>
      <Style.Wrapper>
        <Style.ProfileImg src={profileImage} />
        <Style.ProfileImgIntro>
          <span>{nickname}</span>님
          <br />
          <span>오늘은 어떤 공모전에 참여하시나요?</span>
        </Style.ProfileImgIntro>

        <Style.ProfileImgBtnWrapper>
          <Style.ProfileImageBtn onClick={sendProfileImg}>
            프로필 사진 변경
          </Style.ProfileImageBtn>
          <input
            type="file"
            ref={imgInput}
            id="ProfileImg"
            name="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => onChangeImg(e)}
          />
          <Style.ProfileImageBtn onClick={deleteProfileImg}>
            기본 사진으로 변경
          </Style.ProfileImageBtn>
        </Style.ProfileImgBtnWrapper>

        <Style.HorizonLine />

        <Style.DirectionTxt>
          프로필 수정 후 수정 완료 버튼을 반드시 눌러주세요
        </Style.DirectionTxt>

        <Style.ProfileWrapper>
          <Style.ProfileItemWrapper>
            <Style.Title>계정</Style.Title>
            {email}
          </Style.ProfileItemWrapper>

          <Style.ProfileItemWrapper>
            <Style.Title>닉네임</Style.Title>
            <Style.Input
              placeholder={nickname}
              name="nickname"
              onChange={onChangeInput}
            />
            <Style.ItemButton
              type="button"
              onClick={() => nicknameOverlapCheck(nickname)}
            >
              중복 확인
            </Style.ItemButton>
            <div>{idcheck}</div>
          </Style.ProfileItemWrapper>

          <Style.ProfileItemWrapper>
            <Style.Title>휴대전화</Style.Title>
            <Style.Input
              placeholder={phoneNumber}
              name="phoneNumber"
              onChange={changePhone}
            />
          </Style.ProfileItemWrapper>

          <Style.ProfileItemWrapper>
            <Style.Title>재학 중 대학</Style.Title>
            <Style.Input
              id="profileUniversity"
              placeholder={university}
              disabled
            />
            <Style.ItemButton type="button" id="popupDom" onClick={openPopup}>
              검색하기
            </Style.ItemButton>
            {isOpenPopup && (
              <PopupContent
                changeUniversity={changeUniversity}
                close={closePopup}
              />
            )}
          </Style.ProfileItemWrapper>

          <Style.ProfileItemWrapper>
            <Style.Title>한줄 소개</Style.Title>
            <Style.Input
              placeholder={oneLineIntroduction}
              name="oneLineIntroduction"
              onChange={onChangeInput}
              style={{
                width: "675px",
                height: "90px",
              }}
            />
          </Style.ProfileItemWrapper>
        </Style.ProfileWrapper>

        <Style.ModifyButton onClick={changeProfile}>
          수정 완료
        </Style.ModifyButton>
      </Style.Wrapper>
    </>
  );
}

export default MyPageProfile;
