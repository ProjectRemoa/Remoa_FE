import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styledComponent from "./MyPageFAQNew.styles";
import axios from "axios";
const { Wrapper, Content, Textarea, SubmitButton } = styledComponent;

function MyPageFAQNew() {
  const navigate = useNavigate();
  const { category } = useParams();
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (category === "notice") {
      setType("공지사항");
    }
    if (category === "inquiry") {
      setType("문의하기");
    }
  }, [category]);

  const handleSubmit = async () => {
    try {
      await axios.post(`/BE/${category}`, {
        title,
        content,
      });
      alert(`${type}에 글이 등록되었습니다!`);
      navigate("/mypage/faq");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Wrapper>
        <span style={{ fontSize: "24px", fontWeight: 700 }}>{type}</span>
        <Content>
          <span style={{ fontWeight: 600 }}>제목</span>
          <input
            style={{ width: "80%", height: "100%", borderRadius: "10px" }}
            placeholder={`${type}의 제목을 입력해주세요`}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Content>
        <Content>
          <span style={{ fontWeight: 600 }}>내용</span>
          <Textarea
            placeholder={
              category === "notice"
                ? "공지사항의 내용을 입력해주세요"
                : "문의사항을 입력해주시면 빠른 시일 내에 답변드리도록 하겠습니다."
            }
            onChange={(e) => setContent(e.target.value)}
          />
        </Content>
      </Wrapper>
      <SubmitButton onClick={handleSubmit}>등록하기</SubmitButton>
    </>
  );
}

export default MyPageFAQNew;
