import { makeStyles } from "@material-ui/core/styles";
import { DF } from "../../../layout/DetailFeedbackStyle";
import CloseIcon from '@mui/icons-material/Close';
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
    float:"right",
    cursor:"pointer",
    display:"block",
    fontWeight:"700",
  }
})

const DetailedFeedback = ({id3, modalVisibleId3, setModalVisibleId3, idea}) => {
  const classes = useStyles();
  const onCloseHandler = () => {
  	setModalVisibleId3("")
  }
  return (
    <DF.ModalWrapper className={modalVisibleId3 == id3 ? classes.show : classes.dis}>
      <DF.ModalHeader>
        상세 피드백 뷰어
        <CloseIcon onClick={onCloseHandler} className={classes.close} />
      </DF.ModalHeader>

      <DF.ModalWriteFeed>
        <DF.ModalFeedReg>
          <DF.RegTop>
            <DF.RegExplain>
              <span style={{color:"#FADA5E",fontWeight:"800"}}>Feedback</span>&nbsp; 페이지 번호 &nbsp;
            </DF.RegExplain>
            <input style={{width:"55px"}} />
            <DF.FeedbackSend>등록</DF.FeedbackSend>
          </DF.RegTop>
          <DF.RegBottom>
            <DF.WriteInput />
          </DF.RegBottom>
        </DF.ModalFeedReg>
      </DF.ModalWriteFeed>
    </DF.ModalWrapper>
  )
}

export default DetailedFeedback