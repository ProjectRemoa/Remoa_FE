import styled from "styled-components";

export const Style = {
  ContestList:styled.div`
    padding-top: 45px;
  `,
  ContestItem:styled.div`
    width: 21.5vw;
    height: 18.6vw;
    float:left;
    margin-bottom:40px;
    /* box-shadow: 0 0 0 1px blue inset; */
    @media ${props => props.theme.desktop} {
      width: ${(props) => props.theme.d_3rdSizeContestItem};
      height: ${(props) => props.theme.d_3rdSizeContestItemH};
      margin-bottom:50px;
    }
    @media ${props => props.theme.mobile} {
      width: ${(props) => props.theme.m_2ndSizeContestItem};
      height: ${(props) => props.theme.m_2ndSizeContestItemH};
      margin-bottom:60px;
    }
  `, //선이 86vw임을 참고 21.5 곱하기 4는 86

  ContestImgCrop:styled.div`
    cursor: pointer;
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
    width: 3vw; 
    height: 3vw;
    object-fit: cover;
    border-radius: 50%;
    float: left;
    margin-top: 5px;
    cursor: pointer;
    @media ${props => props.theme.desktop} {
      width: 5vw; height:5vw;
    }
    @media ${props => props.theme.mobile} {
      width: 6vw; height:6vw;
    }
  `,
  ProfileInfo:styled.div`
    position: relative;
    width: 19.5vw;
    height:6.8vw;
    top: 6px;
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
    width:100%;
    font-size: 0.7em;
    display: inline;
    justify-content: space-around;
    margin-top: 15px;
  `,
  ProfileData:styled.div`
    height: auto;
    width: auto;
    cursor: pointer;
  `,
  ProfileFont:styled.div`
    position: absolute;
    font-weight: 600;
    font-size: 21px;
    line-height: 18px;
    left:1vw;
    @media ${props => props.theme.desktop} {
      font-size: 18px;
    }
    @media ${props => props.theme.mobile} {
      font-size: 21px;
    }
  `,
    SortContainer:styled.div`
    width: 86vw;
    height: 25px;
    top:0px;
    position: absolute;
    display: flex;
    justify-content: right;
    @media ${props => props.theme.desktop} {
      justify-content: center;
    }
    @media ${props => props.theme.mobile} {
      justify-content:center
    }
  `,
  Sort:styled.div`
    box-sizing: border-box;
    position: relative;
    width: 86px;
    display: inline-block;
    border: 0.5px solid #000000;
    border-radius: 10px;
    margin-right: 8px;
    cursor: pointer;
    :last-child{
      margin-right: 0px;
    };
    :visited{
      color: yellow;
    };
  `,
    Line:styled.hr`
    position: absolute;
    width: 86vw;
    border: 1px solid #B0B0B0;
    top:29px;
    margin-bottom: 10px;
  `,
}