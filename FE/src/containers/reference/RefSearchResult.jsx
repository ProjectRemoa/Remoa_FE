import { React, useState } from 'react'
import St from '../../layout/RefSearchResultStyle';
import { Style } from '../../layout/ReferenceListStyle'
import {makeStyles} from "@material-ui/core/styles";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { Link } from 'react-router-dom';
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
function RefSearchResult(props) {
  const classes = useStyles();
  let [data, setData] = useState('ideas');

  let whatSearch = decodeURI(window.location.pathname)
  const searched = data.filter((item) =>
    item.contest_name.toLowerCase().includes(whatSearch.substring(12))
  );

  if (window.location.pathname==="/ref/marketing"){
    whatSearch = ""
  }
  //console.log(whatSearch.substring(12),"은",searched)
  function modalLocation(i){
    if (window.innerWidth<=767) {if (i%2==0) return 2}
    else if (window.innerWidth<=1023) {if (i%3==0) return 3}
    else {if (i%4==0) return 4}
  }
  let Lo = window.location.href

  return(
    <>
      {window.location.pathname.includes('ref/search') ?
      <Style.ContestList style={{top:"-186px"}}>
        <St.Coloring>{whatSearch.substring(12)}</St.Coloring>
      &nbsp;키워드에 해당되는 작품들이에요
        <St.Line />

        {searched.map((idea, index) => (
    <Style.ContestItem key={idea.id}>
      <Link to={ Lo.includes("marketing") ? `/ref/marketing/${idea.id}` :
      Lo.includes("video") ? `/ref/video/${idea.id}` :
      Lo.includes("design") ? `/ref/design/${idea.id}` :
      Lo.includes("etc") ? `/ref/etc/${idea.id}` :`/${idea.id}`}>
      <Style.ContestImgCrop>
        <Style.ContestImg src = {require('../../images/' + idea.contest_image + '.jpg')} alt = '1' />
      </Style.ContestImgCrop>
      </Link>
      
      <Style.ProfileInfo>

        <Style.ProfileSize src = {require('../../images/' + idea.registrant_image + '.jpg')} alt="2"
        onMouseEnter={() => {modalLocation(index+1)}}
        onClick={() => {modalLocation(index+1)}}/>

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
  : ""}
    </>
  )
}

export default RefSearchResult