import { GoEye, GoStarFill } from 'react-icons/go';
import { FaHeart } from 'react-icons/fa';

import StyledComponents from './RefCard.styles';
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
        <RefCardProfileImg>
          <img src={postMember.profileImage} alt="profile image" />
        </RefCardProfileImg>

        {/*  사용자 정보 */}
        <RefCardInfo>
          <RefCardProfileName>{postMember.nickname}</RefCardProfileName>

          <RefCardFunctionWrapper>
            {/* 조회수 */}
            <RefCardFunctionIcon>
              <GoEye className="views" /> <span>{formatCount(views)}</span>
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
      </RefCardProfileWrapper>
    </RefCardWrapper>
  );
}

export default RefCard;
