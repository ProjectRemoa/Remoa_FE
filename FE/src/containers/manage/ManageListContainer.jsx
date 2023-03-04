import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { getIdeaContests } from "../../temporary/idea_data";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";

const useStyles = makeStyles({
  home: {
    fontSize: "35px",
  },
  home2: {
    fontSize: "35px",
    color: "red",
  },
});
const Style = {
  ContestList: styled.div`
    width: 100%;
    margin-top: 200px;
    font-family: NotoSansKR-400;
  `,
  ContestItem: styled.div`
    width: 21.5vw;
    height: 18.6vw;
    float: left;
    /* box-shadow: 0 0 0 1px blue inset; */
    @media ${(props) => props.theme.desktop} {
      width: ${(props) => props.theme.d_3rdSizeContestItem};
      height: ${(props) => props.theme.d_3rdSizeContestItemH};
    }
    @media ${(props) => props.theme.mobile} {
      width: ${(props) => props.theme.m_2ndSizeContestItem};
      height: ${(props) => props.theme.m_2ndSizeContestItemH};
    }
  `, //선이 86vw임을 참고 21.5 곱하기 4는 86

  ContestImgCrop: styled.div`
    overflow: hidden;
    display: flex;
    justify-content: center;
    height: 10.8vw;
    @media ${(props) => props.theme.desktop} {
      height: ${(props) => props.theme.d_3rdSizeContestImgCrop};
    }
    @media ${(props) => props.theme.mobile} {
      height: ${(props) => props.theme.m_2ndSizeContestImgCrop};
    }
  `,
  ContestImg: styled.img`
    position: relative;
    width: 19.5vw;
    height: auto;
    /* top:-100px; */
    @media ${(props) => props.theme.desktop} {
      width: ${(props) => props.theme.d_3rdSizeContestImg};
    }
    @media ${(props) => props.theme.mobile} {
      width: ${(props) => props.theme.m_2ndSizeContestImg};
    }
  `,
  ProfileSize: styled.img`
    width: 4vw;
    height: 4vw;
    object-fit: cover;
    border-radius: 50%;
    float: left;
    margin-left: 5px;
    @media ${(props) => props.theme.desktop} {
      width: 5vw;
      height: 5vw;
    }
    @media ${(props) => props.theme.mobile} {
      width: 6vw;
      height: 6vw;
    }
  `,
  ProfileInfo: styled.div`
    background-color: aqua;
    position: relative;
    width: 19.5vw;
    height: 6.8vw;
    top: 6px;
    left: 1vw;
    display: block;
    @media ${(props) => props.theme.desktop} {
      width: ${(props) => props.theme.d_3rdSizeContestImg};
      height: ${(props) => props.theme.d_3rdSizeContestExplain};
    }
    @media ${(props) => props.theme.mobile} {
      width: ${(props) => props.theme.m_2ndSizeContestImg};
      height: ${(props) => props.theme.m_2ndSizeContestExplain};
    }
  `,
  ProfileInfoDetail: styled.div`
    font-size: 20px;
    display: inline-block;
    justify-content: space-around;
    position: relative;

    margin-left: 40px;
  `,
  ProfileFont: styled.div`
    font-size: 15px;
    position: relative;
    top: 10px;
    @media ${(props) => props.theme.desktop} {
      font-size: 18px;
    }
    @media ${(props) => props.theme.mobile} {
      font-size: 21px;
    }
  `,
  SortContainer: styled.div`
    width: 86vw;
    height: 25px;
    top: 0px;
    position: absolute;
    display: flex;
    justify-content: right;
    @media ${(props) => props.theme.desktop} {
      justify-content: center;
    }
    @media ${(props) => props.theme.mobile} {
      justify-content: center;
    }
  `,
  Sort: styled.div`
    box-sizing: border-box;
    position: relative;
    width: 86px;
    display: inline-block;
    border: 0.5px solid #000000;
    border-radius: 10px;
    margin-right: 8px;
    cursor: pointer;
    :last-child {
      margin-right: 0px;
    }
    :visited {
      color: yellow;
    }
  `,
  Line: styled.hr`
    position: absolute;
    width: 86vw;
    border: 1px solid #b0b0b0;
    top: 19px;
    margin-bottom: 10px;
  `,
};
function ManageListContainer() {
  const classes = useStyles();
  let ideas = getIdeaContests();
  let [data, setData] = useState(ideas);
  let data1 = [...data];

  const onClickDate = () => {
    data1.sort((a, b) => {
      if (a.resgist_date < b.resgist_date) return 1;
      else if (a.resgist_date > b.resgist_date) return -1;
      else return 0;
    });
    setData(data1);
    document.getElementById("b1").style.backgroundColor = "#FADA5E";
    document.getElementById("b2").style.backgroundColor = "white";
    document.getElementById("b3").style.backgroundColor = "white";
    document.getElementById("b4").style.backgroundColor = "white";
  };

  const onClickHits = () => {
    data1.sort((a, b) => {
      if (a.hits < b.hits) return 1;
      else if (a.hits > b.hits) return -1;
      else return 0;
    });
    setData(data1);
    document.getElementById("b1").style.backgroundColor = "white";
    document.getElementById("b2").style.backgroundColor = "#FADA5E";
    document.getElementById("b3").style.backgroundColor = "white";
    document.getElementById("b4").style.backgroundColor = "white";
  };

  const onClickThumbs = () => {
    data1.sort((a, b) => {
      if (a.thumbs < b.thumbs) return 1;
      else if (a.thumbs > b.thumbs) return -1;
      else return 0;
    });
    setData(data1);
    document.getElementById("b1").style.backgroundColor = "white";
    document.getElementById("b2").style.backgroundColor = "white";
    document.getElementById("b3").style.backgroundColor = "#FADA5E";
    document.getElementById("b4").style.backgroundColor = "white";
  };

  const onClickScrap = () => {
    data1.sort((a, b) => {
      if (a.scrap < b.scrap) return 1;
      else if (a.scrap > b.scrap) return -1;
      else return 0;
    });
    setData(data1);
    document.getElementById("b1").style.backgroundColor = "white";
    document.getElementById("b2").style.backgroundColor = "white";
    document.getElementById("b3").style.backgroundColor = "white";
    document.getElementById("b4").style.backgroundColor = "#FADA5E";
  };

  useEffect(() => {
    onClickDate();
  }, []);
  return (
    <Style.ContestList>
      <Style.Line />
      <Style.SortContainer>
        {/* {isActive?<Style.PageStyle>최신순</Style.PageStyle>:"최신순"} */}
        <Style.Sort onClick={onClickDate} id="b1">
          최신순
        </Style.Sort>
        <Style.Sort onClick={onClickHits} id="b2">
          조회수순
        </Style.Sort>
        <Style.Sort onClick={onClickThumbs} id="b3">
          좋아요순
        </Style.Sort>
        <Style.Sort onClick={onClickScrap} id="b4">
          스크랩순
        </Style.Sort>
      </Style.SortContainer>

      <Style.Line />
      {data.map((idea) => (
        <Style.ContestItem key={idea.id}>
          <Style.ContestImgCrop>
            <Style.ContestImg
              src={require("../../images/" + idea.contest_image + ".jpg")}
              alt="1"
            />
          </Style.ContestImgCrop>
          <Style.ProfileInfo>
            <Style.ProfileSize
              src={require("../../images/" + idea.registrant_image + ".jpg")}
              alt="2"
            />
            <Style.ProfileFont>{idea.registrant}</Style.ProfileFont>
            <Style.ProfileInfoDetail>
              &nbsp;
              <RemoveRedEyeOutlinedIcon className={classes.home} />
              &nbsp;{idea.hits}&nbsp; &nbsp;
              <FavoriteOutlinedIcon className={classes.home2} />
              &nbsp;{idea.thumbs}&nbsp; &nbsp;
              <ScreenShareOutlinedIcon className={classes.home} />
              &nbsp;{idea.scrap}
            </Style.ProfileInfoDetail>
          </Style.ProfileInfo>
        </Style.ContestItem>
      ))}
    </Style.ContestList>
  );
}

export default ManageListContainer;
