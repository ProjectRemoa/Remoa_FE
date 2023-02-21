import { MS } from '../../layout/ModalStyle'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from "@material-ui/core/styles";
import { getDate } from '../../functions/getDate';

const modal = {
  detail_title:"지각 방지 서비스 <단디>를 소개합니다",
  detail_regist:"단국대학교 SW중심대학 경소톤",
  detail_result:"출품작",
  detail_category:"기획/아이디어",
  detail_date:"2023-01-02",
  
}
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
  const onCloseHandler2 = () => {
  	setModalVisibleId2(false)
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
    </MS.MobalBox>
  </MS.ModalWrapper>
  )
}