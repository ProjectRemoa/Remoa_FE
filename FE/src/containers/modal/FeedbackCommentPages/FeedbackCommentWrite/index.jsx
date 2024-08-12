import { S } from "./FeedbackCommentWrite.styles";
import React, { useState } from "react";
import FeedbackCommentList from "../FeedbackCommentList";
import { AiOutlineClose } from "react-icons/ai";
import { FaCaretDown } from "react-icons/fa";
import { useCheckLike } from "../../../../hooks/checkMyWork";
import { postFeedbackComment } from "../../../../apis/modal/feedbackComment";
import axiosInstance from "../../../../apis/axiosInterceptors";
import AutoCloseModal from "../../../../components/common/AutoCloseModal";
import YellowButton from "../../../../components/common/Button/YellowButton.styles";
import { onChangeHandler } from "../../../../functions/onChangeHandler";
import { checkNonMember } from "../../../../functions/checkNonMember";
import TextArea from "../../../../components/common/TextArea/TextArea.styles";
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
  const refreshToken = sessionStorage.getItem("refreshToken");
  const { checkLike } = useCheckLike("");
  const onChangeContents = (event) => {
    onChangeHandler(event, 300, setContents);
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
    checkNonMember(refreshToken);
    if (!contents) return alert("내용이 비어있습니다.");

    let user = undefined;
    let pageContainsResult = false;
    const res = await axiosInstance.get("user");
    if (res.data.data) {
      user = countPage.find((item) => item.nickname === res.data.data.nickname);
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
          isFromManage={isFromManage}
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
            {!link && <S.FeedbackTextNum>페이지 번호</S.FeedbackTextNum>}
          </S.RegExplain>
          {!link && (
            <S.FeedbackSelect
              onChange={handleSelect}
              onClick={showExpandModalDelete}
              style={{ left: "10px", alignItems: "center" }}
            >
              {selected}
              {selected && <FaCaretDown style={{ marginLeft: "5px" }} />}
            </S.FeedbackSelect>
          )}
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
                  onClick={() => {
                    setSelected(a);
                    showExpandModalDelete();
                  }}
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
                  onClick={() => {
                    setSelected(a);
                    showExpandModalDelete();
                  }}
                >
                  {a}
                </S.FeedbackSelect>
              ))}
            </S.SelectWrapper>
          )}

          {/* 사진*/}

          <YellowButton
            onClick={onSubmitHandler}
            style={{ width: "72px", height: "43px", right: 0, fontWeight: 600 }}
          >
            <span>등록</span>
          </YellowButton>
        </S.RegTop>
        <S.RegBottom>
          <TextArea
            onChange={onChangeContents}
            value={contents}
            required
            placeholder="최대 300자까지 피드백을 남겨주세요."
            style={{ height: "149px", width: "90%" }}
          />
        </S.RegBottom>
      </S.ModalWriteFeed>
      {showModal && (
        <AutoCloseModal onClose={() => setShowModal(false)} duration={1000}>
          <S.PageModalText>
            이미 해당 페이지에 대한 피드백을 작성했어요.
          </S.PageModalText>
        </AutoCloseModal>
      )}
    </S.ModalWrapper>
  );
}
