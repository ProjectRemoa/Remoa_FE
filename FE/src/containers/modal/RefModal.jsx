<<<<<<< HEAD
import { MS } from "../../layout/ModalStyle";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import { getDate } from "../../functions/getDate";
import { Link, useNavigate } from "react-router-dom";
import RefModalComment from "./RefModalComment";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import { pdfjs, Document, Page } from "react-pdf";
import useWindowSize from "./pdfView/useWindowSize";
import ReactPlayer from "react-player/lazy";
import DetailedFeedback from "./DetailedFeedback/DetailedFeedback";
=======
import { MS } from '../../layout/ModalStyle'
import { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from "@material-ui/core/styles";

import { getDate } from '../../functions/getDate';
import { useNavigate } from 'react-router-dom';
import RefModalComment from './RefModalComment';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarIcon from '@mui/icons-material/Star';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { pdfjs, Document, Page } from 'react-pdf';
import useWindowSize from './pdfView/useWindowSize';
import DetailedFeedback from './DetailedFeedback/DetailedFeedback';
>>>>>>> reference
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
<<<<<<< HEAD
    color: "#FADA5E",
    float: "left",
    marginLeft: "25px",
    marginTop: "13.5px",
  },
});
=======
    color:"#FADA5E",
    float:"left",
    marginLeft:"25px",
    marginTop:"13.5px"
  },
})
>>>>>>> reference

export default function RefModal({
  id2,
  modalVisibleId2,
  setModalVisibleId2,
  idea,
}) {
  /*
  아직 안 정해진 것
  1. 첨부파일
  2. 상세 결과
  3. 상세 설명 (내 작업물 공유 페이지에 GUI가 존재하지 않긴 함)
  4. 
  */
  const classes = useStyles();
  const Navigate = useNavigate();
  let Lo = window.location.href;
  console.log(idea);

  const onCloseHandler2 = () => {
    setModalVisibleId2(false);
    if (Lo.includes("marketing")) {
      Navigate("/ref/marketing");
    } else if (Lo.includes("video")) {
      Navigate("/ref/video");
    } else if (Lo.includes("design")) {
      Navigate("/ref/design");
    } else if (Lo.includes("etc")) {
      Navigate("/ref/etc");
    } else {
      Navigate("/");
    }
  };

  const [like, setLike] = useState(idea.likeCount);
<<<<<<< HEAD
  const [likeBoolean, setLikeBoolean] = useState(false)
=======
  const [likeBoolean, setLikeBoolean] = useState(false);
>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15
  const handleLike = (e) => {
    if (likeBoolean === false) {
      setLike(e + 1);
    } else {
      setLike(e);
    }
<<<<<<< HEAD
    setLikeBoolean(!likeBoolean)
  }
  const [subscribe, setSubscribe] = useState(idea.scrapCount)
  const [subscribeBoolean, setSubscribeBoolean] = useState(false)
=======
    setLikeBoolean(!likeBoolean);
  };
  const [subscribe, setSubscribe] = useState(idea.scrapCount);
  const [subscribeBoolean, setSubscribeBoolean] = useState(false);
>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15
  const handleSubscribe = (e) => {
    if (subscribeBoolean === false) {
      setSubscribe(e + 1);
    } else {
      setSubscribe(e);
    }
    setSubscribeBoolean(!subscribeBoolean);
  };

  const [modalVisibleId3, setModalVisibleId3] = useState(false)
  const onModalHandler3 = id => {
     setModalVisibleId3(id)
  }
  const media = idea.thumbnail

  const windowSize = useWindowSize();
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(0.25);

  function onDocumentLoadSuccess({ numPages }) {
<<<<<<< HEAD
    setNumPages(numPages);
    setPageNumber(1);
  }
  let rate = windowSize.height / windowSize.width;
  let show = 1;
  const changePageNum = (e) => {
    show = Number(e.target.value);
  };

<<<<<<< HEAD
  return(
    <MS.ModalWrapper
      className={modalVisibleId2 == id2 ? classes.show : classes.dis}
=======
=======
    setNumPages(Number(numPages))
    setPageNumber(1);
  }
  const [show,setShow] = useState(1)
  const changePageNum = (e) => {
    setShow(e.target.value)
  }

  
