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

const Sort = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 86px;
  display: inline-block;
  border: 0.5px solid #000000;
  border-radius: 10px;
  margin-right: 8px;
  cursor: pointer;
  :last-child {
    margin-right: 0px;
  }
  :visited {
    color: yellow;
  }
`;

function ManageListContainer() {
  const [mywork, setMywork] = useState([]);
  const [totalOfAllReferences, setTotalOfAllReferences] = useState(0); // 전체 레퍼런스 수
  const [totalOfPageElements, setTotalOfPageElements] = useState(0); // 현재 페이지의 레퍼런스 수
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수

  const [pageNumber, setPageNumber] = useState(1);
  const [sortOption, setSortOption] = useState("newest");
  const [categoryName, setCategoryName] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    // 화면이 처음 뜰 때 렌더링
    console.log("화면 첫 렌더링");
    const endpoint = `/BE/user/reference?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint);
    //onChangeColor("init");
  }, []);

  useEffect(() => {
    // 카테고리를 바꿀 떄마다 렌더링
    console.log("카테고리를 바꿀 때마다 렌더링");
    setCategoryName((categoryName) => categoryName);
    const endpoint = `/BE/user/reference?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint);
  }, [categoryName]);

  useEffect(() => {
    // 정렬순을 바꿀 때마다 렌더링
    console.log("정렬순을 바꿀 때마다 렌더링");
    const endpoint = `/BE/user/reference?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint);
  }, [sortOption]);

  const onChangeCategory = (e) => {
    setCategoryName(e.target.value);
    setPageNumber(1); // 카테고리 바꾸면 페이지 1로 자동 렌더링
    setSortOption("newest");
    onChangeColor("init"); // 카테고리 바꿀 때마다 색 초기화화
  };

  const onChangeSort = (e) => {
    onChangeColor(e.target.id);
    setSortOption(e.target.id); // 정렬 바꾸면 페이지 1로 자동 렌더링
    setPageNumber(1);
  };

  const getWork = (endpoint) => {
    console.log("========");
    console.log(endpoint);
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res);
        setMywork([...res.data.data.references]);
        setTotalOfAllReferences(res.data.data.totalOfAllReferences);
        setTotalOfPageElements(res.data.data.totalOfPageElements);
        setTotalPages(res.data.data.totalPages);
        setPageNumber(res.data.data.totalPages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadMoreItems = () => {
    const endpoint = `/BE/user/reference?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;
    getWork(endpoint);
  };

  const onChangeColor = (e) => {
    if (e === "newest") {
      document.getElementById("newest").style.backgroundColor = "#FADA5E";
      document.getElementById("view").style.backgroundColor = "white";
      document.getElementById("like").style.backgroundColor = "white";
      document.getElementById("scrap").style.backgroundColor = "white";
    } else if (e === "view") {
      document.getElementById("newest").style.backgroundColor = "white";
      document.getElementById("view").style.backgroundColor = "#FADA5E";
      document.getElementById("like").style.backgroundColor = "white";
      document.getElementById("scrap").style.backgroundColor = "white";
    } else if (e === "like") {
      document.getElementById("newest").style.backgroundColor = "white";
      document.getElementById("view").style.backgroundColor = "white";
      document.getElementById("like").style.backgroundColor = "#FADA5E";
      document.getElementById("scrap").style.backgroundColor = "white";
    } else {
      document.getElementById("newest").style.backgroundColor = "white";
      document.getElementById("view").style.backgroundColor = "white";
      document.getElementById("like").style.backgroundColor = "white";
      document.getElementById("scrap").style.backgroundColor = "#FADA5E";
    }
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
      <div align="center" style={{ paddingBottom: "30px" }}>
        <div className="form_radio_btn" style={{ float: "left" }}>
          <input
            id="radio-1"
            type="radio"
            name="category"
            value="all"
            onChange={onChangeCategory}
          />
          <label htmlFor="radio-1">전체</label>
        </div>
        <div className="form_radio_btn" style={{ float: "left" }}>
          <input
            id="radio-2"
            type="radio"
            name="category"
            value="idea"
            onChange={onChangeCategory}
          />
          <label htmlFor="radio-2">기획/아이디어</label>
        </div>
        <div className="form_radio_btn" style={{ float: "left" }}>
          <input
            id="radio-3"
            type="radio"
            name="category"
            value="marketing"
            onChange={onChangeCategory}
          />
          <label htmlFor="radio-3">광고/마케팅</label>
        </div>
        <div className="form_radio_btn" style={{ float: "left" }}>
          <input
            id="radio-4"
            type="radio"
            name="category"
            value="video"
            onChange={onChangeCategory}
          />
          <label htmlFor="radio-4">영상</label>
        </div>
        <div className="form_radio_btn" style={{ float: "left" }}>
          <input
            id="radio-5"
            type="radio"
            name="category"
            value="design"
            onChange={onChangeCategory}
          />
          <label htmlFor="radio-5">디자인/사진</label>
        </div>
        <div className="form_radio_btn" style={{ float: "left" }}>
          <input
            id="radio-6"
            type="radio"
            name="category"
            value="etc"
            onChange={onChangeCategory}
          />
          <label htmlFor="radio-6">기타 아이디어</label>
        </div>
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
            <div style={{ float: "right", margin: "5px 10px 15px 0px" }}>
              <Style.Sort onClick={onChangeSort} id="newest">
                최신순
              </Style.Sort>
              <Style.Sort onClick={onChangeSort} id="view">
                조회수순
              </Style.Sort>
              <Style.Sort onClick={onChangeSort} id="like">
                좋아요순
              </Style.Sort>
              <Style.Sort onClick={onChangeSort} id="scrap">
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
              {totalPages > 1 && (
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
