import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import MyPageScrapContainer from "./MyPageScrapContainer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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

const Line = styled.hr`
  width: 90%;
  border: none;
  margin: 0 auto;
`;

function MyPageWorkContainer() {
  const [myFeedback, setMyFeedback] = useState("");
  const [myScrapCount, setMyScrapCount] = useState(0);

  const navigate = useNavigate();

  const onClickMoreScrap = () => {
    navigate("/mypage/scrap");
  };

  useEffect(() => {
    axios
      .get(`/BE/user/activity?comment=${1}&scrap=${1}`)
      .then((res) => {
        setMyFeedback(res.data.data.content);
        setMyScrapCount(res.data.data.posts.length);
      })
      .catch((err) => {});
  }, []);

  return (
    <div
      style={{
        boxSizing: "border-box",
        alignItems: "center",
        margin: "0 auto",
        borderRadius: "30px",
        width: "90%",
      }}
    >
      {/* 의진님 여기에 피드백 목록 넣어주시면 됩니다 */}
      <Line />
      <MyPageScrapContainer from={"work"} />
      <div style={{ margin: "0 auto" }}>
        <Line />
        {/*myScrapCount > 12 && ( // 스크랩한 작업물 12개 이상이면 보러가게*/}
        <div style={{ width: "100%" }}>
          <Button onClick={onClickMoreScrap}>더보기 &gt;</Button>
        </div>
        {/*})}*/}
      </div>
    </div>
  );
}

export default MyPageWorkContainer;
