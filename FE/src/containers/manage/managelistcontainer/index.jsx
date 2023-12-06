import { React, useEffect,  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import S from "./ManageListContainer.styles"
import { filterOptions } from "../../reference/constants"
import StyledComponents from "../../reference/RefListWrapper/RefListWrapper.styles"
import Dropdown from "../../../components/common/Dropdown";
import RefCard from "../../reference/RefCard";
import RefModal from "../../modal/RefModalPages/RefModal";
import ManageDeleteAllContainer from "../manageDeleteAllContainer";
const { RefList } = StyledComponents;

function ManageListContainer() {
  const [mywork, setMywork] = useState([]);
  const [toar, setTOAR] = useState(0); // 전체 레퍼런스 수
  const [tope, setTOPE] = useState(0); // 현재 페이지의 레퍼런스 수
  const [tp, setTP] = useState(1); // 전체 페이지 수

  const [pageNumber, setPageNumber] = useState(1);
  const [categoryName, setCategoryName] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [isRefModal, setIsRefModal] = useState(); // TODO : 모달 리팩토링 후 boolean으로 수정

  const [filter, setFilter] = useState(filterOptions[0].value); // 필터 값 (한글)
  const [sortOption, setSortOption] = useState(filterOptions[0].key); // 필터 값 (영어)

  const [checkIdx, setCheckIdx] = useState([1, 0, 0, 0, 0, 0]);

  const [buttonColor, setButtonColor] = useState([false, false]);

  const [isDelete, setIsDelete] = useState(false);

  const navigate = useNavigate();

  const handleSelectData = (data) => {
    setSelectedData(data);
    setIsRefModal(data.postId); // TODO : boolean으로 수정하면 해당 라인 삭제
    console.log("data ", data);
  };

  const handleProfileModal = (postId) => {
    setSelectedPostId(postId);
  };

  useEffect(() => {
    // 카테고리, 정렬을 바꿀 떄마다 렌더링
    let endpoint;
    endpoint = `/BE/user/reference?page=${1}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint);
  }, [categoryName, sortOption]);

  useEffect(() => {
    setTP((tp) => tp);
  }, [tp]);

  
  useEffect(() => {
    console.log(buttonColor);
  }, [buttonColor]);

  const onChangeCategory = (category) => {
    setCategoryName(category);
    if (category === "all") setCheckIdx([1, 0, 0, 0, 0, 0]);
    if (category === "idea") setCheckIdx([0, 1, 0, 0, 0, 0]);
    if (category === "marketing") setCheckIdx([0, 0, 1, 0, 0, 0]);
    if (category === "video") setCheckIdx([0, 0, 0, 1, 0, 0]);
    if (category === "design") setCheckIdx([0, 0, 0, 0, 1, 0]);
    if (category === "etc") setCheckIdx([0, 0, 0, 0, 0, 1]);

    setPageNumber(1);
    setTP(1);
    setCurrentPage(1);
    setSortOption(filterOptions[0].key);
    setFilter(filterOptions[0].value);
  };

  const getWork = (endpoint) => {
    console.log(endpoint);
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        const {
          data: {
            data: {
              references,
              totalOfAllReferences,
              totalOfPageElements,
              totalPages,
            },
          },
        } = response;
        console.log(response);

        setMywork(references);
        setTOAR(totalOfAllReferences);
        setTOPE(totalOfPageElements);
        setTP(totalPages);
      } catch (err) {
        console.log(err);
        return err;
      }
    };

    fetchData();
    console.log(
      "totalOfAllReferences : " +
        toar +
        ", totalOfPageElements : " +
        tope,
      ", totalPages : " + tp
    );
  };

  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1);
    let endpoint;
    endpoint = `/BE/user/reference?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint);
  };

  const onClickRegister = () => {
    navigate("/manage/share");
  };

  return (
    <S.ManageListContainer>
      <S.ManageTextBox>
        <S.ManageNameText>
          {sessionStorage.getItem("nickname")}
        </S.ManageNameText>
        님의 내 작업물 목록
      </S.ManageTextBox>
      <S.CategoryBox>
        <S.Category
          onClick={() => onChangeCategory("all")}
          checked={checkIdx[0]}
        >
          <S.CategoryText>전체</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("idea")}
          checked={checkIdx[1]}
        >
          <S.CategoryText>기획/아이디어</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("marketing")}
          checked={checkIdx[2]}
        >
          <S.CategoryText>광고/마케팅</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("video")}
          checked={checkIdx[3]}
        >
          <S.CategoryText>영상</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("design")}
          checked={checkIdx[4]}
        >
          <S.CategoryText>디자인/사진</S.CategoryText>
        </S.Category>
        <S.Category
          onClick={() => onChangeCategory("etc")}
          checked={checkIdx[5]}
        >
          <S.CategoryText>기타아이디어</S.CategoryText>
        </S.Category>
      </S.CategoryBox>
      <S.Line />
      <>
        <S.ManageListBox>
          {!toar ? (
            <S.ManageListNo>
              <S.NoManageText>아직 작업물이 없어요 😪</S.NoManageText>
              <S.NoManageSubText>
                작업물을 업로드해 다른 사람들의 피드백을 받아보세요
              </S.NoManageSubText>
              <S.ButtonRegister onClick={onClickRegister}>
                등록하기
              </S.ButtonRegister>
            </S.ManageListNo>
          ) : (
            <>
              {/* 선택 글 삭제 */}
              <S.SelectBox>
                총 {toar}개
                <S.SelectButton
                  onClick={() => {
                    setButtonColor([!buttonColor[0], false]);
                    setIsDelete(false);
                  }}
                  checked={buttonColor[0]}
                >
                  내 작품 전체 삭제
                </S.SelectButton>
                <S.SelectButton
                  onClick={() => {
                    setButtonColor([false,!buttonColor[1]]);
                    setIsDelete(!isDelete);
                  }}
                  checked={buttonColor[1]}
                >
                  삭제할 작품 선택
                </S.SelectButton>
              </S.SelectBox>
              {/* 정렬순 */}
              <S.SortBox>
                <Dropdown
                  setFilter={setFilter}
                  filter={filter}
                  setSortOption={setSortOption}
                  filterOptions={filterOptions}
                />
              </S.SortBox>
              <S.Line style={{ border: "1px solid white" }} />

              <RefList>
                {mywork.map((reference, index) => (
                  <RefCard
                    data={reference}
                    key={reference.postId}
                    selectedPostId={selectedPostId}
                    onSelectedData={handleSelectData}
                    onProfileModal={handleProfileModal}
                    isDeletedData={isDelete}
                  />
                ))}
              </RefList>
              <div
                style={{
                  margin: "0 auto",
                }}
              >
                {currentPage !== tp && (
                  <div style={{ width: "100%" }}>
                    <S.Button onClick={loadMoreItems}>더 보기 &gt;</S.Button>
                  </div>
                )}
              </div>
            </>
          )}
        </S.ManageListBox>
        {/*} )*/}
      </>
      {selectedData && isRefModal !== "" && (
        <RefModal
          id2={selectedData.postId}
          setData={selectedData}
          setModalVisibleId2={setIsRefModal}
        />
      )}
      {buttonColor[0] && 
        (<ManageDeleteAllContainer setButtonColor={setButtonColor} buttonColor={buttonColor} />)
      }
    </S.ManageListContainer>
  );
}

export default ManageListContainer;
