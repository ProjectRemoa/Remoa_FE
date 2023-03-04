import { MS } from '../../layout/ModalStyle'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from "@material-ui/core/styles";
import { getDate } from '../../functions/getDate';
import { useNavigate } from 'react-router-dom';
import RefModalComment from './RefModalComment';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
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
  }
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

  const [numPages, setNumPages] = useState(null); // 총 페이지수
  const [pageNumber, setPageNumber] = useState(1); // 현재 페이지
  const [pageScale, setPageScale] = useState(1); // 페이지 스케일

  function onDocumentLoadSuccess({numPages}) {
    console.log(`numPages ${numPages}`);
    setNumPages(numPages);
  }

  const media = idea.attached_file
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
              상세피드백 보기
            </MS.DetailFeedbackButton>
          </MS.HeaderDiv2>
        </MS.MobalHeader>
        <MS.Line />

        <MS.MobalContents>
          {media && media.map((i)=> 
            i.one ? (i.one.split('.',-1)[i.one.split('.',-1).length-1]==="jpg" ? 
            <MS.ContentImg src={require('../../images/'+i.one)} />
            : "") : "")}

          {media && media.map((i)=> 
            i.two ? (i.two.split('.',-1)[i.two.split('.',-1).length-1]==="jpg" ? 
            <MS.ContentImg src={require('../../images/'+i.two)} />
            : ""): "")}

          {media && media.map((i)=> 
            i.three ? (i.three.split('.',-1)[i.three.split('.',-1).length-1]==="jpg" ? 
            <MS.ContentImg src={require('../../images/'+i.three)} />
            : ""): "")}

          {media && media.map((i)=> 
            i.four ? (i.four.split('.',-1)[i.four.split('.',-1).length-1]==="jpg" ? 
            <MS.ContentImg src={require('../../images/'+i.four)} />
            : ""): "")}

            <div style={{fontWeight:"700"}}>Remoa pdf viewer</div>
            <MS.PdfMannage style={{}}>
              <Document file={require('../../images/test.pdf')} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page  scale={pageScale} pageNumber={pageNumber}/>
              </Document>
            </MS.PdfMannage>
            <div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>

                <p>페이지 이동 버튼</p>
                <button onClick={() => {
                    setPageNumber(numPages === pageNumber ? pageNumber : pageNumber + 1)
                }}> +
                </button>
                <button onClick={() => {
                    setPageNumber(pageNumber === 1 ? pageNumber : pageNumber - 1)
                }}> -
                </button>

            </div>
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