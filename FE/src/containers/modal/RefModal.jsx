import { MS } from '../../layout/ModalStyle'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from "@material-ui/core/styles";
import { getDate } from '../../functions/getDate';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import RefModalComment from './RefModalComment';

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
  }
})

export default function RefModal({id2, modalVisibleId2, setModalVisibleId2, idea}) {
  const classes = useStyles();
  const Navigate = useNavigate()
  const location = useLocation()
  const params = useParams()
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
들어갈 내용
          </MS.HeaderDiv2>
        </MS.MobalHeader>
        <MS.Line />
        <p>{id2}</p>
      
        <RefModalComment />
    </MS.MobalBox>
    
  </MS.ModalWrapper>
  )
}