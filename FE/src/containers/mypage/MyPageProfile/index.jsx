import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { useMutation, useQuery } from "react-query";
import {
  getUserProfileImg,
  putUserProfileImg,
} from "../../../apis/mypage/user";
import MyPageUniversityModal from "../MyPageUniversityModal";
import styledComponent from "./MyPageProfile.styles";
const {
  Wrapper,
  ProfileImg,
  ProfileImgIntroWrapper,
  ProfileImgIntro,
  ProfileImgBtnWrapper,
  ProfileImgBtn,
  RequirementMessage,
  RequirementMark,
  HorizonLine,
  ProfileWrapper,
  ProfileItemWrapper,
  Title,
  NicknameWrapper,
  Input,
  NicknameWarningText,
  NicknameDuplicationText,
  ItemButton,
  OneLineIntroduction,
  ProfileEditWrapper,
  EditMessage,
  EditButton,
} = styledComponent;

function MyPageProfile() {
  const imgRef = useRef();
  const [userData, setUserData] = useState({});
  const [previewImage, setPreviewImage] = useState("");
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [idCheckMessage, setIdCheckMessage] = useState("");
  const [idCheckColor, setIdCheckColor] = useState("");
  const [editMessage, setEditMessage] = useState("");
  const [editMessageColor, setEditMessageColor] = useState(true);
  const { data: profileImage } = useQuery(["user"], getUserProfileImg);
  const { mutate } = useMutation(putUserProfileImg);

  const { email, nickname, phoneNumber, university, oneLineIntroduction } =
    userData;

  useEffect(() => {
    getProfile();
  }, []);

  // /BE/user에서 유저 정보 받아오기

  const getProfile = async () => {
    try {
      const res = await axios.get("/BE/user");
      setUserData(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  // 프로필 사진 변경

  const handleClickImg = () => {
    imgRef.current.click();
  };

  const handleChangeProfileImgFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    if (file?.size > 2000000) {
      alert("2MB 이하의 파일만 업로드할 수 있습니다.");
      return;
    }
    reader.onload = (e) => {
      let img = new Image();
      img.src = e.target.result;
      img.onload = () => {
        if (img.width < 110 || img.height < 110) {
          alert("최소 규격보다 작은 사진입니다. (최소 110x110)");
          return;
        }
        setPreviewImage(img.src);
      };
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
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
    const isOnlyEng = /^[a-zA-Z0-9]*$/g.test(value);
    const isKorOrEng = /[ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z]/g.test(value) && !isOnlyEng;
    const isSpecialChar = /[^ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9]/g.test(value);
    const nicknameRegExp =
      (isOnlyEng && value.length > 8) ||
      (isKorOrEng && value.length > 8) ||
      isSpecialChar;

    return nicknameRegExp ? null : setUserData({ ...userData, [name]: value });
  };

  // 닉네임 중복체크

  const handleNicknameDuplicationCheck = async (nickname) => {
    if (!nickname) return;
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

  const handleChangePhone = (e) => {
    const { name, value } = e.target;
    const isOnlyNum = /^[0-9]*$/g.test(value);
    if (!isOnlyNum) alert("숫자 외에는 입력하실 수 없습니다.");
    const phoneRegExp = !isOnlyNum || (isOnlyNum && value.length > 11);
    return phoneRegExp
      ? null
      : setUserData({
          ...userData,
          [name]: value,
        });
  };

  // 대학명 변경

  const handleChangeUniversity = (name) =>
    setUserData({
      ...userData,
      university: name,
    });

  // 대학 모달창 열기 닫기

  const togglepopup = () => setIsOpenPopup((prev) => !prev);

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

  // 수정완료 handleEdit

  const handleEdit = (event) => {
    event.preventDefault();
    mutate(imgRef.current.files[0]);

    const profileData = {
      nickname,
      phoneNumber,
      university,
      oneLineIntroduction,
    };

    if (!nickname || !university) {
      setEditMessageColor(false);
      setEditMessage("아직 필수항목을 모두 입력하지 않았어요.");
    } else {
      axios.put("/BE/user", profileData);
      sessionStorage.setItem("nickname", nickname);
      setEditMessageColor(true);
      setEditMessage("수정이 완료되었습니다.");
    }
    setTimeout(() => {
      setEditMessage("");
    }, 3000);
  };

  return (
    <Wrapper>
      <ProfileImg src={previewImage || profileImage} alt="profileImg" />
      <ProfileImgIntroWrapper>
        <ProfileImgIntro>
          {sessionStorage.getItem("nickname")}님
        </ProfileImgIntro>
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

      <ProfileWrapper>
        <RequirementMessage>
          <RequirementMark>*</RequirementMark>는 필수 입력 항목입니다.
        </RequirementMessage>
        <HorizonLine />

        <ProfileItemWrapper>
          <Title>계정</Title>
          {email}
        </ProfileItemWrapper>

        <HorizonLine />

        <ProfileItemWrapper>
          <Title>
            닉네임
            <RequirementMark>*</RequirementMark>
          </Title>
          <NicknameWrapper>
            <Input
              value={nickname}
              name="nickname"
              onChange={(e) => handleChangeNickname(e)}
            />
            <NicknameWarningText>
              닉네임은 최대 8글자까지 가능합니다.
            </NicknameWarningText>
            <NicknameDuplicationText
              style={{
                color: idCheckColor,
              }}
            >
              {idCheckMessage}
            </NicknameDuplicationText>
          </NicknameWrapper>
          <ItemButton
            type="button"
            onClick={() => handleNicknameDuplicationCheck(nickname)}
          >
            중복확인
          </ItemButton>
        </ProfileItemWrapper>

        <HorizonLine />

        <ProfileItemWrapper>
          <Title>휴대전화</Title>
          <Input
            value={phoneNumber}
            name="phoneNumber"
            onChange={(e) => handleChangePhone(e)}
          />
        </ProfileItemWrapper>

        <HorizonLine />

        <ProfileItemWrapper>
          <Title>
            재학 중 대학
            <RequirementMark>*</RequirementMark>
          </Title>
          <Input id="profileUniversity" value={university} disabled />
          <ItemButton type="button" id="popupDom" onClick={togglepopup}>
            검색하기
          </ItemButton>
          {isOpenPopup && (
            <MyPageUniversityModal
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
            placeholder="공백 포함 30자까지 입력할 수 있어요."
          />
        </ProfileItemWrapper>
      </ProfileWrapper>
      <ProfileEditWrapper>
        <EditMessage editMessageColor={editMessageColor}>
          {editMessage}
        </EditMessage>
        <EditButton onClick={handleEdit}>수정 완료</EditButton>
      </ProfileEditWrapper>
    </Wrapper>
  );
}

export default MyPageProfile;
