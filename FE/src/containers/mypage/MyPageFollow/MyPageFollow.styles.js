import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  margin-top: 111px;
  margin-bottom: 155px;
`;
const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const BtnWrap = styled.div`
  display: flex;
  align-items: center;
`;
const FollowBtn = styled.button`
  width: auto;
  padding: 0;
  font-size: 25px;
  font-weight: 700;
  border: none;
  box-shadow: none;
  background-color: transparent;
`;
const Line = styled.div`
  font-size: 25px;
  text-align: center;
  font-weight: bold;
  padding: 0 10px;
`;
const FollowNum = styled.div`
  display: flex;
  padding-top: 12px;
`;
const Text = styled.span`
  color: #fada5e;
  font-weight: 700;
`;
const FollowWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
  padding-top: 44px;
`;
const FollowProfileImgWrap = styled.div`
  width: 20%;
`;
const FollowProfileImg = styled.img`
  width: 114px;
  height: 114px;
  border-radius: 50%;
`;
const FollowProfileIntroWrap = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
`;
const FollowProfileName = styled.div`
  font-size: 30px;
`;
const FollowNumWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const FollowTotal = styled.div`
  font-size: 20px;
  margin-right: 10px;
`;
const FollowTitle = styled.span`
  color: #fada5e;
  font-weight: 700;
`;
const FollowProfileIntro = styled.div`
  color: #1f1f1f;
  font-size: 20px;
  margin-top: 15px;
`;
const FollowBtnWrap = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const FollowDetailBtn = styled.button`
  width: 173px;
  height: 45px;
  background: #fada5e;
  border-radius: 10px;
  box-shadow: none;
  border: none;
  color: #000000;
`;

const styledComponent = {
  Wrapper,
  HeaderWrap,
  BtnWrap,
  FollowBtn,
  Line,
  FollowNum,
  Text,
  FollowWrap,
  FollowProfileImgWrap,
  FollowProfileImg,
  FollowProfileIntroWrap,
  FollowProfileName,
  FollowNumWrap,
  FollowTotal,
  FollowTitle,
  FollowProfileIntro,
  FollowBtnWrap,
  FollowDetailBtn,
};

export default styledComponent;