>>>>>>> reference
  return (
    <MS.ModalWrapper
      className={modalVisibleId2 === id2 ? classes.show : classes.dis}
>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15
    >
      <MS.MobalBox>
        <ArrowBackIosIcon className={classes.arrow} onClick={onCloseHandler2} />
        <br />
        <MS.MobalHeader>
          <MS.HeaderDiv1>
            <MS.DetailTitle>{idea.title}</MS.DetailTitle>
            <MS.DetailTitleInfo>
<<<<<<< HEAD
              {idea.title}&nbsp;<span style={{color:"#FADA5E"}}>{idea.title}</span>&nbsp;|
              &nbsp;{getDate(idea.postingTime)}&nbsp;|&nbsp;{idea.categoryName}
=======
              {/*{idea.detail_regist}&nbsp; {/* 내 작업물 공유에 없음 */}
              <span style={{ color: "#FADA5E" }}>{idea.detail_result}</span>
              &nbsp;| &nbsp;{getDate(idea.postingTime)}&nbsp;|&nbsp;
              {idea.categoryName}
>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15
            </MS.DetailTitleInfo>
          </MS.HeaderDiv1>

          <MS.HeaderDiv2>
            <MS.HeaderUserInfo>
<<<<<<< HEAD
              <MS.ProfileSize src={idea.thumbnail} />
              <MS.HeaderUserName>{idea.postMember.nickname}</MS.HeaderUserName>
              <MS.HeaderDetail2>
                <RemoveRedEyeOutlinedIcon />{idea.likeCount}
                <FavoriteOutlinedIcon className={classes.love} />{idea.views}
                <StarIcon className={classes.star} />{idea.scrapCount}
=======
              <MS.ProfileSize src={idea.postMember.profileImage} />
              <MS.HeaderUserName>{idea.postMember.nickname}</MS.HeaderUserName>
              <MS.HeaderDetail2>
                <RemoveRedEyeOutlinedIcon />
                {idea.views}
                <FavoriteOutlinedIcon className={classes.love} />
                {idea.likeCount}
                <StarIcon className={classes.star} />
                {idea.scrapCount}
>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15
              </MS.HeaderDetail2>
            </MS.HeaderUserInfo>
<<<<<<< HEAD
            <MS.DetailFeedbackButton onClick={() => onModalHandler3(id2)}>
=======
            <MS.DetailFeedbackButton>
              코멘트 바로가기
            </MS.DetailFeedbackButton>
            <MS.DetailFeedbackButton onClick={() => onModalHandler3(id2)} >
>>>>>>> reference
              상세피드백 보기
            </MS.DetailFeedbackButton>
            <DetailedFeedback
              id3={id2}
              modalVisibleId3={modalVisibleId3}
              setModalVisibleId3={setModalVisibleId3}
              idea={idea}
            />
          </MS.HeaderDiv2>
        </MS.MobalHeader>
        <MS.Line />

        <MS.MobalContents>
<<<<<<< HEAD
          {/* /* {media && media.map((i,index)=> 
            i.one ? (i.one.split('.',-1)[i.one.split('.',-1).length-1]==="jpg" ? 
            <MS.ContentImg src={require('../../images/'+i.one)} key={index} />
            : "") : "")}
=======
<<<<<<< HEAD
          {media &&
            media.map((i, index) =>
              i.one ? (
                i.one.split(".", -1)[i.one.split(".", -1).length - 1] ===
                "jpg" ? (
                  <MS.ContentImg
                    src={require("../../images/" + i.one)}
                    key={index}
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )
            )}
>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15

          {media &&
            media.map((i, index) =>
              i.two ? (
                i.two.split(".", -1)[i.two.split(".", -1).length - 1] ===
                "jpg" ? (
                  <MS.ContentImg
                    src={require("../../images/" + i.two)}
                    key={index}
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )
            )}

          {media &&
            media.map((i, index) =>
              i.three ? (
                i.three.split(".", -1)[i.three.split(".", -1).length - 1] ===
                "jpg" ? (
                  <MS.ContentImg
                    src={require("../../images/" + i.three)}
                    key={index}
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )
            )}

<<<<<<< HEAD
          {media && media.map((i,index)=> 
            i.four ? (i.four.split('.',-1)[i.four.split('.',-1).length-1]==="jpg" ? 
            <MS.ContentImg src={require('../../images/'+i.four)} key={index} />
            : ""): "")}
          {modalVisibleId2 ? 
              <video width='100%' height='auto' controlsList="nodownload" controls>
                <source src={require("../../images/임시이미지.mp4")} type="video/mp4"/>
              </video> : "" }  */}
             <MS.PdfWrapper >
 
              <MS.PdfSet>
                페이지 이동 <MS.PdfPageInput onChange={changePageNum}/>
                <div style={{right:"70px", position:"absolute"}}>
                  페이지 배율 
                  <select name="rate" id="rate" style={{width:"80px", height:"30px",float:"right"}}>
                    <option value="50">50%</option>
                    <option value="75">75%</option>
                    <option value="100">100%</option>
                    <option value="150">150%</option>
                    <option value="200">200%</option>
                  </select>
                </div>
              </MS.PdfSet>
              <MS.PdfMannage onContextMenu={e => e.preventDefault()} style={{maxHeight:windowSize.height}}>
                  <Document file={require('../../images/test.pdf')} onLoadSuccess={onDocumentLoadSuccess}>
                  {Array.from(new Array(numPages), (_, index) => (<div key={index+1}>
    <Page
      width={windowSize.width}
      height={windowSize.height}
      scale={pageScale} pageNumber={index+1}
      renderAnnotationLayer={false} 
    />
    {(index+1)==pageNumber? "": index+1}
    </div>
  ))}
                  </Document>
              </MS.PdfMannage>
            
=======
          {media &&
            media.map((i, index) =>
              i.four ? (
                i.four.split(".", -1)[i.four.split(".", -1).length - 1] ===
                "jpg" ? (
                  <MS.ContentImg
                    src={require("../../images/" + i.four)}
                    key={index}
                  />
                ) : (
                  ""
                )
              ) : (
                ""
              )
            )}
          {modalVisibleId2 ? (
            <video
              width="100%"
              height="auto"
              controlsList="nodownload"
              controls
            >
              <source
                src={require("../../images/임시이미지.mp4")}
                type="video/mp4"
              />
            </video>
          ) : (
            ""
          )}
          <MS.PdfWrapper>
            <MS.PdfSet>
              페이지 이동 <MS.PdfPageInput onChange={changePageNum} />
              <div style={{ right: "70px", position: "absolute" }}>
                페이지 배율
                <select
                  name="rate"
                  id="rate"
                  style={{ width: "80px", height: "30px", float: "right" }}
                >
                  <option value="50">50%</option>
                  <option value="75">75%</option>
                  <option value="100">100%</option>
                  <option value="150">150%</option>
                  <option value="200">200%</option>
                </select>
              </div>
            </MS.PdfSet>
            <MS.PdfMannage
              onContextMenu={(e) => e.preventDefault()}
              style={{ maxHeight: windowSize.height }}
            >
              <Document
                file={require("../../images/test.pdf")}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                {Array.from(new Array(numPages), (_, index) => (
                  <div key={index + 1}>
                    <Page
                      width={windowSize.width}
                      height={windowSize.height}
                      scale={pageScale}
                      pageNumber={index + 1}
                      renderAnnotationLayer={false}
                    />
                    {index + 1 == pageNumber ? "" : index + 1}
                  </div>
                ))}
              </Document>
            </MS.PdfMannage>

>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15
            <div>
              Page {pageNumber} of {numPages}
              <p>페이지 이동 버튼</p>
              <button
                onClick={() => {
                  setPageNumber(show);
                }}
              >
                {" "}
                지정이동
              </button>
              <p>페이지 스케일</p>
              <button
                onClick={() => {
                  setPageScale(pageScale === 2 ? 2 : pageScale + 0.5);
                }}
              >
                {" "}
                +
              </button>
              <button
                onClick={() => {
                  setPageScale(pageScale - 0.5 < 0.5 ? 0.5 : pageScale - 0.5);
                }}
              >
                {" "}
                -
              </button>
            </div>
          </MS.PdfWrapper>
<<<<<<< HEAD
=======
=======
          {/* 사진을 링크로 받으면 이렇게인가? */}
          {media && media.map(function(a){
            return (
              <MS.ContentImg src={a} key={a} />
            )
          })}

          {/* 영상은 유튜브 링크로 대체된다는데 입력되는 방식은 어떤가? */}

          {/* 
          {modalVisibleId2 ? 
            <video width='100%' height='auto' controlsList="nodownload" controls>
              <source src={require("../../images/임시이미지.mp4")} type="video/mp4"/>
            </video>
          : "" } */}

            <MS.PdfWrapper >
              <MS.PdfSet>
                페이지 입력
                {numPages>1 ? <>
                  <MS.PdfPageInput onChange={changePageNum} placeholder={`1P부터 ${numPages}P까지`} defaultValue={1} />
                  <MS.PdfPageButtonWrapper>
                    <MS.PdfPageButton href={`#${show}`}>이동하기</MS.PdfPageButton>
                  </MS.PdfPageButtonWrapper>
                </>
                : ""}
                <MS.PdfSizeWrapper>            
                  <MS.PdfSizeButton onClick={() => {setPageScale(pageScale === 1.5 ? 1.5 : pageScale + 0.25)}}>
                    <MS.SizeIcon>+</MS.SizeIcon>
                  </MS.PdfSizeButton>
                  <MS.PdfSizeButton onClick={() => {setPageScale((pageScale - 0.25) < 0.25 ? 0.25 : pageScale - 0.25)}}>
                    <MS.SizeIcon>-</MS.SizeIcon>
                  </MS.PdfSizeButton>
                </MS.PdfSizeWrapper>
                <MS.SizeShow>
                    {pageScale*100+"%"}
                </MS.SizeShow>
              </MS.PdfSet>
              <MS.PdfMannage onContextMenu={e => e.preventDefault()} style={{maxHeight:windowSize.height/1.5,
              justifyContent:pageScale<1?"center":"flex-start"}}>

                <Document file={require('../../images/test.pdf')} onLoadSuccess={onDocumentLoadSuccess}>
                  {Array.from(new Array(numPages), (_, index) => (
                    <div key={index+1} id={index+1} >
                      <Page width={windowSize.width} height={windowSize.height}  scale={pageScale} 
                      pageNumber={index+1} renderAnnotationLayer={false} />
                    </div>
                  ))}
                </Document>
              </MS.PdfMannage>
              <div style={{height:"50px",width:"auto"}} />
          </MS.PdfWrapper>

>>>>>>> reference
>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15
        </MS.MobalContents>

        <MS.TraceBoxWrapper>
          <MS.TraceBox onClick={() => handleLike(idea.likeCount)}>
<<<<<<< HEAD
            <FavoriteOutlinedIcon className={likeBoolean?classes.afterClick1:classes.beforeClick} />
            {like}
          </MS.TraceBox>
          <div style={{width:"26px"}}></div>
          <MS.TraceBox onClick={() => handleSubscribe(idea.scrapCount)}>
            <StarIcon className={subscribeBoolean?classes.afterClick2:classes.beforeClick} />
=======
            <FavoriteOutlinedIcon
              className={
                likeBoolean ? classes.afterClick1 : classes.beforeClick
              }
            />
            {like}
          </MS.TraceBox>
          <div style={{ width: "26px" }}></div>
          <MS.TraceBox onClick={() => handleSubscribe(idea.scrapCount)}>
            <StarIcon
              className={
                subscribeBoolean ? classes.afterClick2 : classes.beforeClick
              }
            />
>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15
            {subscribe}
          </MS.TraceBox>
        </MS.TraceBoxWrapper>

        <RefModalComment />
      </MS.MobalBox>
<<<<<<< HEAD
            </MS.ModalWrapper>
  )
    
  }

=======
    </MS.ModalWrapper>
  );
}
>>>>>>> aa5a2e8f5ecc5fd4c17e056341efe568aa6b9d15
