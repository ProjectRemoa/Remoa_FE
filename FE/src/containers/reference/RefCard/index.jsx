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

  return (
    <RefCardWrapper>
      <RefCardThumbnailWrapper onClick={() => onSelectedData(data)}>
        <RefCardThumbnail src={postThumbnail} />
      </RefCardThumbnailWrapper>

      <RefCardTitle>{title}</RefCardTitle>

      <RefCardProfileWrapper>
        <RefCardProfileImg>
          <img src={postMember.profileImage} alt="profile image" />
        </RefCardProfileImg>

        <RefCardInfo>
          <RefCardProfileName>{postMember.nickname}</RefCardProfileName>

          <RefCardFunctionWrapper>
            <div>좋아요 {likeCount}</div>
            <div>스크랩 {scrapCount}</div>
            <div>조회수 {views}</div>
          </RefCardFunctionWrapper>
        </RefCardInfo>
      </RefCardProfileWrapper>
    </RefCardWrapper>
  );
}

export default RefCard;
