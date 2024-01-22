import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 53px 0px 90px;
`;

const ProfileImg = styled.img`
  width: 222px;
  height: 222px;
  border-radius: 50%;
`;

const ProfileImgIntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #464646;
  font-size: 14px;
  font-weight: 600;
  margin-top: 22px;
`;

const ProfileImgIntro = styled.span`
  &:first-child {
    color: #1e1e1e;
    font-size: 24px;
    margin-bottom: 5px;
  }
`;

const ProfileImgBtnWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 19px;
`;

const ProfileImgBtn = styled.label`
  width: 140px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fada5e;
  color: #000000;
  border-radius: 12px;
  margin: 0px 8px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  &:nth-child(3) {
    border: 1px solid #a7a7a7;
    background-color: white;
    &:hover {
      background-color: #a7a7a7;
    }
  }
  &:hover {
    background-color: #dfb71c;
  }
`;

const ProfileWrapper = styled.form`
  width: 832px;
  text-align: left;
`;

const RequirementMessage = styled.div`
  display: flex;
  justify-content: end;
`;

const RequirementMark = styled.span`
  color: #ff0101;
`;

const HorizonLine = styled.hr`
  width: 832px;
  height: 1px;
  background: #e7e7e7;
  border: 0;
  margin-top: 13px;
  &:first-of-type {
    background: #464646;
  }
`;

const ProfileItemWrapper = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const Title = styled.div`
  width: 200px;
  font-size: 20px;
  font-weight: bold;
`;

const NicknameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  box-sizing: border-box;
  width: 271px;
  height: 42px;
  font-family: Pretendard-Medium;
  color: #1f1f1f;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  padding-left: 13px;
  &::placeholder {
    color: #1f1f1f;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    background-color: inherit;
  }
`;

const NicknameWarningText = styled.span`
  font-size: 12px;
  color: #727272;
  margin-top: 10px;
`;

const NicknameDuplicationText = styled.span`
  font-size: 12px;
  margin-top: 6px;
  height: 14.4px;
`;

const ItemButton = styled.button`
  width: 100px;
  height: 42px;
  background-color: white;
  color: #1e1e1e;
  border-radius: 12px;
  border: 1px solid #a7a7a7;
  font-size: 14px;
  font-weight: 500;
  font-family: Pretendard-Medium;
  margin-left: 11px;
  &:hover {
    background-color: #a7a7a7;
  }
`;

const OneLineIntroduction = styled.textarea`
  width: 654px;
  height: 108px;
  color: #1f1f1f;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 12px 9px;
  resize: none;
  font-weight: 500;
  font-size: 16px;
  font-family: Pretendard-Medium;
  &::placeholder {
    color: #a7a7a7;
  }
  &:focus {
    outline: none;
  }
`;

const ProfileEditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 39px;
`;

const EditMessage = styled.span`
  height: 17px;
  color: ${(props) => (props.editMessageColor ? "#1e1e1e" : "#ff0101")};
`;

const EditButton = styled.button`
  width: 194px;
  height: 56px;
  background: #fada5e;
  border: 1px solid #d0d0d0;
  border-radius: 30px;
  font-size: 20px;
  margin-top: 16px;
  color: #010101;
  font-weight: bold;
  &:hover {
    background-color: #dfb71c;
  }
`;

const styledComponent = {
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
};

export default styledComponent;
