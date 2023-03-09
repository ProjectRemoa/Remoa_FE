import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Style } from "../../layout/ReferenceListStyle";
import { useState } from "react";
import { Link } from "react-router-dom";
import RefModal from "../modal/RefModal";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import RefModalFollow from "../modal/RefModalFollow";

import StarIcon from "@mui/icons-material/Star";
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

function ManageList(props) {
  const classes = useStyles();
  let data = props;

  const [modalVisibleId, setModalVisibleId] = useState("");
  const onModalHandler = (id) => {
    setModalVisibleId(id);
  };
  const [modalVisibleId2, setModalVisibleId2] = useState(false);
  const onModalHandler2 = (id) => {
    setModalVisibleId2(id);
  };

  function modalLocation(i) {
    if (window.innerWidth <= 767) {
      if (i % 2 === 0) {
        return 2;
      }
    } else if (window.innerWidth <= 1023) {
      if (i % 3 === 0) {
        return 3;
      }
    } else {
      if (i % 4 === 0) {
        return 4;
      }
    }
  }
  let Lo = window.location.href;

  return (
    <Style.ContestList>
      {data.map((idea, index) => (
        <Style.ContestItem key={idea.id}>
          <Link
            to={
              Lo.includes("marketing")
                ? `/ref/marketing/${idea.id}`
                : Lo.includes("video")
                ? `/ref/video/${idea.id}`
                : Lo.includes("design")
                ? `/ref/design/${idea.id}`
                : Lo.includes("etc")
                ? `/ref/etc/${idea.id}`
                : `/${idea.id}`
            }
          >
            <Style.ContestImgCrop onClick={() => onModalHandler2(idea.id)}>
              <Style.ContestImg
                src={require("../../images/" + idea.contest_image + ".jpg")}
                alt="1"
              />
            </Style.ContestImgCrop>
          </Link>
          <RefModal
            id2={idea.id}
            modalVisibleId2={modalVisibleId2}
            setModalVisibleId2={setModalVisibleId2}
            idea={idea}
          />

          <Style.ProfileInfo>
            <Style.ProfileSize
              src={require("../../images/" + idea.registrant_image + ".jpg")}
              alt="2"
              onMouseEnter={() => {
                onModalHandler(idea.id);
                modalLocation(index + 1);
              }}
              onClick={() => {
                onModalHandler(idea.id);
                modalLocation(index + 1);
              }}
            />

            <RefModalFollow
              id={idea.id}
              modalVisibleId={modalVisibleId}
              setModalVisibleId={setModalVisibleId}
              location={modalLocation(index + 1)}
              idea={idea}
            />

            <Style.ProfileFont>{idea.registrant}</Style.ProfileFont>
            <Style.ProfileInfoDetail>
              &nbsp;
              <RemoveRedEyeOutlinedIcon className={classes.home} />
              &nbsp;{idea.hits}&nbsp; &nbsp;
              <FavoriteOutlinedIcon className={classes.home2} />
              &nbsp;{idea.thumbs}&nbsp; &nbsp;
              <StarIcon className={classes.star} />
              &nbsp;{idea.scrap}
            </Style.ProfileInfoDetail>
          </Style.ProfileInfo>
        </Style.ContestItem>
      ))}
    </Style.ContestList>
  );
}

export default ManageList;
