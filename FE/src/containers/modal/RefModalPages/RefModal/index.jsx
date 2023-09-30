import Loading from "../../../../styles/Loading";
import { S } from './ui'
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { getDate } from "../../../../functions/getDate";
import { useNavigate } from "react-router-dom";
import RefModalComment from "../RefModalComment";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import StarIcon from "@mui/icons-material/Star";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import YouTube from "react-youtube";
import useWindowSize from "../../../../functions/useWindowSize";
import DetailedFeedback from '../../DetailedFeedbackPages/DetailedFeedback'
import { pdfjs, Document, Page } from "react-pdf";
import Draggable from "react-draggable";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles({
  arrow: {
    fontSize: "25px",
    color: "#FADA5E",
    float: "left",
    cursor: "pointer",
    display: "block",
    marginLeft: "20px",
    fontWeight: "700",
  },
  dis: {
    display: "none",
  },
  show: {
    display: "flex",
  },
  love: {
    color: "red",
  },
  star: {
    color: "#FADA5E",
  },
  beforeClick: {
    color: "#B0B0B0",
    float: "left",
    marginLeft: "25px",
    marginTop: "13.5px",
  },
  afterClick1: {
    color: "red",
    float: "left",
    marginLeft: "25px",
    marginTop: "13.5px",
  },
  afterClick2: {
    color: "#FADA5E",
    float: "left",
    marginLeft: "25px",
    marginTop: "13.5px",
  },
  dotIcon: {
    cursor: "pointer",
    position: "absolute",
    top: "10px",
    right: "10px",
  },
});

