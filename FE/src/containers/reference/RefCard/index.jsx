import { FaHeart } from 'react-icons/fa';

import StyledComponents from './RefCard.styles';
import { useEffect, useState } from 'react';

import RefModalFollow from '../../modal/RefModalFollow';
import { useParams } from 'react-router-dom';

import { TbEyeFilled } from 'react-icons/tb';
import { BsFillBookmarkFill } from 'react-icons/bs';

import BeforeChecked from '../../../images/before_checked.svg';
import AfterChecked from '../../../images/after_checked.svg';

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
  ScrapButton,
  RefCardSelectedDeleted,
} = StyledComponents;

function RefCard({
  data,
  onSelectedData,
  selectedPostId,
  onProfileModal,
  location,
  isDeletedData,
  deletedData,
  setDeletedData,
}) {
  const {
    likeCount,
    postId,
    postMember,
    postThumbnail,
    thumbnail,
    scrapCount,
    title,
    views,
    isLikedPost,
    isScrapedPost,
  } = data;

  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const { id } = useParams();

  const formatCount = (count) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`;
    }
    return count;
  };

  const handleProfileModal = () => {
    if (window.location.href.includes('manage') === true) {
      // 작업물 관리에서는 프로필 띄우지 않음
    } else {
      if (postId === selectedPostId) {
        // 같은 카드의 프로필을 클릭하면 프로필 모달 토글
        setIsProfileModalOpen(!isProfileModalOpen);
      } else {
        // 다른 카드의 프로필을 클릭하면 프로필 모달을 열고 선택된 포스트 아이디를 업데이트
        setIsProfileModalOpen(true);
        onProfileModal(postId);
      }
    }
  };

  const handleDeleted = (postId) => {
    let dd = [...deletedData];
    dd.push(postId);
    setDeletedData(dd);
  };

  const handleDeletedCancel = (postId) => {
    setDeletedData(deletedData.filter((value) => value !== postId));
  };

  return (
    <RefCardWrapper>
      {/* manage에서 선택 삭제 */}
      {isDeletedData &&
        (deletedData.includes(postId) ? (
          <RefCardSelectedDeleted
            src={AfterChecked}
            alt="after checked"
            onClick={() => handleDeletedCancel(postId)}
          />
        ) : (
          <RefCardSelectedDeleted
            src={BeforeChecked}
            alt="before checked"
            onClick={() => handleDeleted(postId)}
          />
        ))}

      {/* 썸네일  */}
      <RefCardThumbnailWrapper onClick={() => onSelectedData(data)}>
        <RefCardThumbnail src={postThumbnail ? postThumbnail : thumbnail} />
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
          <img src={postMember.profileImage} alt="profile" />
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
            {!id || window.location.href.includes('user/list') ? (
              <>
                {/* 조회수 */}
                <RefCardFunctionIcon>
                  <TbEyeFilled className="views" /> {formatCount(views)}
                </RefCardFunctionIcon>

                {/* 좋아요 */}
                <RefCardFunctionIcon>
                  <FaHeart style={{ color: isLikedPost ? '#FADA5E' : '' }} />{' '}
                  {formatCount(likeCount)}
                </RefCardFunctionIcon>

                {/* 스크랩 */}
                <RefCardFunctionIcon>
                  <BsFillBookmarkFill
                    style={{
                      color: isScrapedPost ? '#FADA5E' : '',
                    }}
                  />{' '}
                  {formatCount(scrapCount)}
                </RefCardFunctionIcon>
              </>
            ) : (
              <RefCardFunctionIcon>
                <ScrapButton>스크랩 해제</ScrapButton>
              </RefCardFunctionIcon>
            )}
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
