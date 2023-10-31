import styled from "styled-components";

const Wrapper = styled.div`
  margin: 44px 0px 127px;
`;
const ProfileImg = styled.img`
  width: 222px;
  height: 222px;
  border-radius: 70%;
  overflow: hidden;
`;
const ProfileImgIntro = styled.div`
  color: #464234;
  font-size: 18px;
  font-weight: 600;
  margin-top: 22px;
  span {
    color: #000000;
  }
`;
const ProfileImgBtnWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 19px;
`;
const ProfileImgBtn = styled.label`
  background-color: #fada5e;
  color: #000000;
  border-radius: 10px;
  padding: 12px 40px;
  margin: 0px 8px;
  font-weight: 600;
  &:focus,
  &:hover {
    background-color: #ffbe0a;
    color: #ffffff;
  }
`;
const HorizonLine = styled.hr`
  width: 891px;
  color: #b0b0b0;
  margin-top: 19.35px;
`;
const ProfileWrapper = styled.form`
  width: 891px;
  text-align: left;
`;
const ProfileItemWrapper = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
`;
const Title = styled.span`
  width: 200px;
  font-size: 20px;
  font-weight: bold;
`;
const Input = styled.input`
  width: 264px;
  height: 42px;
  color: #1f1f1f;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  &::placeholder {
    color: #1f1f1f;
  }
  &:focus {
    outline: none;
    border: 1px solid #fada5e;
  }
`;
const University = styled.div`
  width: 264px;
  height: 42px;
  color: #1f1f1f;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
`;
const ItemButton = styled.button`
  width: 142px;
  height: 42px;
  background-color: #fada5e;
  color: #464646;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  line-height: 40px;
  font-size: 15px;
  font-weight: bold;
  &:hover {
    background-color: #ffbe0a;
    color: #ffffff;
  }
`;
const OneLineIntroduction = styled.textarea`
  width: 701px;
  height: 92px;
  color: #1f1f1f;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  padding: 12px 9px;
  resize: none;
  font-weight: 500;
  font-size: 16px;
  font-family: Pretendard-Medium;
  &::placeholder {
    color: #1f1f1f;
  }
  &:focus {
    outline: none;
    border: 1px solid #fada5e;
  }
`;
const ModifyButton = styled.button`
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
`;

const styledComponent = {
  Wrapper,
  ProfileImg,
  ProfileImgIntro,
  ProfileImgBtnWrapper,
  ProfileImgBtn,
  HorizonLine,
  ProfileWrapper,
  ProfileItemWrapper,
  Title,
  Input,
  University,
  ItemButton,
  OneLineIntroduction,
  ModifyButton,
};

export default styledComponent;
