import { React, useState } from 'react'
import { getIdeaContests } from '../../temporary/idea_data'
import styled from 'styled-components';

const Style = {
  Wrapper: styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 86vw;
    height: 456px;
    top:350px;
  `,
  Intro:styled.div`
    position: absolute;
    width: 86vw;
    height: 24px;
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-size: 21px;
    line-height: 30px;
    display: flex;
  `,
  Coloring:styled.div`
    color:#FADA5E;
    top: -20px;
  `,
}
function RefSearchResult(props) {
  let ideas = getIdeaContests();
  let [data, setData] = useState(ideas);

  let whatSearch = decodeURI(window.location.pathname)
  const searched = data.filter((item) =>
    item.contest_name.toLowerCase().includes(whatSearch.substring(12))
  );

  if (window.location.pathname==="/ref/marketing"){
    whatSearch = ""
  }
  //console.log(whatSearch.substring(12),"은",searched)

  return(
    <Style.Wrapper>
      {window.location.pathname.includes('ref/search') ?     <Style.Intro>
      <Style.Coloring>{whatSearch.substring(12)}</Style.Coloring>
      검색결과</Style.Intro>
  : ""}
</Style.Wrapper>
  
    
  )
}

export default RefSearchResult