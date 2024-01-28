import Loading from '../../../../styles/Loading';
import { S } from './ui';
import React, { useEffect, useState, useRef } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import axios from 'axios';
import { getDate } from '../../../../functions/getDate';
import { useLocation, useNavigate } from 'react-router-dom';
import RefModalComment from '../RefModalComment';
import { AiTwotoneEye } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsFillBookmarkFill } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import YouTube from 'react-youtube';
import useWindowSize from '../../../../functions/useWindowSize';
import DetailedFeedback from '../../DetailedFeedbackPages/DetailedFeedback';
import { pdfjs, Document, Page } from 'react-pdf';
import Draggable from 'react-draggable';
import AuthLayout from '../../../../layout/AuthLayout';
import ModalDelete from '../RefModalDelete';
import { formatCount } from '../../../../functions/formatCount';
import { FaCaretDown } from 'react-icons/fa';
import ModalRange from '../RefModalRange';
import { useQueryClient } from 'react-query';
import Meta from '../../../../components/common/Meta';
import ModalScrap from '../RefModalScrap';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function RefModal({ id2, setModalVisibleId2 }) {

  const Navigate = useNavigate();
  const queryClient = useQueryClient();

  const [loading, setLoading] = useState(true);

  const [top, setTop] = useState({
    title: '',
    contestName: '',
    contestAwardType: '',
    category: '',
    postingTime: '',
    views: 0,
    likeCount: 0,
    scrapCount: 0,
  });
  const [middle, setMiddle] = useState({
    fileNames: [],
    fileType: '',
    likeCount: 0,
    scrapCount: 0,
    youtubeLink: '', // category가 영상일 때
  });
  const [comments, setComments] = useState([]); // 댓글 왜 안되지
  const [againComments, setAgainComments] = useState([]); // 요거 대댓
  const [feedback, setFeedback] = useState([]);
  const [postMember, setPostMember] = useState({
    memberId: 0,
    nickname: '',
    profileImage: '',
  });

  // 좋아요, 스크랩
  const [likeBoolean, setLikeBoolean] = useState(false);
  const [scrapBoolean, setscrapBoolean] = useState(false);

  const [showSel, setShowSel] = useState(false);
  const showSelect = () => {
    setShowSel(!showSel);
  };
  const [category, setCategory] = useState('');

  useEffect(() => {
    const endpoint = `/BE/reference/${id2}`;
    axios
      .get(endpoint)
      .then((res) => {
        console.log(res);

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
          thumbnail: res.data.data.thumbnail,
        });

        // middle : pdf/사진, 좋아요, 스크랩, filetype
        let fileLength;
        let fileDot;
        let fileType = '';
        if (res.data.data.category !== 'video') {
          // 영상 아닌 경우
          // 영상인 경우 fileType은 '값
          fileLength = res.data.data.fileNames[1].length;
          fileDot = res.data.data.fileNames[1].lastIndexOf('.');
          fileType = res.data.data.fileNames[1]
            .substring(fileDot + 1, fileLength)
            .toLocaleLowerCase();
        }

        let videoId;
        let link = res.data.data.youtubeLink;
        if (res.data.data.category === 'video') {
          if (link.includes('?v=')) {
            videoId = link.split('?v=')[1]; // watch?v= 형식인 경우
          } else if (link.includes('youtu.be')) {
            // youtu.be/id~ 인 경우
            videoId = link.split('/')[3];
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
        setAgainComments(res.data.data.comments.replies);
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

  }, [id2]);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [loading]);

  // 모달 닫으면 보이는 페이지 설정하기 !
  let Lo = window.location.href;
  const location = useLocation();

  const onCloseHandler2 = () => {
    setModalVisibleId2('');
  };

  const handleLike = () => {
    if (postMember.nickname === sessionStorage.getItem('nickname'))
      alert('내 작품에는 불가능합니다.');
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
        setLikeBoolean(!likeBoolean);

        queryClient.invalidateQueries('references', { refetchActive: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [srcapModal, setScrapModal] = useState(false)
  const handleScrap = () => {
    if (postMember.nickname === sessionStorage.getItem('nickname'))
      alert('내 작품에는 불가능합니다.');

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
        setScrapModal(true)
        queryClient.invalidateQueries('references', { refetchActive: true });
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
    if (container && pageScale>1) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const middleScrollLeft = maxScrollLeft / 2;
        container.scrollLeft = middleScrollLeft;
    }
  },[pageScale]);


  function onDocumentLoadSuccess({ numPages }) {
    console.log('pdf 로드 성공');
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
        Navigate('/manage/list');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 레퍼런스 수정
  const onClickPut = () => {
    if (
      window.confirm('레퍼런스를 수정하게되면 표지사진, 첨부파일이 삭제됩니다.')
    ) {
      alert('수정 기능은 구현 중~');
      Navigate('/');
      //Navigate(`/manage/put/:${id2}`);
    } else {
    }
  };

  const [pageRange, setPageRange] = useState(false);
  // 페이지 제대로 입력되었는가 확인하기
  const checking = () => {
    setPageRange(true);
    let el = document.getElementById('pageInput');
    el.value = '';
  };

  function isInteger(number) {
    return number % 1 === 0;
  }
  const checkPage = () => {
    if ( Number(show) > numPages || isInteger(Number(show)) === false || Number(show) <= 0 ) checking();
  };

  const checkImage = () => {
    if ( Number(show) > middle.fileNames.length || isInteger(Number(show)) === false || Number(show) <= 0) checking();
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
    if (container && selectExpand>100) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        const middleScrollLeft = maxScrollLeft / 2;
        container.scrollLeft = middleScrollLeft;
    }
  },[selectExpand]);
  const onChangeExpand = (a) => {
    setSelectExpand(a);
    let elements = document.getElementsByClassName('image');
    Array.from(elements).forEach((element) => (element.style.width = `${a}%`));
  };

  const [expandModalOpenDelete, setExpandModalOpenDelete] = useState(false);

  // 모달창 노출
  const showExpandModalDelete = () => {
    setExpandModalOpenDelete(!expandModalOpenDelete);
  };

  const [pageVisibleId, setPageVisibleId] = useState('');

  const onModalHandler = (id) => {
    setPageVisibleId(id);
  };
  const onCloseHandler = () => {
    setPageVisibleId('');
  };

  const scrollRef = useRef();
  const scrollRef2 = useRef();

  const [picturePlus, setPicturePlus] = useState(42.5)
  const onChangePlus=(e)=>{
    switch (e){
      case 125 :
        setPicturePlus(52.5)
        break;
      case 150 :
        setPicturePlus(65.5)
        break;
      default : 
      setPicturePlus(42.5)
      break;
    }
  }
  return (
    <S.ModalWrapper onClick={onCloseHandler2}>
      <Meta title={top.title} imageURL={top.thumbnail} />
              
      <S.MobalBox onClick={(e) => e.stopPropagation()}>
        {' '}
        {/* stopPropagation으로 내부 클릭할 시에 모달창 안 닫히게 */}
        {loading && <Loading />}
        {srcapModal && <ModalScrap setScrapModal={setScrapModal} /> }
        <S.ModalRealTop>
          <AiOutlineLeft
            style={{
              fontSize: '25px',
              cursor: 'pointer',
              marginLeft: '5px',
              fontWeight: '700',
              float: 'left',
            }}
            onClick={onCloseHandler2}
          />
          {postMember.nickname === sessionStorage.getItem('nickname') && (
            <div style={{ float: 'right' }}>
              <BsThreeDotsVertical
                style={{ cursor: 'pointer' }}
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
                  <div
                    style={{
                      width: '138px',
                      height: '0px',
                      border: '0.2px solid #B0B0B0',
                      position: 'relative',
                    }}
                  />
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
                      lineHeight: '18px',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                  <S.eachText>{formatCount(top.views)}</S.eachText>
                </S.eachIcon>
                <S.eachIcon>
                  <AiFillHeart
                    style={{
                      lineHeight: '18px',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                  <S.eachText>{formatCount(top.likeCount)}</S.eachText>
                </S.eachIcon>
                <S.eachIcon>
                  <BsFillBookmarkFill
                    style={{
                      lineHeight: '18px',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                  <S.eachText>{formatCount(top.scrapCount)}</S.eachText>
                </S.eachIcon>
              </S.HeaderDetail2>
            </S.HeaderUserInfo>
            <S.DetailFeedbackButtonWrapper>
              <S.DetailFeedbackButton
                style={{
                  borderRadius: '12px',
                  border: '1px solid var(--gray, #A7A7A7)',
                  backgroundColor: '#FFF',
                  color: '#464646',
                  fontSize: '16px',
                  fontWeight: '600',
                  letterSpacing: '-0.32px',
                  '&:hover': {
                    background: 'var(--light-gray, #F0F0F0)',
                  },
                }}
                onClick={() => {
                  handleScrap()
                }}
              >
                <BsBookmark /> &nbsp; 스크랩하기
              </S.DetailFeedbackButton>
              <S.DetailFeedbackButton onClick={() => onModalHandler3(id2)}>
                상세피드백 보기
              </S.DetailFeedbackButton>
            </S.DetailFeedbackButtonWrapper>
          </S.HeaderDiv2>
        </S.MobalHeader>
        <S.MobalContents>
          {category === 'video' ? (
            <YouTube
              videoId={middle.youtubeLink}
              opts={{
                width: '100%', //'640px',
                height: '725px', //'390px',

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
              {middle.fileType === 'jpg' ||
              middle.fileType === 'jpeg' ||
              middle.fileType === 'png' ? (
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
                        {pageRange && (
                          <ModalRange setPageRange={setPageRange} />
                        )}
                      </>
                    )}
                    <S.PdfSizeWrapper>
                      페이지 배율 &nbsp;&nbsp;&nbsp;&nbsp;
                      <S.PdfSelect>
                        <S.PdfViewText>{selectExpand}%&nbsp;</S.PdfViewText>
                        <FaCaretDown
                          onClick={showExpandModalDelete}
                          style={{ cursor: 'pointer' }}
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
                                  onChangePlus(a)
                                }}
                                id={a}
                                style={
                                  selectExpand === a
                                    ? { fontWeight: '700', color: '#1E1E1E' }
                                    : { fontWeight: '400', color: '#727272' }
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
                      display:'block', // 지우면안됨,,,
                      maxHeight: windowSize.height / 1.5,
                      textAlign:'center'
                    }}
                    ref={scrollRef2} 
                  >
                    {middle.fileNames.map((srcLink, index) => {
                      return (
                        <div
                        style={{
                          position: 'relative',
                        }}
                        >
                          <S.ContentImg
                            style={{
                              width: `${selectExpand}%`,
                              height: 'auto',
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
                              left:`${picturePlus}%`
                            }}
                          >{index + 1}페이지</S.PdfPageShow>
                          ) : (
                            ''
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
                        {pageRange && (
                          <ModalRange setPageRange={setPageRange} />
                        )}
                      </>
                    )}
                    <S.PdfSizeWrapper>
                      페이지 배율 &nbsp;&nbsp;&nbsp;&nbsp;
                      <S.PdfSelect>
                        <S.PdfViewText>{pageScale * 100}%&nbsp;</S.PdfViewText>
                        <FaCaretDown
                          onClick={showExpandModalDelete}
                          style={{ cursor: 'pointer' }}
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
                                    ? { fontWeight: '700', color: '#1E1E1E' }
                                    : { fontWeight: '400', color: '#727272' }
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
                      justifyContent: pageScale <= 1 ? 'center' : 'flex-start',

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
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                          }}
                        >
                          <Page
                            width={pageScale*1000}
                            pageNumber={index + 1}
                            renderAnnotationLayer={false}
                            onMouseOver={() => {
                              onModalHandler(index);
                              console.log()
                            }}
                            onMouseOut={() => {
                              onCloseHandler(index);
                            }}
                          />
                          {pageVisibleId === index ? (
                            <S.PdfPageShow>{index + 1}페이지</S.PdfPageShow>
                          ) : (
                            ''
                          )}
                        </div>
                      ))}
                    </Document>
                  </S.PdfMannage>
                </>
              )}
              <div style={{ height: '50px', width: 'auto' }} />
            </S.PdfWrapper>
          )}
        </S.MobalContents>
        <S.TraceBox onClick={() => handleLike()}>
          <S.TraceBoxAlign>
            <AiOutlineHeart
              style={{ color: likeBoolean ? '#B0B0B0' : 'red' }}
            />
            <S.TraceBoxLike> &nbsp;{formatCount(top.likeCount)}</S.TraceBoxLike>
          </S.TraceBoxAlign>
        </S.TraceBox>
        <RefModalComment
          postId={id2}
          comments={comments}
          setComments={setComments}
          againComments={againComments}
          setAgainComments={setAgainComments}
        />

{/* 움직이는 모달 */}
<Draggable onDrag={(_, data) => trackPos(data)}>
          <div style={{ float:'right', position: 'relative', right: '500px', top: (category === 'video'? '300px' : '70px'),zIndex:2 }} >
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
          </div>
        </Draggable>
      </S.MobalBox>
    </S.ModalWrapper>
  );
}
