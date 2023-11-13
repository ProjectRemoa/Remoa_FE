import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MyPageFAQNew() {
  const { category } = useParams();
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (category === "notice") {
      setTitle("공지사항");
    }
    if (category === "inquiry") {
      setTitle("문의하기");
    }
  }, [category]);

  return (
    <div
      style={{
        width: "54%",
        height: "620px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        border: "1px solid #e1e2e5",
        borderRadius: "20px",
        marginTop: "24px",
        boxSizing: "border-box",
        padding: "55px 107px",
      }}
    >
      <span style={{ fontSize: "24px", fontWeight: 700 }}>{title}</span>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "33px",
        }}
      >
        <span style={{ fontWeight: 600 }}>제목</span>
        <textarea
          style={{ width: "80%", height: "100%", resize: "none" }}
          placeholder="공지사항의 제목을 입력해주세요"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
        }}
      >
        <span style={{ fontWeight: 600 }}>내용</span>
        <textarea
          style={{ width: "80%", height: "100%", resize: "none" }}
          placeholder="공지사항의 내용을 입력해주세요"
        />
      </div>
    </div>
  );
}

export default MyPageFAQNew;
