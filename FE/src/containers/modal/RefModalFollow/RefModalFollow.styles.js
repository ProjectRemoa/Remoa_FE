import styled from 'styled-components';

const ProfileModalWrapper = styled.div`
  position: absolute;
  display: inline-flex;
  box-sizing: border-box;
  padding: 20px 14px 26px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 296px;
  height: 110px;
  border-radius: 10px;
  border: 1px solid #DADDE1;
  background: #FFF;
  z-index: 2;
  box-shadow: 0px 0px 4px 0px rgba(63, 63, 63, 0.18);
  left: ${(props) => (props.location === 4 ? "-300px" : "45px")};
  top: 45px;
    @media ${(props) => props.theme.desktop} {
      left: ${(props) => (props.location === 3 ? "-300px" : "45px")};
      top: 45px;
    }
    @media ${(props) => props.theme.mobile} {
      left: ${(props) => (props.location === 2 ? "-300px" : "45px")};
      top: 45px;
    }
  /* border-radius: ${(props) => props.location >= 1 ? '10px 0px 10px 10px' : '0px 10px 10px 10px'}; */
`;

const ProfileModalHeader = styled.div`
  display: flex;
  width: 100%;
`;

// TODO : 프로필 이미지, 이름 컴포넌트로 분리
const ProfileImg = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 24px;
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
  cursor: pointer;
  color: var(--black, #1E1E1E);
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.28px;
`;

// 팔로잉, 팔로워 숫자 보여주는 영역
const ProfileFollowViewWrapper = styled.div`
  display: flex;
  gap: 0 10px;
  margin-left: auto;
  line-height: 24px;

`;

const ProfileFollowView = styled.div`
  color: var(--, #464646);
  font-size: 14px;
  font-weight: 600;
  span {
    color: var(--disabled-gray, #B0B0B0);
    font-size: 13px;
    font-weight: 500;
    letter-spacing: -0.26px;
  }
`;

const ProfileFollowButtonWrapper = styled.div`
  display: flex;
  position: relative;
  top: -4px;
  gap: 0 4px;
  height: 36px;
`;
const ProfileFollowButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 132px;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  font-size: 13px;
  color: var(--, #464646);
  border: 1px solid var(--gray, #A7A7A7);
  font-weight: 600;
  line-height: 12px;
  letter-spacing: -0.26px;
  color: #000;
  padding: 12px 8px;
  box-sizing: border-box;
  // TODO : reset.css 이후 삭제
  box-shadow: none;
  // 이미 팔로우 됐을 때
  &.followed {
    background-color: var(--light-gray, #F0F0F0);
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
