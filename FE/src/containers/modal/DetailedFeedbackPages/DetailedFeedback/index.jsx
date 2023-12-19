import { makeStyles } from '@material-ui/core/styles';
import { S } from './ui';
import axios from 'axios';
import React, { useState } from 'react';
import DetailFeedbackComment from '../DetailedFeedbackComment'
import { useNavigate } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const useStyles = makeStyles({
  display_none: {
    display: 'none',
  },
  modal_close: {
    fontSize: '24px',
    cursor: 'pointer',
    display: 'block',
    position: 'absolute',
    left: '432px',
  },
});

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
  const navigate = useNavigate();
  const classes = useStyles();

  const [contents, setContents] = useState('');

  const onChangeContents = (event) => {
    setContents(event.target.value);
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
      className={modalVisibleId3 !== id3 && classes.display_none}
    >
      <S.ModalHeader>
        <S.HeaderText>상세 피드백 뷰어</S.HeaderText>
        <AiOutlineClose
          onClick={() => {
            setModalVisibleId3("");
          }}
          className={classes.modal_close}
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
          <select
            onChange={handleSelect}
            style={{
              width: "55px",
              height: "32px",
              borderRadius: "2px",
              position: "relative",
              bottom: "6px",
              border: "1px solid var(--line, #E1E2E5)",
            }}
            disabled={link}
          >
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
          </select>
          <S.FeedbackSend onClick={onSumbitHandler}>등록</S.FeedbackSend>
        </S.RegTop>
        <S.RegBottom>
          <S.WriteInput
            onChange={onChangeContents}
            value={contents}
            required
            placeholder="피드백을 남겨주세요"
          />
        </S.RegBottom>
      </S.ModalWriteFeed>
    </S.ModalWrapper>
  );
};