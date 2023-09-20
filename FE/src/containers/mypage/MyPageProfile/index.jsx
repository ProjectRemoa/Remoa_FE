import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultImage from "../../../images/profile_img.png";
import PopupContent from "../MyPageProfilePopupContent";
import styledComponent from "./MyPageProfile.styles";
const {
  Wrapper,
  ProfileImg,
  ProfileImgIntro,
  ProfileImgBtnWrapper,
  ProfileImageBtn,
  HorizonLine,
  DirectionTxt,
  ProfileWrapper,
  ProfileItemWrapper,
  Title,
  Input,
  University,
  ItemButton,
  ModifyButton,
} = styledComponent;

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

  const editProfileImg = () => {
    imgInput.current.click();
  };

  const onChangeImg = (e) => {
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
        // console.log(res);
        if (res.status === 200) {
          setProfileImage(res.data.data);
        }
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
        // console.log(res);
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
    <Wrapper>
      <ProfileImg src={profileImage} />
      <ProfileImgIntro>
        <span>{nickname}</span>님
        <br />
        <span>오늘은 어떤 공모전에 참여하시나요?</span>
      </ProfileImgIntro>

      <ProfileImgBtnWrapper>
        <ProfileImageBtn onClick={editProfileImg}>
          프로필 사진 변경
        </ProfileImageBtn>
        <input
          type="file"
          ref={imgInput}
          id="ProfileImg"
          name="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(e) => onChangeImg(e)}
        />
        <ProfileImageBtn onClick={deleteProfileImg}>
          기본 사진으로 변경
        </ProfileImageBtn>
      </ProfileImgBtnWrapper>

      <HorizonLine />

      <DirectionTxt>
        프로필 수정 후 수정 완료 버튼을 반드시 눌러주세요
      </DirectionTxt>

      <ProfileWrapper>
        <ProfileItemWrapper>
          <Title>계정</Title>
          {email}
        </ProfileItemWrapper>

        <ProfileItemWrapper>
          <Title>닉네임</Title>
          <Input
            placeholder={nickname}
            name="nickname"
            onChange={onChangeInput}
          />
          <ItemButton
            type="button"
            onClick={() => nicknameOverlapCheck(nickname)}
          >
            중복 확인
          </ItemButton>
          <div>{idcheck}</div>
        </ProfileItemWrapper>

        <ProfileItemWrapper>
          <Title>휴대전화</Title>
          <Input
            placeholder={phoneNumber}
            name="phoneNumber"
            onChange={changePhone}
          />
        </ProfileItemWrapper>

        <ProfileItemWrapper>
          <Title>재학 중 대학</Title>
          <Input id="profileUniversity" placeholder={university} disabled />
          <ItemButton type="button" id="popupDom" onClick={openPopup}>
            검색하기
          </ItemButton>
          {isOpenPopup && (
            <PopupContent
              changeUniversity={changeUniversity}
              close={closePopup}
            />
          )}
        </ProfileItemWrapper>

        <ProfileItemWrapper>
          <Title>한줄 소개</Title>
          <Input
            placeholder={oneLineIntroduction}
            name="oneLineIntroduction"
            onChange={onChangeInput}
            style={{
              width: "675px",
              height: "90px",
            }}
          />
        </ProfileItemWrapper>
      </ProfileWrapper>

      <ModifyButton onClick={changeProfile}>수정 완료</ModifyButton>
    </Wrapper>
  );
}

export default MyPageProfile;
