import {React, useState} from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom';
import RefSearchResult from './RefSearchResult';

const useStyles = makeStyles({
  home:{
      color: "white",
      fontSize:'40px',
  }
})
const Style = {
  SearchDiv: styled.div`
  width: 86vw;
  height: auto;
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
    background: #ffffff;
    border: 1px solid #B0B0B0;
    border-radius: 25px;
    padding-left: 20px;
    left: 0px;
  `,
  ClickButton:styled.div`
    position: absolute;
    width: 54px;
    height: 39px;
    background: #FADA5E;
    border-radius: 25px;
    border: #FADA5E;
    display: flex;
    cursor:pointer;
    justify-content: center;
    align-items: center;
  `,
  Bundle:styled.form`
    display: flex;
    flex-direction: row-reverse;
    width: 469px;
    position: absolute;
    height: 39px;
    top:42px;
  `,
  SearchDeco:styled.p`
    font-size: large;
    color: white;
  `
}
function RefSearch() {
  const classes = useStyles();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const onChange = (e) => {
    setSearch(e.target.value.toLowerCase())
  }

  const [keyword, setKeyword] = useState("")

  const searchInput = () => {
    const searchKeyword = document.querySelector('#v').value
    console.log(searchKeyword)
    setKeyword(searchKeyword);
    navigate(`/ref/search/${searchKeyword}`)
  };
  const activeEnter = (e) => {
    if(e.key === "Enter") {
      searchInput(e)
    }
  }
  return (
    <Style.SearchDiv>
      <Style.Title>
        공모전 이름이나 종류를 검색해보세요
      </Style.Title>
      <Style.Bundle>
        <Style.SearchBox type="text" value={search} onChange={onChange} id="v" 
        autocomplete="false" onKeyDown={(e) => activeEnter(e)} />
        <Style.ClickButton onClick={searchInput} >
          <SearchIcon className={classes.home}/>
        </Style.ClickButton>
      </Style.Bundle>
      <RefSearchResult search={search} />
    </Style.SearchDiv>
  )
}

export default RefSearch;