import { S } from "./ui";
import axios from "axios";
import React, { useState } from "react";
import DetailFeedbackComment from "../DetailedFeedbackComment";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import btnStyle from "../../../../layout/Button.module.css";
import { FaCaretDown } from "react-icons/fa";
import { useEffect } from "react";

export default function DetaileFeedback({
  id3,
  modalVisibleId3,
  setModalVisibleId3,
  numPages,
  media,
  link,
  feedbacks,
  setFeedback,
  isFromManage,
}) {
  feedbacks.sort((a, b) => {
    return new Date(a.feedbackTime) - new Date(b.feedbackTime);
  });
  const navigate = useNavigate();

  const [contents, setContents] = useState("");
  // const [timer, setTimer] = useState(null); // 디바운싱 구현
  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
      setContents(inputValue.substring(0, 1000));
      return;
    }
    setContents(inputValue);
    // if (timer) clearTimeout(timer)

    // const newTimer = setTimeout(() => {
    //     setContents(inputValue);
    // }, 500);
    // setTimer(newTimer);
  };
  const [selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const opti = Array.from({ length: numPages }, (v, i) => i + 1);
  const pageCount = Array.from({ length: media.length }, (v, i) => i + 1);

  const onSumbitHandler = (e) => {
    if (sessionStorage.getItem("nickname") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/sociallogin");
    } else if (sessionStorage.getItem("nickname") === "") {
    } else {
      if (pagesArray.includes(selected)) {
        alert("이미 해당 페이지 등록하셨습니다.")
      } else {
        e.preventDefault();
        if (!contents) return alert("내용이 비어있습니다.")
        const UploaSeedback = {
          feedback: contents,
        };
        axios
          .post(`/BE/reference/${id3}/${selected}`, UploaSeedback)
          .then((response) => {
            console.log(response);
            alert("댓글 등록이 완료되었습니다.");
            // 새로운 피드백 배열
            setFeedback(response.data.data);

            const newItems = [...pagesArray];
            newItems.push(selected);
            setPagesArray(newItems);
          })
          .catch((err) => {
            alert("통신 오류");
            console.log(err);
          });
          // 입력된 피드백 초기화
        setContents("");
        
      }
    }
  };

  const [expandModalOpenDelete, setExpandModalOpenDelete] = useState(false);
  // 모달창 노출
  const showExpandModalDelete = () => {
    setExpandModalOpenDelete(!expandModalOpenDelete);
  };

  const [pagesArray,setPagesArray] = useState([])
  useEffect(()=>{
    setPagesArray(feedbacks.map((feedback) => feedback.page))
  },[feedbacks])

  return (
    <S.ModalWrapper
      state={isFromManage}
      style={{ display: modalVisibleId3 !== id3 && "none" }}
    >
      <S.ModalHeader>
        <S.HeaderText>상세 피드백 뷰어</S.HeaderText>
        <AiOutlineClose
          onClick={() => {
            setModalVisibleId3("");
          }}
          style={{
            fontSize: "24px",
            cursor: "pointer",
            display: "block",
            position: "absolute",
            left: "432px",
          }}
        />
      </S.ModalHeader>

      <S.Feedback>
        <DetailFeedbackComment
          link={link}
          feedbacks={feedbacks}
          setFeedback={setFeedback}
          id={id3}/>
      </S.Feedback>

      <S.ModalWriteFeed>
        <S.RegTop>
          <S.RegExplain>
            <S.FeedbackText>피드백</S.FeedbackText>
            <S.FeedbackTextNum>페이지 번호</S.FeedbackTextNum>
          </S.RegExplain>
          <S.FeedbackSelect
            onChange={handleSelect}
            disabled={link}
            style={{ left: "10px", alignItems: "center" }}
          >
            {selected}
            {selected && (
              <FaCaretDown
                style={{ marginLeft: "5px" }}
                onClick={showExpandModalDelete}
              />
            )}
          </S.FeedbackSelect>

          {expandModalOpenDelete && opti && (
            <S.SelectWrapper>
              {opti.map((a) => (
                <S.FeedbackSelect
                  key={a}
                  style={{
                    width: "46px",
                    height: "24px",
                    border: "none",
                    bottom: 0,
                    color: selected === a ? "#1E1E1E" : "#727272",
                    fontWeight: selected === a ? 700 : 500,
                  }}
                  onClick={() => setSelected(a)}
                >
                  {a}
                </S.FeedbackSelect>
              ))}
            </S.SelectWrapper>
          )}

          {/* pdf  */}
          {expandModalOpenDelete && pageCount && (
            <S.SelectWrapper>
              {pageCount.map((a) => (
                <S.FeedbackSelect
                  key={a}
                  style={{
                    width: "46px",
                    height: "24px",
                    border: "none",
                    bottom: 0,
                    color: selected === a ? "#1E1E1E" : "#727272",
                    fontWeight: selected === a ? 700 : 500,
                  }}
                  onClick={() => setSelected(a)}
                >
                  {a}
                </S.FeedbackSelect>
              ))}
            </S.SelectWrapper>
          )}

          {/* 사진*/}

          <button
            className={btnStyle.yellow}
            onClick={onSumbitHandler}
            style={{ width: "72px", height: "43px", right: 0, fontWeight: 600 }}
          >
            등록
          </button>
        </S.RegTop>
        <S.RegBottom>
          <S.WriteInput
            onChange={onChangeContents}
            value={contents}
            required
            placeholder="해당 작업물에 대한 의견을 최대 1000자까지 남길 수 있어요!"
          />
        </S.RegBottom>
      </S.ModalWriteFeed>
    </S.ModalWrapper>
  );
}
