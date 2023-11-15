import { React, useEffect,  useState } from "react";
import axios from "axios";
import ManageList from "../managelist";
import { useNavigate } from "react-router";
import S from "./ManageListContainer.styles"
import { filterOptions } from "../../reference/constants"
import StyledComponents from "../../reference/RefListWrapper/RefListWrapper.styles"
import Filter from "../../../components/common/Filter";
import RefCard from "../../reference/RefCard";
const { RefFilter, FilterButton, RefList } = StyledComponents;

function ManageListContainer() {
  const [mywork, setMywork] = useState([]);
  const [totalOfAllReferences, setTotalOfAllReferences] = useState(0); // 전체 레퍼런스 수
  const [totalOfPageElements, setTotalOfPageElements] = useState(0); // 현재 페이지의 레퍼런스 수
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  const [pageNumber, setPageNumber] = useState(1);
  const [sortOption, setSortOption] = useState("newest");
  const [categoryName, setCategoryName] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [filter, setFilter] = useState(filterOptions[0].key); // 필터

  const [selectedSortIndex, setSekectedSortIndex] = useState(0); // 정렬 버튼 색상 변경

  const [checkIdx, setCheckIdx] = useState([1, 0, 0, 0, 0, 0]);

  const [buttonColor, setButtonColor] = useState([0,0]);

  const navigate = useNavigate();

  useEffect(() => {
    // 카테고리, 정렬을 바꿀 떄마다 렌더링
    let endpoint;
    endpoint = `/BE/user/reference?page=${1}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint);
  }, [categoryName, sortOption]);

  useEffect(() => {
    setTotalPages((totalPages) => totalPages);
  }, [totalPages]);

  const onChangeCategory = (category) => {
    setCategoryName(category);
    if (category === "all") setCheckIdx([1, 0, 0, 0, 0, 0]);
    if (category === "idea") setCheckIdx([0, 1, 0, 0, 0, 0]);
    if (category === "marketing") setCheckIdx([0, 0, 1, 0, 0, 0]);
    if (category === "video") setCheckIdx([0, 0, 0, 1, 0, 0]);
    if (category === "design") setCheckIdx([0, 0, 0, 0, 1, 0]);
    if (category === "etc") setCheckIdx([0, 0, 0, 0, 0, 1]);

    setSekectedSortIndex(0);
    setPageNumber(1);
    setTotalPages(1);
    setCurrentPage(1);
    //setSortOption("newest");
    setFilter(filterOptions[0].key);
  };

  const handleSortClick = (index) => {
    setSekectedSortIndex(index);
    if (index === 0) {
      setSortOption("newest");
    } else if (index === 1) {
      setSortOption("view");
    } else if (index === 2) {
      setSortOption("like");
    } else {
      setSortOption("scrap");
    }
    setPageNumber(1);
    setTotalPages(1);
    setCurrentPage(1);
  };

  const getWork = (endpoint) => {
    console.log(endpoint);
    const fetchData = async () => {
      try {
        const response = await axios.get(endpoint);
        const {
          data: {
            data: { references,totalOfAllReferences, totalOfPageElements,  totalPages },
          },
        } = response;
        console.log(references);

        setMywork(references);
        setTotalOfAllReferences(totalOfAllReferences);
        setTotalOfPageElements(totalOfPageElements);
        setTotalPages(totalPages);
      }
      catch (err) {
        console.log(err);
        return err;
      }
    }

    fetchData();
    /*
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res);
        setMywork(...[res.data.data.references]);
        setTotalOfAllReferences(res.data.data.totalOfAllReferences);
        setTotalOfPageElements(res.data.data.totalOfPageElements);
        setTotalPages(res.data.data.totalPages);
        setPageNumber(pageNumber + 1); // 다음 페이지를 렌더링 하기 위해
      })
      .catch((err) => {
        console.log(err);
      });
      */
    console.log(
      "totalOfAllReferences : " +
        totalOfAllReferences +
        ", totalOfPageElements : " +
        totalOfPageElements,
      ", totalPages : " + totalPages
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

  const onClickSelectButton = (value) => {
    if (value.detail === 0) {
      setButtonColor((buttonColor[0]===0 ? 1: 0, buttonColor[1]))
    }
    if (value.detail === 1) {
      setButtonColor((buttonColor[0], buttonColor[1] === 0 ? 1 : 0));
    }
    console.log(value)
  }
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
          {!totalOfAllReferences ? (
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
                총 52개
                <S.SelectButton
                  onClick={onClickSelectButton}
                  state={buttonColor[0]}
                  value={0}
                >
                  내 작품 전체 삭제
                </S.SelectButton>
                <S.SelectButton
                  onClick={onClickSelectButton}
                  state={buttonColor[1]}
                  value={1}
                >
                  삭제할 작품 선택
                </S.SelectButton>
              </S.SelectBox>
              {/* 정렬순 */}
              <S.SortBox>
                <Filter />
              </S.SortBox>
              <S.Line style={{ border: "1px solid white" }} />

                <RefList>
                  {mywork.map((reference, index) => (
                    <RefCard
                      data={reference}
                      key={reference.postId}
                    />
                  ))}
                </RefList>
              <div
                style={{
                  margin: "0 auto",
                }}
              >
                {currentPage !== totalPages && (
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
    </S.ManageListContainer>
  );
}

export default ManageListContainer;
