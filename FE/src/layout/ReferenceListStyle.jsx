import styled from "styled-components";

export const Style = {
  ContestList:styled.div`
    padding-top: 45px;
  `,
  ContestItem:styled.div`
    width: 21.5vw;
    height: 18.6vw;
    float:left;
    /* box-shadow: 0 0 0 1px blue inset; */
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
    width: 4vw; 
    height: 4vw;
    object-fit: cover;
    border-radius: 50%;
    float: left;
    margin-left: 5px;
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
    font-size: 0.8em;
    display: inline-block;
    position: relative;
    justify-content: space-around;

    margin-top: 15px;
  `,
  ProfileData:styled.div`
    width: 20vw; 
    height: 20vw;
    margin-top: 5px;
    cursor: pointer;
    @media ${props => props.theme.desktop} {
      width: 25vw; height:25vw;
    }
    @media ${props => props.theme.mobile} {
      width: 30vw; height:30vw;
    }
  `,
  ProfileFont:styled.div`
    font-size: 1em;
    position: relative;
    top: 10px;
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