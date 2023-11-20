import { useState, useEffect } from "react";
import axios from "axios";
//import ManageList from "../../manage/managelist";
import styledComponent from "./MyPageScrapContainer.styles";
const { Wrapper, Title, Content, Button } = styledComponent;

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
    axios
      .get(endpoint)
      .then((res) => {
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
    <Wrapper>
      <Title>스크랩한 작업물</Title>
      {!totalElements ? (
        <Content>아직 스크랩한 작업물이 없어요.</Content>
      ) : (
          <Content>
            {/*
          <ManageList
            data={mywork}
            TAR={totalOfAllReferences}
            TPE={totalOfPageElements}
            TP={totalPages}
            from={from === "work" ? "work" : "scrap"}
      />*/}
          {totalElements > 12 && (
            <Button onClick={loadMoreItems}>더보기 &gt;</Button>
          )}
        </Content>
      )}
    </Wrapper>
  );
}

export default MyPageScrapContainer;
