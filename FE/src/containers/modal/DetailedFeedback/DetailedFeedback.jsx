import { makeStyles } from "@material-ui/core/styles";
import { DF } from "../../../layout/DetailFeedbackStyle";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import React, { useState } from "react";
import DetailedFeedbackComment from "./DetailedFeedbackComment";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles({
  dis: {
    display: "none",
  },
  show: {
    display: "flex",
  },
  close: {
    fontSize: "25px",
    color: "white",
    cursor: "pointer",
    display: "block",
    fontWeight: "700",
    position: "relative",
    left: "165px",
  },
});

const DetailedFeedback = ({
  id3,
  modalVisibleId3,
  setModalVisibleId3,
  numPages,
  media,
  link,
  feedbacks,
  setFeedback,
}) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const onCloseHandler = () => {
    setModalVisibleId3("");
  };
  const [contents, setContents] = useState("");

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const [selected, setSelected] = useState(1);
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  const opti = Array.from({ length: numPages }, (v, i) => i + 1);
  //이거는 pdf의 경우
  const pageCount = Array.from({ length: media.length }, (v, i) => i + 1);
  //이미지의 경우

  const onSumbitHandler = (e) => {
    if (sessionStorage.getItem("nickname") === null) {
      alert("로그인이 필요한 서비스입니다.");
      navigate("/sociallogin");
    } else {
      e.preventDefault();
      const UploadFeedback = {
        feedback: contents,
      };
      axios
        .post(`/BE/reference/${id3}/${selected}`, UploadFeedback)
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
    <DF.ModalWrapper
      className={modalVisibleId3 == id3 ? classes.show : classes.dis}
    >
      <DF.ModalHeader>
        상세 피드백 뷰어
        <CloseIcon onClick={onCloseHandler} className={classes.close} />
      </DF.ModalHeader>

      <DF.Feedback>
        <DetailedFeedbackComment
          link={link}
          feedbacks={feedbacks}
          setFeedback={setFeedback}
          id={id3}
        />
      </DF.Feedback>

      <DF.ModalWriteFeed>
        <DF.ModalFeedReg>
          <DF.RegTop>
            <DF.RegExplain>
              <span style={{ color: "#FADA5E", fontWeight: "800" }}>
                Feedback
              </span>
              &nbsp; 페이지 번호 &nbsp;
            </DF.RegExplain>
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
                opti.map(function (a, index) {
                  return (
                    <option value={a} key={index}>
                      {a}
                    </option>
                  );
                })}
              {/* pdf  */}
              {pageCount &&
                pageCount.map(function (a, index) {
                  return (
                    <option value={a} key={index}>
                      {a}
                    </option>
                  );
                })}
              {/* 사진*/}
            </select>
            <DF.FeedbackSend onClick={onSumbitHandler}>등록</DF.FeedbackSend>
          </DF.RegTop>
          <DF.RegBottom>
            <DF.WriteInput
              onChange={onChangeContents}
              value={contents}
              required
            />
          </DF.RegBottom>
        </DF.ModalFeedReg>
      </DF.ModalWriteFeed>
    </DF.ModalWrapper>
  );
};

export default DetailedFeedback;
