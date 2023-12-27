import styled from "styled-components";

const Wrapper = styled.div`
  width: 900px;
  box-sizing: border-box;
  padding: 0px 30px;
  margin: 65px 0px 155px;
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
  font-family: Pretendard-Medium;
  width: auto;
  padding: 0;
  font-size: 25px;
  border: none;
  box-shadow: none;
  background-color: transparent;
`;
const Line = styled.div`
  font-size: 29px;
  color: #d9d9d9;
  text-align: center;
  margin: 0 10px;
`;
const FollowNum = styled.div`
  text-align: left;
  margin-top: 15px;
  font-family: Pretendard-SemiBold;
`;
const Text = styled.span`
  color: #f24e1e;
`;
const FollowWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 24px 0px;
  padding-bottom: 29px;
  &:not(:last-of-type) {
    border-bottom: 1px solid #e1e2e5;
  }
`;
const FollowProfileImgWrap = styled.div`
  width: 15%;
  text-align: left;
`;
const FollowProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const FollowProfileIntroWrap = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const FollowProfileName = styled.div`
  font-family: Pretendard-SemiBold;
  font-size: 20px;
`;
const FollowNumWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0px;
`;
const FollowTotal = styled.div`
  font-size: 20px;
  &:nth-child(2) {
    margin-left: 12px;
  }
`;
const FollowTitle = styled.span`
  color: #b0b0b0;
  font-weight: 500;
  font-size: 13px;
`;
const FollowProfileIntro = styled.div`
  color: #727272;
  font-size: 16px;
`;
const FollowBtnWrap = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
`;
const FollowDetailBtn = styled.button`
  width: 132px;
  height: 36px;
  background-color: ${(props) =>
    props.isFollow === null
      ? "#fada5e"
      : props.isFollow
      ? "#f0f0f0"
      : "#fada5e"};
  border-radius: 8px;
  box-shadow: none;
  border: none;
  font-family: Pretendard-SemiBold;
  color: #1e1e1e;
  &:hover {
    background-color: ${(props) =>
      props.isFollow === null
        ? "#dfb71c"
        : props.isFollow
        ? "none"
        : "#dfb71c"};
  }
  &:nth-child(2) {
    border: 1px solid #e1e2e5;
    background-color: white;
    &:hover {
      background-color: #a7a7a7;
    }
  }
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
