import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MyPageFAQDetail() {
  const { category, detailId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (category === "notice") {
      axios
        .get(`/BE/notice?page=${1}`)
        .then((res) => setData(res.data.data.notices));
    }
    if (category === "inquiry") {
      axios
        .get(`/BE/inquiry?page=${1}`)
        .then((res) => setData(res.data.data.inquiries));
    }
  }, [category]);

  const detailData = data?.find((data) => data.noticeId === parseInt(detailId));

  return (
    <div
      style={{
        width: "65%",
        height: "70%",
        marginTop: "68px",
        textAlign: "left",
      }}
    >
      <span>{category === "notice" ? "공지사항" : "문의하기"}</span>
      <div
        style={{
          height: "87px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "2px solid black",
          borderBottom: "1px solid black",
          boxSizing: "border-box",
          marginTop: "12px",
          padding: "0px 16px",
        }}
      >
        <span
          style={{
            display: "block",
            fontSize: "28px",
            fontWeight: 600,
          }}
        >
          {detailData?.title}
        </span>
        <div style={{ displa: "flex" }}>
          <span>Author</span>
          <span>{detailData?.postingTime}</span>
          <span>{detailData?.view}</span>
        </div>
      </div>
    </div>
  );
}

export default MyPageFAQDetail;
