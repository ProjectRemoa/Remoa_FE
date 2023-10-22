import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 48px;
  margin-bottom: 145px;
`;
const ProfileImg = styled.img`
  width: 222px;
  height: 222px;
  border-radius: 70%;
  overflow: hidden;
`;
const ProfileImgIntro = styled.div`
  color: #c3c3c3;
  font-size: 15px;
  font-weight: 700;
  font-family: "Inter";
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
const ProfileImageBtn = styled.label`
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
`;
const HorizonLine = styled.hr`
  width: 891px;
  color: #b0b0b0;
  margin-top: 19.35px;
`;
const DirectionTxt = styled.div`
  color: #5d5d5d;
  text-align: left;
  font-family: "Inter";
  font-weight: 400;
  font-size: 18px;
  margin-top: 22.1px;
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
  font-family: "Inter";
`;
const Input = styled.input`
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
`;
const University = styled.div`
  width: 264px;
  height: 42px;
  color: #1f1f1f;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  font-family: "Inter";
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
  font-family: "Inter";
  &:hover {
    background-color: #ffbe0a;
    color: #ffffff;
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
};

export default styledComponent;
