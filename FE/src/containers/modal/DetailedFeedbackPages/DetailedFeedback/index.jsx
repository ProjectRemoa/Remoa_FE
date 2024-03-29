import { S } from './ui';
import axios from 'axios';
import React, { useState } from 'react';
import DetailFeedbackComment from '../DetailedFeedbackComment'
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

export default function DetaileFeedback({
  id3,
  modalVisibleId3,
  setModalVisibleId3,
  numPages,
  media,
  link,
  feedbacks,
  setFeedback,
  isFromManage
}) {
  feedbacks.sort((a, b) => {
    return  new Date(a.feedbackTime)-new Date(b.feedbackTime);
  });
  const navigate = useNavigate();

  const [contents, setContents] = useState('');
  // const [timer, setTimer] = useState(null); // 디바운싱 구현
  const onChangeContents = (event) => {
    const inputValue = event.target.value;
    if (inputValue.length > 300) {
        setContents(inputValue.substring(0, 1000));
        return;
    }
    setContents(inputValue);
    // if (timer) clearTimeout(timer)

    // const newTimer = setTimeout(() => {
    //     setContents(inputValue);
    // }, 500); 
    // setTimer(newTimer);
  };
  const [selected, setSelected] = useState(1);

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  const opti = Array.from({ length: numPages }, (v, i) => i + 1);
  const pageCount = Array.from({ length: media.length }, (v, i) => i + 1);

  const onSumbitHandler = (e) => {
    if (sessionStorage.getItem('nickname') === null) {
      alert('로그인이 필요한 서비스입니다.');
      navigate('/sociallogin');
    } else if (sessionStorage.getItem('nickname') === ''){
      
    } else {
      e.preventDefault();
      const UploaSeedback = {
        feedback: contents,
      };
      axios
        .post(`/BE/reference/${id3}/${selected}`, UploaSeedback)
        .then((response) => {
          console.log(response);
          alert('댓글 등록이 완료되었습니다.');

           // 새로운 피드백 배열
          setFeedback(response.data.data);
        })
        .catch((err) => {
          alert('통신 오류');
          console.log(err);
        });
    }

    // 입력된 피드백 초기화
    setContents('');
  };

  return (
    <S.ModalWrapper
      state={isFromManage}
      style={{display: modalVisibleId3 !== id3 && 'none'}}
    >
      <S.ModalHeader>
        <S.HeaderText>상세 피드백 뷰어</S.HeaderText>
        <AiOutlineClose
          onClick={() => {
            setModalVisibleId3("");
          }}
          style={{ fontSize: '24px',
          cursor: 'pointer',
          display: 'block',
          position: 'absolute',
          left: '432px'}}
        />
      </S.ModalHeader>

      <S.Feedback>
        <DetailFeedbackComment
          link={link}
          feedbacks={feedbacks}
          setFeedback={setFeedback}
          id={id3}
        />
      </S.Feedback>

      <S.ModalWriteFeed>
        <S.RegTop>
          <S.RegExplain>
            <S.FeedbackText>피드백</S.FeedbackText>
            <S.FeedbackTextNum>페이지 번호</S.FeedbackTextNum>
          </S.RegExplain>
          {/* <S.PdfSizeWrapper>
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
                    </S.PdfSizeWrapper> */}
          <S.FeedbackSelect onChange={handleSelect} disabled={link} >
            {opti &&
              opti.map((a) => {
                return (
                  <option value={a} key={a}>
                    {a}
                  </option>
                );
              })}

            {/* pdf  */}
            {pageCount &&
              pageCount.map((a) => {
                return (
                  <option value={a} key={a}>
                    {a}
                  </option>
                );
              })}

            {/* 사진*/}
          </S.FeedbackSelect>
          <S.FeedbackSend onClick={onSumbitHandler}>등록</S.FeedbackSend>
        </S.RegTop>
        <S.RegBottom>
          <S.WriteInput
            onChange={onChangeContents}
            value={contents}
            required
            placeholder="해당 작업물에 대한 의견을 최대 1000자까지 남길 수 있어요!"
          />
        </S.RegBottom>
      </S.ModalWriteFeed>
    </S.ModalWrapper>
  );
};