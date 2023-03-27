import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Style } from "../../layout/ReferenceListStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RefModal from "../modal/RefModal";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
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
  const navigate = useNavigate();

  // 받아온 data 가공 필요
  let data = props.data;
  console.log(data);
  let tar = props.TAR;
  let tpe = props.TPE;
  let tp = props.TP;

  let memberId = data[0].postMember.memberId;
  let nickname = data[0].postMember.nickname;
  let profileImage = data[0].postMember.profileImage;

  const [modalVisibleId, setModalVisibleId] = useState("");
  const onModalHandler = (id) => {
    setModalVisibleId(id);
  };
  const [modalVisibleId2, setModalVisibleId2] = useState(false);
  const onModalHandler2 = (id) => {
    setModalVisibleId2(id);
  };
  const [postId, setPostId] = useState(0);
  const [idea, setIdea] = useState({});
  const [modal, setModal] = useState(false);
  const onClickModal = (idea, postId) => {
    setModal(!modal);
    setIdea(idea);
    setPostId(postId);
    setModalVisibleId2(postId);
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

  return (
    <div>
      {data.map((mywork, index) => (
        <Style.ContestItem key={mywork.postId}>
          <Style.ContestImgCrop onClick={() => onModalHandler2(mywork.postId)}>
            {/*표지사진*/}
            <Style.ContestImg
              onClick={() => onClickModal(mywork, mywork.postId)}
              src={mywork.thumbnail}
              alt={mywork.postId}
            />
          </Style.ContestImgCrop>

          <Style.ProfileInfo>
            {/*유저 프로필 사진*/}
            <Style.ProfileSize
              src={profileImage}
              alt={memberId}
              onMouseEnter={() => {
                onModalHandler(mywork.postId);
                modalLocation(index + 1);
              }}
              onClick={() => {
                onModalHandler(mywork.postId);
                modalLocation(index + 1);
              }}
            />
            <Style.ProfileFont>{mywork.title}</Style.ProfileFont>
            <Style.ProfileInfoDetail>
              {/* 유저 hits, thumbs, scrap */}
              &nbsp;
              <RemoveRedEyeOutlinedIcon className={classes.home} />
              &nbsp;{mywork.views}&nbsp; &nbsp;
              <FavoriteOutlinedIcon className={classes.home2} />
              &nbsp;{mywork.likeCount}&nbsp; &nbsp;
              <StarIcon className={classes.star} />
              &nbsp;{mywork.scrapCount}
            </Style.ProfileInfoDetail>
          </Style.ProfileInfo>
        </Style.ContestItem>
      ))}
      {modalVisibleId2 && (
        <RefModal
          id2={postId}
          modalVisibleId2={modalVisibleId2}
          setModalVisibleId2={setModalVisibleId2}
          idea={idea}
        />
      )}
    </div>
  );
}

export default ManageList;
