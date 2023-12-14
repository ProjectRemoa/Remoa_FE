import axios from "axios";
import { React, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { pageLinks, filterOptions } from "../constants";

import RefCard from "../RefCard";
import RefModal from "../../modal/RefModalPages/RefModal";

import { MdArrowForwardIos } from "react-icons/md";
import StyledComponents from "./RefListWrapper.styles";
const {
  RefListWrapper,
  RefListHeader,
  RefListHeading,
  RefFilter,
  FilterButton,
  RefList,
  LoadMoreButton,
  NoResultWrapper,
  NoResultText,
} = StyledComponents;

export default function RefListContainer({ search: searchKeyword }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [category, setCategory] = useState(""); // 카테고리
  const [filter, setFilter] = useState(filterOptions[0].key); // 필터
  const [referenceList, setReferenceList] = useState([]); // 레퍼런스 리스트
  const [page, setPage] = useState(1); // 페이지네이션
  const [totalPages, setTotalPages] = useState(1); // 페이지네이션

  const [isRefModal, setIsRefModal] = useState(); // TODO : 모달 리팩토링 후 boolean으로 수정

  const [selectedData, setSelectedData] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);

  const handleSelectData = (data) => {
    setSelectedData(data);
    setIsRefModal(data.postId); // TODO : boolean으로 수정하면 해당 라인 삭제
  };

  const handleProfileModal = (postId) => {
    setSelectedPostId(postId);
    console.log(selectedPostId);
  };

  const onClickLoadData = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

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
            totalPages,
          },
        } = response;

        setReferenceList(references);
        setTotalPages(totalPages);
      } catch (err) {
        console.log(err);
        return err;
      }
    };

    fetchData();
    modalLocation()
  }, [location.pathname, searchKeyword, filter, page]);

  // 요거 그 팔로잉 모달창 설정을 위해서 필요한 부분입니다 좀 이상해보일지 몰라도 지우지 말하주세효,,,
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
            {searchKeyword !== "" ? searchKeyword : category?.text}&nbsp;
          </span>
          공모전의 레퍼런스를 찾아보세요
        </RefListHeading>

        {/* 필터 */}
        <RefFilter>
          {filterOptions.map((option, index) => {
            return (
              <FilterButton
                key={index}
                className={filter === option.key ? "active" : ""}
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
      {referenceList.length === 0 ? (
        <NoResultWrapper>
          <NoResultText className="emphasis">
            검색 결과가 없어요 😪{" "}
          </NoResultText>
          <NoResultText>해당 키워드의 작업물을 업로드 해주세요!</NoResultText>

          <button onClick={() => navigate("/manage/share")}>등록하기</button>
        </NoResultWrapper>
      ) : (
        <RefList>
          {referenceList.map((reference, index) => (
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
      )}

      {/* 더 보기 버튼  */}
      {totalPages > 1 && page < totalPages && (
        <LoadMoreButton onClick={onClickLoadData}>
          더 보기
          <MdArrowForwardIos />
        </LoadMoreButton>
      )}

      {/* 상세 페이지 모달 */}
      {/* TODO : props 이름 변경 및 모달 리팩토링 후 isRefModal 조건 삭제 */}
      {selectedData && isRefModal !== "" && (
        <RefModal
          id2={selectedData.postId}
          setData={selectedData}
          setModalVisibleId2={setIsRefModal}
        />
      )}
    </RefListWrapper>
  );
}