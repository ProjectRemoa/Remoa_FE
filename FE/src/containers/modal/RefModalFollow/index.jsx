import React, { useState } from 'react';
import StyledComponents from './RefModalFollow.styles';
import { useNavigate } from 'react-router-dom';
import { useFollowData } from '../../../apis/references/follow';
import axios from 'axios';
import { formatCount } from '../../../functions/formatCount';

const {
  ProfileModalWrapper,
  ProfileModalHeader,
  ProfileImg,
  ProfileInfoWrapper,
  ProfileName,
  ProfileFollowViewWrapper,
  ProfileFollowView,
  ProfileFollowButtonWrapper,
  ProfileFollowButton,
} = StyledComponents;

function RefModalFollow({ member, location }) {
  const navigate = useNavigate();
  const nickname = sessionStorage.getItem('nickname');

  const { followData, refetchFollowData } = useFollowData(member.memberId);
  const [isFollowing, setIsFollowing] = useState(member.isFollow);

  const onClickMemberFeed = (memberId) => {
    navigate(`/user/list/${memberId}`);
  };

  const handleMemberFollow = async () => {
    if (!nickname) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/sociallogin');
      return;
    }

    try {
      const response = await axios.post(`/BE/follow/${member.memberId}`);
      refetchFollowData();
      setIsFollowing(!isFollowing);
    } catch (error) {
      // TODO : 리프레쉬 토큰 로직 확인
      if (error.response && error.response.status === 401) {
        alert('로그인이 필요한 서비스입니다.');

        sessionStorage.removeItem('nickname');
        sessionStorage.removeItem('email');
        sessionStorage.removeItem('new');
        navigate('/sociallogin');
      }

      console.log(error);

      return error;
    }
  };

  return (
    <ProfileModalWrapper location={location}>
      <ProfileModalHeader>
        {/* 프로필 이미지 */}
        <ProfileImg>
          <img src={member.profileImage} alt="img" />
        </ProfileImg>

        {/* 프로필 정보 */}
        <ProfileInfoWrapper>
          <ProfileName>{member.nickname}</ProfileName>
          <ProfileFollowViewWrapper>
            <ProfileFollowView>
              <span>팔로워</span> &nbsp;
              {formatCount(followData?.follower)}
            </ProfileFollowView>
            <ProfileFollowView>
              <span>팔로잉</span> &nbsp;
              {formatCount(followData?.following)}
            </ProfileFollowView>
          </ProfileFollowViewWrapper>
        </ProfileInfoWrapper>
      </ProfileModalHeader>

      <ProfileFollowButtonWrapper>
        {/* 팔로우 버튼 */}
        {member.nickname !== nickname ? (
          isFollowing ? (
            <ProfileFollowButton
              className="followed"
              onClick={handleMemberFollow}
            >
              팔로우취소
            </ProfileFollowButton>
          ) : (
            <ProfileFollowButton onClick={handleMemberFollow} style={{ backgroundColor: '#FADA5E', border: 'none' }}>
              팔로잉하기
            </ProfileFollowButton>
          )
        ) : (
            <ProfileFollowButton onClick={()=>{navigate('/mypage/profile')}} style={{ backgroundColor: '#FADA5E', border: 'none' }}>
              프로필 수정
            </ProfileFollowButton>
        )}
        {/* 유저 피드 바로가기 */}
        {member.nickname !== nickname ? (
        <ProfileFollowButton onClick={() => onClickMemberFeed(member.memberId)}>
          더 많은 작품 보기
        </ProfileFollowButton>) : 
        (<ProfileFollowButton onClick={()=>{navigate('/manage/list')}}>
          내 작품 관리하기
        </ProfileFollowButton>)}
      </ProfileFollowButtonWrapper>
    </ProfileModalWrapper>
  );
}

export default RefModalFollow;
