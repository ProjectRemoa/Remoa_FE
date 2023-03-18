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
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const useStyles = makeStyles({
  arrow:{
    fontSize:'25px',
    color:"#FADA5E",
    float:"left",
    cursor:"pointer",
    display:"block",
    marginLeft:"20px",
    fontWeight:"700",
  },
  dis:{
    display:"none"
  },
  show:{
    display:"flex"
  },
  love:{
    color:"red"
  },
  star: {
    color:"#FADA5E",
  },
  beforeClick: {
    color:"#B0B0B0",
    float:"left",
    marginLeft:"25px",
    marginTop:"13.5px"
  },
  afterClick1: {
    color:"red",
    float:"left",
    marginLeft:"25px",
    marginTop:"13.5px"
  },
  afterClick2: {
    color:"#FADA5E",
    float:"left",
    marginLeft:"25px",
    marginTop:"13.5px"
  },
})

export default function RefModal({id2, modalVisibleId2, setModalVisibleId2, idea}) {
  const classes = useStyles();
  const Navigate = useNavigate()
  let Lo = window.location.href

  const onCloseHandler2 = () => {
  	setModalVisibleId2(false)
    if (Lo.includes("marketing")) {
      Navigate("/ref/marketing")
    } else if (Lo.includes("video")) {
      Navigate("/ref/video")
    } else if (Lo.includes("design")) {
      Navigate("/ref/design")
    } else if (Lo.includes("etc")) {
      Navigate("/ref/etc")
    } else {
      Navigate("/")
    }
  }

  const [like, setLike] = useState(idea.thumbs);
  const [likeBoolean, setLikeBoolean] = useState(false)
  const handleLike = (e) => {
    if (likeBoolean === false) {
      setLike(e+1)
    } else {
      setLike(e)
    }
    setLikeBoolean(!likeBoolean)
  }
  const [subscribe, setSubscribe] = useState(idea.scrap)
  const [subscribeBoolean, setSubscribeBoolean] = useState(false)
  const handleSubscribe = (e) => {
    if (subscribeBoolean === false) {
      setSubscribe(e+1)
    } else {
      setSubscribe(e)
    }
    setSubscribeBoolean(!subscribeBoolean)
  }

  const [modalVisibleId3, setModalVisibleId3] = useState(false)
  const onModalHandler3 = id => {
     setModalVisibleId3(id)
  }
  const media = idea.attached_file

  const windowSize = useWindowSize();
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(0.25);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(Number(numPages))
    setPageNumber(1);
  }
  const [show,setShow] = useState(1)
  const changePageNum = (e) => {
    setShow(e.target.value)
  }

  
  return (
    <MS.ModalWrapper className={modalVisibleId2 == id2 ? classes.show : classes.dis}>
    <MS.MobalBox>
      <ArrowBackIosIcon className={classes.arrow} onClick={onCloseHandler2} />
      <br /> 
        <MS.MobalHeader>
          <MS.HeaderDiv1>
            <MS.DetailTitle>{idea.contest_name}</MS.DetailTitle>
            <MS.DetailTitleInfo>
              {idea.detail_regist}&nbsp;<span style={{color:"#FADA5E"}}>{idea.detail_result}</span>&nbsp;|
              &nbsp;{getDate(idea.resgist_date)}&nbsp;|&nbsp;{idea.detail_category}
            </MS.DetailTitleInfo>
          </MS.HeaderDiv1>

          <MS.HeaderDiv2>
            <MS.HeaderUserInfo>
              <MS.ProfileSize src={require('../../images/' + idea.registrant_image + '.jpg')} />
              <MS.HeaderUserName>{idea.registrant}</MS.HeaderUserName>
              <MS.HeaderDetail2>
                <RemoveRedEyeOutlinedIcon />{idea.hits}
                <FavoriteOutlinedIcon className={classes.love} />{idea.thumbs}
                <StarIcon className={classes.star} />{idea.scrap}
              </MS.HeaderDetail2>
            </MS.HeaderUserInfo>
            <MS.DetailFeedbackButton>
              코멘트 바로가기
            </MS.DetailFeedbackButton>
            <MS.DetailFeedbackButton onClick={() => onModalHandler3(id2)} >
              상세피드백 보기
            </MS.DetailFeedbackButton>
            <DetailedFeedback id3={id2} modalVisibleId3={modalVisibleId3} setModalVisibleId3={setModalVisibleId3} idea={idea} />
          </MS.HeaderDiv2>
        </MS.MobalHeader>
        <MS.Line />

        <MS.MobalContents>
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

        </MS.MobalContents>

  
        <MS.TraceBoxWrapper>
          <MS.TraceBox onClick={() => handleLike(idea.thumbs)}>
            <FavoriteOutlinedIcon className={likeBoolean?classes.afterClick1:classes.beforeClick} />
            {like}
          </MS.TraceBox>
          <div style={{width:"26px"}}></div>
          <MS.TraceBox onClick={() => handleSubscribe(idea.scrap)}>
            <StarIcon className={subscribeBoolean?classes.afterClick2:classes.beforeClick} />
            {subscribe}
          </MS.TraceBox>
        </MS.TraceBoxWrapper>

        <RefModalComment />
    </MS.MobalBox>
    
  </MS.ModalWrapper>
  )
}