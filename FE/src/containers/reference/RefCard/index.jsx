import { GoEye, GoStarFill } from 'react-icons/go';
import { FaHeart } from 'react-icons/fa';

import StyledComponents from './RefCard.styles';
import { useEffect, useState } from 'react';

import RefModalFollow from '../../modal/RefModalFollow';
const {
  RefCardWrapper,
  RefCardThumbnailWrapper,
  RefCardThumbnail,
  RefCardTitle,
  RefCardProfileWrapper,
  RefCardProfileImg,
  RefCardProfileName,
  RefCardInfo,
  RefCardFunctionWrapper,
  RefCardFunctionIcon,
} = StyledComponents;

function RefCard({ data, onSelectedData, selectedPostId, onProfileModal,location }) {
  const {
    likeCount,
    postId,
    postMember,
    postThumbnail,
    scrapCount,
    title,
    views,
  } = data;

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };

  const handleProfileModal = () => {
    if (postId === selectedPostId) {
      // 같은 카드의 프로필을 클릭하면 프로필 모달 토글
      setIsProfileModalOpen(!isProfileModalOpen);
    } else {
      // 다른 카드의 프로필을 클릭하면 프로필 모달을 열고 선택된 포스트 아이디를 업데이트
      setIsProfileModalOpen(true);
      onProfileModal(postId);
    }
  };


  return (
    <RefCardWrapper>
      {/* 썸네일  */}
      <RefCardThumbnailWrapper onClick={() => onSelectedData(data)}>
        <RefCardThumbnail src={postThumbnail} />
      </RefCardThumbnailWrapper>

      {/* 타이틀 */}
      <RefCardTitle onClick={() => onSelectedData(data)}>{title}</RefCardTitle>

      <RefCardProfileWrapper>
        {/* 프로필 이미지 */}
        <RefCardProfileImg
          onClick={() => {
            handleProfileModal();
          }}
        >
          <img src={postMember.profileImage} alt="profile image" />
        </RefCardProfileImg>

        {/*  사용자 정보 */}
        <RefCardInfo>
          <RefCardProfileName
            onClick={() => {
              handleProfileModal();
            }}
          >
            {postMember.nickname}
          </RefCardProfileName>

          <RefCardFunctionWrapper>
            {/* 조회수 */}
            <RefCardFunctionIcon>
              <GoEye className="views" /> {formatCount(views)}
            </RefCardFunctionIcon>

            {/* 좋아요 */}
            <RefCardFunctionIcon>
              <FaHeart className="likes" /> {formatCount(likeCount)}
            </RefCardFunctionIcon>

            {/* 스크랩 */}
            <RefCardFunctionIcon>
              <GoStarFill className="scrap" /> {formatCount(scrapCount)}
            </RefCardFunctionIcon>
          </RefCardFunctionWrapper>
        </RefCardInfo>

        {/* 프로필 모달 */}
        {isProfileModalOpen && postId === selectedPostId && (
          <RefModalFollow member={postMember} location={location} />
        )}
      </RefCardProfileWrapper>
    </RefCardWrapper>
  );
}

export default RefCard;
