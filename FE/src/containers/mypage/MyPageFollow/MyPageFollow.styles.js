import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const BtnWrap = styled.div`
  width: 50%;
  float: left;
  display: flex;
  flex-direction: row;
  padding-top: 150px;
  margin: 0 auto;
`;
const FollowBtn = styled.a`
  width: auto;
  font-size: 25px;
  border: none;
  background-color: transparent;
  color: #000000;
  text-align: left;
  outline: none;
  box-shadow: none;
  cursor: pointer;
`;
const Line = styled.div`
  font-size: 25px;
  color: #000000;
  text-align: center;
  font-weight: bold;
  padding: 0 10px 0 10px;
`;
const FollowNum = styled.div`
  width: 50%;
  float: left;
  display: flex;
  padding-top: 15px;
  margin: 0 auto;
`;
const Text = styled.span`
  color: #fada5e;
  font-weight: bold;
`;
const FollowList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const FollowWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 60px;
  margin: 0 auto;
`;
const FollowProfileImgWrap = styled.div`
  width: 10%;
  padding: 0 20px 0 0;
`;
const FollowProfileImg = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  overflow: hidden;
`;
const FollowProfileIntroWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  float: left;
  margin: 0 auto;
  text-align: left;
`;
const FollowProfileName = styled.div`
  font-size: 30px;
  color: #000000;
`;
const FollowNumWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const FollowTotal = styled.div`
  color: #000000;
  font-size: 20px;
  padding: 0 10px 0 0;
`;
const FollowTitle = styled.span`
  color: #fada5e;
  font-size: 20px;
  font-weight: bold;
  padding: 0 10px 0 0;
`;
const FollowProfileIntro = styled.div`
  width: 100%;
  color: #1f1f1f;
  font-size: 20px;
  margin-top: 20px;
`;
const FollowBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const FollowDetailBtn = styled.button`
  width: 173px;
  height: 45px;
  background: #fada5e;
  border-radius: 10px;
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
  FollowList,
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
