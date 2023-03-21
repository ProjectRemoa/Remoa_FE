import { React, useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import ManageList from "./ManageList";
import "./ManageListContainer.scss";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Style } from "../../layout/ReferenceListStyle";

const Button = styled.button`
  width: 30%;
  height: 40px;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: none;
  color: black;

  cursor: pointer;
  background: #fada5e;
  border: none;
`;

const Line = styled.hr`
  width: 90%;
  border: none;
  margin: 0 auto;
`;

const Category = styled.div`
  width: 15.65%;
  height: 43px;
  border: 1px solid #b0b0b0;
  border-radius: 10px;
  display: inline-block;

  margin: 0 0.4% 0 0.4%; // 크기에 따라 margin 조절되게 설정
  vertical-align: middle;
  font-size: 80%;
  cursor: pointer;
`;

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

  const navigate = useNavigate();

  useEffect(() => {
    // 화면이 처음 뜰 때 렌더링
    console.log("화면 첫 렌더링");
    const endpoint = `/BE/user/reference?page=${1}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint, false);
  }, []);

  useEffect(() => {
    // 카테고리를 바꿀 떄마다 렌더링
    console.log("카테고리를 바꿀 때마다 렌더링");
    setCategoryName((categoryName) => categoryName);
    setPageNumber(1); // 카테고리 바꾸면 페이지 1로 자동 렌더링
    setSortOption("newest");
    setTotalPages(1);
    setCurrentPage(1);
    const endpoint = `/BE/user/reference?page=${1}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint, false);
  }, [categoryName]);

  useEffect(() => {
    // 정렬순을 바꿀 때마다 렌더링
    console.log("정렬순을 바꿀 때마다 렌더링");
    setPageNumber(1); // 카테고리 바꾸면 페이지 1로 자동 렌더링
    setTotalPages(1);
    setCurrentPage(1);
    const endpoint = `/BE/user/reference?page=${1}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint, false);
  }, [sortOption]);

  useEffect(() => {
    setTotalPages((totalPages) => totalPages);
  }, [totalPages]);

  const onChangeCategory = (category) => {
    setCategoryName(category);
  };

  const handleSortClick = (index) => {
    setSekectedSortIndex(index);
    if (index === 0) {
      setSortOption("newest");
    } else if (index === 1) {
      setSortOption("like");
    } else if (index === 2) {
      setSortOption("view");
    } else {
      setSortOption("scrap");
    }
    setPageNumber(1);
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
        setPageNumber(res.data.data.totalPages);
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
    const endpoint = `/BE/user/reference?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint, true);
  };

  return (
    <div className="ManageListContainer">
      <div
        align="left"
        style={{
          fontFamily: "NotoSansKR-700",
          margin: "30px auto",
          fontSize: "1.8vw",
        }}
      >
        내 작업물 목록
      </div>
      <div
        align="center"
        style={{
          paddingBottom: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Category
          state="all"
          onClick={() => onChangeCategory("all")}
          style={{
            backgroundColor: categoryName === "all" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "all"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "all" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            전체
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("idea")}
          style={{
            backgroundColor: categoryName === "idea" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "idea"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "idea" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            기획/아이디어
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("marketing")}
          style={{
            backgroundColor:
              categoryName === "marketing" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "marketing"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "marketing" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            광고/마케팅
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("video")}
          style={{
            backgroundColor: categoryName === "video" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "video"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "video" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            영상
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("design")}
          style={{
            backgroundColor: categoryName === "design" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "design"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "design" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            디자인/사진
          </span>
        </Category>
        <Category
          onClick={() => onChangeCategory("etc")}
          style={{
            backgroundColor: categoryName === "etc" ? "#fada5e" : "#f9fafc",
            boxShadow:
              categoryName === "etc"
                ? "none"
                : "0px 4px 4px rgba(0, 0, 0, 0.25)",
            color: categoryName === "etc" ? "white" : "#B0B0B0",
          }}
        >
          <span style={{ display: "inline-block", marginTop: "10px" }}>
            기타 아이디어
          </span>
        </Category>
      </div>

      <div>
        {!totalOfAllReferences ? (
          <div style={{ marginTop: "50px" }}>
            <span
              style={{
                fontSize: "1.75vw",
                color: "#464646",
              }}
            >
              지금 바로 작업물을 올려보세요!
            </span>
          </div>
        ) : (
          <div>
            {/* 정렬순 */}
            <div style={{ float: "right", margin: "5px 10px 15px 0px" }}>
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
            </div>
            <Line />
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
              <Line />
              {currentPage !== totalPages && (
                <div style={{ width: "100%" }}>
                  <Button onClick={loadMoreItems}>더 보기</Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ManageListContainer;
