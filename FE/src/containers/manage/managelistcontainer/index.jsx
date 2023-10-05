import { React, useEffect,  useState } from "react";
import axios from "axios";
import ManageList from "../managelist";
import { useNavigate } from "react-router";
import { Style } from "../../../layout/ReferenceListStyle";
import S from "./ManageListContainer.styles"

function ManageListContainer() {
  const [mywork, setMywork] = useState([]);
  const [totalOfAllReferences, setTotalOfAllReferences] = useState(0); // 전체 레퍼런스 수
  const [totalOfPageElements, setTotalOfPageElements] = useState(0); // 현재 페이지의 레퍼런스 수
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  const [pageNumber, setPageNumber] = useState(1);
  const [sortOption, setSortOption] = useState("newest");
  const [categoryName, setCategoryName] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedSortIndex, setSekectedSortIndex] = useState(0); // 정렬 버튼 색상 변경

  const [checkIdx, setCheckIdx] = useState([1,0,0,0,0,0]);
  const navigate = useNavigate();

  useEffect(() => {
    // 카테고리, 정렬을 바꿀 떄마다 렌더링
    let endpoint;
    endpoint = `/BE/user/reference?page=${1}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint, false);
  }, [categoryName, sortOption]);

  useEffect(() => {
    setTotalPages((totalPages) => totalPages);
  }, [totalPages]);

  const onChangeCategory = (category) => {
    setCategoryName(category);
    if (category === "all") setCheckIdx([1,0,0,0,0,0]);
    if (category === "idea") setCheckIdx([0,1,0,0,0,0]);
    if (category === "marketing") setCheckIdx([0,0,1,0,0,0]);
    if (category === "video") setCheckIdx([0,0,0,1,0,0]);
    if (category === "design") setCheckIdx([0,0,0,0,1,0]);
    if (category === "etc") setCheckIdx([0,0,0,0,0,1]);

    setSekectedSortIndex(0);
    setPageNumber(1);
    setTotalPages(1);
    setCurrentPage(1);
    setSortOption("newest");
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

  const getWork = (endpoint, isLoad) => {
    console.log("========");
    console.log(endpoint);
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res);
        if (isLoad === true)
          // 이어서 받으려면
          setMywork([...mywork, ...res.data.data.references]);
        // 카테고리를 바꾸거나 정렬순을 바꾸거나
        else setMywork(...[res.data.data.references]);
        setTotalOfAllReferences(res.data.data.totalOfAllReferences);
        setTotalOfPageElements(res.data.data.totalOfPageElements);
        setTotalPages(res.data.data.totalPages);
        setPageNumber(pageNumber + 1); // 다음 페이지를 렌더링 하기 위해
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(
      "pageNumber : " + pageNumber + ", totalPages : " + totalPages,
      ", currentPage : " + currentPage
    );
  };

  const loadMoreItems = () => {
    setCurrentPage(currentPage + 1);
    let endpoint;
    endpoint = `/BE/user/reference?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint, true);
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
          <S.CategoryText>기타 아이디어</S.CategoryText>
        </S.Category>
      </S.CategoryBox>

      <>
        {!totalOfAllReferences ? (
          <S.ManageListNo>
            <S.NoManageText>아직 작업물이 없어요</S.NoManageText>
            <S.NoManageSubText>
              작업물을 업로드해 다른 사람들의 피드백을 받아보세요
            </S.NoManageSubText>
            <S.ButtonRegister onClick={onClickRegister}>
              등록하기
            </S.ButtonRegister>
          </S.ManageListNo>
        ) : (
          <S.ManageListBox>
            {/* 정렬순 */}
            <S.SortBox>
              <Style.Sort
                onClick={() => handleSortClick(0)}
                style={{
                  backgroundColor:
                    selectedSortIndex === 0 ? "#FADA5E" : "white",
                }}
              >
                최신순
              </Style.Sort>
              <Style.Sort
                onClick={() => handleSortClick(1)}
                style={{
                  backgroundColor:
                    selectedSortIndex === 1 ? "#FADA5E" : "white",
                }}
              >
                조회수순
              </Style.Sort>
              <Style.Sort
                onClick={() => handleSortClick(2)}
                style={{
                  backgroundColor:
                    selectedSortIndex === 2 ? "#FADA5E" : "white",
                }}
              >
                좋아요순
              </Style.Sort>
              <Style.Sort
                onClick={() => handleSortClick(3)}
                style={{
                  backgroundColor:
                    selectedSortIndex === 3 ? "#FADA5E" : "white",
                }}
              >
                스크랩순
              </Style.Sort>
            </S.SortBox>
            <S.Line />
            <ManageList
              data={mywork}
              TAR={totalOfAllReferences}
              TPE={totalOfPageElements}
              TP={totalPages}
            />
            <div
              style={{
                margin: "0 auto",
              }}
            >
              <S.Line />
              {currentPage !== totalPages && (
                <div style={{ width: "100%" }}>
                  <S.Button onClick={loadMoreItems}>더 보기 &gt;</S.Button>
                </div>
              )}
            </div>
          </S.ManageListBox>
        )}
      </>
    </S.ManageListContainer>
  );
}

export default ManageListContainer;
