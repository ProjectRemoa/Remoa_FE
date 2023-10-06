import { GoEye, GoStarFill } from 'react-icons/go';
import { FaHeart } from 'react-icons/fa';

import StyledComponents from './RefCard.styles';
import { useState } from 'react';
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

function RefCard({ data, onSelectedData }) {
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

  return (
    <RefCardWrapper>
      {/* 썸네일  */}
      <RefCardThumbnailWrapper onClick={() => onSelectedData(data)}>
        <RefCardThumbnail src={postThumbnail} />
      </RefCardThumbnailWrapper>

      {/* 타이틀 */}
      <RefCardTitle>{title}</RefCardTitle>

      <RefCardProfileWrapper>
        {/* 프로필 이미지 */}
        <RefCardProfileImg
          onClick={() => {
            setIsProfileModalOpen(!isProfileModalOpen);
          }}
        >
          <img src={postMember.profileImage} alt="profile image" />
        </RefCardProfileImg>

        {/*  사용자 정보 */}
        <RefCardInfo>
          <RefCardProfileName>{postMember.nickname}</RefCardProfileName>

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
        {isProfileModalOpen && (
          <div
            style={{
              position: 'absolute',
              top: '98%',
              left: '45px',
              zIndex: '100',
            }}
          >
            프로필 모달
          </div>
        )}
      </RefCardProfileWrapper>
    </RefCardWrapper>
  );
}

export default RefCard;
