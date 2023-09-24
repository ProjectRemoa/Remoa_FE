import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { pageLinks, filterOptions } from '../constants';

// import RefList from '../ReferenceList';
import RefCard from '../RefCard';
import StyledComponents from './RefListWrapper.styles';
import RefModal from '../../modal/RefModal';
const {
  RefListWrapper,
  RefListHeader,
  RefListHeading,
  RefFilter,
  FilterButton,
  RefList,
} = StyledComponents;

// TODO : 검색어는 페이지에서 받아오도록 수정
export default function RefListContainer({ search: searchKeyword }) {
  const location = useLocation();

  const [category, setCategory] = useState(''); // 카테고리
  const [filter, setFilter] = useState(filterOptions[0].key); // 필터
  const [referenceList, setReferenceList] = useState([]); // 레퍼런스 리스트

  const [page, setPage] = useState(1); // 페이지네이션

  const [isRefModal, setIsRefModal] = useState(); // TODO : 모달 리팩토링 후 boolean으로 수정
  const [selectedData, setSelectedData] = useState(null);

  const handleSelectData = (data) => {
    setSelectedData(data);
    setIsRefModal(data.postId); // TODO : boolean으로 수정하면 해당 라인 삭제
  };

  // let kindSend = 'idea';
  // let kind = '기획/아이디어';

  // if (window.location.pathname == '/ref/etc') {
  //   kind = '기타';
  //   kindSend = 'etc';
  // } else if (window.location.pathname == '/ref/marketing') {
  //   kind = '광고/마케팅';
  //   kindSend = 'marketing';
  // } else if (window.location.pathname == '/ref/video') {
  //   kind = '영상';
  //   kindSend = 'video';
  // } else if (window.location.pathname == '/ref/design') {
  //   kind = '디자인';
  //   kindSend = 'design';
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentCategory = pageLinks.find(
          (page) => page.path === location.pathname
        );
        setCategory(currentCategory);

        const response = await axios.get(`/BE/reference`, {
          params: {
            page: page,
            sort: filter,
            category: currentCategory.keyword,
            title: searchKeyword,
          },
        });

        const {
          data: {
            data: { references },
          },
        } = response;

        setReferenceList(references);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [location.pathname, searchKeyword, filter]);

  return (
    <RefListWrapper>
      <RefListHeader>
        <RefListHeading>
          <span>{category.text}&nbsp;</span>
          공모전의 레퍼런스를 찾아보세요
        </RefListHeading>

        {/* 필터 */}
        <RefFilter>
          {filterOptions.map((option, index) => {
            return (
              <FilterButton
                key={index}
                className={filter === option.key ? 'active' : ''}
                onClick={() => {
                  setFilter(option.key);
                }}
              >
                {option.value}
              </FilterButton>
            );
          })}
        </RefFilter>
      </RefListHeader>

      {/* 레퍼런스 */}
      {/* <RefList kind={kindSend} name={searchKeyword} /> */}
      <RefList>
        {referenceList.map((reference) => {
          return (
            <RefCard
              data={reference}
              key={reference.postId}
              onSelectedData={handleSelectData}
            />
          );
        })}
      </RefList>

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
