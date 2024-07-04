import { S } from "./FeedbackCommentWrite.styles";
import React, { useState } from "react";
import FeedbackCommentList from "../FeedbackCommentList";
import { AiOutlineClose } from "react-icons/ai";
import btnStyle from "../../../../layout/Button.module.css";
import { FaCaretDown } from "react-icons/fa";
import { useCheckLike } from "../../../../hooks/checkMyWork";
import { postFeedbackComment } from "../../../../apis/modal/feedbackComment";
import axiosInstance from "../../../../apis/axiosInterceptors";
import AutoCloseModal from "../../../../components/common/AutoCloseModal";

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
  countPage,
}) {
  const [contents, setContents] = useState("");
  const [showModal, setShowModal] = useState(false);

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    checkLike();
    if (!contents) return alert("내용이 비어있습니다.");

    let user = undefined;
    let pageContainsResult = false;
    const res = await axiosInstance.get("user");
    if (res.data.data) {
      user = countPage.find((item) => item.nickname === res.data.data.nickname);
      console.log(countPage, res.data.data)
      if (user?.pages.includes(selected)) {
        pageContainsResult = true;
      }
    }

    if (pageContainsResult) {
      setShowModal(true);
      return;
    } else {
      const response = await postFeedbackComment(id3, selected, {
        feedback: contents,
      });
      setFeedback(response.data);
      setContents("");
    }
  };
  const [expandModalOpenDelete, setExpandModalOpenDelete] = useState(false);
  // 모달창 노출
  const showExpandModalDelete = () => {
    setExpandModalOpenDelete(!expandModalOpenDelete);
  };

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
            disabled={!!link}
            style={{ left: "10px", alignItems: "center" }}
          >
            {selected}
            {selected && <FaCaretDown style={{ marginLeft: "5px" }} />}
          </S.FeedbackSelect>

          {expandModalOpenDelete && pageCountLength < optiLength && (
            <S.SelectWrapper
              style={{
                height: `${optiLength * 30}px`,
                overflowY: optiLength * 30 > 100 ? "auto" : "hidden",
              }}
            >
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
          {expandModalOpenDelete && pageCountLength > optiLength && (
            <S.SelectWrapper
              style={{
                height: `${pageCountLength * 30}px`,
                overflowY: pageCountLength * 30 > 100 ? "auto" : "hidden",
              }}
            >
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
            onClick={onSubmitHandler}
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
      {showModal && (
        <AutoCloseModal onClose={() => setShowModal(false)} duration={1000}>
          <S.PageModalText>이미 해당 페이지에 대한 피드백을 작성했어요.</S.PageModalText>
        </AutoCloseModal>
      )}
    </S.ModalWrapper>
  );
}
