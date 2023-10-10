import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Style } from "../../layout/ReferenceListStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import RefModal from "../modal/RefModalPages/RefModal";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import StarIcon from "@mui/icons-material/Star";
import RefModalFollow from "../modal/RefModalFollow";

const useStyles = makeStyles({
  home: {
    fontSize: "25px",
  },
  home2: {
    fontSize: "22.5px",
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

  const [modalVisibleId, setModalVisibleId] = useState("");

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

  /* RefModalFollow에 필요한 정보 */
  const [index, setIndex] = useState(0);
  const [otherMemberId, setOtherMemberId] = useState(0);
  const [ideaFollow, setIdeaFollow] = useState({});
  const [isFollow, setIsFollow] = useState(false);
  const onClickFollow = (index, memberId, idea, isFollow) => {
    setModalVisibleId(0);
    setOtherMemberId(memberId);
    setModalVisibleId(memberId);
    setIndex(modalLocation(index + 1));
    setIdeaFollow(idea);
    setIsFollow(isFollow);
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
            <Style.ProfileFont>{mywork.title}</Style.ProfileFont>

            <table style={{ position: "absolute", top: "30px" }}>
              <tbody>
                <tr style={{ width: "3vw" }}>
                  <td>
                    <Style.ProfileSize
                      src={mywork.postMember.profileImage}
                      alt=" "
                      onMouseEnter={() => {
                        onClickFollow(
                          index,
                          mywork.postMember.memberId,
                          mywork,
                          mywork.postMember.isFollow
                        );
                      }}
                      onClick={() => {
                        onClickFollow(
                          index,
                          mywork.postMember.memberId,
                          mywork,
                          mywork.postMember.isFollow
                        );
                      }}
                    />

                    {modalVisibleId !== "" &&
                      (props.from === "work" || props.from === "scrap") && (
                        <RefModalFollow
                          id={otherMemberId}
                          modalVisibleId={modalVisibleId}
                          setModalVisibleId={setModalVisibleId}
                          location={modalLocation(index + 1)}
                          idea={ideaFollow}
                          isFollow={isFollow}
                          memberId={mywork.postember.memberId}
                        />
                      )}
                  </td>
                  <td>
                    <span
                      style={{ left: "6vw", position: "absolute", top: "1vw" }}
                    >
                      {mywork.postMember.nickname}
                    </span>
                  </td>
                </tr>
                <tr style={{ width: "17vw" }}>
                  <td></td>
                  <td style={{ position: "relative", right: "50px" }}>
                    <Style.ProfileInfoDetail>
                      <RemoveRedEyeOutlinedIcon className={classes.home} />
                      &nbsp;{mywork.views}&nbsp; &nbsp;
                      <FavoriteOutlinedIcon className={classes.home2} />
                      &nbsp;{mywork.likeCount}&nbsp; &nbsp;
                      <StarIcon className={classes.star} />
                      &nbsp;{mywork.scrapCount}
                    </Style.ProfileInfoDetail>
                  </td>
                </tr>
              </tbody>
            </table>
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
