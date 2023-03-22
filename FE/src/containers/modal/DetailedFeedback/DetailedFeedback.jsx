import { makeStyles } from "@material-ui/core/styles";
import { DF } from "../../../layout/DetailFeedbackStyle";
import CloseIcon from '@mui/icons-material/Close';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from "react";

const useStyles = makeStyles({
  dis:{
    display:"none"
  },
  show:{
    display:"flex"
  },
  close:{
    fontSize:'25px',
    color:"white",
    cursor:"pointer",
    display:"block",
    fontWeight:"700",
    position:"relative",
    left:"165px",
  }
})

const DetailedFeedback = ({id3, modalVisibleId3, setModalVisibleId3, idea}) => {
  const classes = useStyles();
  const onCloseHandler = () => {
  	setModalVisibleId3("")
  }
  const [search,setSearch] = useState(1)
  const changeSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <DF.ModalWrapper className={modalVisibleId3 == id3 ? classes.show : classes.dis}>
      <DF.ModalHeader>
        상세 피드백 뷰어
        <CloseIcon onClick={onCloseHandler} className={classes.close} />
      </DF.ModalHeader>

      <DF.Feedback>
        <DF.EachFeedWrapper>
          <DF.FeedWrapperHeader>
            <DF.ProfileSize src={'https://about.canva.com/wp-content/uploads/sites/8/2019/03/red.png'} />
            <DF.ProfileName>
              기획의 달인
            </DF.ProfileName>
            <DF.ButtonWrapper>
              <DF.HeaderButton>
                <ThumbUpIcon />
                <DF.ThumbCount>22</DF.ThumbCount>
              </DF.HeaderButton>
              <DF.HeaderButton style={{top:"-5.5px",position:"relative",marginLeft:"3px"}}>
                답글
              </DF.HeaderButton>
            </DF.ButtonWrapper>          
          </DF.FeedWrapperHeader>
          <DF.FeedWrapperContent>
            <a href="#3">dfdsf</a>
          </DF.FeedWrapperContent>
        </DF.EachFeedWrapper>

      </DF.Feedback>

      <DF.ModalWriteFeed>
        <DF.ModalFeedReg>
          <DF.RegTop>
            <DF.RegExplain>
              <span style={{color:"#FADA5E",fontWeight:"800"}}>Feedback</span>&nbsp; 페이지 번호 &nbsp;
            </DF.RegExplain>
            <input style={{width:"55px",height:"24px"}} required />
            <DF.FeedbackSend>등록</DF.FeedbackSend>
          </DF.RegTop>
          <DF.RegBottom>
            <DF.WriteInput onChange={changeSearch} required />
          </DF.RegBottom>
        </DF.ModalFeedReg>
      </DF.ModalWriteFeed>
    </DF.ModalWrapper>
  )
}

export default DetailedFeedback