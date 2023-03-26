import { React, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { getIdeaContests, getUserInfo } from "../../temporary/idea_data";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { Style } from "../../layout/ReferenceListStyle";
import RefModal from "../modal/RefModal";
import { Link } from "react-router-dom";
import RefModalFollow from "../modal/RefModalFollow";
import StarIcon from "@mui/icons-material/Star";
import axios from "axios";

const useStyles = makeStyles({
  home: {
    fontSize: "35px",
  },
  home2: {
    fontSize: "35px",
    color: "red",
  },
  arrow: {
    fontSize: "25px",
    color: "#FADA5E",
    float: "left",
    cursor: "pointer",
    display: "block",
    marginLeft: "20px",
    fontWeight: "700",
  },
  star: {
    color: "#FADA5E",
  },
});

const RefList = (props) => {
  const classes = useStyles();
  let ideas = getIdeaContests();
  /* 이 부분 ideas에 axios로 받아 온다 (전체 레퍼런스)*/
  let [data, setData] = useState([]);
  let [name, setName] = useState("");
  let [sort, setSort] = useState("newest");
  let [page, setPage] = useState(1);
  let [category, setCatgory] = useState("etc");

  let users = getUserInfo();
  /* 이 부분 users에 axios로 받아 온다 (전체 유저)*/
  let [user, setUser] = useState(users);

  useEffect(() => {
    const endpoint = `/BE/reference?page=${page}&sort=${sort}&category=${props.kind}&title=${props.name}`;
    //console.log(endpoint);
    axios
      .get(endpoint)
      .then((res) => {
        setData(res.data.data.references);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setCatgory(props.kind);
    setName(props.name);
  }, [props.name, sort, props.kind]);

  const onClickDate = () => {
    /*이부분에 axios*/
    setSort("newest");

    document.getElementById("b1").style.backgroundColor = "#FADA5E";
    document.getElementById("b2").style.backgroundColor = "white";
    document.getElementById("b3").style.backgroundColor = "white";
    document.getElementById("b4").style.backgroundColor = "white";
  };

  const onClickHits = () => {
    /*이부분에 axios*/
    setSort("like");

    document.getElementById("b1").style.backgroundColor = "white";
    document.getElementById("b2").style.backgroundColor = "#FADA5E";
    document.getElementById("b3").style.backgroundColor = "white";
    document.getElementById("b4").style.backgroundColor = "white";
  };

  const onClickThumbs = () => {
    /*이부분에 axios*/
    setSort("view");

    document.getElementById("b1").style.backgroundColor = "white";
    document.getElementById("b2").style.backgroundColor = "white";
    document.getElementById("b3").style.backgroundColor = "#FADA5E";
    document.getElementById("b4").style.backgroundColor = "white";
  };

  const onClickScrap = () => {
    setSort("scrap");

    document.getElementById("b1").style.backgroundColor = "white";
    document.getElementById("b2").style.backgroundColor = "white";
    document.getElementById("b3").style.backgroundColor = "white";
    document.getElementById("b4").style.backgroundColor = "#FADA5E";
  };

  useEffect(() => {
    onClickDate();
  }, []);

  const [modalVisibleId, setModalVisibleId] = useState("");
  const onModalHandler = (id) => {
    setModalVisibleId(id);
  };

  const [modalVisibleId2, setModalVisibleId2] = useState("");

  const [modal, setModal] = useState(false);
  const onClickModal = (idea, postId) => {
    setModal(!modal);
    setIdea(idea);
    setPostId(postId);
    setModalVisibleId2(postId);
  };
  const onModalHandler2 = (id) => {
    setModalVisibleId2(id);
  };

  const [postId, setPostId] = useState(0);
  const [idea, setIdea] = useState({});

  function modalLocation(i) {
    if (window.innerWidth <= 767) {
      if (i % 2 == 0) {
        return 2;
      }
    } else if (window.innerWidth <= 1023) {
      if (i % 3 == 0) {
        return 3;
      }
    } else {
      if (i % 4 == 0) {
        return 4;
      }
    }
  }
  let Lo = window.location.href;
  console.log(modalVisibleId2);

  return (
    <Style.ContestList>
      <Style.Line />
      <Style.SortContainer>
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

      {data.map((idea, index) => (
        <Style.ContestItem key={idea.postId}>
          <Style.ContestImgCrop>
            <Style.ContestImg
              src={idea.postThumbnail}
              alt=""
              onClick={() => onModalHandler2(idea.postId)}
            />
          </Style.ContestImgCrop>

          <RefModal
            id2={idea.postId}
            idea={idea}
            modalVisibleId2={modalVisibleId2}
            setModalVisibleId2={setModalVisibleId2}
          />

          <Style.ProfileInfo>
            <Style.ProfileSize
              src={idea.postMember.profileImage}
              alt=""
              onMouseEnter={() => {
                onModalHandler(idea.postId);
                modalLocation(index + 1);
              }}
              onClick={() => {
                onModalHandler(idea.postId);
                modalLocation(index + 1);
              }}
            />

            <RefModalFollow
              id={idea.postId}
              modalVisibleId={modalVisibleId}
              setModalVisibleId={setModalVisibleId}
              location={modalLocation(index + 1)}
              idea={idea}
            />

            <Style.ProfileData>
              <Style.ProfileFont>{idea.title}</Style.ProfileFont>
              <Style.ProfileInfoDetail>
                &nbsp;
                <RemoveRedEyeOutlinedIcon className={classes.home} />
                &nbsp;{idea.likeCount}&nbsp; &nbsp;
                <FavoriteOutlinedIcon className={classes.home2} />
                &nbsp;{idea.views}&nbsp; &nbsp;
                <StarIcon className={classes.star} />
                &nbsp;{idea.scrapCount}
              </Style.ProfileInfoDetail>
            </Style.ProfileData>
          </Style.ProfileInfo>
        </Style.ContestItem>
      ))}
      {/*{modal === true && (
        <RefModal
          id2={postId}
          idea={idea}
          modalVisibleId2={modalVisibleId2}
          setModalVisibleId2={setModalVisibleId2}
        />
      )}*/}
    </Style.ContestList>
  );
};

export default RefList;
