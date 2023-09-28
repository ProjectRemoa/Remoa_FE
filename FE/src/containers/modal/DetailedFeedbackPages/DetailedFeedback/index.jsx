import { makeStyles } from "@material-ui/core/styles";
import { S } from './ui'
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import React, { useState } from "react";
import DetailFeedbackComment from '../DetailedFeedbackComment'
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  display_none: {
    display: "none",
  },
  display_flex: {
    display: "flex",
  },
  modal_close: {
    fontSize: "25px",
    color: "white",
    cursor: "pointer",
    display: "block",
    fontWeight: "700",
    position: "relative",
    left: "165px",
  },
});

export default function DetaileFeedback({
  id3,
  modalVisibleId3,
  setModalVisibleId3,
  numPages,
  media,
  link,
  feedbacks,
  setFeedback,
}) {
  const navigate = useNavigate();
  const classes = useStyles();

  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
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
    } else {
      e.preventDefault();
      const UploaSeedback = {
        feedback: contents,
      };
      axios
        .post(`/BE/reference/${id3}/${selected}`, UploaSeedback)
        .then((response) => {
          console.log(response);
          alert("댓글 등록이 완료되었습니다.");
          setFeedback(response.data.data); // 새로운 피드백 배열
        })
        .catch((err) => {
          alert("통신 오류");
          console.log(err);
        });
    }
    setContents(""); // 입력된 피드백 초기화
  };

  return (
    <S.ModalWrapper
      className={modalVisibleId3 === id3 ? classes.display_flex : classes.display_none}
    >
      <S.ModalHeader>
        상세 피드백 뷰어
        <CloseIcon
          onClick={() => {
            setModalVisibleId3("");
          }}
          className={classes.modal_close}
        />
      </S.ModalHeader>

      <S.Feedback>
        <DetailFeedbackComment
          link={link}
          feedbacks={feedbacks}
          setFeedback={setFeedback}
          id={id3}
        />
      </S.Feedback>

      <S.ModalWriteFeed>
        <S.ModalFeedReg>
          <S.RegTop>
            <S.RegExplain>
              <span style={{ 
                color: "#FADA5E", 
                fontWeight: "800", 
              }}>
                Feedback
              </span>
              &nbsp; 페이지 번호 &nbsp;
            </S.RegExplain>
            <select
              onChange={handleSelect}
              style={{
                width: "55px",
                height: "24px",
                position: "relative",
                bottom: "7px",
              }}
              disabled={link ? true : false}
            >
              {opti &&
                opti.map((a, index) => {
                  return (
                    <option value={a} key={index}>
                      {a}
                    </option>
                  );
                })}
              {/* pdf  */}
              {pageCount &&
                pageCount.map((a, index) => {
                  return (
                    <option value={a} key={index}>
                      {a}
                    </option>
                  );
                })}
              {/* 사진*/}
            </select>
            <S.FeedbackSend onClick={onSumbitHandler}>등록</S.FeedbackSend>
          </S.RegTop>
          <S.RegBottom>
            <S.WriteInput
              onChange={onChangeContents}
              value={contents}
              required
            />
          </S.RegBottom>
        </S.ModalFeedReg>
      </S.ModalWriteFeed>
    </S.ModalWrapper>
  );
};