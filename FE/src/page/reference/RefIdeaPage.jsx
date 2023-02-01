import Layout from "../../layout/Layout";
import React from "react";
import ReferenceContainer from "../../containers/reference/ReferenceContainer";
import styled from "styled-components";
import { getIdeaContests } from "../../temporary/idea_data";

import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import {makeStyles} from "@material-ui/core/styles";
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

function RefIdeaPage() {
  const classes = useStyles();

  const Style = {
    Wrapper: styled.div`
      box-sizing: border-box;
      position: relative;
      width: 86vw;
      height: 456px;
      top:73px;
      /* background-color: #EBFBFF; */
    `,
    Intro:styled.div`
      position: absolute;
      width: 480px;
      height: 24px;
      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 700;
      font-size: 21px;
      line-height: 30px;
      display: flex;
    `,
    Coloring:styled.p`
      color:#FADA5E;
    `,
    SortContainer:styled.div`
      width: 368px;
      height: 25px;
      position: absolute;
      right: 0px;
    `,
    Sort:styled.div`
      box-sizing: border-box;
      position: relative;
      width: 86px;
      display: inline-block;
      background: white;
      border: 0.5px solid #000000;
      border-radius: 10px;
      margin-right: 8px;
      cursor: pointer;
      :last-child{
        margin-right: 0px;
      }
    `,
    Line:styled.hr`
      position: absolute;
      width: 86vw;
      border: 1px solid #B0B0B0;
      top:19px;
      margin-bottom: 10px;
    `,
    ContestList:styled.div`
      /* background-color: #a6e0c3; */
      padding-top: 45px;
    `,
    ContestItem:styled.div`
      /* background-color: #87d5ff; */
      width: 25%;
      height: 27.5vh;
      float:left;
    `,
    ContestImgCrop:styled.div`
      height: 18vh;
      overflow: hidden;
    `,
    ContestImg:styled.img`
      position: relative;
      width: 20vw;
      height: 45vh;
      top:-100px;
    `,
    ProfileSize:styled.img`
      width: 4vw; 
      height: 4vw;
      object-fit: cover;
      border-radius: 50%;
      float: left;
      margin-left: 15px;
    `,
    ProfileInfo:styled.div`
      /* background-color: aqua; */
      position: relative;
      width: 20vw;
      height:4vw;
      top: 5px;
      display: flex;

    `,
    ProfileInfoDetail:styled.div`
      font-size: 22px;
      display: inline-block;
      justify-content: space-around;
      position: relative;
      margin-top:20px;
      margin-left: 40px;
    `
  }

  const ideas = getIdeaContests();

  return (
    <Layout>
      <ReferenceContainer />
      <Style.Wrapper>

        <Style.Intro>
          <Style.Coloring>기획/아이디어&nbsp;</Style.Coloring>
          공모전의 레퍼런스를 찾아보세요
        </Style.Intro>

        <Style.SortContainer>
          <Style.Sort>최신순</Style.Sort>
          <Style.Sort>조회수순</Style.Sort>
          <Style.Sort>좋아요순</Style.Sort>
          <Style.Sort>스크랩순</Style.Sort>
        </Style.SortContainer>

        <Style.Line />

        <Style.ContestList>
          {ideas.map((idea) => (
          <Style.ContestItem key={idea.id}>

            <Style.ContestImgCrop>
              <Style.ContestImg src = {require('../../images/' + idea.contest_image + '.jpg')} alt = '1' />
            </Style.ContestImgCrop>
            <Style.ProfileInfo>
              <Style.ProfileSize src = {require('../../images/' + idea.registrant_image + '.jpg')} alt="2"  />

              <Style.ProfileInfoDetail>
                &nbsp;<RemoveRedEyeOutlinedIcon className={classes.home} />
                &nbsp;{idea.hits}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;<FavoriteOutlinedIcon className={classes.home2} />
                &nbsp;{idea.thumbs}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;<ScreenShareOutlinedIcon className={classes.home} />
                &nbsp;{idea.scrap}
              </Style.ProfileInfoDetail>
              
            </Style.ProfileInfo>
          </Style.ContestItem>
          ))}
        </Style.ContestList>

      </Style.Wrapper>
    </Layout>
  )
}
//{idea.contest_image}
export default RefIdeaPage;