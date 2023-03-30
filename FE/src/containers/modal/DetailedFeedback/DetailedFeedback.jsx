import { makeStyles } from "@material-ui/core/styles";
import { DF } from "../../../layout/DetailFeedbackStyle";
import CloseIcon from "@mui/icons-material/Close";

import React, { useState } from "react";
import DetailedFeedbackComment from "./DetailedFeedbackComment";
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
  idea,
  numPages,
  media,
  link
}) => {
  const classes = useStyles();
  const onCloseHandler = () => {
    setModalVisibleId3("");
  };
  const [search, setSearch] = useState(1);
  const changeSearch = (e) => {
    setSearch(e.target.value);
  };
  const opti = Array.from({ length: numPages }, (v, i) => i + 1);
  //이거는 pdf의 경우
  const pageCount = Array.from({ length: media }, (v, i) => i + 1);
  //이미지의 경우

  //동영상의 경우
  return (
    <DF.ModalWrapper
      className={modalVisibleId3 == id3 ? classes.show : classes.dis}
    >
      <DF.ModalHeader>
        상세 피드백 뷰어
        <CloseIcon onClick={onCloseHandler} className={classes.close} />
      </DF.ModalHeader>

      <DF.Feedback>
        <DetailedFeedbackComment link={link} />
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
              style={{
                width: "55px",
                height: "24px",
                position: "relative",
                bottom: "7px",
              }} disabled={link ? true : false
              }
            >
              {opti &&
                opti.map(function(a, index) {
                  return (
                    <option value={a} key={index}>
                      {a}
                    </option>
                  );
                })}
              {/* pdf  */}
              {pageCount &&
                pageCount.map(function(a, index) {
                  return (
                    <option value={a} key={index}>
                      {a}
                    </option>
                  );
                })}
              {/* 사진*/}
              
            </select>
            <DF.FeedbackSend>등록</DF.FeedbackSend>
          </DF.RegTop>
          <DF.RegBottom>
            <DF.WriteInput onChange={changeSearch} required />
          </DF.RegBottom>
        </DF.ModalFeedReg>
      </DF.ModalWriteFeed>
    </DF.ModalWrapper>
  );
};

export default DetailedFeedback;
