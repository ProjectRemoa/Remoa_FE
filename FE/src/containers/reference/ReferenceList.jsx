import {React, useState} from 'react'
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import { getIdeaContests } from '../../temporary/idea_data';

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';

const useStyles = makeStyles({
  home:{
      fontSize:'35px',
  },
  home2:{
    fontSize:'35px',
    color:"red"
}
})
const Style = {
  ContestList:styled.div`
    padding-top: 45px;
  `,
  ContestItem:styled.div`
    width: 21.5vw;
    height: 18.6vw;
    float:left;
    box-shadow: 0 0 0 1px blue inset;
    @media ${props => props.theme.desktop} {
      width: ${(props) => props.theme.d_3rdSizeContestItem};
      height: ${(props) => props.theme.d_3rdSizeContestItemH};
    }
    @media ${props => props.theme.mobile} {
      width: ${(props) => props.theme.m_2ndSizeContestItem};
      height: ${(props) => props.theme.m_2ndSizeContestItemH};;
    }
  `, //선이 86vw임을 참고 21.5 곱하기 4는 86

  ContestImgCrop:styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    height: 10.8vw;
    @media ${props => props.theme.desktop} {
      height: ${(props) => props.theme.d_3rdSizeContestImgCrop};
    }
    @media ${props => props.theme.mobile} {
      height: ${(props) => props.theme.m_2ndSizeContestImgCrop};
    }
  `,
  ContestImg:styled.img`
    position: relative;
    width: 19.5vw;
    height: auto;
    /* top:-100px; */
    @media ${props => props.theme.desktop} {
      width: ${(props) => props.theme.d_3rdSizeContestImg};
    }
    @media ${props => props.theme.mobile} {
      width: ${(props) => props.theme.m_2ndSizeContestImg};
    }

  `,
  ProfileSize:styled.img`
    width: 4vw; 
    height: 4vw;
    object-fit: cover;
    border-radius: 50%;
    float: left;
    margin-left: 5px;
    @media ${props => props.theme.desktop} {
      width: 5vw; height:5vw;
    }
    @media ${props => props.theme.mobile} {
      width: 6vw; height:6vw;
    }
  `,
  ProfileInfo:styled.div`
    background-color: aqua;
    position: relative;
    width: 19.5vw;
    height:6.8vw;
    top: 6px;
    left: 1vw;
    display: block;
    @media ${props => props.theme.desktop} {
      width: ${(props) => props.theme.d_3rdSizeContestImg};
      height: ${(props) => props.theme.d_3rdSizeContestExplain};
    }
    @media ${props => props.theme.mobile} {
      width: ${(props) => props.theme.m_2ndSizeContestImg};
      height: ${(props) => props.theme.m_2ndSizeContestExplain};
    }

  `,
  ProfileInfoDetail:styled.div`
    font-size: 20px;
    display: inline-block;
    justify-content: space-around;
    position: relative;

    margin-left: 40px;
  `,
  ProfileFont:styled.div`
    font-size: 15px;
    position: relative;
    top: 10px;
    @media ${props => props.theme.desktop} {
      font-size: 18px;
    }
    @media ${props => props.theme.mobile} {
      font-size: 21px;
    }
  `
}
const RefList = () => {
  const classes = useStyles();
  let ideas = getIdeaContests();
  let [data, setData] = useState(ideas);
  let data1 = [...data]

  const onClickDate = () => {
    data1.sort((a,b) => {
      if(a.resgist_date < b.resgist_date) return 1;
      else if (a.resgist_date > b.resgist_date) return -1;
      else return 0;})
    setData(data1);
  }

  const onClickHits = () => {
    data1.sort((a,b) => {
      if(a.hits < b.hits) return 1;
      else if (a.hits > b.hits) return -1;
      else return 0;})
    setData(data1);
  }

  const onClickThumbs = () => {
    data1.sort((a,b) => {
      if(a.thumbs < b.thumbs) return 1;
      else if (a.thumbs > b.thumbs) return -1;
      else return 0;})
    setData(data1);
  }

  const onClickScrap = () => {
    data1.sort((a,b) => {
      if(a.scrap < b.scrap) return 1;
      else if (a.scrap > b.scrap) return -1;
      else return 0;})
    setData(data1);
  }

  return(
  <Style.ContestList>
    {data.map((idea) => (
    <Style.ContestItem key={idea.id}>
      <Style.ContestImgCrop>
        <Style.ContestImg src = {require('../../images/' + idea.contest_image + '.jpg')} alt = '1' />
      </Style.ContestImgCrop>
      <Style.ProfileInfo>
        <Style.ProfileSize src = {require('../../images/' + idea.registrant_image + '.jpg')} alt="2"  />
        <Style.ProfileFont>{idea.registrant}</Style.ProfileFont>
        <Style.ProfileInfoDetail>
          &nbsp;<RemoveRedEyeOutlinedIcon className={classes.home} />
          &nbsp;{idea.hits}&nbsp;
          &nbsp;<FavoriteOutlinedIcon className={classes.home2} />
          &nbsp;{idea.thumbs}&nbsp;
          &nbsp;<ScreenShareOutlinedIcon className={classes.home} />
          &nbsp;{idea.scrap}
        </Style.ProfileInfoDetail>
        
      </Style.ProfileInfo>
    </Style.ContestItem>
    ))}
  </Style.ContestList>
  )
}

export default RefList;