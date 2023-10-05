import { React, useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import ManageList from "../manage/ManageList";
//import "../manage/ManageListContainer.scss";
import { useNavigate, useParams } from "react-router";
import styled from "styled-components";

const Line = styled.hr`
  width: 90%;
  border: none;
  margin: 0 auto;
`;

const Button = styled.button`
  width: 12%;
  height: 40px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #b0b0b0;
  box-shadow: none;
  color: #464646;
  font-size: 78%;

  cursor: pointer;
  background: #fada5e;
  font-family: NotoSansKR-700;
`;

function MyPageScrapContainer({ from }) {
  const [mywork, setMywork] = useState([]);
  const [totalOfAllReferences, setTotalOfAllReferences] = useState(0); // 전체 레퍼런스 수
  const [totalOfPageElements, setTotalOfPageElements] = useState(0); // 현재 페이지의 레퍼런스 수
  const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수

  const [pageNumber, setPageNumber] = useState(1);
  const [totalElements, setTotalElements] = useState(0);

  useEffect(() => {
    // 카테고리, 정렬을 바꿀 떄마다 렌더링
    console.log("카테고리, 또는 정렬을 바꿀 때마다 렌더링");
    let endpoint;
    endpoint = `/BE/user/activity?comment=${0}&scrap=${pageNumber}`;
    //}
    getWork(endpoint, false);
  }, []);

  const getWork = (endpoint, isLoad) => {
    console.log("========");
    console.log(endpoint);
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res);
        if (isLoad === true)
          // 이어서 받으려면
          setMywork([...mywork, ...res.data.data.posts]);
        // 카테고리를 바꾸거나 정렬순을 바꾸거나
        else setMywork(...[res.data.data.posts]);
        setPageNumber(pageNumber + 1); // 다음 페이지를 렌더링 하기 위해
        setTotalElements(res.data.data.posts.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadMoreItems = () => {
    let endpoint;
    endpoint = `/BE/user/activity?comment=${0}&scrap=${pageNumber}`;

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
        스크랩한 작업물
      </div>

      <div>
        {!totalElements ? (
          <div style={{ marginTop: "50px" }}>
            <p
              style={{
                fontSize: "2vw",
                color: "#464646",
                fontFamily: "NotoSansKR-700",
                marginBottom: "5px",
              }}
            >
              아직 스크랩한 작업물이 없어요
            </p>
          </div>
        ) : (
          <div>
            <Line />
            <ManageList
              data={mywork}
              TAR={totalOfAllReferences}
              TPE={totalOfPageElements}
              TP={totalPages}
              from={from === "work" ? "work" : "scrap"}
            />
            <div
              style={{
                margin: "0 auto",
              }}
            >
              <Line />
              {totalElements > 12 && (
                <div style={{ width: "100%" }}>
                  <Button onClick={loadMoreItems}>더보기 &gt;</Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MyPageScrapContainer;
