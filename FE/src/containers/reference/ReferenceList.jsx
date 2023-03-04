import {React, useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import { getIdeaContests, getUserInfo } from '../../temporary/idea_data';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Style } from '../../layout/ReferenceListStyle'
import RefModal from '../modal/RefModal';
import { Link } from 'react-router-dom';
import RefModalFollow from '../modal/RefModalFollow';
import StarIcon from '@mui/icons-material/Star';

const useStyles = makeStyles({
  home:{
      fontSize:'35px',
  },
  home2:{
    fontSize:'35px',
    color:"red"
  },
  arrow:{
    fontSize:'25px',
    color:"#FADA5E",
    float:"left",
    cursor:"pointer",
    display:"block",
    marginLeft:"20px",
    fontWeight:"700",
  },
  star: {
    color:"#FADA5E",

  }
})

const RefList = (props) => {
  const classes = useStyles();
  let ideas = getIdeaContests();
  let [data, setData] = useState(ideas);
  
  let users = getUserInfo()
  let [user, setUser] = useState(users)

  data=data.filter((d) =>
    d.detail_category == props.kind
  )

  const onClickDate = () => {
    data.sort((a,b) => {
      if(a.resgist_date < b.resgist_date) return 1;
      else if (a.resgist_date > b.resgist_date) return -1;
      else {
        if (a.contest_name < b.contest_name) return -1;
        else if (a.contest_name > b.contest_name) return 1;
        else return 0;
      }
    })
    setData(data);
    // let i = 0
    // let n = []

    // while (i < data.length) {
    //   let j = 0
    //   while (j < user.length) {
    //     if (data[i].id==user[j].id) {
    //       n.push(user[j])
    //     }
    //     j++
    //   }
    //   i++  
    // }
    // console.log(user)
    document.getElementById("b1").style.backgroundColor="#FADA5E"
    document.getElementById("b2").style.backgroundColor="white"
    document.getElementById("b3").style.backgroundColor="white"
    document.getElementById("b4").style.backgroundColor="white"
  }

  
  const onClickHits = () => {
    data.sort((a,b) => {
      if(a.hits < b.hits) return 1;
      else if (a.hits > b.hits) return -1;
      else {
        if (a.contest_name < b.contest_name) return -1;
        else if (a.contest_name > b.contest_name) return 1;
        else return 0;
      }
      
    })
    setData(data);

    document.getElementById("b1").style.backgroundColor="white"
    document.getElementById("b2").style.backgroundColor="#FADA5E"
    document.getElementById("b3").style.backgroundColor="white"
    document.getElementById("b4").style.backgroundColor="white"
  }
  
  const onClickThumbs = () => {
    data.sort((a,b) => {
      if(a.thumbs < b.thumbs) return 1;
      else if (a.thumbs > b.thumbs) return -1;
      else {
        if (a.contest_name < b.contest_name) return -1;
        else if (a.contest_name > b.contest_name) return 1;
        else return 0;
      }
    })
    setData(data);

    document.getElementById("b1").style.backgroundColor="white"
    document.getElementById("b2").style.backgroundColor="white"
    document.getElementById("b3").style.backgroundColor="#FADA5E"
    document.getElementById("b4").style.backgroundColor="white"
  }
  
  const onClickScrap = () => {
    data.sort((a,b) => {
      if(a.scrap < b.scrap) return 1;
      else if (a.scrap > b.scrap) return -1;
      else {
        if (a.contest_name < b.contest_name) return -1;
        else if (a.contest_name > b.contest_name) return 1;
        else return 0;
      }
    })
    setData(data);

    document.getElementById("b1").style.backgroundColor="white"
    document.getElementById("b2").style.backgroundColor="white"
    document.getElementById("b3").style.backgroundColor="white"
    document.getElementById("b4").style.backgroundColor="#FADA5E"
  }

  useEffect(() => {
    onClickDate()
  },[])

  const [modalVisibleId, setModalVisibleId] = useState("")
  const onModalHandler = id => {
    setModalVisibleId(id)
  }
  const [modalVisibleId2, setModalVisibleId2] = useState(false)
  const onModalHandler2 = id => {
    setModalVisibleId2(id)
  }

  function modalLocation(i){
    if (window.innerWidth<=767) {
      if (i%2==0) {
        return 2
      }
    }
    else if (window.innerWidth<=1023) {
      if (i%3==0) {
        return 3
      }
    }
    else {
      if (i%4==0) {
        return 4
      }
    }
  }
  let Lo = window.location.href

  return(
  <Style.ContestList>
    <Style.Line />
    <Style.SortContainer>

      <Style.Sort onClick={onClickDate} id="b1">최신순</Style.Sort>
      <Style.Sort onClick={onClickHits} id="b2">조회수순</Style.Sort>
      <Style.Sort onClick={onClickThumbs} id="b3">좋아요순</Style.Sort>
      <Style.Sort onClick={onClickScrap} id="b4">스크랩순</Style.Sort>
    </Style.SortContainer>

    <Style.Line />

    {data.map((idea, index) => (
    <Style.ContestItem key={idea.id}>
      <Link to={ Lo.includes("marketing") ? `/ref/marketing/${idea.id}` :
      Lo.includes("video") ? `/ref/video/${idea.id}` :
      Lo.includes("design") ? `/ref/design/${idea.id}` :
      Lo.includes("etc") ? `/ref/etc/${idea.id}` :`/${idea.id}`}>
      <Style.ContestImgCrop onClick={() => onModalHandler2(idea.id)}>
        <Style.ContestImg src = {require('../../images/' + idea.contest_image + '.jpg')} alt = '1' />
      </Style.ContestImgCrop>
      </Link>
      <RefModal id2={idea.id} modalVisibleId2={modalVisibleId2} setModalVisibleId2={setModalVisibleId2} idea={idea} />

      <Style.ProfileInfo>

        <Style.ProfileSize src = {require('../../images/' + idea.registrant_image + '.jpg')} alt="2"
        onMouseEnter={() => {onModalHandler(idea.id); modalLocation(index+1)}}
        onClick={() => {onModalHandler(idea.id); modalLocation(index+1)}}/>

        <RefModalFollow id={idea.id} modalVisibleId={modalVisibleId} setModalVisibleId={setModalVisibleId} 
        location={modalLocation(index+1)} idea={idea} />

        <Style.ProfileFont>{idea.registrant}</Style.ProfileFont>
        <Style.ProfileInfoDetail>
          &nbsp;<RemoveRedEyeOutlinedIcon className={classes.home} />
          &nbsp;{idea.hits}&nbsp;
          &nbsp;<FavoriteOutlinedIcon className={classes.home2} />
          &nbsp;{idea.thumbs}&nbsp;
          &nbsp;<StarIcon className={classes.star} />
          &nbsp;{idea.scrap}
        </Style.ProfileInfoDetail>
        
      </Style.ProfileInfo>
    </Style.ContestItem>
    ))}

  </Style.ContestList>
  )
}

export default RefList;