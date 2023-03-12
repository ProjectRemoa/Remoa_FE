import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  dis:{
    display:"none"
  },
  show:{
    display:"flex"
  }
})

const DetailedFeedback = ({id3, modalVisibleId3, setModalVisibleId3, idea}) => {
  const classes = useStyles();
  const onCloseHandler = () => {
  	setModalVisibleId3("")
  }
  return (
    <div className={modalVisibleId3 == id3 ? classes.show : classes.dis} onClick={onCloseHandler}>
      sdfsd
    </div>
  )
}

export default DetailedFeedback