import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultImage from "../../../images/profile_img.png";
import MyPageProfilePopupContent from "../MyPageProfilePopupContent";
import styledComponent from "./MyPageProfile.styles";
const {
  Wrapper,
  ProfileImg,
  ProfileImgIntroWrapper,
  ProfileImgIntro,
  ProfileImgBtnWrapper,
  ProfileImgBtn,
  HorizonLine,
  ProfileWrapper,
  ProfileItemWrapper,
  Title,
  NicknameWrapper,
  Input,
  University,
  ItemButton,
  OneLineIntroduction,
  ModifyButton,
} = styledComponent;

function MyPageProfile() {
  const navigate = useNavigate();
  const imgRef = useRef();
  const [userData, setUserData] = useState({});
  const [profileImage, setProfileImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [idCheckMessage, setIdCheckMessage] = useState("");
  const [idCheckColor, setIdCheckColor] = useState("");
  const [introNickname, setIntroNickname] = useState("");

  const { email, nickname, phoneNumber, university, oneLineIntroduction } =
    userData;

  // /BE/user에서 유저 정보 받아오기

  const getProfile = async () => {
    try {
      const res = await axios.get("/BE/user", { withCredentials: true });
      if (res.status === 200) {
        setUserData(res.data.data);
        setIntroNickname(res.data.data.nickname);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // /BE/user/img에서 프로필 사진 받아오기

  const getProfileImg = async () => {
    try {
      const res = await axios.get("/BE/user/img");
      if (res.status === 200) setProfileImage(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
    getProfileImg();
  }, []);

  // 프로필 사진 변경

  const handleClickImg = () => {
    imgRef.current.click();
  };

  const handleChangeProfileImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setProfileImage(reader.result);
      setPreviewImage(imgRef.current.files[0]);
    };
  };

  // 기본 사진으로 변경

  const handleChangeDefaultImg = () => {
    axios
      .delete(`/BE/user/img`)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 닉네임 변경

  const handleChangeNickname = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // 닉네임 중복체크

  const nicknameOverlapCheck = async (nickname) => {
    const idRegExp = /^[가-힣]{1,6}$|^[a-zA-Z]{1,12}$/;
    if (!nickname || !idRegExp.test(nickname)) return;
    try {
      const res = await axios.get(`/BE/nickname?nickname=${nickname}`);

      if (!res.data.data) {
        setIdCheckMessage("중복된 닉네임이 존재합니다.");
        setIdCheckColor("#ff0101");
      } else {
        setIdCheckMessage("사용가능한 닉네임입니다.");
        setIdCheckColor("#0075ff");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 휴대전화 변경

  const handleChangePhone = (e) => {
    let phone = e.target.value
      .replace(/[^0-9]/g, "")
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

    setUserData({
      ...userData,
      //   ["phoneNumber"]: phone, 일단 주석 처리 230918
    });
  };

  // 대학명 변경

  const handleChangeUniversity = (name) => {
    setUserData({
      ...userData,
      //   ["university"]: name, 일단 주석 처리 230918
    });
  };

  // 대학 모달창 열기 닫기

  const togglepopup = () => {
    setIsOpenPopup((prev) => !prev);
  };

  // 한줄 소개 변경

  const handleChangeIntro = (e) => {
    const { name, value } = e.target;
    if (value.length > 30) {
      alert("한줄 소개는 30자를 초과하면 안돼요.");
      return;
    }
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // 수정완료 handleSumbit

  const changeProfile = (event) => {
    event.preventDefault();
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

  // 아이디 정규식

  const checkUserId = (id) => {
    const idRegExp = /^[가-힣]{1,6}$|^[a-zA-Z]{1,12}$/;
    if (!idRegExp.test(id)) {
      alert("닉네임은 한글, 영문 대소문자, 숫자 2~8자리로 입력해야합니다!");
      return false;
    }
    return true;
  };

  return (
    <Wrapper>
      <ProfileImg src={profileImage} alt="preview-img" />
      <ProfileImgIntroWrapper>
        <ProfileImgIntro>{introNickname}님</ProfileImgIntro>
        <ProfileImgIntro>오늘은 어떤 공모전에 참여하시나요?</ProfileImgIntro>
      </ProfileImgIntroWrapper>

      <ProfileImgBtnWrapper>
        <ProfileImgBtn onClick={handleClickImg}>프로필 사진 변경</ProfileImgBtn>
        <input
          type="file"
          ref={imgRef}
          id="ProfileImg"
          name="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleChangeProfileImgFile}
        />
        <ProfileImgBtn onClick={handleChangeDefaultImg}>
          기본 사진으로 변경
        </ProfileImgBtn>
      </ProfileImgBtnWrapper>

      <ProfileWrapper onSubmit={changeProfile}>
        <HorizonLine />

        <ProfileItemWrapper>
          <Title>계정</Title>
          {email}
        </ProfileItemWrapper>

        <HorizonLine />

        <ProfileItemWrapper>
          <Title>닉네임</Title>
          <NicknameWrapper>
            <Input
              value={nickname}
              name="nickname"
              onChange={(e) => handleChangeNickname(e)}
            />
            <span
              style={{ fontSize: "12px", color: "#727272", marginTop: "10px" }}
            >
              닉네임은 한글 6글자, 영어 12글자까지 가능합니다
            </span>
            <span
              style={{
                fontSize: "12px",
                color: idCheckColor,
                marginTop: "6px",
                height: "14.4px",
              }}
            >
              {idCheckMessage}
            </span>
          </NicknameWrapper>
          <ItemButton
            type="button"
            onClick={() => nicknameOverlapCheck(nickname)}
          >
            중복확인
          </ItemButton>
        </ProfileItemWrapper>

        <HorizonLine />

        <ProfileItemWrapper>
          <Title>휴대전화</Title>
          <Input
            placeholder={phoneNumber}
            name="phoneNumber"
            onChange={handleChangePhone}
          />
        </ProfileItemWrapper>

        <HorizonLine />

        <ProfileItemWrapper>
          <Title>재학 중 대학</Title>
          <Input id="profileUniversity" placeholder={university} disabled />
          <ItemButton type="button" id="popupDom" onClick={togglepopup}>
            검색하기
          </ItemButton>
          {isOpenPopup && (
            <MyPageProfilePopupContent
              changeUniversity={handleChangeUniversity}
              close={togglepopup}
            />
          )}
        </ProfileItemWrapper>

        <HorizonLine />

        <ProfileItemWrapper>
          <Title>한줄 소개</Title>
          <OneLineIntroduction
            value={oneLineIntroduction}
            name="oneLineIntroduction"
            onChange={(e) => handleChangeIntro(e)}
          />
        </ProfileItemWrapper>
        <ModifyButton type="submit">수정 완료</ModifyButton>
      </ProfileWrapper>
    </Wrapper>
  );
}

export default MyPageProfile;
