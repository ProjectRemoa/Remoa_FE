import { React, useEffect,  useRef,  useState } from "react";
import { useNavigate } from "react-router";
import S from "./ManageListContainer.styles"
import { filterOptions } from "../../reference/constants"
import StyledComponents from "../../reference/RefListWrapper/RefListWrapper.styles"
import Dropdown from "../../../components/common/Dropdown";
import RefCard from "../../reference/RefCard";
import RefModal from "../../modal/RefModalPages/RefModal";
import ManageDeleteContainer from "../manageDeleteContainer";
import { useLocation } from "react-router";
import BACK from "../../../images/back.svg"
import Category from "../../../components/common/Category"
import { getWork } from "../../../apis/manage/list";
import { useQuery } from "react-query";
import Loading from "../../../styles/Loading";

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
  const [checkIdx, setCheckIdx] = useState(0);
  const [buttonColor, setButtonColor] = useState([false, false]);
  const [isDelete, setIsDelete] = useState(false); // 삭제 버튼 활성화
  const [isOtherUser, setIsOtherUser] = useState(false);
  const [name, setName] = useState();
  const [deletedData, setDeletedData] = useState([]);
  
  const onChangeEndpoint = () => {
    let endpoint;
    const pathSegments = location.pathname.split("/");
    const param = pathSegments[pathSegments.length - 1];
    if (window.location.href.includes("user/list")) {
      setIsOtherUser(true);
      // 다른 사람의 작업물
      endpoint = `/BE/user/reference/${param}/?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;
    } else {
      setIsOtherUser(false);
      endpoint = `/BE/user/reference?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;
    }
    return endpoint;
  }

  const { data, isLoading } = useQuery(['list'],
    () => {
      let endpoint = onChangeEndpoint();
      return getWork(endpoint); // data에 들어감
    })

  useEffect(() => {
    if (data) {
      setMywork(data.references);
      setTOAR(data.totalOfAllReferences);
      setTOPE(data.totalOfPageElements);
      setTP(data.totalPages);

      if (data.references && data.references.length > 0) {
        setName(data.references[0].postMember.nickname);
      }   
    }

  }, [data])
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectData = (data) => {
    setSelectedData(data);
    setIsRefModal(data.postId); // TODO : boolean으로 수정하면 해당 라인 삭제
  };

  const handleProfileModal = (postId) => {
    setSelectedPostId(postId);
  };

  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      // 카테고리, 정렬을 바꿀 때마다 렌더링
      const fetchData = async () => {
        let endpoint = onChangeEndpoint();
        let data;
        data = await getWork(endpoint);

        setMywork(data.references);
        setTOAR(data.totalOfAllReferences);
        setTOPE(data.totalOfPageElements);
        setTP(data.totalPages);

        if (data.references && data.references.length > 0) {
          setName(data.references[0].postMember.nickname);
        }
      };

      fetchData();
    }
    else {
      // 첫 렌더링 생략
      isMounted.current = true;
    }
   
  }, [categoryName, sortOption, pageNumber]);


  const onChangeCategory = (category) => {
    setCategoryName(category);
    if (category === "all") setCheckIdx(0);
    if (category === "idea") setCheckIdx(1);
    if (category === "marketing") setCheckIdx(2);
    if (category === "video") setCheckIdx(3);
    if (category === "design") setCheckIdx(4);
    if (category === "it") setCheckIdx(5);
    if (category === "etc") setCheckIdx(6);

    setPageNumber(1);
    setTP(1);
    setCurrentPage(1);
    setPageNumber(1);
    setSortOption(filterOptions[0].key);
    setFilter(filterOptions[0].value);
    setCategoryName(category);
  };
  
  const onClickRegister = () => {
    if (isOtherUser) navigate(-1);
    else navigate("/manage/share");
  };

  const onClickBack = () => {
    navigate(-1)
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <S.ManageListContainer>
          <S.ManageTextBox state={isOtherUser}>
            {isOtherUser ? (
              <>
                <img
                  onClick={onClickBack}
                  src={BACK}
                  alt="back arrow"
                  width={25}
                  style={{
                    position: "relative",
                    top: "5px",
                    cursor: "pointer",
                  }}
                />
                <S.ManageNameText>{name}</S.ManageNameText>
                님의 작업물 목록
              </>
            ) : (
              <>
                <S.ManageNameText>
                  {sessionStorage.getItem("nickname")}
                </S.ManageNameText>
                님의 내 작업물 목록
              </>
            )}
          </S.ManageTextBox>

          <Category
            main={false}
            onClickCategory={onChangeCategory}
            checkIdx={checkIdx}
          />

          <S.Line />
          <>
            <S.ManageListBox>
              {!toar ? (
                <S.ManageListNo>
                  <S.NoManageText>
                    {isOtherUser ? (
                      <>아직 작업물이 없어요</>
                    ) : (
                      <>아직 작업물이 없어요 😪</>
                    )}
                  </S.NoManageText>
                  <S.NoManageSubText>
                    {isOtherUser ? (
                      <>아직 작업물을 업로드하지 않았어요</>
                    ) : (
                      <>작업물을 업로드해 다른 사람들의 피드백을 받아보세요</>
                    )}
                  </S.NoManageSubText>
                  <S.ButtonRegister onClick={onClickRegister}>
                    {isOtherUser ? <>이전 페이지로 돌아가기</> : <>등록하기</>}
                  </S.ButtonRegister>
                </S.ManageListNo>
              ) : (
                <>
                  {/* 선택 글 삭제 */}
                  <S.SelectBox>
                    총 {toar}개
                    {!isOtherUser && (
                      <>
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
                            setButtonColor([false, !buttonColor[1]]);
                            setIsDelete(!isDelete);
                          }}
                          checked={buttonColor[1]}
                        >
                          삭제할 작품 선택
                        </S.SelectButton>
                      </>
                    )}
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
                        deletedData={deletedData}
                        setDeletedData={setDeletedData}
                      />
                    ))}
                  </RefList>
                  <S.MyPaginate
                    previousLabel="<"
                    nextLabel=">"
                    pageCount={tp}
                    onPageChange={(e) => {
                      setPageNumber(e.selected + 1);
                    }}
                  />
                </>
              )}
            </S.ManageListBox>
          </>
          {selectedData && isRefModal !== "" && (
            <RefModal
              id2={selectedData.postId}
              setData={selectedData}
              setModalVisibleId2={setIsRefModal}
            />
          )}
          {buttonColor[0] && (
            <ManageDeleteContainer
              setButtonColor={setButtonColor}
              buttonColor={buttonColor}
              isAll={true}
              category={categoryName}
              setIsDelete={setIsDelete}
              deletedData={deletedData}
              setDeletedData={setDeletedData}
            />
          )}
          {!buttonColor[1] && deletedData.length > 0 && (
            <ManageDeleteContainer
              setButtonColor={setButtonColor}
              buttonColor={buttonColor}
              isAll={false}
              setIsDelete={setIsDelete}
              deletedData={deletedData}
              setDeletedData={setDeletedData}
            />
          )}
        </S.ManageListContainer>
      )}
    </>
  );
}

export default ManageListContainer;
