import styled from 'styled-components';

const ProfileModalWrapper = styled.div`
  position: absolute;
  top: 98%;
  left: 45px;
  width: 100%;
  max-width: 402px;
  border-radius: 0 10px 10px 10px;
  border: 1px solid #b0b0b0;
  padding: 25px;
  background-color: #fff;
  z-index: 3;
`;

const ProfileModalHeader = styled.div`
  display: flex;
`;

// TODO : 프로필 이미지, 이름 컴포넌트로 분리
const ProfileImg = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #ededed;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 10px;
`;

const ProfileName = styled.div`
  display: inline-block;
  font-weight: 400;
  font-size: 20px;
  cursor: pointer;
`;

// 팔로잉, 팔로워 숫자 보여주는 영역
const ProfileFollowViewWrapper = styled.div`
  display: flex;
  gap: 0 10px;
  margin-left: auto;
`;

const ProfileFollowView = styled.div`
  font-size: 20px;
  span {
    color: #fada5e;
    font-weight: 700;
    margin-right: 4px;
  }
`;

const ProfileFollowButtonWrapper = styled.div`
  display: flex;
  gap: 0 10px;
  height: 23px;
  margin-top: 16px;
`;
const ProfileFollowButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #fada5a;
  border-radius: 10px;
  font-size: 15px;
  color: #000;

  // TODO : reset.css 이후 삭제
  box-shadow: none;

  // 이미 팔로우 됐을 때
  &.followed {
    background-color: #b0b0b0;
  }
`;

const StyledComponents = {
  ProfileModalWrapper,
  ProfileModalHeader,
  ProfileImg,
  ProfileInfoWrapper,
  ProfileName,
  ProfileFollowViewWrapper,
  ProfileFollowView,
  ProfileFollowButtonWrapper,
  ProfileFollowButton,
};

export default StyledComponents;