export default function RefModal({ id2, setModalVisibleId2 }) {
  const classes = useStyles();
  const Navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [top, setTop] = useState({
    title: "",
    contestName: "",
    contestAwardType: "",
    category: "",
    postingTime: "",
    views: 0,
    likeCount: 0,
    scrapCount: 0,
  });
  const [middle, setMiddle] = useState({
    fileNames: [],
    fileType: "",
    likeCount: 0,
    scrapCount: 0,
    youtubeLink: "", // category가 영상일 때
  });
  const [comments, setComments] = useState([]); // 댓글 왜 안되지
  const [feedback, setFeedback] = useState([]);
  const [postMember, setPostMember] = useState({
    memberId: 0,
    nickname: "",
    profileImage: "",
  });
  const [showSel, setShowSel] = useState(false);
  const showSelect = () => {
    setShowSel(!showSel);
  };
  const [category, setCategory] = useState("");

  useEffect(() => {
    const endpoint = `/BE/reference/${id2}`;
    axios
      .get(endpoint)
      .then((res) => {
        // top : 제목, 콘테스트 이름, 작성일자, 카테고리, 조회수, 좋아요수, 스크랩 수
        setTop({
          postId: res.data.data.postId,
          title: res.data.data.title,
          contestName: res.data.data.contestName,
          contestAwardType: res.data.data.contestAwardType,
          category: res.data.data.category,
          postingTime: res.data.data.postingTime,
          views: res.data.data.views, // useEffect []안하면 계속 count됨
          likeCount: res.data.data.likeCount,
          scrapCount: res.data.data.scrapCount,
        });

        // middle : pdf/사진, 좋아요, 스크랩, filetype
        let fileLength;
        let fileDot;
        let fileType = "";
        if (res.data.data.category !== "video") {
          // 영상 아닌 경우
          // 영상인 경우 fileType은 ""값
          fileLength = res.data.data.fileNames[1].length;
          fileDot = res.data.data.fileNames[1].lastIndexOf(".");
          fileType = res.data.data.fileNames[1]
            .substring(fileDot + 1, fileLength)
            .toLocaleLowerCase();
        }

        let videoId;
        let link = res.data.data.youtubeLink;
        if (res.data.data.category === "video") {
          if (link.includes("?v=")) {
            videoId = link.split("?v=")[1]; // watch?v= 형식인 경우
          } else if (link.includes("youtu.be")) {
            // youtu.be/id~ 인 경우
            videoId = link.split("/")[3];
          } else console.log(videoId);
        }

        setMiddle({
          fileNames: res.data.data.fileNames.filter(
            (item, index) => index !== 0
          ),
          likeCount: res.data.data.likeCount,
          scrapCount: res.data.data.scrapCount,
          fileType: fileType,
          youtubeLink: videoId, // videoId만 출력해야함
        });

        // bottom : 댓글
        setComments(res.data.data.comments);

        // 내가 좋아요/스크랩했는지?
        setLikeBoolean(res.data.data.isLiked);
        setscrapBoolean(res.data.data.isScraped);

        // 카테고리 따라서 뜨는 뷰어 다르게
        setCategory(res.data.data.category);

        // 피드백 담아서 넘기기
        setFeedback(res.data.data.feedbacks);

        // 유저 정보 받기
        setPostMember({
          memberId: res.data.data.postMember.memberId,
          nickname: res.data.data.postMember.nickname,
          profileImage: res.data.data.postMember.profileImage,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [loading]);

  let Lo = window.location.href;

  const onCloseHandler2 = () => {
    if (Lo.includes("marketing")) {
      Navigate("/ref/marketing");
    } else if (Lo.includes("video")) {
      Navigate("/ref/video");
    } else if (Lo.includes("design")) {
      Navigate("/ref/design");
    } else if (Lo.includes("etc")) {
      Navigate("/ref/etc");
    } else if (Lo.includes("/manage/list")) {
      Navigate("/manage/list");
    } else if (Lo.includes("/mypage/scrap")) {
      Navigate("/mypage/scrap");
    } else if (Lo.includes("/mypage/work")) {
      Navigate("/mypage/work");
    } else {
      Navigate("/");
    }
    setModalVisibleId2("");
  };

  // 좋아요, 스크랩
  const [likeBoolean, setLikeBoolean] = useState(false);
  const [scrapBoolean, setscrapBoolean] = useState(false);

  const handleLike = () => {
    axios
      .post(`/BE/reference/${id2}/like`)
      .then((res) => {
        console.log(res);
        setTop({
          postId: top.postId,
          title: top.title,
          contestName: top.contestName,
          contestAwardType: top.contestAwardType,
          category: top.category,
          postingTime: top.postingTime,
          views: top.views, // useEffect []안하면 계속 count됨
          likeCount: res.data.data.likeCount,
          scrapCount: top.scrapCount,
        });
        if (res.data.data.isLiked === true) {
          setLikeBoolean(!likeBoolean);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleScrap = () => {
    axios
      .post(`/BE/reference/${id2}/scrap`)
      .then((res) => {
        console.log(res);
        setTop({
          postId: top.postId,
          title: top.title,
          contestName: top.contestName,
          contestAwardType: top.contestAwardType,
          category: top.category,
          postingTime: top.postingTime,
          views: top.views, // useEffect []안하면 계속 count됨
          likeCount: top.likeCount,
          scrapCount: res.data.data.scrapCount,
        });
        if (res.data.data.isScraped === true) {
          setscrapBoolean(!scrapBoolean);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [modalVisibleId3, setModalVisibleId3] = useState(false);
  const onModalHandler3 = (id) => {
    setModalVisibleId3(id);
  };

  const windowSize = useWindowSize();
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(0.5);

  function onDocumentLoadSuccess({ numPages }) {
    console.log("pdf 로드 성공");
    setNumPages(Number(numPages));
    setPageNumber(1);
  }
  const [show, setShow] = useState(1);
  const changePageNum = (e) => {
    setShow(e.target.value);
  };

  // 레퍼런스 삭제
  const onDelete = () => {
    axios
      .delete(`/BE/user/reference/${id2}`)
      .then((response) => {
        console.log(response);
        //setData({ data: response.data.data });
        alert("레퍼런스 삭제가 완료되었습니다.");
        Navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 레퍼런스 수정
  const onClickPut = () => {
    if (
      window.confirm("레퍼런스를 수정하게되면 표지사진, 첨부파일이 삭제됩니다.")
    ) {
      alert("수정 기능은 구현 중~");
      Navigate("/");
      //Navigate(`/manage/put/:${id2}`);
    } else {
    }
  };

  const checkPage = () => {
    if (show > numPages) {
      alert("페이지를 제대로 입력해주세요!");
      window.history.back();
      let el = document.getElementById("pageInput");
      el.value = "";
    }
  };

  const [position, setPosition] = useState({ x: 0, y: 0 }); // box의 포지션 값
  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  return (
    <S.ModalWrapper>
      {/*className={modalVisibleId2 == id2 ? "d_block" : "d_none"}*/}

      <S.MobalBox>
        {loading && <Loading />}
        <ArrowBackIosIcon className={classes.arrow} onClick={onCloseHandler2} />
        {postMember.nickname === sessionStorage.getItem("nickname") && (
          <>
            <MoreVertIcon className={classes.dotIcon} onClick={showSelect} />
            {showSel && (
              <S.EtcDiv>
                <S.Functionp onClick={onClickPut}>수정하기</S.Functionp>
                <div
                  style={{
                    width: "90px",
                    height: "0px",
                    border: "0.5px solid #B0B0B0",
                    position: "relative",
                    left: "5px",
                  }}
                />
                <S.Functionp onClick={onDelete}>삭제하기</S.Functionp>
              </S.EtcDiv>
            )}
          </>
        )}
        <br />
        <S.MobalHeader>
          <S.HeaderDiv1>
            <S.DetailTitle>{top.title}</S.DetailTitle>
            <S.DetailTitleInfo>
              {top.contestName}&nbsp;
              <span style={{ color: "#FADA5E" }}>{top.contestAwardType}</span>
              &nbsp;| &nbsp;{getDate(top.postingTime)}&nbsp;|&nbsp;
              {top.category}
            </S.DetailTitleInfo>
          </S.HeaderDiv1>

          <S.HeaderDiv2>
            <S.HeaderUserInfo>
              <S.ProfileSize src={postMember.profileImage} />
              <S.HeaderUserName>{postMember.nickname}</S.HeaderUserName>
              <S.HeaderDetail2>
                <RemoveRedEyeOutlinedIcon />
                {top.views}
                <FavoriteOutlinedIcon className={classes.love} />
                {top.likeCount}
                <StarIcon className={classes.star} />
                {top.scrapCount}
              </S.HeaderDetail2>
            </S.HeaderUserInfo>
            <S.DetailFeedbackButton>코멘트 바로가기</S.DetailFeedbackButton>
            <S.DetailFeedbackButton onClick={() => onModalHandler3(id2)}>
              상세피드백 보기
            </S.DetailFeedbackButton>
          </S.HeaderDiv2>
        </S.MobalHeader>
        <S.Line />

        <S.MobalContents>
          {category === "video" ? (
            <YouTube
              videoId={middle.youtubeLink}
              opts={{
                width: "100%", //"640px",
                height: "725px", //"390px",

                playerVars: {
                  rel: 0,
                  modestbranding: 1, // youtube 로고 삽입 x
                },
              }}
              onEnd={(e) => e.target.stopVideo(0)}
            />
          ) : middle.fileType === "jpg" ||
            middle.fileType === "jpeg" ||
            middle.fileType === "png" ? (
            middle.fileNames.map((srcLink, index) => {
              return <S.ContentImg src={srcLink} key={srcLink} id={index} />;
            })
          ) : (
            <S.PdfWrapper>
              <S.PdfSet>
                페이지 입력
                {numPages > 1 && (
                  <>
                    <S.PdfPageInput
                      onChange={changePageNum}
                      placeholder={`1P부터 ${numPages}P까지`}
                      defaultValue={1}
                      id="pageInput"
                    />
                    <S.PdfPageButtonWrapper>
                      <S.PdfPageButton href={`#${show}`} onClick={checkPage}>
                        이동하기
                      </S.PdfPageButton>
                    </S.PdfPageButtonWrapper>
                  </>
                )}
                <S.PdfSizeWrapper>
                  <S.PdfSizeButton
                    onClick={() => {
                      setPageScale(pageScale === 1.5 ? 1.5 : pageScale + 0.25);
                    }}
                  >
                    <S.SizeIcon>+</S.SizeIcon>
                  </S.PdfSizeButton>
                  <S.PdfSizeButton
                    onClick={() => {
                      setPageScale(
                        pageScale - 0.25 < 0.25 ? 0.25 : pageScale - 0.25
                      );
                    }}
                  >
                    <S.SizeIcon>-</S.SizeIcon>
                  </S.PdfSizeButton>
                </S.PdfSizeWrapper>
                <S.SizeShow>{pageScale * 100 + "%"}</S.SizeShow>
              </S.PdfSet>
              <S.PdfMannage
                onContextMenu={(e) => e.preventDefault()}
                style={{
                  maxHeight: windowSize.height / 1.5,
                  justifyContent: pageScale < 1 ? "center" : "flex-start",
                }}
              >
                <Document
                  file={middle.fileNames[0]}
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  {Array.from(new Array(numPages), (_, index) => (
                    <div key={index + 1} id={index + 1}>
                      <Page
                        width={windowSize.width}
                        height={windowSize.height}
                        scale={pageScale}
                        pageNumber={index + 1}
                        renderAnnotationLayer={false}
                      />
                    </div>
                  ))}
                </Document>
              </S.PdfMannage>
              <div style={{ height: "50px", width: "auto" }} />
            </S.PdfWrapper>
          )}
        </S.MobalContents>

        {/* 움직이는 모달 */}
        <Draggable onDrag={(_, data) => trackPos(data)}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DetailedFeedback
              id3={id2}
              modalVisibleId3={modalVisibleId3}
              setModalVisibleId3={setModalVisibleId3}
              numPages={numPages}
              media={middle.fileNames}
              link={middle.youtubeLink}
              feedbacks={feedback} // 피드백 전체 넘겼습니다.
              setFeedback={setFeedback} // 혹시 몰라 피드백을 수정할 수 있는 setFeedback도 같이 넘깁니다.
            />
          </div>
        </Draggable>

        <S.TraceBoxWrapper>
          <S.TraceBox
            style={{ background: "#FFFFFF" }}
            onClick={() => handleLike()}
          >
            <FavoriteOutlinedIcon
              className={
                !likeBoolean ? classes.afterClick1 : classes.beforeClick
              }
            />
            {top.likeCount}
          </S.TraceBox>
          <div style={{ width: "26px" }}></div>
          <S.TraceBox onClick={() => handleScrap()}>
            <StarIcon
              className={
                !scrapBoolean ? classes.afterClick2 : classes.beforeClick
              }
            />
            {top.scrapCount}
          </S.TraceBox>
        </S.TraceBoxWrapper>

        <RefModalComment
          postId={id2}
          comments={comments}
          setComments={setComments}
        />
      </S.MobalBox>
    </S.ModalWrapper>
  );
}