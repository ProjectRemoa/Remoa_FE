import React from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  home:{
      color: "white",
      fontSize:'35px',
  }
})

function RefSearch() {
  const classes = useStyles();
  const Style = {
    SearchDiv: styled.div`
    width: 700px;
    height: 85px;
    top:181px;
    position: absolute;
    display: flex;
    justify-content: center;
    `,
    Title: styled.div`
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    width: 450px;
    height: 27px;
    position: absolute;
    `,
    SearchBox:styled.input`
      box-sizing: border-box;
      position: absolute;
      width: 407px;
      height: 39px;
      background: #FFFFFF;
      border: 1px solid #B0B0B0;
      border-radius: 25px;
      padding-left: 20px;
      left: 0px;
    `,
    ClickButton:styled.button`
      position: absolute;
      width: 54px;
      height: 39px;
      background: #FADA5E;
      border-radius: 25px;
      border: #FADA5E;
      display: block;
    `,
    Bundle:styled.form`
      display: flex;
      flex-direction: row-reverse;
      width: 469px;
      position: absolute;
      height: 39px;
      top:42px;
      left: 110px;
    `,
    SearchDeco:styled.p`
      font-size: large;
      color: white;
    `
  }
  return (
    <Style.SearchDiv>
      <Style.Title>
        공모전 이름이나 종류를 검색해보세요
      </Style.Title>
      <Style.Bundle>
        <Style.SearchBox />
        <Style.ClickButton>
          <SearchIcon className={classes.home}/>
        </Style.ClickButton>
      </Style.Bundle>
    </Style.SearchDiv>
  )
}
//   ...
export default RefSearch;