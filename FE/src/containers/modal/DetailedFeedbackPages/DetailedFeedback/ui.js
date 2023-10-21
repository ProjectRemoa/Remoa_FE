import styled from 'styled-components';

export const S = {
  ModalWrapper: styled.div`
    cursor: move;
    position:absolute;
    top:-100vh;
    width: 490px;
    z-index: 9;
    height: 800px;
    background-color: white;
    box-shadow: 0 0 0 5px #fada5e inset;
  `,
  ModalHeader: styled.div`
    height: 50px;
    background-color: #fada5e;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ModalWriteFeed: styled.div`
    height: 180px;
    width: 100%;
    box-shadow: 0 0 0 5px #fada5e inset;
    background: #f5f5f5;
    position: absolute;
    bottom: 0px;
  `,
  ModalFeedReg: styled.form`
    width: 100%-54px;
    height: 148px;
    margin: 16px 27px 21px 27px;
  `,
  RegTop: styled.div`
    width: 100%;
    height: 36px;
    display: flex;
    margin-bottom: 12px;
  `,
  RegExplain: styled.span`
    line-height: 24px;
  `,
  RegBottom: styled.div`
    width: 100%;
    height: 112px;
  `,
  WriteInput: styled.textarea`
    width: 98%;
    height: 100px;
    font-family: 'Inter';
    resize: none;
  `,
  FeedbackSend: styled.button`
    width: 80px;
    height: 24px;
    border-radius: 10px;
    position: relative;
    left: 120px;
  `,
  Feedback: styled.div`
  width: 450px;
  height: 520px;
  position: absolute;
  top: 75px;
  margin-left: 20px;
  overflow-y: scroll;
`,
};