import { MS } from '../../layout/ModalStyle'
import '../../../src/App.css'
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
const useStyles = makeStyles({
  close:{
      color:"#FADA5E",
      position:"absolute",
      right:"5px",
      cursor:"pointer",
      top:"5px"
  },
})

export default function RefModalFollow({id, location, modalVisibleId, setModalVisibleId, idea}) {
  const classes = useStyles();
  const onCloseHandler = () => {
  	setModalVisibleId("")
  }
  const [stateFollow, setStatestateFollow] = useState(false)
  const onClickFollow = () => {
    setStatestateFollow(!stateFollow)
  }
  return (
    <MS.SmallModalWrapper className={modalVisibleId == id ? "d_block" : "d_none"}
    location={location}>
      <CloseIcon onClick={onCloseHandler} className={classes.close}>닫기</CloseIcon>
      <MS.ModalProfile>
        <MS.ModalProfilePhoto src = {idea.postMember.profileImage} />
        <MS.ModalProfileName>{idea.postMember.nickname}</MS.ModalProfileName>
      </MS.ModalProfile>

      <MS.FollowingFollower>
        <MS.ModalFollowing>Following</MS.ModalFollowing>
        &nbsp;13
      </MS.FollowingFollower>
      <MS.FollowingFollower>
        <MS.ModalFollower>Follower</MS.ModalFollower>
          50
      </MS.FollowingFollower>

      <MS.SmallModalButtonWrapper>
        <MS.SmallModalButton onClick={onClickFollow}>
          {stateFollow ? "팔로잉 중" : "팔로잉하기"}
        </MS.SmallModalButton>
        <MS.SmallModalButton style={{marginLeft:"7px"}}>
          더 많은 작품 보기
        </MS.SmallModalButton>
      </MS.SmallModalButtonWrapper>
    </MS.SmallModalWrapper>
  )
}