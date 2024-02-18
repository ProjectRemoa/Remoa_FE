import Loading from "../../../../styles/Loading";
import { S } from "./ui";
import React, { useEffect, useState, useRef } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import axios from "axios";
import { getDate } from "../../../../functions/getDate";
import { useNavigate } from "react-router-dom";
import RefModalComment from "../RefModalComment";
import { AiTwotoneEye } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import YouTube from "react-youtube";
import useWindowSize from "../../../../functions/useWindowSize";
import DetailedFeedback from "../../DetailedFeedbackPages/DetailedFeedback";
import { pdfjs, Document, Page } from "react-pdf";
import Draggable from "react-draggable";
import ModalDelete from "../RefModalDelete";
import { formatCount } from "../../../../functions/formatCount";
import { FaCaretDown } from "react-icons/fa";
import { useQueryClient } from "react-query";
import Meta from "../../../../components/common/Meta";
import ModalScrap from "../RefModalScrap";
import { useRecoilState } from "recoil";
import { editState } from "../../../../state/editState";
import btnStyle from "../../../../layout/Button.module.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function RefModal({ id2, setModalVisibleId2 }) {
  const Navigate = useNavigate();
  const queryClient = useQueryClient();

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
  const [comments, setComments] = useState([]);
  const [againComments, setAgainComments] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [postMember, setPostMember] = useState({
    memberId: 0,
    nickname: "",
    profileImage: "",
  });

  // 좋아요, 스크랩
  const [likeBoolean, setLikeBoolean] = useState(false);
  const [, setScrapBoolean] = useState(false);

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
        const data = res.data.data;

        const {
          postId,
          title,
          contestName,
          contestAwardType,
          category,
          postingTime,
          views,
          likeCount,
          scrapCount,
          thumbnail,
          fileNames,
          youtubeLink,
          comments,
          isLiked,
          isScraped,
          feedbacks,
          postMember,
        } = data;
        const fileType =
          category !== "video"
            ? fileNames[1]
                .substring(
                  fileNames[1].lastIndexOf(".") + 1,
                  fileNames[1].length
                )
                .toLowerCase()
            : "";
        const videoId =
          category === "video" && youtubeLink.includes("?v=")
            ? youtubeLink.split("?v=")[1]
            : youtubeLink.includes("youtu.be")
            ? youtubeLink.split("/")[3]
            : "";

        setTop({
          postId,
          title,
          contestName,
          contestAwardType,
          category,
          postingTime,
          views,
          likeCount,
          scrapCount,
          thumbnail,
        });

        setMiddle({
          fileNames: fileNames.filter((_, index) => index !== 0),
          likeCount,
          scrapCount,
          fileType,
          youtubeLink: videoId,
        });

        setComments(comments);
        setAgainComments(comments.replies);
        setLikeBoolean(isLiked);
        setScrapBoolean(isScraped);
        setCategory(category);
        setFeedback(feedbacks);
        setPostMember({
          memberId: postMember.memberId,
          nickname: postMember.nickname,
          profileImage: postMember.profileImage,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id2]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [loading]);

  const onCloseHandler2 = () => {
    setModalVisibleId2("");
  };

  const handleLike = () => {
    const userNickname = sessionStorage.getItem("nickname");
    if (userNickname === null) {
      alert("로그인이 필요한 서비스입니다.");
      Navigate("/sociallogin");
    }
    if (postMember.nickname === userNickname) {
      alert("내 작품에는 불가능합니다.");
      return;
    }

    axios
      .post(`/BE/reference/${id2}/like`)
      .then((res) => {
        const { likeCount } = res.data.data;

        setTop((prevTop) => ({
          ...prevTop,
          likeCount,
        }));
        setLikeBoolean((prevLikeBoolean) => !prevLikeBoolean);

        queryClient.invalidateQueries("references", { refetchActive: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [srcapModal, setScrapModal] = useState(false);

  const handleScrap = () => {
    const userNickname = sessionStorage.getItem("nickname");
    if (userNickname === null) {
      alert("로그인이 필요한 서비스입니다.");
      Navigate("/sociallogin");
    }
    if (postMember.nickname === userNickname) {
      alert("내 작품에는 불가능합니다.");
      return;
    }
    axios
      .post(`/BE/reference/${id2}/scrap`)
      .then((res) => {
        console.log(res);
        const { scrapCount, isScraped } = res.data.data;
        setTop((prevTop) => ({
          ...prevTop,
          scrapCount,
        }));

        if (isScraped) setScrapBoolean((prevScrapBoolean) => !prevScrapBoolean);
        setScrapModal(true);
        queryClient.invalidateQueries("references", { refetchActive: true });
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
  const [, setPageNumber] = useState(1);
  const [pageScale, setPageScale] = useState(1);
  useEffect(() => {
    const container = scrollRef.current;
    if (container && pageScale > 1) {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const middleScrollLeft = maxScrollLeft / 2;
      container.scrollLeft = middleScrollLeft;
    }
  }, [pageScale]);

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
        window.location.reload();
        Navigate("/manage/list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 레퍼런스 수정
  const [isEdit, setIsEdit] = useRecoilState(editState);
  const onClickPut = () => {
    if (
      window.confirm("레퍼런스를 수정하게되면 표지사진, 첨부파일이 삭제됩니다.")
    ) {
      setIsEdit(true);
      Navigate(`/manage/put/${id2}`);
    } else {
    }
  };

  // 페이지 제대로 입력되었는가 확인하기
  const checking = () => {
    let el = document.getElementById("pageInput");
    el.value = "";
  };

  function isInteger(number) {
    return number % 1 === 0;
  }
  const checkPage = () => {
    if (
      Number(show) > numPages ||
      isInteger(Number(show)) === false ||
      Number(show) <= 0
    ) {
      checking();
      alert("페이지를 제대로 입력해 주세요.");
    }
  };

  const checkImage = () => {
    if (
      Number(show) > middle.fileNames.length ||
      isInteger(Number(show)) === false ||
      Number(show) <= 0
    ) {
      checking();
      alert("페이지를 제대로 입력해 주세요.");
    }
  };

  // box의 포지션 값
  const [, setPosition] = useState({ x: 0, y: 0 });

  // 업데이트 되는 값을 set 해줌
  const trackPos = (data) => {
    setPosition({ x: data.x, y: data.y });
  };

  // 모달창 삭제하기
  const [modalOpenDelete, setModalOpenDelete] = useState(false);

  // 모달창 노출
  const showModalDelete = () => {
    setModalOpenDelete(true);
  };

  const [selectExpand, setSelectExpand] = useState(100);
  useEffect(() => {
    const container = scrollRef2.current;
    if (container && selectExpand > 100) {
      // 배율 확대될 때 스크롤 중앙
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      const middleScrollLeft = maxScrollLeft / 2;
      container.scrollLeft = middleScrollLeft;
    }
  }, [selectExpand]);

  const onChangeExpand = (a) => {
    setSelectExpand(a);
    let elements = document.getElementsByClassName("image");
    Array.from(elements).forEach((element) => (element.style.width = `${a}%`));
  };

  const [expandModalOpenDelete, setExpandModalOpenDelete] = useState(false);

  // 모달창 노출
  const showExpandModalDelete = () => {
    setExpandModalOpenDelete(!expandModalOpenDelete);
  };

  const [pageVisibleId, setPageVisibleId] = useState("");

  const onModalHandler = (id) => {
    setPageVisibleId(id);
  };
  const onCloseHandler = () => {
    setPageVisibleId("");
  };

  const scrollRef = useRef();
  const scrollRef2 = useRef();

  const [picturePlus, setPicturePlus] = useState(42.5); // 확대될 때 페이지 표기를 중앙 정렬하기 위함
  const onChangePlus = (e) => {
    switch (e) {
      case 125:
        setPicturePlus(52.5);
        break;
      case 150:
        setPicturePlus(65.5);
        break;
      default:
        setPicturePlus(42.5);
        break;
    }
  };

  return (
    <S.ModalWrapper onClick={onCloseHandler2}>
      <Meta title={top.title} imageURL={top.thumbnail} />

      <S.MobalBox onClick={(e) => e.stopPropagation()}>
        {" "}
        {/* stopPropagation으로 내부 클릭할 시에 모달창 안 닫히게 */}
        {loading && <Loading />}
        {srcapModal && <ModalScrap setScrapModal={setScrapModal} />}
        <S.ModalRealTop>
          <AiOutlineLeft
            style={{
              fontSize: "25px",
              cursor: "pointer",
              marginLeft: "5px",
              fontWeight: "700",
              float: "left",
            }}
            onClick={onCloseHandler2}
          />
          {postMember.nickname === sessionStorage.getItem("nickname") && (
            <div style={{ float: "right" }}>
              <BsThreeDotsVertical
                style={{ cursor: "pointer" }}
                onClick={showSelect}
              />
              {showSel && (
                <S.EtcDiv>
                  <S.Functionp onClick={showModalDelete}>삭제하기</S.Functionp>
                  {modalOpenDelete && (
                    <ModalDelete
                      setModalOpenDelete={setModalOpenDelete}
                      onDelete={onDelete}
                    />
                  )}
                  <S.Line />
                  <S.Functionp onClick={onClickPut}>수정하기</S.Functionp>
                </S.EtcDiv>
              )}
            </div>
          )}
        </S.ModalRealTop>
        <S.MobalHeader>
          <S.HeaderDiv1>
            <S.DetailTitle>{top.title}</S.DetailTitle>
            <S.DetailTitleInfo>
              {top.contestName}&nbsp;|&nbsp;{getDate(top.postingTime)}
              &nbsp;|&nbsp;{top.category}
            </S.DetailTitleInfo>
          </S.HeaderDiv1>

          <S.HeaderDiv2>
            <S.HeaderUserInfo>
              <S.ProfileSize src={postMember.profileImage} />
              <S.HeaderUserName>{postMember.nickname}</S.HeaderUserName>
              <S.HeaderDetail2>
                <S.eachIcon>
                  <AiTwotoneEye
                    style={{
                      lineHeight: "18px",
                      width: "18px",
                      height: "18px",
                    }}
                  />
                  <S.eachText>{formatCount(top.views)}</S.eachText>
                </S.eachIcon>
                <S.eachIcon>
                  <AiFillHeart
                    style={{
                      lineHeight: "18px",
                      width: "18px",
                      height: "18px",
                    }}
                  />
                  <S.eachText>{formatCount(top.likeCount)}</S.eachText>
                </S.eachIcon>
                <S.eachIcon>
                  <BsFillBookmarkFill
                    style={{
                      lineHeight: "18px",
                      width: "18px",
                      height: "18px",
                    }}
                  />
                  <S.eachText>{formatCount(top.scrapCount)}</S.eachText>
                </S.eachIcon>
              </S.HeaderDetail2>
            </S.HeaderUserInfo>
            <S.DetailFeedbackButtonWrapper>
              <button
                className={btnStyle.white}
                onClick={() => {
                  handleScrap();
                }}
              >
                <BsBookmark /> &nbsp; <span>스크랩하기</span>
              </button>
              <button
                onClick={() => onModalHandler3(id2)}
                className={btnStyle.yellow}
              >
                <span>상세피드백 보기</span>
              </button>
              {/* 움직이는 모달 */}
              <Draggable onDrag={(_, data) => trackPos(data)}>
                <S.Drag>
                  <DetailedFeedback
                    id3={id2}
                    modalVisibleId3={modalVisibleId3}
                    setModalVisibleId3={setModalVisibleId3}
                    numPages={numPages}
                    media={middle.fileNames}
                    link={middle.youtubeLink}
                    // 피드백 전체 넘겼습니다.
                    feedbacks={feedback}
                    // 혹시 몰라 피드백을 수정할 수 있는 setFeedback도 같이 넘깁니다.
                    setFeedback={setFeedback}
                  />
                </S.Drag>
              </Draggable>
            </S.DetailFeedbackButtonWrapper>
          </S.HeaderDiv2>
        </S.MobalHeader>
        <S.MobalContents>
          {category === "video" ? (
            <YouTube
              videoId={middle.youtubeLink}
              opts={{
                width: "100%", //'640px',
                height: "725px", //'390px',

                playerVars: {
                  rel: 0,
                  // youtube 로고 삽입x
                  modestbranding: 1,
                },
              }}
              onEnd={(e) => e.target.stopVideo(0)}
            />
          ) : (
            <S.PdfWrapper>
              {middle.fileType === "jpg" ||
              middle.fileType === "jpeg" ||
              middle.fileType === "png" ? (
                <>
                  <S.PdfSet>
                    페이지 이동
                    {middle.fileNames.length > 1 && (
                      <>
                        <S.PdfPageInput
                          onChange={changePageNum}
                          defaultValue={1}
                          id="pageInput"
                        />
                        &nbsp; / &nbsp;{middle.fileNames.length}
                        &nbsp;&nbsp;&nbsp;
                        <S.PdfPageButtonWrapper>
                          <S.PdfPageButton
                            href={`#${show}`}
                            onClick={checkImage}
                          >
                            바로보기
                          </S.PdfPageButton>
                        </S.PdfPageButtonWrapper>
                      </>
                    )}
                    <S.PdfSizeWrapper>
                      페이지 배율 &nbsp;&nbsp;&nbsp;&nbsp;
                      <S.PdfSelect>
                        <S.PdfViewText>{selectExpand}%&nbsp;</S.PdfViewText>
                        <FaCaretDown
                          onClick={showExpandModalDelete}
                          style={{ cursor: "pointer" }}
                        />
                      </S.PdfSelect>
                      {expandModalOpenDelete && (
                        <S.PdfOption>
                          {[50, 75, 100, 125, 150].map((a) => (
                            <S.PdfList>
                              <S.PdfFocus
                                class="list"
                                onClick={() => {
                                  onChangeExpand(a);
                                  onChangePlus(a);
                                }}
                                id={a}
                                style={
                                  selectExpand === a
                                    ? { fontWeight: "700", color: "#1E1E1E" }
                                    : { fontWeight: "400", color: "#727272" }
                                }
                              >
                                {a}%
                              </S.PdfFocus>
                            </S.PdfList>
                          ))}
                        </S.PdfOption>
                      )}
                    </S.PdfSizeWrapper>
                  </S.PdfSet>
                  <S.PdfMannage
                    style={{
                      display: "block",
                      maxHeight: windowSize.height / 1.5,
                      textAlign: "center",
                    }}
                    ref={scrollRef2}
                  >
                    {middle.fileNames.map((srcLink, index) => {
                      return (
                        <div
                          style={{
                            position: "relative",
                          }}
                        >
                          <S.ContentImg
                            style={{
                              width: `${selectExpand}%`,
                              height: "auto",
                            }}
                            src={srcLink}
                            key={srcLink}
                            id={index + 1}
                            className="image"
                            onMouseOver={() => {
                              onModalHandler(index);
                            }}
                            onMouseOut={() => {
                              onCloseHandler(index);
                            }}
                          />
                          {pageVisibleId === index ? (
                            <S.PdfPageShow
                              style={{
                                left: `${picturePlus}%`,
                              }}
                            >
                              {index + 1}페이지
                            </S.PdfPageShow>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </S.PdfMannage>
                </>
              ) : (
                // 여기서부터 pdf
                <>
                  <S.PdfSet>
                    페이지 입력
                    {numPages > 1 && (
                      <>
                        <S.PdfPageInput
                          onChange={changePageNum}
                          defaultValue={1}
                          id="pageInput"
                        />
                        &nbsp; / &nbsp;{numPages}&nbsp;&nbsp;&nbsp;
                        <S.PdfPageButtonWrapper>
                          <S.PdfPageButton
                            href={`#${show}`}
                            onClick={checkPage}
                          >
                            바로보기
                          </S.PdfPageButton>
                        </S.PdfPageButtonWrapper>
                      </>
                    )}
                    <S.PdfSizeWrapper>
                      페이지 배율 &nbsp;&nbsp;&nbsp;&nbsp;
                      <S.PdfSelect>
                        <S.PdfViewText>{pageScale * 100}%&nbsp;</S.PdfViewText>
                        <FaCaretDown
                          onClick={showExpandModalDelete}
                          style={{ cursor: "pointer" }}
                        />
                      </S.PdfSelect>
                      {expandModalOpenDelete && (
                        <S.PdfOption>
                          {[50, 75, 100, 125, 150].map((a) => (
                            <S.PdfList>
                              <S.PdfFocus
                                class="list"
                                onClick={() => {
                                  setPageScale(a / 100);
                                }}
                                id={a}
                                style={
                                  pageScale * 100 === a
                                    ? { fontWeight: "700", color: "#1E1E1E" }
                                    : { fontWeight: "400", color: "#727272" }
                                }
                              >
                                {a}%
                              </S.PdfFocus>
                            </S.PdfList>
                          ))}
                        </S.PdfOption>
                      )}
                    </S.PdfSizeWrapper>
                  </S.PdfSet>
                  <S.PdfMannage
                    ref={scrollRef}
                    onContextMenu={(e) => e.preventDefault()}
                    style={{
                  
                      maxHeight: windowSize.height / 1.5,
                      justifyContent: pageScale <= 1 ? "center" : "flex-start",
                    }}
                  >
                    <Document
                      file={middle.fileNames[0]}
                      onLoadSuccess={onDocumentLoadSuccess}
                    >
                      {Array.from(new Array(numPages), (_, index) => (
                        <div
                          key={index + 1}
                          id={index + 1}
                          style={{
             
                            display: "flex",
                            justifyContent: "center",
                            position: "relative",
            
                          }}
                        >
                          <Page
                            width={pageScale * 1000}
                            pageNumber={index + 1}
                            renderAnnotationLayer={false}
                            onMouseOver={() => {
                              onModalHandler(index);
                              console.log();
                            }}
                            onMouseOut={() => {
                              onCloseHandler(index);
                            }}
                          />
                          {pageVisibleId === index ? (
                            <S.PdfPageShow>{index + 1}페이지</S.PdfPageShow>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                    </Document>
                  </S.PdfMannage>
                </>
              )}
              <div style={{ height: "7px", width: "auto" }} />
            </S.PdfWrapper>
          )}
        </S.MobalContents>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <button
            className={btnStyle.white}
            onClick={() => handleLike()}
            style={{ height: "56px", width: "115px", marginBottom: "45px" }}
          >
            <S.TraceBoxAlign>
              <AiFillHeart
                style={{
                  color: likeBoolean ? "#B0B0B0" : "#fada5e",
                  width: "24px",
                  height: "24px",
                  marginTop: "-2px",
                }}
              />
              <span style={{ marginTop: "1px", fontSize: "19px" }}>
                &nbsp;{formatCount(top.likeCount)}
              </span>
            </S.TraceBoxAlign>
          </button>
        </div>
        <RefModalComment
          postId={id2}
          comments={comments}
          setComments={setComments}
          againComments={againComments}
          setAgainComments={setAgainComments}
        />
      </S.MobalBox>
    </S.ModalWrapper>
  );
}
