import { React, useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

function OtherManageListConatiner({ match }) {
  // match ; params
  const { id } = useParams();
  const [mywork, setMywork] = useState([]);
  const [totalOfAllReferences, setTotalOfAllReferences] = useState(0); // 전체 레퍼런스 수
  const [totalOfPageElements, setTotalOfPageElements] = useState(0); // 현재 페이지의 레퍼런스 수
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  const [pageNumber, setPageNumber] = useState(1);
  const [sortOption, setSortOption] = useState("newest");
  const [categoryName, setCategoryName] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const [name, setName] = useState(""); // 해당 유저의 이름

  const navigate = useNavigate();

  console.log("id : " + id);

  useEffect(() => {
    // 카테고리, 정렬을 바꿀 떄마다 렌더링
    console.log("카테고리, 또는 정렬을 바꿀 때마다 렌더링");
    let endpoint;
    endpoint = `/BE/user/reference/${id}`;

    getWork(endpoint, false);
  }, [categoryName, sortOption]);

  useEffect(() => {
    setTotalPages((totalPages) => totalPages);
  }, [totalPages]);

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
        setName(res.data.data.references[0].postMember.nickname);
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
    endpoint = `/BE/user/reference/${id}/?page=${pageNumber}&sort=${sortOption}&category=${categoryName}`;

    getWork(endpoint, true);
  };

  return (
    <div >
      <div
        align="left"
        style={{
          fontFamily: "NotoSansKR-700",
          margin: "30px auto",
          fontSize: "1.8vw",
        }}
      >
        <span style={{ color: "#FADA5E" }}>{name}</span>
        님의 작업물 목록
      </div>
    </div>
  );
}

export default OtherManageListConatiner;
