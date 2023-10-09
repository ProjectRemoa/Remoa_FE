import React, { useEffect, useState } from 'react';

import StyledComponents from './RefModalFollow.styles';
import { useNavigate } from 'react-router-dom';
import { useFollowData } from '../../../apis/references/follow';
import axios from 'axios';
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

function RefModalFollow({ member }) {
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
    }

    try {
      const response = await axios.post(`/BE/follow/${member.memberId}`);
      refetchFollowData();
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  return (
    <ProfileModalWrapper>
      <ProfileModalHeader>
        {/* 프로필 이미지 */}
        <ProfileImg>
          <img src={member.profileImage} alt="profile image" />
        </ProfileImg>

        {/* 프로필 정보 */}
        <ProfileInfoWrapper>
          <ProfileName>{member.nickname}</ProfileName>
          <ProfileFollowViewWrapper>
            <ProfileFollowView>
              <span>Follower</span>
              {followData?.follower}
            </ProfileFollowView>
            <ProfileFollowView>
              <span>Following</span>
              {followData?.following}
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
              팔로우 취소
            </ProfileFollowButton>
          ) : (
            <ProfileFollowButton onClick={handleMemberFollow}>
              팔로잉하기
            </ProfileFollowButton>
          )
        ) : null}

        {/* 유저 피드 바로가기 */}
        <ProfileFollowButton onClick={() => onClickMemberFeed(member.memberId)}>
          더 많은 작품 보기
        </ProfileFollowButton>
      </ProfileFollowButtonWrapper>
    </ProfileModalWrapper>
  );
}

export default RefModalFollow;
