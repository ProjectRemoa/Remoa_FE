import { MS } from "../../layout/ModalStyle";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { getDate } from "../../functions/getDate";
import { useNavigate } from "react-router-dom";
import RefModalComment from "./RefModalComment";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import StarIcon from "@mui/icons-material/Star";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import useWindowSize from "./pdfView/useWindowSize";
import DetailedFeedback from "./DetailedFeedback/DetailedFeedback";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles({
  arrow: {
    fontSize: "25px",
    color: "#FADA5E",
    float: "left",
    cursor: "pointer",
    display: "block",
    marginLeft: "20px",
    fontWeight: "700",
  },
  dis: {
    display: "none",
  },
  show: {
    display: "flex",
  },
  love: {
    color: "red",
  },
  star: {
    color: "#FADA5E",
  },
  beforeClick: {
    color: "#B0B0B0",
    float: "left",
    marginLeft: "25px",
    marginTop: "13.5px",
  },
  afterClick1: {
    color: "red",
    float: "left",
    marginLeft: "25px",
    marginTop: "13.5px",
  },
  afterClick2: {
    color: "#FADA5E",
    float: "left",
    marginLeft: "25px",
    marginTop: "13.5px",
  },
});

export default function RefModal({
  id2,
  idea,
  modalVisibleId2,
  setModalVisibleId2,
}) {
  const classes = useStyles();
  const Navigate = useNavigate();

  const [top, setTop] = useState({
    title: "",
    contestName: "",
    contestAwardType: "",
    category: "",
    postingTime: "",
    views: 0,
    likeCount: 0,
    scrapCount: 0,
  });
  const [middle, setMiddle] = useState({
    fileNames: [],
    fileType: "",
    likeCount: 0,
    scrapCount: 0,
  });
  const [bottom, setBottom] = useState({
    comments: [],
  });

  useEffect(() => {
    const endpoint = `/BE/reference/${id2}`;
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res);
        // top : 제목, 콘테스트 이름, 작성일자, 카테고리, 조회수, 좋아요수, 스크랩 수
        setTop({
          title: res.data.data.title,
          contestName: res.data.data.contestName,
          contestAwardType: res.data.data.contestAwardType,
          category: res.data.data.category,
          postingTime: res.data.data.postingTime,
          views: res.data.data.views, // useEffect []안하면 계속 count됨
          likeCount: res.data.data.likeCount,
          scrapCount: res.data.data.scrapCount,
        });

        // middle : pdf/사진, 좋아요, 스크랩, filetype
        let fileLength = res.data.data.fileNames[1].length;
        let fileDot = res.data.data.fileNames[1].lastIndexOf(".");
        setMiddle({
          fileNames: res.data.data.fileNames.filter(
            (item, index) => index !== 0
          ),
          likeCount: res.data.data.likeCount,
          scrapCount: res.data.data.scrapCount,
          fileType: res.data.data.fileNames[1]
            .substring(fileDot + 1, fileLength)
            .toLocaleLowerCase(),
        });

        // bottom : 댓글
        setBottom({
          comments: res.data.data.comments,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let Lo = window.location.href;

  const onCloseHandler2 = () => {
    if (Lo.includes("marketing")) {
      Navigate("/ref/marketing");
    } else if (Lo.includes("video")) {
      Navigate("/ref/video");
    } else if (Lo.includes("design")) {
      Navigate("/ref/design");
    } else if (Lo.includes("etc")) {
      Navigate("/ref/etc");
    } else if (Lo.includes("/manage/list")) {
      Navigate("/manage/list");
    } else {
      Navigate("/");
    }
    setModalVisibleId2("");
  };

  const [like, setLike] = useState(idea.likeCount);
  const [likeBoolean, setLikeBoolean] = useState(false);
  const handleLike = (e) => {
    /*if (likeBoolean === false) {*/
    //setLike(e + 1);
    axios
      .post(`/BE/reference/${id2}/like`)
      .then((res) => {
        console.log(res);
        setLike(res.data.data.likeCount);
      })
      .catch((err) => {
        console.log(err);
      });

    /* } else {
      setLike(e);
    }*/
    setLikeBoolean(!likeBoolean);
  };
  const [scrap, setScrap] = useState(idea.scrapCount);
  const [scrapBoolean, setscrapBoolean] = useState(false);
  const handleScrap = (e) => {
    /*if (scrapBoolean === false) {*/
    //setSubscribe(e + 1);
    axios
      .post(`/BE/reference/${id2}/scrap`)
      .then((res) => {
        console.log(res);
        setScrap(res.data.data.scrapCount);
      })
      .catch((err) => {
        console.log(err);
      });
    //} else {
    //  setScrap(e);
    //}
    setscrapBoolean(!scrapBoolean);
  };

  const [modalVisibleId3, setModalVisibleId3] = useState(false);
  const onModalHandler3 = (id) => {
    setModalVisibleId3(id);
  };
  const media = idea.thumbnail;

  const windowSize = useWindowSize();
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(0.5); // 페이지 스케일

  function onDocumentLoadSuccess({ numPages }) {
    console.log("pdf 로드 성공");
    setNumPages(Number(numPages));
    setPageNumber(1);
  }
  const [show, setShow] = useState(1);
  const changePageNum = (e) => {
    setShow(e.target.value);
  };

  return (
    <MS.ModalWrapper /*className={modalVisibleId2 === id2 ? "d_block" : "d_none"}*/
    >
      <MS.MobalBox>
        <ArrowBackIosIcon className={classes.arrow} onClick={onCloseHandler2} />
        <br />
        <MS.MobalHeader>
          <MS.HeaderDiv1>
            <MS.DetailTitle>{top.title}</MS.DetailTitle>
            <MS.DetailTitleInfo>
              {top.contestName}&nbsp;
              <span style={{ color: "#FADA5E" }}>{top.contestAwardType}</span>
              &nbsp;| &nbsp;{getDate(top.postingTime)}&nbsp;|&nbsp;
              {top.category}
            </MS.DetailTitleInfo>
          </MS.HeaderDiv1>

          <MS.HeaderDiv2>
            <MS.HeaderUserInfo>
              <MS.ProfileSize src={idea.postMember.profileImage} />
              <MS.HeaderUserName>{idea.postMember.nickname}</MS.HeaderUserName>
              <MS.HeaderDetail2>
                <RemoveRedEyeOutlinedIcon />
                {top.views}
                <FavoriteOutlinedIcon className={classes.love} />
                {top.likeCount}
                <StarIcon className={classes.star} />
                {top.scrapCount}
              </MS.HeaderDetail2>
            </MS.HeaderUserInfo>
            <MS.DetailFeedbackButton>코멘트 바로가기</MS.DetailFeedbackButton>
            <MS.DetailFeedbackButton onClick={() => onModalHandler3(id2)}>
              상세피드백 보기
            </MS.DetailFeedbackButton>
            <DetailedFeedback
              id3={id2}
              modalVisibleId3={modalVisibleId3}
              setModalVisibleId3={setModalVisibleId3}
              idea={idea}
              numPages={numPages}
              media={media}
            />
          </MS.HeaderDiv2>
        </MS.MobalHeader>
        <MS.Line />

        <MS.MobalContents>
          {middle.fileType === "jpg" ||
          middle.fileType === "jpeg" ||
          middle.fileType === "png" ? (
            middle.fileNames.map((srcLink, index) => {
              return <MS.ContentImg src={srcLink} key={srcLink} id={index} />;
            })
          ) : (
            <MS.PdfWrapper>
              <MS.PdfSet>
                페이지 입력
                {numPages > 1 && (
                  <>
                    <MS.PdfPageInput
                      onChange={changePageNum}
                      placeholder={`1P부터 ${numPages}P까지`}
                      defaultValue={1}
                    />
                    <MS.PdfPageButtonWrapper>
                      <MS.PdfPageButton href={`#${show}`}>
                        이동하기
                      </MS.PdfPageButton>
                    </MS.PdfPageButtonWrapper>
                  </>
                )}
                <MS.PdfSizeWrapper>
                  <MS.PdfSizeButton
                    onClick={() => {
                      setPageScale(pageScale === 1.5 ? 1.5 : pageScale + 0.25);
                    }}
                  >
                    <MS.SizeIcon>+</MS.SizeIcon>
                  </MS.PdfSizeButton>
                  <MS.PdfSizeButton
                    onClick={() => {
                      setPageScale(
                        pageScale - 0.25 < 0.25 ? 0.25 : pageScale - 0.25
                      );
                    }}
                  >
                    <MS.SizeIcon>-</MS.SizeIcon>
                  </MS.PdfSizeButton>
                </MS.PdfSizeWrapper>
                <MS.SizeShow>{pageScale * 100 + "%"}</MS.SizeShow>
              </MS.PdfSet>
              <MS.PdfMannage
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  maxHeight: windowSize.height / 1.5,
                  justifyContent: pageScale < 1 ? "center" : "flex-start",
                }}
              >
                <Document
                  file={middle.fileNames[0]}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  {Array.from(new Array(numPages), (_, index) => (
                    <div key={index + 1} id={index + 1}>
                      <Page
                        width={windowSize.width}
                        height={windowSize.height}
                        scale={pageScale}
                        pageNumber={index + 1}
                        renderAnnotationLayer={false}
                      />
                    </div>
                  ))}
                </Document>
              </MS.PdfMannage>
              <div style={{ height: "50px", width: "auto" }} />
            </MS.PdfWrapper>
          )}

          {/* 동영상 링크가 있다면?
          {modalVisibleId2 ? 
            <video width='100%' height='auto' controlsList="nodownload" controls>
              <source src={어쩌구저쩌구} type="video/mp4"/>
            </video>
          : "" } */}
        </MS.MobalContents>

        <MS.TraceBoxWrapper>
          <MS.TraceBox onClick={() => handleLike(top.likeCount)}>
            <FavoriteOutlinedIcon
              className={
                likeBoolean ? classes.afterClick1 : classes.beforeClick
              }
            />
            {like}
          </MS.TraceBox>
          <div style={{ width: "26px" }}></div>
          <MS.TraceBox onClick={() => handleScrap(top.scrapCount)}>
            <StarIcon
              className={
                scrapBoolean ? classes.afterClick2 : classes.beforeClick
              }
            />
            {scrap}
          </MS.TraceBox>
        </MS.TraceBoxWrapper>

        <RefModalComment postId={id2} comments={bottom.comments} />
      </MS.MobalBox>
    </MS.ModalWrapper>
  );
}
