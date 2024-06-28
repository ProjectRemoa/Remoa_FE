import { S } from "./FeedbackCommentWrite.styles";
import React, { useState } from "react";
import FeedbackCommentList from "../FeedbackCommentList";
import { AiOutlineClose } from "react-icons/ai";
import btnStyle from "../../../../layout/Button.module.css";
import { FaCaretDown } from "react-icons/fa";
import { useEffect } from "react";
import { useCheckLike } from "../../../../hooks/checkMyWork";
import { postFeedbackComment } from "../../../../apis/modal/feedbackComment";

export default function FeedbackCommentWrite({
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
  const [contents, setContents] = useState("");
  const { checkLike } = useCheckLike("");
  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
      setContents(inputValue.substring(0, 1000));
      return;
    }
    setContents(inputValue);
  };
  const [selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const opti = Array.from({ length: numPages }, (v, i) => i + 1); // pdf
  const pageCount = Array.from({ length: media.length }, (v, i) => i + 1); // image
  const optiLength = opti.length;
  const pageCountLength = pageCount.length;

  const onSumbitHandler = async (e) => {
    e.preventDefault();
    checkLike();
  if (!contents) return alert("내용이 비어있습니다.");

      const response = await postFeedbackComment(id3, selected, {
        feedbacks: contents,
      });
      setFeedback(response.data.data);
      // const newItems = [...pagesArray];
      // newItems.push(selected);
      // setPagesArray(newItems);

      setContents("");
    
  };

  const [expandModalOpenDelete, setExpandModalOpenDelete] = useState(false);
  // 모달창 노출
  const showExpandModalDelete = () => {
    setExpandModalOpenDelete(!expandModalOpenDelete);
  };

  // const [pagesArray, setPagesArray] = useState([]);
  // useEffect(() => {
  //   const pageArray = feedbacks.map((feedback) =>
  //     feedback.feedbackInfos.map((feedback) => feedback.page)
  //   );
  //   console.log(pageArray[0])
  //   setPagesArray(pageArray[0]);
  // }, [feedbacks]);

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
        <FeedbackCommentList
          link={link}
          feedbacks={feedbacks}
          setFeedback={setFeedback}
          id={id3}
        />
      </S.Feedback>

      <S.ModalWriteFeed>
        <S.RegTop>
          <S.RegExplain>
            <S.FeedbackText>피드백</S.FeedbackText>
            <S.FeedbackTextNum>페이지 번호</S.FeedbackTextNum>
          </S.RegExplain>
          <S.FeedbackSelect
            onChange={handleSelect}
            onClick={showExpandModalDelete}
            disabled={link}
            style={{ left: "10px", alignItems: "center" }}
          >
            {selected}
            {selected && (
              <FaCaretDown style={{ marginLeft: "5px" }} />
            )}
          </S.FeedbackSelect>

          {expandModalOpenDelete && (pageCountLength < optiLength) && (
            <S.SelectWrapper style={{ height: `${optiLength * 30}px`, overflowY: optiLength * 30 > 100 ? 'auto' : 'hidden' }}>
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
          {expandModalOpenDelete && (pageCountLength > optiLength) && (
            <S.SelectWrapper style={{ height: `${pageCountLength * 30}px`, overflowY: pageCountLength * 30 > 100 ? 'auto' : 'hidden' }}>
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
