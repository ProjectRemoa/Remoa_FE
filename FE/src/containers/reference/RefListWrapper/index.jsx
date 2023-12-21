import { React, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { pageLinks, filterOptions } from '../constants';

import RefCard from '../RefCard';
import RefModal from '../../modal/RefModalPages/RefModal';

import StyledComponents from './RefListWrapper.styles';

import Pagination from '../../../components/common/Pagination';
import Dropdown from '../../../components/common/Dropdown';

import { useReferencesData } from '../../../hooks/useReferences';

const {
  RefListWrapper,
  RefListHeader,
  RefListHeading,
  RefListFunctionWrapper,
  RefList,
  NoResultWrapper,
  NoResultText,
} = StyledComponents;

export default function RefListContainer({ search: searchKeyword }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [category, setCategory] = useState(''); // 카테고리
  const [filter, setFilter] = useState(filterOptions[0].value); // 필터
  const [sortOption, setSortOption] = useState(filterOptions[0].key);

  const [page, setPage] = useState(1); // 페이지네이션

  const [isRefModal, setIsRefModal] = useState(); // TODO : 모달 리팩토링 후 boolean으로 수정

  const [selectedData, setSelectedData] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const { referenceData } = useReferencesData({
    page: page,
    sort: sortOption,
    category: category.keyword,
    title: searchKeyword,
  });

  useEffect(() => {
    const currentCategory = pageLinks.find(
      (page) => page.path === location.pathname
    );
    setCategory(currentCategory);

    modalLocation();
  }, [location.pathname]);

  const handleSelectData = (data) => {
    setSelectedData(data);
    setIsRefModal(data.postId);
  };

  const handleProfileModal = (postId) => {
    setSelectedPostId(postId);
  };

  const handlePageClick = (data) => {
    // 버튼 클릭 시 2페이지 이상은 로그인 된 유저만 볼 수 있음 -> 로그인 된 상태가 아니면 로그인 창으로 이동
    if (data.selected + 1 > 1 && !sessionStorage.getItem('nickname')) {
      alert('로그인 후 이용해주세요!');
      navigate('/sociallogin');
    } else {
      setPage(data.selected + 1);
    }
  };

  // 팔로잉 모달 위치
  function modalLocation(i) {
    if (window.innerWidth <= 1023) {
      if (i % 2 === 0) {
        return 2;
      } else return 0;
    } else if (window.innerWidth <= 1439) {
      if (i % 3 === 0) {
        return 3;
      } else return 0;
    } else {
      if (i % 4 === 0) {
        return 4;
      } else return 0;
    }
  }

  return (
    <RefListWrapper>
      <RefListHeader>
        <RefListHeading>
          <span>
            {searchKeyword !== ''
              ? searchKeyword
              : category?.text === '전체'
              ? '다양한'
              : category?.text}
          </span>
          공모전의 레퍼런스를 찾아보세요
        </RefListHeading>
      </RefListHeader>

      {/* 레퍼런스 */}
      {referenceData?.references?.length === 0 ? (
        <NoResultWrapper>
          <NoResultText className="emphasis">
            검색 결과가 없어요 😪{' '}
          </NoResultText>
          <NoResultText>해당 키워드의 작업물을 업로드 해주세요!</NoResultText>

          <button onClick={() => navigate('/manage/share')}>등록하기</button>
        </NoResultWrapper>
      ) : (
        <>
          <RefListFunctionWrapper>
            <span className="count">
              {referenceData?.totalOfAllReferences && (
                <>총 {referenceData?.totalOfAllReferences}개</>
              )}
            </span>

            {/* 필터 드롭다운 */}
            <Dropdown
              setFilter={setFilter}
              filter={filter}
              setSortOption={setSortOption}
              filterOptions={filterOptions}
            />
          </RefListFunctionWrapper>

          <RefList>
            {referenceData?.references?.map((reference, index) => (
              <RefCard
                data={reference}
                location={modalLocation(index + 1)}
                key={reference.postId}
                selectedPostId={selectedPostId}
                onSelectedData={handleSelectData}
                onProfileModal={handleProfileModal}
              />
            ))}
          </RefList>

          {referenceData?.totalPages > 1 && (
            <Pagination
              page={page}
              className="ref"
              pageCount={referenceData?.totalPages}
              handlePageClick={handlePageClick}
            />
          )}
        </>
      )}

      {/* 상세 페이지 모달 */}
      {/* TODO : props 이름 변경 및 모달 리팩토링 후 isRefModal 조건 삭제 */}
      {selectedData && isRefModal !== '' && (
        <RefModal
          id2={selectedData.postId}
          setData={selectedData}
          setModalVisibleId2={setIsRefModal}
        />
      )}
    </RefListWrapper>
  );
}
